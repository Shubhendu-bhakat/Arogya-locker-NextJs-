import { getServerSession } from "next-auth";
import ChatClient from "../../app/chat/chatClient";
import { authOptions } from "../api/auth/[...nextauth]/route"; 
import styles from "../../styles/profile.module.css";
import Link from "next/link";

export default async function ChatPage() {
  const session = await getServerSession(authOptions);

  // Extract first name (fallback: Guest)
  const fullName = session?.user?.name || "Guest";
  const firstName = fullName.split(" ")[0];
  if(!session ){
    return  <div className={styles.container}>
        <div className={styles.authCard}>
          <div className={styles.authHeader}>
            <div className={styles.medicalIcon}>
              <svg viewBox="0 0 24 24" fill={styles.currentColor}>
                <path d="M12 2C13.1 2 14 2.9 14 4V8H18C19.1 8 20 8.9 20 10V12C20 13.1 19.1 14 18 14H14V18C14 19.1 13.1 20 12 20H10C8.9 20 8 19.1 8 18V14H4C2.9 14 2 13.1 2 12V10C2 8.9 2.9 8 4 8H8V4C8 2.9 8.9 2 10 2H12Z"/>
              </svg>
            </div>
            <h2>Authentication Required</h2>
            <p>Please sign in to access AI support </p>
          </div>
          <Link href="/signin" className={styles.btnPrimary}>
            Sign In to Continue
          </Link>
        </div>
      </div>
  }
  return <ChatClient firstName={firstName} />;
}
