import { Link } from "react-router";
import styles from "../styles/PostItem.module.css"
import postImg from "../assets/skin.png";
import IC_Edit from "../assets/IC_edit.svg";
import IC_Show from "../assets/IC_watch.svg";
import IC_Trash from "../assets/IC_trash.svg";

function PostItem() {
  return (
    <div className={styles.postCard}>
      <div className={styles.postCard__imageContainer}>
        <img
          className={styles.postCard__image}
          src={postImg}
          alt="Post image"
        />
      </div>
      <div className={styles.postCard__content}>
        <h2 className={styles.postCard__title}>Título del proyecto</h2>
        <p className={styles.postCard__body}>JAVA Publicado 2 abril 2024</p>
        <ul className={styles.postCard__tags}>
          <li className={styles.postCard__tag}>etiqueta</li>
          <li className={styles.postCard__tag}>etiqueta</li>
          <li className={styles.postCard__tag}>etiqueta</li>
          <li className={styles.postCard__tag}>etiqueta</li>
        </ul>
      </div>
      <div className={styles.postCard__actions}>
        <Link className={styles.postCard__action} to="/post/1}">
          <img
            className={styles.postCard__actionIcon}
            src={IC_Edit}
            alt="Edit icon"
          />
        </Link>
        <Link
          className={`${styles.postCard__action} ${styles.postCard__actionShow}`}
          to="/post/1"
        >
          <img
            className={styles.postCard__actionIcon}
            src={IC_Show}
            alt="Show icon"
          />
        </Link>
        <button
          className={`${styles.postCard__action} ${styles.postCard__actionDelete}`}
        >
          <img
            className={styles.postCard__actionIcon}
            src={IC_Trash}
            alt="Delete Icon"
          />
        </button>
      </div>
    </div>
  );
}

export default PostItem;
