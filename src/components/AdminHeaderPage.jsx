import { Link } from "react-router";
import styles from "../styles/AdminHeaderPage.module.css";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

function AdminHeaderPage({ title, newPostLink }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`${styles.container} ${isDarkMode && styles.darkMode}`}>
      <Link className={styles.button} to={newPostLink}>
        Add new post
      </Link>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}

export default AdminHeaderPage;
