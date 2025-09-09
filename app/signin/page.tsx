"use client";
import { useState } from "react";
import { signIn, getSession } from "next-auth/react";
import Link from "next/link";
import styles from "../../styles/signin.module.css";

export default function SignInPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid credentials. Please check your username, email, and password.");
      } else if (result?.ok) {
        // Verify the session was created
        const session = await getSession();
        if (session) {
          setIsSuccess(true);
        } else {
          setError("Authentication failed. Please try again.");
        }
      }
    } catch (err: any) {
      console.error("Sign in error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Success state component
  if (isSuccess) {
    return (
      <div className={styles.signinContainer}>
        <div className={styles.signinBox}>
          <div className={styles.medicalIcon}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </div>
          
          <h1 className={styles.title}>Welcome!</h1>
          <p className={styles.subtitle}>You have successfully signed in</p>
          
          <div className={styles.success}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{display: 'inline-block', marginRight: '8px'}}>
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            Authentication successful! Redirecting to Home...
          </div>

          <Link 
            href="/documents"
            className={`${styles.button} ${styles.successButton}`}
          >
            Click here to go to your medical documents
          </Link>

          <p className={styles.loginText}>
            Or return to 
            <Link href="/" className={styles.loginLink}>
              Home Page
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.signinContainer}>
      <div className={styles.signinBox}>
        {/* Medical Icon */}
        <div className={styles.medicalIcon}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3V8z" transform="translate(-7, -7) scale(0.8)"/>
          </svg>
        </div>

        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>Sign in to access your medical portal</p>
        
        {error && (
          <div className={styles.error}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{display: 'inline-block', marginRight: '8px'}}>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          {/* Username Input */}
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="username">Username *</label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="Enter your username"
              autoComplete="username"
              required
              minLength={3}
              maxLength={50}
            />
          </div>

          {/* Email Input */}
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="email">Email Address *</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="Enter your email address"
              autoComplete="email"
              required
            />
          </div>

          {/* Password Input */}
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="password">Password *</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
              minLength={6}
            />
          </div>

          <button 
            type="submit"
            className={`${styles.button} ${isLoading ? styles.loading : ''}`}
            disabled={isLoading}
            aria-describedby={error ? "signin-error" : undefined}
          >
            {isLoading ? '' : 'Sign In Securely'}
          </button>
        </form>

        {/* Trust Indicators */}
        <div className={styles.trustIndicators}>
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

        <p className={styles.footerText}>
          By signing in, you acknowledge that you have read and agree to our 
          <Link href="/privacy" className={styles.footerLink}> Privacy Policy</Link> and 
          <Link href="/terms" className={styles.footerLink}> Terms of Service</Link>. 
          Your health information is protected and secure.
        </p>

        <div className={styles.formDivider}></div>

        {/* Signup link */}
        <p className={styles.loginText}>
          Don't have an account?
          <Link href="/signup" className={styles.loginLink}>
            Create Account
          </Link>
        </p>

        <div className={styles.securityBadge}>
          Your data is secure with us
        </div>
      </div>
    </div>
  );
}