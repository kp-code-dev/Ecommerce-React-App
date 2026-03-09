import { useState, useEffect } from "react";
import { ThemeContext } from "./context/themeContext";
import { CartContextProvider } from "./context/cartContext";
import { AuthProvider } from "./context/authContext";
import AppRoute from "./routes/AppRoute";
import AppleToggle from "./components/ui/appleToggle";
import { FaPalette } from "react-icons/fa";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="bg-grid" />

      <AuthProvider>
        <CartContextProvider>
          <div className="theme-switch-container">
            <div className="theme-icon-wrapper">
              <FaPalette size={20} />
            </div>
            <div className="theme-toggle-wrapper">
              <AppleToggle />
            </div>
          </div>

          <main className="app-content">
            <AppRoute />
          </main>
        </CartContextProvider>
      </AuthProvider>
    </ThemeContext.Provider>
  );
}

export default App;
