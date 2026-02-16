import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import CustomBuilds from "./pages/CustomBuilds";
import AdminDashboard from "./pages/AdminDashboard";
import Checkout from "./Pages/Checkout";
import { ThemeContext } from "./context/ThemeContext";
import { CartContextProvider } from "./context/CartContext";
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
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
        </BrowserRouter>
      </CartContextProvider>
    </ThemeContext.Provider>
  );
}

export default App;
