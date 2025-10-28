"use client";
import { useState } from "react";
import { signIn, getSession } from "next-auth/react";
import Link from "next/link";
import styles from "../../styles/signin.module.css";
import { FcGoogle } from "react-icons/fc"; // for Google icon

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid credentials. Please check your email and password.");
      } else if (result?.ok) {
        const session = await getSession();
        if (session) setIsSuccess(true);
        else setError("Authentication failed. Please try again.");
      }
    } catch (err: any) {
      console.error("Sign in error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl: "/documents" });
    } catch (err) {
      console.error("Google sign-in failed:", err);
      setError("Google sign-in failed. Try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // --- Success State ---
  if (isSuccess) {
    return (
      <div className={styles.signinContainer}>
        <div className={styles.signinBox}>
          <div className={styles.medicalIcon}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </div>
          <h1 className={styles.title}>Welcome!</h1>
          <p className={styles.subtitle}>You have successfully signed in</p>
          <Link
            href="/documents"
            className={`${styles.button} ${styles.successButton}`}
          >
            Go to your medical documents
          </Link>
        </div>
      </div>
    );
  }

  // --- Default Form ---
  return (
    <div className={styles.signinContainer}>
      <div className={styles.signinBox}>
        <div className={styles.medicalIcon}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>

        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>Sign in to access your medical portal</p>

        {error && (
          <div className={styles.error}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          {/* Email Input */}
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="email">
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
          </div>

          {/* Password Input */}
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="password">
              Password *
            </label>
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
            className={`${styles.button} ${isLoading ? styles.loading : ""}`}
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In Securely"}
          </button>
        </form>

        <div className={styles.formDivider}>or</div>

        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignIn}
          className={styles.googleButton}
          disabled={isLoading}
        >
          <FcGoogle size={22} style={{ marginRight: "8px" }} />
          Continue with Google
        </button>

        <p className={styles.loginText}>
          Don't have an account?{" "}
          <Link href="/signup" className={styles.loginLink}>
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
