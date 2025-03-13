import { Link } from "react-router";
import styles from "../styles/Footer.module.css";
import patreon from "../assets/patreon.svg";
import x from "../assets/x.svg";
import youtube from "../assets/youtube.svg";
import tikTok from "../assets/tiktok.svg";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

function Footer() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <footer className={`${styles.footer} ${isDarkMode && styles.footerDM}`}>
      <div className={styles.footerContainer}>
        <section className={styles.socialSection}>
          <Link className={styles.logo} to={"/"}>
            Craftedia
          </Link>
          <div className={styles.socialIcons}>
            <Link target="_blank" to={"https://youtube.com"}>
              <img
                src={youtube}
                alt="icono de youtube"
                className={styles.socialIcon}
              />
            </Link>
            <Link target="_blank" to={"https://tiktok.com"}>
              <img
                src={tikTok}
                alt="icono de Tik Tok"
                className={styles.socialIcon}
              />
            </Link>
            <Link target="_blank" to={"https://www.patreon.com/HakksG"}>
              <img
                src={patreon}
                alt="icono de Patreon"
                className={styles.socialIcon}
              />
            </Link>
            <Link target="_blank" to={"https://x.com/H4kks"}>
              <img src={x} alt="icono de X" className={styles.socialIcon} />
            </Link>
          </div>
        </section>
        <section className={styles.infoSection}>
          <ul className={styles.infoLinks}>
            <li>
              <Link to={"/"}>Terms</Link>
            </li>
            <li>
              <Link to={"/"}>Privacy</Link>
            </li>
            <li>
              <Link to={"/"}>FAQ</Link>
            </li>
          </ul>
          <p>
            NOT AN OFFICIAL MINECRAFT SERVICE. NOT APPROVED BY OR ASSOCIATED
            WITH MOJANG OR MICROSOFT.
          </p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
