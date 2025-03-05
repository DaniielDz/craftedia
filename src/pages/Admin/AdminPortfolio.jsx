import AdminHeaderPage from "../../components/AdminHeaderPage";

function AdminPortfolio() {
  return (
    <>
      <AdminHeaderPage
        newPostLink={"/admin/portfolio/new-post"}
        title={"Portfolio"}
      />
    </>
  );
}

export default AdminPortfolio;
