import styles from "../styles/ProgressBar.module.css";

function ProgressBar({ percentage, text }) {
  return (
    <div className={styles.progressContainer}>
      <progress className={styles.progressBar} value={percentage} max="100"></progress>
      <div className={styles.progressText}>{text}</div>
    </div>
  );
}

export default ProgressBar;
