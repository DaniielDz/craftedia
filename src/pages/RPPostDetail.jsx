import skin from "../assets/skin.png";
import icDescarga from "../assets/descarga.svg";
import styles from "../styles/RPPostDetail.module.css";
import ProgressBar from "../components/ProgressBar";
import Carousel from "../components/Carousel";
import TopImage from "../components/TopImagePost";
import Text from "../components/Text";
import { useEffect, useState } from "react";
import { getById } from "../api/postApi";

function PostDetail() {
  const [data, setData] = useState(null);

  const getData = async () => {
    const res = await getById(19);

    setData(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <TopImage />
      <section className={styles.sectionContain}>
        <div className={styles.textoUnoContainer}>
          <div className={styles.textoUnoText}>
            <h1 className={styles.title}>Título del proyecto</h1>
            {data && <Text txt={data.content} />}
          </div>
          <img src={skin} alt="imagen del post" />
        </div>
        <div className={styles.gridContainer}>
          <img src={skin} alt="imagen del post" className={styles.mainImage} />
          <img src={skin} alt="imagen del post" className={styles.thumbnail} />
          <img src={skin} alt="imagen del post" className={styles.thumbnail} />
          <img src={skin} alt="imagen del post" className={styles.thumbnail} />
        </div>
        <div className={styles.textoDosContainer}>
          <img src={skin} alt="imagen del post" />
          <Text />
        </div>
        <div className={styles.bottomInfoContainer}>
          <div className={styles.bottomLeftContainer}>
            <div className={styles.itemContainer}>
              <label htmlFor="progress">Project progress:</label>
              <ProgressBar percentage={35} text={"35%"} />
            </div>
            <div className={styles.itemContainer}>
              <span>Game version:</span>
              <span>1.21.1</span>
            </div>
            <div className={styles.itemContainer}>
              <span>Resolution:</span>
              <span>16px 16px</span>
            </div>
            <div className={styles.itemContainer}>
              <span>Optifine:</span>
              <span>no/ yes / optional</span>
            </div>
            <div className={styles.itemContainer}>
              <span>Release date:</span>
              <span>Fecha automatica</span>
            </div>
            <div className={styles.itemContainer}>
              <span>Last update:</span>
              <span>Fecha automatica</span>
            </div>
          </div>
          <div>
            <button className={styles.btnDownload}>
              Download
              <img src={icDescarga} alt="icono de descarga" />
            </button>
            <ProgressBar percentage={40} text={"40s"} />
          </div>
        </div>
        <div>
          <Carousel images={[skin, skin, skin, skin, skin, skin]} />
        </div>
      </section>
    </>
  );
}

export default PostDetail;
