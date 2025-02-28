import styles from "../styles/TopImageInfo.module.css";
import roundedBg from "../assets/roundedBg.png";


function TopImageInfo() {
  return (
    <section className={styles.imgSection}>
      <img src={roundedBg} alt="imágen de fondo" />
    </section>
  );
}

export default TopImageInfo;
