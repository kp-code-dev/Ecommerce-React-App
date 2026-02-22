import { useState, useEffect } from "react";
import { ThemeContext } from "./context/themeContext";
import { CartContextProvider } from "./context/cartContext";
import AppRoute from "./routes/AppRoute";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="bg-grid" />

      <CartContextProvider>
        <main className="app-content">
          <AppRoute />
        </main>
      </CartContextProvider>
    </ThemeContext.Provider>
  );
}

export default App;
