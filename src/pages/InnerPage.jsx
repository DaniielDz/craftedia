import { Link } from "react-router";
import bgImg from "../assets/roundedBg.png";
import skinImg from "../assets/skin.png";
import styles from "../styles/InnerPage.module.css";

function InnerPage() {
    const myArray = [1,2,3,4,5,6]

  return (
    <div className={styles.container}>
      <section className={styles.imgSection}>
        <img src={bgImg} alt="Imagen de fondo" />
        <div className={styles.titleContainer}>
          <h1>Java edition</h1>
          <h2>resourcepacks</h2>
        </div>
      </section>
      <section className={styles.gridSection}>
        {
            myArray.map(num => (
                <Link key={num} to={'/'} className={styles.imageContainer}>
                <img
                  src={skinImg}
                  alt="Portada del post"
                  className={styles.gridImage}
                />
                <div className={styles.overlayText}>
                  <p>Título del proyecto</p>
                  <span>Etiquetas</span>
                </div>
              </Link>
            ))
        }   
      </section>
      <nav className={styles.navigationContainer}>
        <Link to={"#"}>1</Link>
        <Link to={"#"}>2</Link>
        <span>...</span>
        <Link to={"#"}>8</Link>
      </nav>
    </div>
  );
}

export default InnerPage;
