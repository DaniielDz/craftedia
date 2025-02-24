import { Link } from "react-router";
import logo from "../assets/logo.svg";
import bars from "../assets/bars.svg";
import close from "../assets/close.svg";
import discord from "../assets/discord.svg";
import patreon from "../assets/patreon.svg";
import x from "../assets/x.svg";
import luna from "../assets/luna.svg";
import sol from "../assets/sol.svg";
import styles from "../styles/Header.module.css";
import { useContext, useState } from "react";
import { ScrollContext } from "../ScrollContext";

function Header() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled } = useContext(ScrollContext);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to={"/"}>
          <img
            src={logo}
            alt="craftedia logo"
            className={`${styles.logo} ${
              isScrolled ? styles.logoScrolled : ""
            }`}
          />
        </Link>
        <button
          className={styles.barsBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={isMenuOpen ? close : bars} />
        </button>
      </div>
      <div
        className={`${styles.headerContainer} ${
          isMenuOpen ? styles.headerContainerActive : ""
        }`}
      >
        <div className={styles.navSection}>
          <div className={styles.navGroup}>
            <span className={styles.navTitle}>Resourcepacks</span>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link to={"/resourcepacks/java"} className={styles.navLink}>
                  Java
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to={"/resourcepacks/bedrock"} className={styles.navLink}>
                  Bedrock
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to={"/resourcepacks/faq"} className={styles.navLink}>
                  FAQ
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  to={"/resourcepacks/terms-of-use"}
                  className={styles.navLink}
                >
                  Terms of use
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.navGroup}>
            <span className={styles.navTitle}>Portfolio</span>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link to={"/portfolio/2d"} className={styles.navLink}>
                  2D
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to={"/portfolio/3d"} className={styles.navLink}>
                  3D
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.socialSection}>
          <div className={styles.socialIcons}>
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
            <Link target="_blank" to={"https://discord.com/invite/5GChmS4yEw"}>
              <img
                src={discord}
                alt="icono de Discord"
                className={styles.socialIcon}
              />
            </Link>
          </div>
          <div className={styles.themeToggle}>
            <img src={sol} alt="icono de sol" className={styles.themeIcon} />
            <div className={styles.switchContainer}>
              <input
                type="checkbox"
                id="switch"
                className={styles.switch}
                onClick={() => setIsSwitchOn(!isSwitchOn)}
              />
              <label
                htmlFor="switch"
                className={`${styles.switchLabel} ${
                  isSwitchOn ? styles.swOnDarkMode : styles.swOnLightMode
                }`}
              ></label>
            </div>
            <img src={luna} alt="icono de luna" className={styles.themeIcon} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
