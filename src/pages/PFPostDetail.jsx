import styles from "../styles/PFPostDetail.module.css";
import TopImage from "../components/TopImagePost";
import Carousel from "../components/Carousel";
import Text from "../components/Text";
import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { getAll, getById } from "../api/postApi";
import { ThemeContext } from "../context/ThemeContext";

function PFPostDetail() {
  const { isDarkMode } = useContext(ThemeContext);
  const [data, setData] = useState({});
  const [otherPosts, setOtherPosts] = useState([]);
  const [imagesContainer, setImagesContainer] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const path = location.pathname.includes("2d") ? "2d" : "3d";

  const getPost = async () => {
    const response = await getById("portfolio", id);
    const resOtherPosts = await getAll("portfolio", "", path, "");
    const posts = resOtherPosts.data.filter((post) => post.id !== parseInt(id));

    setData(response);
    setOtherPosts(posts);

    const chunkSize = 3;
    const tempImages = [];
    for (let i = 0; i < response.images.length; i += chunkSize) {
      tempImages.push(response.images.slice(i, i + chunkSize));
    }
    setImagesContainer(tempImages);
  };

  useEffect(() => {
    getPost();
  }, [id]);

  return (
    <>
      <TopImage />

      <section className={`${styles.section} ${isDarkMode && styles.darkMode}`}>
        <div className={styles.imagesContainer}>
          {imagesContainer &&
            imagesContainer.length > 0 &&
            imagesContainer.map((images, index) => (
              <div key={index} className={styles.images}>
                {images.map((img) => (
                  <img
                    key={img.image_order}
                    src={img.image_url}
                    alt={"imagen de post"}
                  />
                ))}
              </div>
            ))}
          {data.embed && (
            <div
              className={styles.embedContainer}
              dangerouslySetInnerHTML={{ __html: data.embed }}
            />
          )}
        </div>
        <div
          className={`${styles.textContainer} ${isDarkMode && styles.darkMode}`}
        >
          <h1>{data.title}</h1>
          <Text txt={data.text} />
        </div>
      </section>
      <section className={styles.sectionCarousel}>
        {otherPosts && <Carousel posts={otherPosts} postType={"portfolio"} />}
      </section>
    </>
  );
}

export default PFPostDetail;
