import { useState } from "react";
import styles from "../../src/styles/AdminForm.module.css";
import { Link, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

function AdminForm({ isLogin }) {
  const { login, singUp } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null)
    try {
      if (isLogin) {
        await login(email, password);
      }
      else {
        await singUp(email, password);
      }

      navigate("/admin/panel");
    } catch (error) {
      setError(error.message);
      console.error("Error en autenticación", error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {error && <div className={styles.error}>{error}</div>}
      <input
        className={styles.input}
        type="text"
        value={email}
        placeholder="Email"
        required
        onChange={(e) => setEmail(e.target.value)}
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
