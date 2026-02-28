import { useState } from "react";
import ProductCard from "../components/product/productCard";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Heading from "../components/ui/heading";
import { keyboardsData } from "../data/keyboardData";
import { mouseData } from "../data/mouseData";
import { cabinetData } from "../data/cabinetData";
import processorData from "../data/processorData";
import graphicData from "../data/graphicData";
import "./css/Store.css";

function Store() {
  const [wishlist, setWishlist] = useState([]);
  const [keyboards] = useState(keyboardsData);
  const [mouses] = useState(mouseData);
  const [cabinets] = useState(cabinetData);
  const [processors] = useState(processorData);
  const [graphics] = useState(graphicData);
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
      <div className="store-container">
        <div className="section-header">
          <Heading title="Keyboards" />
        </div>
        <div className="products">
          {keyboards.map((keyboard) => (
            <ProductCard
              key={keyboard.id}
              product={{ ...keyboard, id: `keyboard-${keyboard.id}` }}
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
              product={{ ...mouse, id: `mouse-${mouse.id}` }}
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
        <div className="section-header">
          <Heading title="Cabinets" />
        </div>
        <div className="products">
          {cabinets.map((cabinet) => (
            <ProductCard
              key={cabinet.id}
              product={{ ...cabinet, id: `cabinet-${cabinet.id}` }}
              toggleWishlist={toggleWishlist}
              wishlist={wishlist}
              name={cabinet.name}
              brand={cabinet.brand}
              price={cabinet.price}
              originalPrice={cabinet.originalPrice}
              discount={cabinet.discount}
              inStock={cabinet.inStock}
              image={cabinet.image}
              bestSeller={cabinet.bestSeller}
              rating={cabinet.rating}
              reviews={cabinet.reviews}
              features={cabinet.features}
            />
          ))}
        </div>
        <div className="section-header">
          <Heading title="Processors" />
        </div>
        <div className="products">
          {processors.map((processor) => (
            <ProductCard
              key={processor.id}
              product={{ ...processor, id: `processor-${processor.id}` }}
              toggleWishlist={toggleWishlist}
              wishlist={wishlist}
              name={processor.name}
              brand={processor.brand}
              price={processor.price}
              originalPrice={processor.originalPrice}
              discount={processor.discount}
              inStock={processor.inStock}
              image={processor.image}
              bestSeller={processor.bestSeller}
              rating={processor.rating}
              reviews={processor.reviews}
              features={processor.feature}
            />
          ))}
        </div>
        <div className="section-header">
          <Heading title="Graphics Cards" />
        </div>
        <div className="products">
          {graphics.map((graphic) => (
            <ProductCard
              key={graphic.id}
              product={{ ...graphic, id: `graphic-${graphic.id}` }}
              toggleWishlist={toggleWishlist}
              wishlist={wishlist}
              name={graphic.name}
              brand={graphic.brand}
              price={graphic.price}
              originalPrice={graphic.originalPrice}
              discount={graphic.discount}
              inStock={graphic.inStock}
              image={graphic.image}
              bestSeller={graphic.bestSeller}
              rating={graphic.rating}
              reviews={graphic.reviews}
              features={graphic.feature}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Store;
