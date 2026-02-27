import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaStar,
  FaCheckCircle,
  FaTimesCircle,
  FaShoppingCart,
  FaArrowLeft,
  FaBolt,
  FaWifi,
  FaMouse,
  FaKeyboard,
  FaHeadset,
  FaMicrophone,
  FaMicrochip,
} from "react-icons/fa";
import { useCart } from "../../context/cartContext";
import { getProductById } from "../../data/allProducts";
import Header from "../common/header";
import Footer from "../common/footer";
import "../css/productDetails.css";

const iconMap = {
  keyboard: <FaKeyboard />,
  mouse: <FaMouse />,
  bolt: <FaBolt />,
  wifi: <FaWifi />,
  headset: <FaHeadset />,
  microphone: <FaMicrophone />,
  chip: <FaMicrochip />,
  cabinet: <FaMicrochip />, // using chip as fallback for cabinet
};

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const foundProduct = getProductById(id);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.image);
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <>
        <Header />
        <div className="error-container">
          <h2>Product Not Found</h2>
          <button onClick={() => navigate("/store")} className="back-btn">
            <FaArrowLeft /> Back to Store
          </button>
        </div>
        <Footer />
      </>
    );
  }

  const getIcon = (type) => iconMap[type] || null;

  return (
    <>
      <Header />
      <div className="product-details-page">
        <div className="details-container">
          <button onClick={() => navigate(-1)} className="back-link">
            <FaArrowLeft /> Back
          </button>

          <div className="details-grid">
            {/* Left: Product Images */}
            <div className="image-section">
              <div className="main-image">
                <img src={selectedImage} alt={product.name} />
              </div>

              <div className="image-gallery">
                {product.images?.map((img, idx) => (
                  <div
                    key={idx}
                    className={`gallery-thumb ${
                      selectedImage === img ? "active" : ""
                    }`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} />
                  </div>
                ))}
              </div>

              <div className="product-badges">
                {product.bestSeller && (
                  <span className="badge-best">Best Seller</span>
                )}
                {product.inStock ? (
                  <span className="badge-stock in">
                    <FaCheckCircle /> In Stock
                  </span>
                ) : (
                  <span className="badge-stock out">
                    <FaTimesCircle /> Out of Stock
                  </span>
                )}
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="info-section">
              <span className="info-brand">{product.brand}</span>
              <h1 className="info-name">{product.name}</h1>

              <div className="info-rating">
                <div className="stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      key={index}
                      color={
                        index < Math.round(product.rating) ? "#FFD700" : "#333"
                      }
                    />
                  ))}
                </div>
                <span className="reviews">
                  ({product.reviews} Customer Reviews)
                </span>
              </div>

              <div className="info-price">
                <span className="curr-price">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                <span className="orig-price">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
                <span className="disc-tag">{product.discount}% OFF</span>
              </div>

              <div className="info-tabs">
                <div className="tab-header">
                  <span className="tab-title active">Description</span>
                  <span className="tab-title">Specifications</span>
                </div>
                <div className="tab-content">
                  <p className="description-text">
                    Elevate your setup with the {product.name}. This premium{" "}
                    {product.category.toLowerCase()} is crafted for performance,
                    durability, and style. Featuring a sleek {product.brand}{" "}
                    design, it offers unparalleled efficiency for both
                    professional work and intense gaming sessions. Built with
                    high-grade materials, it ensures a long-lasting and reliable
                    user experience.
                  </p>

                  <div className="specifications-grid">
                    <h3>Technical Details</h3>
                    <div className="spec-table">
                      {product.features?.map((feature, idx) => (
                        <div key={idx} className="spec-row">
                          <span className="spec-label">
                            {getIcon(feature.iconType)}{" "}
                            {feature.text.split(" ")[0]}
                          </span>
                          <span className="spec-value">{feature.text}</span>
                        </div>
                      ))}
                      <div className="spec-row">
                        <span className="spec-label">Category</span>
                        <span className="spec-value">{product.category}</span>
                      </div>
                      <div className="spec-row">
                        <span className="spec-label">Warranty</span>
                        <span className="spec-value">1 Year Limited</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="action-buttons">
                {product.inStock ? (
                  <>
                    <button className="buy-btn">PROCEED TO BUY</button>
                    <button
                      className="add-cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      <FaShoppingCart /> ADD TO CART
                    </button>
                  </>
                ) : (
                  <button
                    className="notify-btn"
                    onClick={() => alert("Notification set!")}
                  >
                    NOTIFY ME WHEN IN STOCK
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
