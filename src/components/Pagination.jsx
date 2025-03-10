import { Link } from "react-router";
import styles from "../styles/Pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  };

  return (
    <nav className={styles.navigationContainer}>
      {/* Pagina anterior */}
      { currentPage - 1 !== 0 &&(<Link
        to={"#"}
        className={`${styles.pageLink}`}
        onClick={(e) => {
          e.preventDefault();
          handlePageChange(currentPage - 1);
        }}
      >
        {currentPage - 1 }
      </Link>)}

      {/* Página actual */}
      <Link
        to={"#"}
        className={`${styles.pageLink} ${styles.active}`}
        onClick={(e) => {
          e.preventDefault();
          handlePageChange(currentPage);
        }}
      >
        {currentPage}
      </Link>

      {/* Página siguiente */}
      {currentPage < totalPages && (
        <Link
          to={"#"}
          className={styles.pageLink}
          onClick={(e) => {
            e.preventDefault();
            handlePageChange(currentPage + 1);
          }}
        >
          {currentPage + 1}
        </Link>
      )}

      {currentPage + 1 < totalPages - 1 && <span>...</span>}

      {/* Última página */}
      {currentPage + 1 < totalPages && (
        <Link
          to={"#"}
          className={styles.pageLink}
          onClick={(e) => {
            e.preventDefault();
            handlePageChange(totalPages);
          }}
        >
          {totalPages}
        </Link>
      )}
    </nav>
  );
};

export default Pagination;
