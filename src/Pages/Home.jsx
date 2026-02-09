import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaMouse,
  FaKeyboard,
  FaHeadset,
  FaMicrochip,
  FaTools,
  FaRocket,
  FaPalette,
  FaShieldAlt,
} from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Styles/Home.css";
import ProductCard from "../Components/Product-Card";
import MarqueeContainer from "../Components/Marquee-Container";
import Heading from "../Components/Heading";
import { keyboardsData } from "../Data/keyboardData";
import { mouseData } from "../Data/mouseData";
import { cabinetData } from "../Data/cabinetData";
import graphicData from "../Data/graphicData";
import processorData from "../Data/processorData";

function Home() {
  const [wishlist, setWishlist] = useState([]);

  /* Helper to pick 1 best product from a category */
  const getBestProduct = (data, prefix) => {
    const best =
      data.find((item) => item.bestSeller && item.inStock) ||
      data.find((item) => item.inStock) ||
      data[0];
    return best ? { ...best, uniqueId: `${prefix}-${best.id}` } : null;
  };

  /* 1 from each category */
  const combinedProducts = [
    getBestProduct(keyboardsData, "k"),
    getBestProduct(mouseData, "m"),
    getBestProduct(cabinetData, "c"),
    getBestProduct(processorData, "p"),
    getBestProduct(graphicData, "g"),
  ].filter(Boolean);

  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 889) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (startIndex + itemsPerPage < combinedProducts.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <>
      <Header />
      <section className="hero">
        <h1>
          Gaming
          <br /> <span className="glitch-text">Accessories</span>
        </h1>
        <p>Next-Gen Gaming Hardware for the elite</p>
        <Link to={"/store/"} className="cta-page">
          Enter Store
        </Link>
      </section>

      <MarqueeContainer />

      <section className="popular-products">
        <div className="section-header">
          <Heading title="Popular Products" />
        </div>

        <div className="view-all-container">
          <Link to={"/store/"} className="cta">
            View All
          </Link>
        </div>
        <button
          className="prev"
          onClick={prevSlide}
          disabled={startIndex === 0}
        >
          <FaArrowLeft />
        </button>
        <button
          className="next"
          onClick={nextSlide}
          disabled={startIndex + itemsPerPage >= combinedProducts.length}
        >
          <FaArrowRight />
        </button>

        <div className="products carousel-view">
          {combinedProducts
            .slice(startIndex, startIndex + itemsPerPage)
            .map((product) => (
              <ProductCard
                key={product.uniqueId}
                product={product}
                toggleWishlist={toggleWishlist}
                wishlist={wishlist}
              />
            ))}
        </div>
      </section>

      <section className="category-section">
        <Heading title="Shop by Category" />
        <div className="category-grid">
          <Link to="/store" className="category-card">
            <div className="cat-icon mouse">
              <FaMouse />
            </div>
            <h3>Gaming Mouse</h3>
          </Link>
          <Link to="/store" className="category-card">
            <div className="cat-icon keyboard">
              <FaKeyboard />
            </div>
            <h3>Keyboards</h3>
          </Link>
          <Link to="/store" className="category-card">
            <div className="cat-icon headset">
              <FaHeadset />
            </div>
            <h3>Headsets</h3>
          </Link>
          <Link to="/store" className="category-card">
            <div className="cat-icon components">
              <FaMicrochip />
            </div>
            <h3>PC Components</h3>
          </Link>
          <Link to="/store" className="category-card build-pc">
            <div className="cat-icon build">
              <FaTools />
            </div>
            <h3>Build Your PC</h3>
          </Link>
        </div>
      </section>

      <section className="why-us-section">
        <Heading title="Why Choose Us" />
        <div className="why-us">
          <div className="why-card">
            <h3>Trusted Brands</h3>
            <p>Only the best for the elite.</p>
          </div>
          <div className="why-card">
            <h3>High Performance</h3>
            <p>Gear tuned for victory.</p>
          </div>
          <div className="why-card">
            <h3>Gamer Focused</h3>
            <p>Built by gamers, for gamers.</p>
          </div>
        </div>
      </section>

      <div className="build-pc-cta">
        <div className="build-pc-content">
          <Heading title="Build Your Ultimate Gaming Rig" />
          <p>Experience gaming like never before with our custom-tuned PCs.</p>

          <div className="build-pc-features">
            <div className="feature-item">
              <span className="feature-icon">
                <FaRocket />
              </span>
              <h3>Extreme Performance</h3>
              <p>Overclocked & optimized for max FPS.</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">
                <FaPalette />
              </span>
              <h3>Custom Aesthetics</h3>
              <p>Premium cases, RGB lighting & cable mods.</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">
                <FaShieldAlt />
              </span>
              <h3>Elite Support</h3>
              <p>3-Year Warranty & 24/7 Tech Support.</p>
            </div>
          </div>

          <Link to="/build-pc" className="cta">
            START CONFIGURATION
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
