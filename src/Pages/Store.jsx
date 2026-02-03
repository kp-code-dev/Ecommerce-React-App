import { useState } from "react";
import { keyboardsData } from "../Data/keyboardData";
import { mouseData } from "../Data/mouseData";
import ProductCard from "../Components/Product-Card";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Heading from "../Components/Heading";
import "./Styles/Store.css";

function Store() {
  const [wishlist, setWishlist] = useState([]);
  const [keyboards] = useState(keyboardsData);
  const [mouses] = useState(mouseData);

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
      <div className="store-container"></div>
      <div className="section-header">
        <Heading title="Keyboards" />
      </div>
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
      <div className="section-header">
        <Heading title="Mouses" />
      </div>
      <div className="products">
        {mouses.map((mouse) => (
          <ProductCard
            key={mouse.id}
            product={mouse}
            toggleWishlist={toggleWishlist}
            wishlist={wishlist}
            name={mouse.name}
            brand={mouse.brand}
            price={mouse.price}
            originalPrice={mouse.originalPrice}
            discount={mouse.discount}
            inStock={mouse.inStock}
            image={mouse.image}
            bestSeller={mouse.bestSeller}
            rating={mouse.rating}
            reviews={mouse.reviews}
            features={mouse.features}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Store;
