import styles from "../styles/TopImage.module.css";
import bgImg from "../assets/homeHero.webp";

function TopImage() {
  return (
    <section className={styles.sectionImg}>
      <img src={bgImg} alt="imagen de fondo" />
    </section>
  );
}

export default TopImage;
