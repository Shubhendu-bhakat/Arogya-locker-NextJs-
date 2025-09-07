import styles from "../styles/loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loaderScreen}>
      <div className={styles.dots}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className={styles.text}>Loading...</p>
    </div>
  );
}
