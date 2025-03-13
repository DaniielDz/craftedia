import { Link } from "react-router";
import styles from "../../styles/AdminPanel.module.css";
import useAuth from "../../hooks/useAuth";
import { useContext } from "react";
import {ThemeContext} from "../../context/ThemeContext"

function AdminPanel() {  
  const { logout } = useAuth();
  const {isDarkMode} = useContext(ThemeContext)

  return (

    <div className={styles.container}>
      <Link className={`${styles.button} ${isDarkMode && styles.darkMode}`} to={"/admin/resourcepacks"}>Resourcepacks</Link>
      <Link className={`${styles.button} ${isDarkMode && styles.darkMode}`} to={"/admin/portfolio"}>Portfolio</Link>
      <button className={`${styles.button} ${isDarkMode && styles.darkMode}`} onClick={logout}>Log out</button>
    </div>
  );
}

export default AdminPanel;
