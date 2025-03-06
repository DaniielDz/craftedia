import AdminHeaderPage from "../../components/AdminHeaderPage";
import PostsList from "../../components/PostsList";

function AdminPortfolio() {
  return (
    <>
      <AdminHeaderPage
        newPostLink={"/admin/portfolio/new-post"}
        title={"Portfolio"}
      />
      <PostsList />
    </>
  );
}

export default AdminPortfolio;
