import styles from "../styles/Text.module.css";

function Text({txt}) {
  
  return (
    <div className={styles.text}>
      <div dangerouslySetInnerHTML={{ __html: txt }} />
    </div>
  );
}

export default Text;
