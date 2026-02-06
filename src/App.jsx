import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import CustomBuilds from "./Pages/CustomBuilds";
import Click from "./Components/Click";
import { Change } from "./Components/Change";
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
    <>
      <div className="bg-grid" />
      <CartContextProvider>
        <BrowserRouter>
          <main className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/custom-builds" element={<CustomBuilds />} />
            </Routes>
          </main>
        </BrowserRouter>
        <Change.Provider value={{ theme, toggleTheme }}>
          <Click />
        </Change.Provider>
      </CartContextProvider>
    </>
  );
}

export default App;
