import { useContext } from "react";
import { Outlet } from "react-router";
import { ThemeContext } from "../context/ThemeContext";

function Main() {
  const { isDarkMode } = useContext(ThemeContext);
  
  const styles = {
    background: '#1B1A1D',
  }
  
  return (
    <main style={isDarkMode ? styles : {}}>
      <Outlet />
    </main>
  );
}

export default Main;
