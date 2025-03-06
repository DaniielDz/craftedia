import AdminHeaderPage from "../../components/AdminHeaderPage";
import PostsList from "../../components/PostsList";

function AdminResPacks() {
  return (
    <>
      <AdminHeaderPage
        newPostLink={"/admin/resourcepacks/new-post"}
        title={"Resourcepacks"}
      />
      <PostsList />
    </>
  );
}

export default AdminResPacks;
