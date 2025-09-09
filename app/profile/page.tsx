import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import Link from "next/link"
import { prisma } from "../lib/prisma"
import styles from "../../styles/profile.module.css"

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
  
  return (
    <div className={styles.container}>
      <div className={styles.profileCard}>
        <div className={styles.profileHeader}>
          <div className={styles.avatarSection}>
            <div className={styles.avatar}>
              {userInitial}
            </div>
            <div className={styles.patientInfo}>
              <h1 className={styles.patientName}>{user.username}</h1>
              <p className={styles.patientId}>Patient ID: #{user.id}</p>
            </div>
          </div>
          <div className={styles.medicalBadge}>
            <div className={styles.medicalIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C13.1 2 14 2.9 14 4V8H18C19.1 8 20 8.9 20 10V12C20 13.1 19.1 14 18 14H14V18C14 19.1 13.1 20 12 20H10C8.9 20 8 19.1 8 18V14H4C2.9 14 2 13.1 2 12V10C2 8.9 2.9 8 4 8H8V4C8 2.9 8.9 2 10 2H12Z"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className={styles.profileContent}>
          <h2 className={styles.sectionTitle}>Patient Information</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Full Name</span>
              <span className={styles.infoValue}>{user.username}</span>
            </div>
            
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Email Address</span>
              <span className={styles.infoValue}>{user.email}</span>
            </div>
            
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Phone Number</span>
              <span className={styles.infoValue}>{user.phone || "Not provided"}</span>
            </div>
            
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Age</span>
              <span className={styles.infoValue}>{user.age ? `${user.age} years` : "Not provided"}</span>
            </div>
            
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Gender</span>
              <span className={styles.infoValue}>{user.sex || "Not specified"}</span>
            </div>
            
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Location</span>
              <span className={styles.infoValue}>{user.location || "Not provided"}</span>
            </div>
            
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Registration Date</span>
              <span className={styles.infoValue}>{user.createdAt.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>
        </div>
        
        <div className={styles.profileFooter}>
          <div className={styles.lastUpdated}>
            Last updated: {user.createdAt.toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  )
}