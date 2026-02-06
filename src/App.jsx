import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/" Component={Services} />
          <Route path="/" Component={ContactUs} />
          <Route path="/" Component={AboutUs} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
