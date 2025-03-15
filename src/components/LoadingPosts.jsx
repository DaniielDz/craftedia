import styles from "../styles/LoadingPosts.module.css"

function LoadingPosts({text}) {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
            <p className={styles.loadingText}>Cargando {text}...</p>
        </div>
    );
}

export default LoadingPosts;