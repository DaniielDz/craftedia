import { useState, useEffect } from "react";
import styles  from "../styles/Loader.module.css"
import logo from "../assets/logo.svg"
import ProgressBar from "./ProgressBar";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 290);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div id="loader" className={styles.loader}>
      <div className={styles.loaderContent}>
        <img src={logo} alt="Cargando..." />
        <div className={styles.progress}>
          <ProgressBar percentage={progress} text={""} />
        </div>
      </div>
    </div>
  );
};

export default Loader;