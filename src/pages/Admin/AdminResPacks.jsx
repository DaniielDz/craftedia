import AdminHeaderPage from "../../components/AdminHeaderPage";
import PostItem from "../../components/PostItem";

function AdminResPacks() {
  return (
    <>
      <AdminHeaderPage
        newPostLink={"/admin/resourcepacks/new-post"}
        title={"Resourcepacks"}
      />
      {/* style={{padding:"0 1rem", display:"grid", gridTemplateColumns: "repeat(2, 1fr)", gap:"2rem"}} */}
      <div style={{padding: "0 2rem"}}>
        <PostItem />
      </div>
    </>
  );
}

export default AdminResPacks;
