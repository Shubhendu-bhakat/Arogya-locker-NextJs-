import styles from '../../styles/loading.module.css';

export default function MedicalLoader() {
  return (
    <div className={styles.medicalLoadingOverlay}>
      <div className={styles.medicalLoaderContainer}>
        {/* Medical cross icon */}
        <div className={styles.medicalCrossIcon}></div>
        {/* Loading text */}
        <h3 className={styles.medicalLoadingText}>
          Processing your request
          <span className={styles.medicalHeartbeat}>♥</span>
        </h3>
        {/* Animated dots */}
        <div className={styles.medicalDotsContainer}>
          <div className={styles.medicalDot}></div>
          <div className={styles.medicalDot}></div>
          <div className={styles.medicalDot}></div>
        </div>
        {/* Subtitle */}
        <p className={styles.medicalSubtitle}>
          Please wait while we securely process your information
        </p>
        {/* Progress bar */}
        <div className={styles.medicalProgressBar}>
          <div className={styles.medicalProgressFill}></div>
        </div>
      </div>
    </div>
  );
}