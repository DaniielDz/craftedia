import styles from "../styles/PFPostDetail.module.css";
import TopImage from "../components/TopImagePost";
import Carousel from "../components/Carousel";
import skin from "../assets/skin.png";
import Text from "../components/Text";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getById } from "../api/postApi";

function PFPostDetail() {
  const [data, setData] = useState({});
  const [imagesContainer, setImagesContainer] = useState([]);
  const { id } = useParams();

  const getPost = async () => {
    const response = await getById("portfolio", id);
    setData(response);
    const chunkSize = 3;
    const tempImages = [];
    for (let i = 0; i < response.images.length; i += chunkSize) {
      tempImages.push(response.images.slice(i, i + chunkSize));
    }
    setImagesContainer(tempImages);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <TopImage />

      <section className={styles.section}>
        <div className={styles.imagesContainer}>
          {imagesContainer &&
            imagesContainer.length > 0 &&
            imagesContainer.map((images, index) => (
              <div key={index} className={styles.images}>
                {images.map((img) => (
                  <img key={img.image_order} src={img.image_url} alt={skin} />
                ))}
              </div>
            ))}
        </div>
        <div className={styles.textContainer}>
          <h1>{data.title}</h1>
          <Text txt={data.text} />
        </div>
      </section>
      <section className={styles.sectionCarousel}>
        <Carousel images={[skin, skin, skin, skin, skin]} />
      </section>
    </>
  );
}

export default PFPostDetail;
