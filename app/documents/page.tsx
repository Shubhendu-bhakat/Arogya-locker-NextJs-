"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/document.module.css";
import { getSession } from "next-auth/react";
import Link from "next/link";
import {prisma} from "../lib/prisma";
interface Document {
  id: string;
  name: string;
  url: string;
  category: string;
}

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch documents for logged-in user
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const session = await getSession();
        //@ts-ignore
        if (!session?.user?.email) {
          setLoading(false);
          return;
        }
        //@ts-ignore
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

  // Delete document handler
  const handleDelete = async (docId: string) => {
    try {
  
      //@ts-ignore1
      await axios.delete(`/api/auth/documents/${docId}`);

      setDocuments((prev) => prev.filter((doc) => doc.id !== docId));
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  // Group documents by category
  const groupedDocs = documents.reduce((acc: Record<string, Document[]>, doc) => {
    if (!acc[doc.category]) acc[doc.category] = [];
    acc[doc.category].push(doc);
    return acc;
  }, {});

  if (loading) return <p className={styles.progressText}>Loading documents...</p>;

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
