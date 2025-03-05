import { Link } from "react-router";
import styles from "../styles/AdminHeaderPage.module.css";

function AdminHeaderPage({ title, newPostLink }) {
  return (
    <div className={styles.container}>
      <Link className={styles.button} to={newPostLink}>
        Add new post
      </Link>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}

export default AdminHeaderPage;
