"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../../styles/signup.module.css";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    age: "",
    sex: "",
    location: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          age: formData.age ? parseInt(formData.age) : null,
          sex: formData.sex || null,
          location: formData.location || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSuccess("Account created successfully! Redirecting to sign in...");
      
      // Redirect to signin page after 2 seconds
      setTimeout(() => {
        router.push("/signin");
      }, 2000);

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.medicalSignupContainer}>
      <div className={styles.medicalSignupCard}>
        {/* Medical Icon */}
        <div className={styles.medicalIcon}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3V8z" transform="translate(-7, -7) scale(0.8)"/>
          </svg>
        </div>

        <h1 className={styles.medicalSignupTitle}>Create Account</h1>
        <p className={styles.medicalSignupSubtitle}>
          Join our secure medical platform
        </p>

        {error && (
          <div className={styles.medicalErrorMessage}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{display: 'inline-block', marginRight: '8px'}}>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            {error}
          </div>
        )}

        {success && (
          <div className={styles.medicalSuccessMessage}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{display: 'inline-block', marginRight: '8px'}}>
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.medicalSignupForm}>
          {/* Required Fields */}
          <div className={styles.medicalInputGroup}>
            <label className={styles.medicalLabel}>Username *</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleInputChange}
              className={styles.medicalInput}
              required
            />
          </div>

          <div className={styles.medicalInputGroup}>
            <label className={styles.medicalLabel}>Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleInputChange}
              className={styles.medicalInput}
              required
            />
          </div>

          <div className={styles.medicalInputGroup}>
            <label className={styles.medicalLabel}>Password *</label>
            <input
              type="password"
              name="password"
              placeholder="Create a secure password"
              value={formData.password}
              onChange={handleInputChange}
              className={styles.medicalInput}
              required
            />
          </div>

          <div className={styles.medicalInputGroup}>
            <label className={styles.medicalLabel}>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter 10-digit phone number"
              value={formData.phone}
              onChange={handleInputChange}
              className={styles.medicalInput}
              pattern="[0-9]{10}"
              required
            />
          </div>

          {/* Optional Fields in Two Columns */}
          <div className={styles.twoColumnGrid}>
            <div className={styles.medicalInputGroup}>
              <label className={styles.medicalLabel}>Age (Optional)</label>
              <input
                type="number"
                name="age"
                placeholder="Enter your age"
                value={formData.age}
                onChange={handleInputChange}
                className={styles.medicalInput}
                min="13"
                max="120"
              />
            </div>

            <div className={styles.medicalInputGroup}>
              <label className={styles.medicalLabel} htmlFor="sex-select">Sex (Optional)</label>
              <select
                id="sex-select"
                name="sex"
                value={formData.sex}
                onChange={handleInputChange}
                className={styles.medicalSelect}
              >
                <option value="">Select sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
          </div>

          <div className={styles.medicalInputGroup}>
            <label className={styles.medicalLabel}>Location (Optional)</label>
            <input
              type="text"
              name="location"
              placeholder="Enter your city or region"
              value={formData.location}
              onChange={handleInputChange}
              className={styles.medicalInput}
            />
          </div>

          <button 
            type="submit" 
            className={`${styles.medicalSubmitBtn} ${isLoading ? styles.loading : ''}`}
            disabled={isLoading}
          >
            {isLoading ? '' : 'Create Account Securely'}
          </button>
        </form>

        <div className={styles.medicalTrustIndicators}>
          <div className={styles.trustIndicator}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
            </svg>
            HIPAA Compliant
          </div>
          <div className={styles.trustIndicator}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18,8H17V6A5,5 0 0,0 12,1A5,5 0 0,0 7,6V8H6A2,2 0 0,0 4,10V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V10A2,2 0 0,0 18,8Z"/>
            </svg>
            SSL Encrypted
          </div>
        </div>

        <p className={styles.medicalFooterText}>
          By creating an account, you acknowledge that you have read and agree to our Privacy Policy and Terms of Service. 
          Your personal health information will be kept secure and confidential.
        </p>

        <p className={styles.signinText}>
          Already have an account?
          <Link href="/signin" className={styles.signinLink}>
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}