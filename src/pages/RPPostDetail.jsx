import skin from "../assets/skin.png";
import icDescarga from "../assets/descarga.svg";
import styles from "../styles/RPPostDetail.module.css";
import ProgressBar from "../components/ProgressBar";
import Carousel from "../components/Carousel";
import TopImage from "../components/TopImagePost";
import Text from "../components/Text";
import { useEffect, useState } from "react";
import { getById } from "../api/postApi";
import { useLocation } from "react-router";

function PostDetail() {
  const [data, setData] = useState(null);
  const location = useLocation();
  const currentUrl = location.pathname;
  const postId = parseInt(currentUrl.split("/").pop());

  const getData = async () => {
    const res = await getById("respacks", postId);
    setData(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <TopImage />
      {data && (
        <section className={styles.sectionContain}>
          <div className={styles.textoUnoContainer}>
            <div className={styles.textoUnoText}>
              <h1 className={styles.title}>{data.title}</h1>
              {data && <Text txt={data.firstTxt} />}
            </div>
            <img
              src={data.images[0].image_url}
              alt={`Imágen de ${data.title}`}
            />
          </div>
          <div className={styles.gridContainer}>
            {data.images.length > 1 &&
              data.images
                .filter((_, index) => index >= 1 && index <= 4)
                .map((img, index) => (
                  <img
                    key={index}
                    src={img.image_url}
                    alt={`Imágen de ${data.title}`}
                    className={
                      index === 1 ? styles.mainImage : styles.thumbnail
                    }
                  />
                ))}
          </div>
          <div className={styles.textoDosContainer}>
            {data.images[4] && (
              <img src={data.images[4].image_url} alt="imagen del post" />
            )}
            <Text txt={data.secondTxt} />
          </div>
          <div className={styles.bottomInfoContainer}>
            <div className={styles.bottomLeftContainer}>
              <div className={styles.itemContainer}>
                <label htmlFor="progress">Project progress:</label>
                <ProgressBar
                  percentage={data.progress}
                  text={`${data.progress}%`}
                />
              </div>
              <div className={styles.itemContainer}>
                <span>Game version:</span>
                <span>{data.version}</span>
              </div>
              <div className={styles.itemContainer}>
                <span>Resolution:</span>
                <span>{data.resolution}</span>
              </div>
              <div className={styles.itemContainer}>
                <span>Optifine:</span>
                <span>{data.optifine}</span>
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
              <ProgressBar
                percentage={data.seconds}
                text={`${data.seconds}s`}
              />
            </div>
          </div>
          <div>
            <Carousel images={[skin, skin, skin, skin, skin, skin]} />
          </div>
        </section>
      )}
    </>
  );
}

export default PostDetail;
