import styles from "../styles/Text.module.css";

function Text({txt}) {
  
  return (
    <div className={styles.text}>
      <h2>Cuadro de texto 1</h2>
      <div dangerouslySetInnerHTML={{ __html: txt }} />
    </div>
  );
}

export default Text;
