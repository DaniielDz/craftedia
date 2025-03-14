import { Link, useLocation } from "react-router";
import styles from "../styles/PostItem.module.css";
import IC_Edit from "../assets/IC_edit.svg";
import IC_Show from "../assets/IC_watch.svg";
import IC_Trash from "../assets/IC_trash.svg";
import DeleteModal from "./DeleteModal";
import { useContext, useState } from "react";
import { deletePost } from "../api/postApi";
import { ThemeContext } from "../context/ThemeContext";

function PostItem({ post, onDelete }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);
  const { isDarkMode } = useContext(ThemeContext);

  const path = useLocation();
  const isResPacks = path.pathname.includes("resourcepacks");
  const type = isResPacks ? "respacks" : "portfolio";
  const page = isResPacks ? "resourcepacks" : "portfolio";

  post = {
    ...post,
    created_at: formatearFecha(post.created_at),
    upadated_at: formatearFecha(post.updated_at),
  };

  function formatearFecha(fechaISO) {
    const fecha = new Date(fechaISO);

    const opciones = { day: "numeric", month: "long", year: "numeric" };

    return fecha.toLocaleDateString("es-ES", opciones);
  }

  const handleConfirm = async () => {
    setIsDeleting(true);
    setError(null);

    try {
      const result = await deletePost(post.id, type);

      if (result.success) {
        onDelete(post.id);
      } else {
        setError(result.message || "Error al eliminar el post");
      }
    } catch (error) {
      setError("Error al eliminar el post");
    } finally {
      setIsDeleting(false);
      setIsModalOpen(false);
    }
  };

  return (
    <div className={`${styles.postCard} ${isDarkMode && styles.darkMode}`}>
      <div className={styles.postCard__imageContainer}>
        <img
          className={styles.postCard__image}
          src={post.images[0]}
          alt={`Imagen del post "${post.title}"`}
        />
      </div>
      <div className={styles.postCard__content}>
        <h2 className={styles.postCard__title}>{post.title}</h2>
        <p className={styles.postCard__body}>
          {post.path && post.path.toUpperCase()} Publicado {post.created_at}
        </p>
        <ul className={styles.postCard__tags}>
          {post.tags &&
            post.tags.map((tag, index) => (
              <li key={index} className={styles.postCard__tag}>
                {tag}
              </li>
            ))}
        </ul>
      </div>
      <div className={styles.postCard__actions}>
        <Link
          className={styles.postCard__action}
          to={`/admin/${page}/edit-post/${post.id}`}
        >
          <img
            className={styles.postCard__actionIcon}
            src={IC_Edit}
            alt="Edit icon"
          />
        </Link>
        <Link
          className={`${styles.postCard__action} ${styles.postCard__actionShow}`}
          to={
            isResPacks
              ? `/resourcepacks/${post.path}/${post.id}`
              : `/portfolio/${post.path}/${post.id}`
          }
        >
          <img
            className={styles.postCard__actionIcon}
            src={IC_Show}
            alt="Show icon"
          />
        </Link>
        <button
          className={`${styles.postCard__action} ${styles.postCard__actionDelete}`}
          onClick={() => setIsModalOpen(true)}
        >
          <img
            className={styles.postCard__actionIcon}
            src={IC_Trash}
            alt="Delete Icon"
          />
        </button>
        <DeleteModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirm}
          isDeleting={isDeleting}
          error={error}
        />
      </div>
    </div>
  );
}

export default PostItem;
