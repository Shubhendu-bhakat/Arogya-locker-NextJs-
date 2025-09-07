import Link from "next/link";
import { getServerSession } from "next-auth";
import styles from "../styles/landing.module.css";

export default async function LandingPage() {
  const session = await getServerSession();

  const features = [
    {
      icon: "🔒",
      title: "Secure Document Storage",
      description: "Your medical records are encrypted and stored securely with bank-level security. Access your documents from anywhere, anytime."
    },
    {
      icon: "📱",
      title: "Mobile-First Design",
      description: "Access your health records on any device. Our responsive design ensures a seamless experience across all platforms."
    },
    {
      icon: "🤖",
      title: "AI Health Assistant",
      description: "Chat with our intelligent AI assistant to get insights about your health records, medication reminders, and health advice."
    },
    {
      icon: "📊",
      title: "Health Analytics",
      description: "Visualize your health trends with interactive charts and reports. Track your progress over time with detailed analytics."
    },
    {
      icon: "👥",
      title: "Family Health Management",
      description: "Manage health records for your entire family in one place. Share records securely with healthcare providers."
    },
    {
      icon: "🏥",
      title: "Healthcare Integration",
      description: "Seamlessly integrate with hospitals, clinics, and healthcare providers. Import records directly from medical institutions."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Users" },
    { number: "50,000+", label: "Documents Stored" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>Arogya-Locker</div>

        {/* Center Nav Links */}
        <div className={styles.navCenter}>
          <Link href="/documents" className={styles.navLink}>Documents</Link>
          <Link href="/chat" className={styles.navLink}>Chat</Link>
          <Link href="/profile" className={styles.navLink}>Profile</Link>
        </div>

        {/* Right Side */}
        <div className={styles.navLinks}>
          {!session ? (
            <>
              <Link href="/signin">
                <button className={`${styles.btn} ${styles.signin}`}>Sign In</button>
              </Link>
              <Link href="/signup">
                <button className={`${styles.btn} ${styles.signup}`}>Sign Up</button>
              </Link>
            </>
          ) : (
            <form action="/api/auth/signout" method="post">
              <button type="submit" className={`${styles.btn} ${styles.logout}`}>
                Logout
              </button>
            </form>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <main className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Your Health Records,
          <br />
          Secure & Accessible
        </h1>
        <p className={styles.heroSubtitle}>
          Arogya-Locker is your comprehensive digital health companion. Store, organize, and access your medical records securely. Get AI-powered insights and manage your family's health with confidence.
        </p>

        <div className={styles.heroActions}>
          <Link href="/dashboard" className={styles.getStarted}>
            Get Started Free
          </Link>
          <Link href="/chat" className={styles.chat}>
            Try AI Assistant
          </Link>
        </div>

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>Why Choose Arogya-Locker?</h2>
        <p className={styles.sectionSubtitle}>
          Discover the powerful features that make managing your health records effortless and secure.
        </p>
        
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Arogya-Locker. All rights reserved.</p>
        <p>Empowering you to take control of your health journey.</p>
      </footer>
    </div>
  );
}
