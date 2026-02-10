import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import CustomBuilds from "./Pages/CustomBuilds";
import AdminDashboard from "./pages/AdminDashboard";
import { ThemeContext } from "./Components/ThemeContext";
import { CartContextProvider } from "./Context/CartContext";
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
        <BrowserRouter>
          <main className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/custom-builds" element={<CustomBuilds />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </main>
        </BrowserRouter>
      </CartContextProvider>
    </ThemeContext.Provider>
  );
}

export default App;
