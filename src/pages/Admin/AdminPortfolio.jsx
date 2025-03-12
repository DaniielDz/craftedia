import { useEffect, useState } from "react";
import AdminHeaderPage from "../../components/AdminHeaderPage";
import PostsList from "../../components/PostsList";
import { getAll } from "../../api/postApi";
import Pagination from "../../components/Pagination";

function AdminPortfolio() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== deletedPostId));
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

export default AdminPortfolio;
