import { useState } from "react";
import styles from "../../src/styles/AdminForm.module.css";
import { Link, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

function AdminForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/admin/panel");
    } catch (error) {
      console.log(error.message);
      
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
      <button type="submit" className={styles.button}>Log in</button>
      <Link to={"/admin/singUp"}>Crear una cuenta</Link>
    </form>
  );
}

export default AdminForm;
