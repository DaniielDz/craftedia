import styles from "../styles/Text.module.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Text({ txt }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`${styles.text} ${isDarkMode && styles.darkMode}`}>
      <div dangerouslySetInnerHTML={{ __html: txt }} />
    </div>
  );
}

export default Text;
