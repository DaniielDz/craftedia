import skin from "../assets/skin.png";
import icDescarga from "../assets/descarga.svg";
import icDescargaDM from "../assets/icDescargaDM.svg";
import styles from "../styles/RPPostDetail.module.css";
import ProgressBar from "../components/ProgressBar";
import Carousel from "../components/Carousel";
import TopImage from "../components/TopImagePost";
import Text from "../components/Text";
import { useContext, useEffect, useRef, useState } from "react";
import { getAll, getById } from "../api/postApi";
import { useLocation } from "react-router";
import { ThemeContext } from "../context/ThemeContext";

function PostDetail() {
  const [data, setData] = useState(null);
  const [otherPosts, setOtherPosts] = useState(null);
  const location = useLocation();
  const currentUrl = location.pathname;
  const path = currentUrl.includes("java") ? "java" : "bedrock";
  const postId = parseInt(currentUrl.split("/").pop());
  const { isDarkMode } = useContext(ThemeContext);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const getData = async () => {
    let res = await getById("respacks", postId);
    const otherPostsRes = await getAll("respacks", "", path, "");
    const posts = otherPostsRes.data.filter((post) => post.id !== postId);
    setOtherPosts(posts);    

    res = {
      ...res,
      created_at: formatearFecha(res.created_at),
      updated_at: formatearFecha(res.updated_at),
    };
    setData(res);

    setSeconds(res.seconds);
  };

  function formatearFecha(fechaISO) {
    const fecha = new Date(fechaISO);

    const opciones = { day: "numeric", month: "long", year: "numeric" };

    return fecha.toLocaleDateString("es-ES", opciones);
  }

  const handleDownload = () => {
    if (data) {
      if (seconds === 0) {
        window.open(data.dwnFileLink, "_blank");
        return;
      }

      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            clearInterval(intervalRef.current);
            return 0;
          }
        });
      }, 1000);
    }
  };

  useEffect(() => {
    if (seconds === 0) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (data) {
        window.open(data.dwnFileLink, "_blank");
      }
    }
  }, [seconds, data]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    getData();
  }, [postId]);

  return (
    <>
      <TopImage />
      {data && (
        <section
          className={`${styles.sectionContain} ${
            isDarkMode && styles.darkMode
          }`}
        >
          <div className={styles.textoUnoContainer}>
            <div className={styles.textoUnoText}>
              <h1
                className={`${styles.title} ${isDarkMode && styles.darkMode}`}
              >
                {data.title}
              </h1>
              {data && <Text txt={data.firstTxt} />}
            </div>
            <img
              src={data.images[0].image_url}
              alt={`Imágen de ${data.title}`}
            />
          </div>
          <div className={styles.gridContainer}>
            {data.images.length > 1 &&
              data.images.map(
                (img, index) =>
                  img.image_order >= 2 &&
                  img.image_order <= 5 && (
                    <img
                      key={index}
                      src={img.image_url}
                      alt={`Imágen de ${data.title}`}
                      className={
                        index === 1 ? styles.mainImage : styles.thumbnail
                      }
                    />
                  )
              )}
          </div>
          <div className={styles.textoDosContainer}>
            {data.images[4] && (
              <img src={data.images[5].image_url} alt="imagen del post" />
            )}
            <Text txt={data.secondTxt} />
          </div>
          <div className={styles.extraImages}>
            {data.images.map(
              (img) =>
                img.image_order > 6 && (
                  <img key={img.image_order} src={img.image_url} alt="" />
                )
            )}
          </div>
          <div className={styles.bottomInfoContainer}>
            <div className={styles.bottomLeftContainer}>
              <div
                className={`${styles.itemContainer} ${
                  isDarkMode && styles.darkMode
                }`}
              >
                <label htmlFor="progress">Project progress:</label>
                <ProgressBar
                  percentage={data.progress}
                  text={`${data.progress}%`}
                />
              </div>
              <div
                className={`${styles.itemContainer} ${
                  isDarkMode && styles.darkMode
                }`}
              >
                <span>Game version:</span>
                <span>{data.version}</span>
              </div>
              <div
                className={`${styles.itemContainer} ${
                  isDarkMode && styles.darkMode
                }`}
              >
                <span>Resolution:</span>
                <span>{data.resolution}</span>
              </div>
              <div
                className={`${styles.itemContainer} ${
                  isDarkMode && styles.darkMode
                }`}
              >
                <span>Optifine:</span>
                <span>{data.optifine}</span>
              </div>
              <div
                className={`${styles.itemContainer} ${
                  isDarkMode && styles.darkMode
                }`}
              >
                <span>Release date:</span>
                <span>{data && data.created_at}</span>
              </div>
              <div
                className={`${styles.itemContainer} ${
                  isDarkMode && styles.darkMode
                }`}
              >
                <span>Last update:</span>
                <span>{data && data.updated_at}</span>
              </div>
            </div>
            <div>
              <button
                className={`${styles.btnDownload} ${
                  isDarkMode && styles.darkMode
                }`}
                onClick={handleDownload}
              >
                Download
                <img
                  src={`${!isDarkMode ? icDescarga : icDescargaDM}`}
                  alt="↓"
                />
              </button>
              <ProgressBar percentage={seconds} text={`${seconds}s`} />
            </div>
          </div>
          <div>{otherPosts && <Carousel posts={otherPosts} postType={"resourcepacks"} />}</div>
        </section>
      )}
    </>
  );
}

export default PostDetail;
