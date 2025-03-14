import { useState } from "react";
import searchIC from "../assets/searchIC.svg";
import { getAll } from "../api/postApi";
import { useLocation, useNavigate } from "react-router";

function Search({ styles }) {
  const [search, setSearch] = useState("")
  const location = useLocation()
  const isRespacks = location.pathname.includes("resourcepacks")
  const pathname = isRespacks ? "resourcepacks" : "portfolio"
  const type = isRespacks ? "respacks" : "portfolio"
  const navigation = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    navigation(`admin/${pathname}?title=${search}`)    
    // const res = await getAll(type, "", "", search )    
  }

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input className={styles.inpSearch} type="text" placeholder="Buscar" onInput={(e) => setSearch(e.target.value)}/>
      <button className={styles.btnSearch} type="submit">
        <img className={styles.icSearch} src={searchIC} alt="Search" />
      </button>
    </form>
  );
}

export default Search;
