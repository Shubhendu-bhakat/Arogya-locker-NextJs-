"use client";

import { useState, useRef, useEffect, DragEvent, ChangeEvent } from "react";
import axios from "axios";
import styles from "../../../styles/document.module.css";
import {prisma} from "../../lib/prisma";
import { SessionProvider, useSession } from "next-auth/react";
import { NextResponse } from "next/server";

interface UploadResponse {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}

const DOCUMENT_CATEGORIES = [
  { value: "PRESCRIPTION", label: "Prescription", icon: "💊", description: "Medical prescriptions and medication" },
  { value: "XRAY", label: "X-Ray", icon: "🩻", description: "X-ray images and radiological reports" },
  { value: "LAB_TESTS", label: "Lab Tests", icon: "🧪", description: "Laboratory test results and reports" },
  { value: "GENERAL_DOCUMENTS", label: "General Documents", icon: "📄", description: "General medical documents" },
  { value: "OTHERS", label: "Others", icon: "📋", description: "Other medical related documents" },
];

export function UploadDocumentPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isDragActive, setIsDragActive] = useState(false);
  const [uploadResult, setUploadResult] = useState<UploadResponse | null>(null);
  const [error, setError] = useState<string>("");
  const [userId, setUserId] = useState<string | null>(null);
  const [isLoadingUserId, setIsLoadingUserId] = useState(true);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Fetch userId when component mounts
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        setIsLoadingUserId(true);
        const res = await axios.get("/api/auth/documents/uploades");
        setUserId(res.data.userId);
      } catch (error) {
        console.error("Error fetching userId:", error);
        setError("Failed to load user information. Please refresh the page.");
      } finally {
        setIsLoadingUserId(false);
      }
    };

    fetchUserId();
  }, []);

  const handleFileSelection = (file: File) => {
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      setError(`File size should not exceed 10MB. Current size: ${(file.size / (1024 * 1024)).toFixed(2)}MB`);
      return;
    }

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setError("File type not allowed. Please upload PDF, images, or Word documents.");
      return;
    }

    setSelectedFile(file);
    setError("");
    setUploadResult(null);
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelection(e.target.files[0]);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelection(e.dataTransfer.files[0]);
    }
  };

  const removeSelectedFile = () => {
    setSelectedFile(null);
    setError("");
    setUploadResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const getFileIcon = (fileType: string) => {
    if (fileType.includes("pdf")) return "pdf";
    if (fileType.includes("image")) return "image";
    if (fileType.includes("document") || fileType.includes("word")) return "document";
    return "other";
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile) {
      setError("Please select a file to upload");
      return;
    }
    if (!selectedCategory) {
      setError("Please select a document category");
      return;
    }
    if (!userId) {
      setError("User information not available. Please refresh the page.");
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);
    setError("");
    setUploadResult(null);

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("category", selectedCategory);
      formData.append("userId", userId.toString());

      const response = await axios.post<UploadResponse>(
        "/api/auth/documents/uploades", // 👈 Next.js API route
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
              setUploadProgress(percentCompleted);
            }
          },
        }
      );

      if (response.data.success) {
        setUploadResult(response.data);
        setTimeout(() => {
          setSelectedFile(null);
          setSelectedCategory("");
          setUploadProgress(0);
          if (fileInputRef.current) fileInputRef.current.value = "";
        }, 2000);
      } else {
        setError(response.data.error || "Upload failed");
      }
    } catch (err: any) {
      console.error("Upload error:", err);
      setError(err.response?.data?.error || "Network error. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  // Show loading state while fetching userId
  if (isLoadingUserId) {
    return (
      <div className={styles.uploadContainer}>
        <div className={styles.uploadWrapper}>
          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Upload Medical Document</h1>
            <p className={styles.pageSubtitle}>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.uploadContainer}>
      <div className={styles.uploadWrapper}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Upload Medical Document</h1>
          <p className={styles.pageSubtitle}>
            Securely upload and organize your medical documents for easy access and management
          </p>
        </div>

        <div className={styles.uploadCard}>
          <form onSubmit={handleSubmit} className={styles.uploadForm}>
            {/* Category Selection */}
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>
                📁 Document Category <span className={styles.required}>*</span>
              </label>
              <div className={styles.categoryGrid}>
                {DOCUMENT_CATEGORIES.map((category) => (
                  <div
                    key={category.value}
                    className={`${styles.categoryCard} ${
                      selectedCategory === category.value ? styles.selected : ""
                    }`}
                    onClick={() => setSelectedCategory(category.value)}
                  >
                    <div className={styles.categoryIcon}>{category.icon}</div>
                    <div className={styles.categoryName}>{category.label}</div>
                    <div className={styles.categoryDescription}>{category.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* File Upload */}
            <div className={styles.formGroup}>
              <label htmlFor="document-file-input" className={styles.formLabel}>
                📎 Select Document <span className={styles.required}>*</span>
              </label>
              <div
                className={`${styles.fileDropZone} ${
                  isDragActive ? styles.dragActive : ""
                } ${selectedFile ? styles.hasFile : ""}`}
                onDragOver={(e) => e.preventDefault()}
                onDragEnter={() => setIsDragActive(true)}
                onDragLeave={() => setIsDragActive(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  id="document-file-input"
                  type="file"
                  className={styles.hiddenFileInput}
                  onChange={handleFileInputChange}
                  accept=".pdf,.jpg,.jpeg,.png,.gif,.webp,.doc,.docx"
                />

                {!selectedFile ? (
                  <>
                    <div className={styles.uploadIcon}>📁</div>
                    <div className={styles.uploadText}>
                      {isDragActive ? "Drop file here" : "Drag and drop your file here"}
                    </div>
                    <div className={styles.uploadSubtext}>
                      or click to browse (PDF, Images, Word docs - Max 10MB)
                    </div>
                    <button type="button" className={styles.browseButton}>
                      📎 Browse Files
                    </button>
                  </>
                ) : (
                  <div className={styles.fileInfo}>
                    <div
                      className={`${styles.fileIcon} ${styles[getFileIcon(selectedFile.type)]}`}
                    >
                      {getFileIcon(selectedFile.type) === "pdf"
                        ? "PDF"
                        : getFileIcon(selectedFile.type) === "image"
                        ? "🖼️"
                        : getFileIcon(selectedFile.type) === "document"
                        ? "📄"
                        : "📋"}
                    </div>
                    <div className={styles.fileDetails}>
                      <div className={styles.fileName}>{selectedFile.name}</div>
                      <div className={styles.fileSize}>{formatFileSize(selectedFile.size)}</div>
                    </div>
                    <button
                      type="button"
                      className={styles.removeFileButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        removeSelectedFile();
                      }}
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Upload Progress */}
            {isUploading && (
              <div className={styles.uploadProgress}>
                <div className={styles.progressText}>
                  Uploading document... {uploadProgress}%
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: `${uploadProgress}%` }}></div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && <div className={styles.errorMessage}>❌ {error}</div>}

            {/* Success Message */}
            {uploadResult && uploadResult.success && (
              <div className={styles.successMessage}>✅ {uploadResult.message}</div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className={styles.submitButton}
              disabled={!selectedFile || !selectedCategory || isUploading || !userId}
            >
              {isUploading ? (
                <>
                  <div className={styles.loadingSpinner}></div>
                  Uploading...
                </>
              ) : (
                <>🚀 Upload Document</>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function UploadDocumentPage2(){
  return (
    <SessionProvider>
      <UploadDocumentPage/>
    </SessionProvider>
  )
}