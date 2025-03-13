import { useContext, useEffect, useState } from "react";
import AdminHeaderPage from "../../components/AdminHeaderPage";
import PostsList from "../../components/PostsList";
import Pagination from "../../components/Pagination";
import { getAll } from "../../api/postApi.js";
import { ThemeContext } from "../../context/ThemeContext.jsx";

function AdminResPacks() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { isDarkMode } = useContext(ThemeContext);

  async function fetchData() {
    const result = await getAll("respacks", currentPage);

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
        newPostLink={"/admin/resourcepacks/new-post"}
        title={"Resourcepacks"}
      />

      {posts.length > 0 ? (
        <PostsList posts={posts} onDelete={handleDelete} />
      ) : (
        <h2>Crea el primer post</h2>
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
