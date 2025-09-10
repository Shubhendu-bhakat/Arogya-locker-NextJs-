// LandingPage.js (Server Component)
import Link from "next/link";
import styles from "../styles/landing.module.css";
interface LandingPageProps {
  session?: unknown; // Replace 'unknown' with your actual session type if available
}

export default async function LandingPage({ session }: LandingPageProps) {
  const features = [
    {
      icon: "🗺️",
      title: "Connect with Nearest Doctor",
      description:
        "Find healthcare professionals near you based on your medical needs. Our smart map ensures fast, accurate connections.",
    },
    {
      icon: "🌐",
      title: "Language Independent",
      description:
        "Upload medical documents in any language — our AI understands and summarizes them for you.",
    },
    {
      icon: "📝",
      title: "AI Summarized Reports",
      description:
        "Get simplified summaries of complex medical reports, so you and your family can easily understand them.",
    },
    {
      icon: "🔒",
      title: "Secure Document Storage",
      description:
        "Your medical records are encrypted and stored with bank-level security. Access them from anywhere, anytime.",
    },
    {
      icon: "🤖",
      title: "AI Health Assistant",
      description:
        "Chat with our AI assistant for instant health insights, reminders, and advice tailored to you.",
    },
    {
      icon: "👥",
      title: "Family Health Management",
      description:
        "Manage and share health records securely for your entire family in one place.",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Active Users" },
    { number: "50,000+", label: "Documents Stored" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
  ];
// Correct syntax
await new Promise(resolve => setTimeout(resolve, 3000));
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Connecting You to Care, <br /> Anytime, Anywhere 🌍
        </h1>
        <p className={styles.heroSubtitle}>
          Store, manage, and understand your medical records with ease. 
          Arogya-Locker connects you to nearby doctors and provides AI-powered summaries in any language.
        </p>
        <div className={styles.heroActions}>
          <Link href="/signup" className={styles.getStarted}>
            Get Started
          </Link>
          <Link href="/chat" className={styles.chat}>
            Try AI Assistant
          </Link>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <h2 className={styles.sectionTitle}>Find Doctors Near You</h2>
        <p className={styles.sectionSubtitle}>
          Our smart map helps you connect with healthcare providers closest to you, based on your needs.
        </p>
        <div className={styles.mapPlaceholder}>
          🗺️ Interactive Map Coming Soon
        </div>
      </section>

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

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>Features</h2>
        <p className={styles.sectionSubtitle}>
          Discover how Arogya-Locker simplifies healthcare management for you and your family.
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
    </div>
  );
}