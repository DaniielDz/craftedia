import { useContext, useEffect, useState } from "react";
import AdminHeaderPage from "../../components/AdminHeaderPage";
import PostsList from "../../components/PostsList";
import Pagination from "../../components/Pagination";
import { getAll } from "../../api/postApi.js";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import { useLocation } from "react-router";
import LoadingPosts from "../../components/LoadingPosts";

function AdminResPacks() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { isDarkMode } = useContext(ThemeContext);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const title = query.get("title") || "";
  async function fetchData() {
    try {
      setLoading(true);
      const result = await getAll("respacks", currentPage, "", title);

      setPosts(result.data);
      setTotalPages(result.totalPages);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [currentPage, title]);

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
        newPostLink={"/admin/resourcepacks/new-post"}
        title={"Resourcepacks"}
      />

      {loading ? (
        <LoadingPosts text={"posts"} />
      ) : posts.length > 0 ? (
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

export default AdminResPacks;
