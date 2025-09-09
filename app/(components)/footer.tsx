// Footer.js
import Link from "next/link";
import styles from "../../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerGrid}>
          {/* Solutions Column */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Solutions</h3>
            <ul className={styles.footerList}>
              <li><Link href="/patients" className={styles.footerLink}>Patients</Link></li>
              <li><Link href="/providers" className={styles.footerLink}>Providers</Link></li>
              <li><Link href="/payers" className={styles.footerLink}>Payers</Link></li>
              <li><Link href="/developers" className={styles.footerLink}>Developers</Link></li>
            </ul>
          </div>

          {/* About Column */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>About</h3>
            <ul className={styles.footerList}>
              <li><Link href="/about" className={styles.footerLink}>About Us</Link></li>
              <li><Link href="/patient-partners" className={styles.footerLink}>Patient Partners</Link></li>
              <li><Link href="/community" className={styles.footerLink}>Community</Link></li>
              <li><Link href="/media" className={styles.footerLink}>Media</Link></li>
              <li><Link href="/blog" className={styles.footerLink}>Blog</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Support</h3>
            <ul className={styles.footerList}>
              <li><Link href="/help" className={styles.footerLink}>Help Center</Link></li>
              <li><Link href="/resources" className={styles.footerLink}>Resource Center</Link></li>
              <li><Link href="/contact" className={styles.footerLink}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Policies Column */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Policies</h3>
            <ul className={styles.footerList}>
              <li><Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link></li>
              <li><Link href="/terms" className={styles.footerLink}>Terms</Link></li>
              <li><Link href="/carin-code" className={styles.footerLink}>CARIN Code</Link></li>
              <li><Link href="/security" className={styles.footerLink}>Security</Link></li>
              <li><Link href="/policy-archive" className={styles.footerLink}>Policy Archive</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.footerDescription}>
            Arogya-Locker is built with love by a dedicated team in Bhubaneswar and powered by a diligent community of advocates and patients.
          </p>
          <p className={styles.footerCopyright}>
            © {new Date().getFullYear()} Arogya-Locker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}