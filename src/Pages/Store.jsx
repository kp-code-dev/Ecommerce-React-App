import { useState } from "react";
import {
  FaRegHeart,
  FaHeart,
  FaStar,
  FaBolt,
  FaWifi,
  FaMouse,
  FaKeyboard,
  FaCheckCircle,
} from "react-icons/fa";
import { PiEmpty } from "react-icons/pi";
import { keyboardsData } from "../Data/keyboardData";
import ProductCard from "../Components/Product-Card";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Styles/Store.css";

function Store() {
  const [wishlist, setWishlist] = useState([]);
  const [keyboards] = useState(keyboardsData);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  };
  return (
    <>
      <Header />
      <div className="products">
        {keyboards.map((keyboard) => (
          <ProductCard
            key={keyboard.id}
            product={keyboard}
            toggleWishlist={toggleWishlist}
            wishlist={wishlist}
            name={keyboard.name}
            brand={keyboard.brand}
            price={keyboard.price}
            originalPrice={keyboard.originalPrice}
            discount={keyboard.discount}
            inStock={keyboard.inStock}
            image={keyboard.image}
            bestSeller={keyboard.bestSeller}
            rating={keyboard.rating}
            reviews={keyboard.reviews}
            features={keyboard.features}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Store;
