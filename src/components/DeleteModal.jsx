import styles from "../styles/DeleteModal.module.css";

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div
      className={`${styles.backdrop} ${isOpen ? styles.backdropVisible : ""}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className={`${styles.modal} ${isOpen ? styles.modalVisible : ""}`}>
        <h3 className={styles.title}>¿Eliminar publicación?</h3>
        <p className={styles.text}>Esta acción no se puede deshacer</p>

        <div className={styles.buttonsContainer}>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancelar
          </button>
          <button className={styles.confirmButton} onClick={onConfirm}>
            Sí, eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
