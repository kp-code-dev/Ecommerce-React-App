import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import "../css/appleToggle.css";

export default function AppleToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`apple-toggle ${theme === "dark" ? "on" : ""}`}
      onClick={toggleTheme}
    >
      <div className="apple-knob">
        {theme === "dark" ? (
          <FaMoon className="icon-moon" />
        ) : (
          <FaSun className="icon-sun" />
        )}
      </div>
    </div>
  );
}
