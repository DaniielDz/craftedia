import { Link } from "react-router";
import styles from "../../styles/AdminPanel.module.css";
import useAuth from "../../hooks/useAuth";


function AdminPanel() {  
  const { logout } = useAuth();

  return (
    <div className={styles.container}>
      <Link className={styles.button} to={"/admin/resourcepacks"}>Resourcepacks</Link>
      <Link className={styles.button} to={"/admin/portfolio"}>Portfolio</Link>
      <button className={styles.button} onClick={logout}>Log out</button>
    </div>
  );
}

export default AdminPanel;
