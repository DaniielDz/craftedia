import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";


function AdminPanel() {  
  const { logout } = useAuth();

  return (
    <div>
      <Link to={"/admin/resourcepacks"}>Resourcepacks</Link>
      <Link to={"/admin/resourcepacks"}>Portfolio</Link>
      <button onClick={logout}>Log out</button>
    </div>
  );
}

export default AdminPanel;
