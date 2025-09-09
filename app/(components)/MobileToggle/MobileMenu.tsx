"use client";

import { useState } from "react";
import { Session } from "next-auth";
import Link from "next/link";
import styles from "../../../styles/heamburger.module.css"; 

interface MobileMenuClientProps {
  session: Session| null;
}

export default function MobileMenuClient({ session }: MobileMenuClientProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={styles.mobileMenuWrapper}>
      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>

      {isOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/documents" onClick={() => setIsOpen(false)}>
            Documents
          </Link>
          <Link href="/chat" onClick={() => setIsOpen(false)}>
            Chat
          </Link>
          <Link href="/profile" onClick={() => setIsOpen(false)}>
            Profile
          </Link>

          {!session ?  (
            <Link href="/signin" onClick={() => setIsOpen(false)}>
              LogIn
            </Link>
          ) : (
            <form action="/api/auth/signout" method="post">
              <button type="submit" className={styles.logoutBtn}>
                Logout
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
