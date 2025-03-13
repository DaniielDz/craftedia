import { useContext, useEffect, useState } from "react";
import AdminHeaderPage from "../../components/AdminHeaderPage";
import PostsList from "../../components/PostsList";
import { getAll } from "../../api/postApi";
import Pagination from "../../components/Pagination";
import { ThemeContext } from "../../context/ThemeContext";

function AdminPortfolio() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const {isDarkMode} = useContext(ThemeContext)

  async function fetchData() {
    const result = await getAll("portfolio", currentPage);
    setPosts(result.data);
    setTotalPages(result.totalPages);
  }

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleDelete = (deletedPostId) => {
    setPosts((prevPosts) =>
      prevPosts.filter((post) => post.id !== deletedPostId)
    );
  };

  return (
    <>
      <AdminHeaderPage
        newPostLink={"/admin/portfolio/new-post"}
        title={"Portfolio"}
      />
      {posts.length > 0 ? (
        <PostsList posts={posts} onDelete={handleDelete} />
      ) : (
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.4rem",
            color: isDarkMode ? "#F9F9F9" : "#473579",
            marginTop: "2rem",
            fontWeight: "bolder",
            height: "32.1rem",
          }}
        >
          Crea el primer post
        </h2>
      )}

      {totalPages > 1 && (
        <div style={{ marginTop: "10%", marginLeft: "10%" }}>
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            totalPages={totalPages}
          />
        </div>
      )}
    </>
  );
}

export default AdminPortfolio;
