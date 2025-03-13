import { Outlet } from "react-router";
import styles from "../../styles/AdminLayout.module.css";
import { useContext } from "react";
import {ThemeContext} from "../../context/ThemeContext"

function AdminLayout() {
  const { isDarkMode } = useContext(ThemeContext);


  return (
    <section className={`${styles.section} ${isDarkMode && styles.darkMode}`}>
      <h1 className={styles.title}>Panel de administrador</h1>
      <Outlet />
    </section>
  );
}

export default AdminLayout;