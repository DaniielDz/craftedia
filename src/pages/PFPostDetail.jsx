import styles from "../styles/PFPostDetail.module.css";
import TopImage from "../components/TopImagePost";
import Carousel from "../components/Carousel";
import skin from "../assets/skin.png";
import Text from "../components/Text";

function PFPostDetail() {
  return (
    <>
      <TopImage />

      <section className={styles.section}>
        <div className={styles.imagesContainer}>
          <div className={styles.images}>
            <img src={skin} alt={skin} />
            <img src={skin} alt={skin} />
            <img src={skin} alt={skin} />
          </div>
          <div className={styles.images}>
            <img src={skin} alt={skin} />
            <img src={skin} alt={skin} />
            <img src={skin} alt={skin} />
          </div>
        </div>
        <div className={styles.textContainer}>
          <h1>Título del proyecto</h1>
          <Text />
          <Text />
          <Text />
          <Text />
        </div>
      </section>
      <section className={styles.sectionCarousel}>
        <Carousel images={[skin, skin, skin, skin, skin]} />
      </section>
    </>
  );
}

export default PFPostDetail;
