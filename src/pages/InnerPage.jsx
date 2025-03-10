import { Link } from "react-router";
import bgImg from "../assets/roundedBg.png";
import styles from "../styles/InnerPage.module.css";
import { useEffect, useState } from "react";
import { getAll } from "../api/postApi";
import Pagination from "../components/Pagination";

function InnerPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  async function fetchData() {
    const result = await getAll(currentPage);
    setPosts(result.data);
    setTotalPages(result.totalPages);
  }

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={styles.container}>
      <section className={styles.imgSection}>
        <img src={bgImg} alt="Imagen de fondo" />
        <div className={styles.titleContainer}>
          <h1>Java edition</h1>
          <h2>resourcepacks</h2>
        </div>
      </section>
      <section className={styles.gridSection}>
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/resourcepacks/java/${post.id}`}
            className={styles.imageContainer}
          >
            <img
              src={post.images[0]}
              alt="Portada del post"
              className={styles.gridImage}
            />
            <div className={styles.overlayText}>
              <p>{post.title}</p>
              <span>{post.tags}</span>
            </div>
          </Link>
        ))}
      </section>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default InnerPage;
