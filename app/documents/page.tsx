"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/document.module.css";
import { getSession } from "next-auth/react";
import Link from "next/link";
import styles2 from "../../styles/profile.module.css";
interface Document {
  id: string;
  name: string;
  url: string;
  category: string;
}

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      const session = await getSession();

      if (!session?.user?.email) {
        setIsLoggedIn(false);
        setLoading(false);
        return;
      }

      setIsLoggedIn(true);

      try {
        const res = await axios.get("/api/auth/documents");
        setDocuments(res.data.data?.documents || []);
      } catch (error) {
        console.error("Error fetching documents:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  const handleDelete = async (docId: string) => {
    try {
      await axios.delete(`/api/auth/documents/${docId}`);
      setDocuments((prev) => prev.filter((doc) => doc.id !== docId));
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const groupedDocs = documents.reduce((acc: Record<string, Document[]>, doc) => {
    if (!acc[doc.category]) acc[doc.category] = [];
    acc[doc.category].push(doc);
    return acc;
  }, {});

  if (loading) return <p className={styles.progressText}>Loading documents...</p>;

  //If user is not logged in
  if (isLoggedIn === false) {
    return (
       <div className={styles2.container}>
        <div className={styles2.authCard}>
          <div className={styles2.authHeader}>
            <div className={styles2.medicalIcon}>
              <svg viewBox="0 0 24 24" fill={styles2.currentColor}>
                <path d="M12 2C13.1 2 14 2.9 14 4V8H18C19.1 8 20 8.9 20 10V12C20 13.1 19.1 14 18 14H14V18C14 19.1 13.1 20 12 20H10C8.9 20 8 19.1 8 18V14H4C2.9 14 2 13.1 2 12V10C2 8.9 2.9 8 4 8H8V4C8 2.9 8.9 2 10 2H12Z"/>
              </svg>
            </div>
            <h2>Authentication Required</h2>
            <p>Please sign in to access your Docs</p>
          </div>
          <Link href="/signin" className={styles2.btnPrimary}>
            Sign In to Continue
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.uploadContainer}>
      <div className={styles.uploadWrapper}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>My Documents</h1>
          <p className={styles.pageSubtitle}>View and manage your uploaded files</p>
        </header>

        {/* Upload Button */}
        <div style={{ textAlign: "right", marginBottom: "1rem" }}>
          <Link href="/documents/uploads" className={styles.submitButton}>
            📤 Upload New Document
          </Link>
        </div>

        {Object.keys(groupedDocs).length === 0 ? (
          <p className={styles.errorMessage}>No documents uploaded yet.</p>
        ) : (
          Object.keys(groupedDocs).map((category) => (
            <div key={category} className={styles.uploadCard}>
              <h2 className={styles.uploadText}>{category}</h2>
              <ul>
                {groupedDocs[category].map((doc) => (
                  <li key={doc.id} className={styles.fileInfo}>
                    <div className={`${styles.fileIcon} ${styles.document}`}>📄</div>
                    <div className={styles.fileDetails}>
                      <p className={styles.fileName}>{doc.name}</p>
                      <a href={doc.url} target="_blank" rel="noopener noreferrer">
                        View Document
                      </a>
                    </div>
                    <button
                      onClick={() => handleDelete(doc.id)}
                      className={styles.removeFileButton}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
