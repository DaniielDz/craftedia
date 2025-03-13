import { useContext } from "react";
import TopImageInfo from "../components/TopImageInfo";
import styles from "../styles/TermsPage.module.css";
import {ThemeContext} from "../context/ThemeContext"


function TermsPage() {
  const textList = [
    'The term "we" refers to the owner and author of the website (HakksG).',
    'The term "material" refers to the published resource packs".',
    "These terms of use take precedence over any documents provided within the archives.",
    "The content of this website is subject to change without notice.",
    "You agree that the information and materials provided may be inaccurate or contain errors (within the limits of the law).",
    "We disclaim responsibility for damage caused to your device by improper installation or any reason.",
    "This website may contain links to other websites, however we have no liability associated with such sites.",
    "Redistribution and monetization of the material without the consent of the author is prohibited.",
    "You can only monetize the content by creating videos, live broadcasts, or posting on social media as long as you publicly share the author's data and the original link of the material.",
    "Any activity that the author considers inappropriate is prohibited.",
    "Any activity that affects the distribution provided by this website without the consent or permission of the author is prohibited.",
    "This website is the original distributor, however these projects can be found on other sites, always published by the original author.",
    "It is prohibited to modify and redistribute the material provided on this website without the prior permission of the author, you can only do it for personal use.",
  ];
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <TopImageInfo />
      <section className={`${styles.termsSection} ${isDarkMode && styles.darkMode}`}>
        <h1 className={styles.title}>Terms of use</h1>
        <p className={styles.text}>
          If you continue using this website, you agree to the following terms
          of use. If you disagree with any of the following points, please do
          not use the website.
        </p>
        <p className={styles.text}>
          Welcome to Craftedia.com, all material provided on this web site is
          subject to the following terms and conditions. The author (HakksG)
          reserves the right to modify and revise the following terms of use at
          any time.
        </p>
        <ul className={styles.list}>
          {textList.map((text, index) => (
            <li className={styles.listItem} key={index}>
              {text}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default TermsPage;
