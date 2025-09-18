// Header.tsx (Server Component)
import Link from "next/link";
import { getServerSession } from "next-auth";   // ✅ Import this
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // adjust path to your auth config
import styles from "../../styles/header.module.css";
import MobileMenuClient from "./MobileToggle/MobileMenu";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo} style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
        <img src="/globe.svg" alt="Arogya-Locker Logo" style={{height: '2.2rem', width: '2.2rem', marginRight: '0.3rem'}} />
        <span>Arogya-Locker</span>
      </Link>

      <div className={styles.navCenter}>
        <Link href="/documents" className={styles.navLink}>
          Documents
        </Link>
        <Link href="/chat" className={styles.navLink}>
          Chat
        </Link>
        <Link href="/profile" className={styles.navLink}>
          Profile
        </Link>
      </div>

      <div className={styles.navLinks}>
        {!session ? (
          <Link href="/signin">
            <button className={`${styles.btn} ${styles.signin}`}>LogIn</button>
          </Link>
        ) : (
          <form action="/api/auth/signout" method="post">
            <button type="submit" className={`${styles.btn} ${styles.logout}`}>
              Logout
            </button>
          </form>
        )}
      </div>

      {/* Mobile menu (client) */}
      <MobileMenuClient session={session} />
    </nav>
  );
}
