import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Store from "../pages/Store";
import CustomBuilds from "../pages/CustomBuilds";
import AdminDashboard from "../Pages/AdminDashboard";
import Checkout from "../pages/Checkout";
import ProductDetails from "../components/product/productDetails";

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/custom-builds" element={<CustomBuilds />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
