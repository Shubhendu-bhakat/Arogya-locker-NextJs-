import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import Link from "next/link"
import { prisma } from "../lib/prisma"
import styles from "../../styles/profile.module.css"
import axios from "axios";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    return (
      <div className={styles.container}>
        <div className={styles.authCard}>
          <div className={styles.authHeader}>
            <div className={styles.medicalIcon}>
              <svg viewBox="0 0 24 24" fill={styles.currentColor}>
                <path d="M12 2C13.1 2 14 2.9 14 4V8H18C19.1 8 20 8.9 20 10V12C20 13.1 19.1 14 18 14H14V18C14 19.1 13.1 20 12 20H10C8.9 20 8 19.1 8 18V14H4C2.9 14 2 13.1 2 12V10C2 8.9 2.9 8 4 8H8V4C8 2.9 8.9 2 10 2H12Z"/>
              </svg>
            </div>
            <h2>Authentication Required</h2>
            <p>Please sign in to access your medical profile</p>
          </div>
          <Link href="/signin" className={styles.btnPrimary}>
            Sign In to Continue
          </Link>
        </div>
      </div>
    )
  }
  
  const username = session.user?.name ?? undefined;
  const email = session.user?.email ?? undefined;
  const user = await prisma.user.findUnique({
    where: {
     username: username,
     email: email
    },
  })
  
  if (!user) {
    return (
      <div className={styles.container}>
        <div className={styles.errorCard}>
          <h1>Patient Record Not Found</h1>
          <p>Unable to locate your medical profile in our system. Please contact support.</p>
        </div>
      </div>
    )
  }
  
  // Generate user avatar with first letter
  const userInitial = (user.username || user.email || "U").charAt(0).toUpperCase()

  // Fetch user documents directly from DB
  const documents = await prisma.document.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className={styles.container}>
      <div className={styles.profileCardSimple}>
        <div className={styles.profileHeaderSimple}>
          <div className={styles.avatarSimple}>{userInitial}</div>
          <div>
            <div className={styles.patientNameSimple}>{user.username}</div>
            <div className={styles.patientIdSimple}>Patient ID: #{user.id}</div>
          </div>
        </div>
        <div className={styles.infoGridSimple}>
          <div>
            <span className={styles.infoLabelSimple}>Email:</span> {user.email}
          </div>
          <div>
            <span className={styles.infoLabelSimple}>Phone:</span> {user.phone || "Not provided"}
          </div>
          <div>
            <span className={styles.infoLabelSimple}>Age:</span> {user.age ? `${user.age} years` : "Not provided"}
          </div>
          <div>
            <span className={styles.infoLabelSimple}>Gender:</span> {user.sex || "Not provided"}
          </div>
        </div>
        <div className={styles.docsSectionSimple}>
          <div className={styles.docsTitleSimple}>Your Documents</div>
          {documents.length === 0 ? (
            <div className={styles.emptyDocsSimple}>No documents found.</div>
          ) : (
            <ul className={styles.docsListSimple}>
              {documents.map((doc) => (
                <li key={doc.id} className={styles.docItemSimple}>
                  <span className={styles.docNameSimple}>{doc.name}</span>
                  <span className={styles.docCategorySimple}>{doc.category}</span>
                  <a href={doc.url || '#'} target="_blank" rel="noopener noreferrer" className={styles.docLinkSimple}>
                    View
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}