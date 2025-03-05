import searchIC from "../assets/searchIC.svg";

function Search({ styles }) {
  return (
    <form className={styles.search}>
      <input className={styles.inpSearch} type="text" placeholder="Buscar" />
      <button className={styles.btnSearch} type="submit">
        <img className={styles.icSearch} src={searchIC} alt="Search" />
      </button>
    </form>
  );
}

export default Search;
