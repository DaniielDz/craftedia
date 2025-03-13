import { Link } from "react-router";
import styles from "../styles/Pagination.module.css";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  };

  return (
    <nav className={`${styles.navigationContainer} ${isDarkMode && styles.darkMode}`}>
      {currentPage - 1 !== 0 && (
        <Link
          to={"#"}
          className={`${styles.pageLink}`}
          onClick={(e) => {
            e.preventDefault();
            handlePageChange(currentPage - 1);
          }}
        >
          {currentPage - 1}
        </Link>
      )}

      <Link
        to={"#"}
        className={`${styles.pageLink} ${styles.active} ${isDarkMode && styles.darkMode}`}
        onClick={(e) => {
          e.preventDefault();
          handlePageChange(currentPage);
        }}
      >
        {currentPage}
      </Link>

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
