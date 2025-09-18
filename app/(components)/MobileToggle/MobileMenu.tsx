"use client";

import { useState } from "react";
import { Session } from "next-auth";
import Link from "next/link";
import styles from "../../../styles/heamburger.module.css"; 
import Image from "next/image";

interface MobileMenuClientProps {
  session: Session| null;
}

export default function MobileMenuClient({ session }: MobileMenuClientProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={styles.mobileMenuWrapper}>
      <button
        className={isOpen ? `${styles.hamburger} ${styles.open}` : styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>

      {isOpen && (
        <>
          <div className={styles.mobileMenuOverlay} onClick={closeMenu}></div>
          <nav className={styles.mobileMenu}>
            <div className={styles.mobileMenuHeader}>
              <Image src="/globe.svg" alt="Arogya-Locker Logo" width={32} height={32} />
              <span className={styles.brandName}>Arogya-Locker</span>
              <button className={styles.closeBtn} onClick={closeMenu} aria-label="Close menu">&times;</button>
            </div>
            <div className={styles.mobileNavLinks}>
              <Link href="/documents" className={styles.mobileNavLink} onClick={closeMenu}>Documents</Link>
              <Link href="/chat" className={styles.mobileNavLink} onClick={closeMenu}>Chat</Link>
              <Link href="/profile" className={styles.mobileNavLink} onClick={closeMenu}>Profile</Link>
              {!session ? (
                <Link href="/signin" className={styles.mobileNavLink} onClick={closeMenu}>LogIn</Link>
              ) : (
                <form action="/api/auth/signout" method="post">
                  <button type="submit" className={styles.logoutBtn}>Logout</button>
                </form>
              )}
            </div>
          </nav>
        </>
      )}
    </div>
  );
}
