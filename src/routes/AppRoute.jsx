import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Store from "../pages/Store";
import CustomBuilds from "../pages/CustomBuilds";
import AdminDashboard from "../pages/AdminDashboard";
import Checkout from "../pages/Checkout";
import ProductDetails from "../components/product/productDetails";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import FAQs from "../pages/FAQs";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ReturnPolicy from "../pages/ReturnPolicy";
import TermofUse from "../pages/TermofUse";
import BuildPC from "../pages/BuildPC";
import MyOrders from "../pages/MyOrders";
import ManageAccount from "../pages/ManageAccount";
import Profile from "../pages/Profile";

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
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/term-of-use" element={<TermofUse />} />
        <Route path="/build-pc" element={<BuildPC />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/manage-account" element={<ManageAccount />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
