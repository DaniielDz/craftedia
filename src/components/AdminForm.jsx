import { useContext, useState } from "react";
import styles from "../../src/styles/AdminForm.module.css";
import { Link, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import {ThemeContext} from "../context/ThemeContext"

function AdminForm({ isLogin }) {
  const { login, singUp } = useAuth();
  const navigate = useNavigate();
  const {isDarkMode} = useContext(ThemeContext)


  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null)
    if(password.length < 6){
      setError("La contraseña debe tener al menos 6 caracteres")
      return;
    }

    try {
      if (isLogin) {
        await login(username, password);
      }
      else {
        await singUp(username, password);
      }

      navigate("/admin/panel");
    } catch (error) {
      setError(error.message);
      console.error("Error en autenticación", error);
    }
  };

  return (
    <form className={`${styles.form} ${isDarkMode && styles.darkMode}`} onSubmit={handleSubmit}>
      {error && <div className={styles.error}>{error}</div>}
      <input
        className={styles.input}
        type="text"
        value={username}
        placeholder="username"
        required
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        className={styles.input}
        type="password"
        value={password}
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className={styles.button}>
        {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
      </button>
      <Link to={isLogin ? "/admin/singup" : "/admin/login"} className={styles.link}>
      {
        isLogin ? "Crear Cuenta" : "Iniciar Sesión"
      }
      </Link>
    </form>
  );
}

export default AdminForm;
