import { ScrollContext } from "../ScrollContext"; 
import logo from "../assets/logo.svg";
import heroImage from "../assets/homeHero.webp";
import aboutMeImg from "../assets/aboutMeIcon.svg";
import styles from "../styles/Home.module.css";
import { useContext } from "react";

function Home() {
  const { isScrolled } = useContext(ScrollContext);
  return (
    <>
      <section className={styles.heroSection}>
        <img
          className={styles.heroImage}
          src={heroImage}
          alt="imagen de fondo"
        />
        <img className={`${styles.logo} ${isScrolled ? styles.logoScrolled : ""}`} src={logo} alt="Craftedia logo" />
      </section>
      <section className={styles.aboutMeSection}>
        <header className={styles.aboutMeHeader}>
          <img className={styles.aboutMeImg} src={aboutMeImg} alt="about me icon" />
          <h1 className={styles.aboutMeTitle}>About me.</h1>
        </header>
        <div className={styles.aboutMeContain}>
          <p>
            Hi! I&apos;m Luis, but you can find me digitally as @Hakks, @H4kks,
            or @akks. I&apos;m a graphic designer with a passion for animation
            and low poly 3D design. I pursued a degree in graphic design, where
            I discovered a love for bringing my creations to life. Low poly 3D
            design, with its clean and geometric aesthetic, and animation, with
            its ability to imbue characters with movement and personality,
            captivated me. For the past two years, I&apos;ve been working at
            Eufonia Studio, where I&apos;ve honed my skills in modeling,
            animating, and texturing characters and props using Blockbench and
            Photoshop.
          </p>
          <p>
            I&apos;m comfortable working with a variety of design tools, from classic
            Adobe software like Photoshop, Illustrator, and InDesign, to
            specialized 3D software like Maya and Blockbench. Currently, I&apos;m
            expanding my skillset by learning Blender. I enjoy tackling new
            challenges and exploring the creative possibilities that animation
            and 3D modeling offer. I see each project as a chance to learn,
            experiment, and grow. On this page, you&apos;ll find resource packs for
            both Java and Bedrock, as well as my portfolio. There, you can see
            some examples of my work and get a feel for my style and the passion
            I pour into every project. <br/>
            -Hakks
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;