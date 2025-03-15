import { Link, useLocation } from "react-router";
import bgImg from "../assets/roundedBg.png";
import styles from "../styles/InnerPage.module.css";
import { useContext, useEffect, useState } from "react";
import { getAll } from "../api/postApi";
import Pagination from "../components/Pagination";
import { ThemeContext } from "../context/ThemeContext";
import LoadingPosts from "../components/LoadingPosts";

function InnerPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();
  const { isDarkMode } = useContext(ThemeContext);

  const resPacks = location.pathname.includes("resourcepacks");
  const javaPage = location.pathname.includes("java");
  const page2D = location.pathname.includes("2d");
  const path = resPacks
    ? javaPage
      ? "java"
      : "bedrock"
    : page2D
    ? "2d"
    : "3d";

  async function fetchData() {
    setLoading(true)
    try {
      const type = resPacks ? "respacks" : "portfolio";
      const result = await getAll(type, currentPage, path);
      setPosts(result.data);
      setTotalPages(result.totalPages);
    } catch (error) {
      setPosts([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [currentPage, path]);

  useEffect(() => {
    setCurrentPage(1);
  }, [path]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={styles.container}>
      <section className={styles.imgSection}>
        <img src={bgImg} alt="Imagen de fondo" />
        <div className={styles.titleContainer}>
          <h1>
            {resPacks
              ? javaPage
                ? "Java Edition"
                : "Bedrock Edition"
              : page2D
              ? "2D"
              : "3D"}
          </h1>
          <h2>{resPacks ? "Resourcepacks" : "Portfolio"}</h2>
        </div>
      </section>
      <section
        className={`${styles.gridSection} ${isDarkMode && styles.darkMode}`}
      >
        {loading ? ( 
          <LoadingPosts text={"posts"}/>
        ) : posts.length > 0 ? ( 
          posts.map((post) => (
            <Link
              key={post.id}
              to={`${resPacks ? "/resourcepacks/" : "/portfolio/"}${
                post.path
              }/${post.id}`}
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
          ))
        ) : (
          <h2>No se encontraron posts</h2>
        )}
      </section>
      {posts.length > 0 && !loading && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default InnerPage;
