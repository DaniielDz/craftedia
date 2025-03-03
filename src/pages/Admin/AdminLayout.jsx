import { Outlet } from "react-router";
import styles from "../../styles/AdminLayout.module.css";

function AdminLayout() {

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Panel de administrador</h1>
      <Outlet />
    </section>
  );
}

export default AdminLayout;