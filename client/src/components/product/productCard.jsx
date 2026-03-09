import {
  FaRegHeart,
  FaHeart,
  FaStar,
  FaBolt,
  FaWifi,
  FaMouse,
  FaKeyboard,
  FaHeadset,
  FaMicrophone,
  FaCheckCircle,
  FaTimesCircle,
  FaMicrochip,
} from "react-icons/fa";
import { PiEmpty } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import "../css/productCard.css";

const iconMap = {
  keyboard: <FaKeyboard />,
  mouse: <FaMouse />,
  bolt: <FaBolt />,
  wifi: <FaWifi />,
  headset: <FaHeadset />,
  microphone: <FaMicrophone />,
  chip: <FaMicrochip />,
};

function ProductCard({ product, toggleWishlist, wishlist, ...props }) {
  const navigate = useNavigate();
  const {
    name,
    brand,
    price,
    originalPrice,
    discount,
    inStock,
    image,
    bestSeller,
    rating,
    reviews,
    features,
  } = { ...product, ...props };

  const getIcon = (type) => iconMap[type] || null;
  const { addToCart } = useCart();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="cards">
      {bestSeller && <span className="best-seller-badge">Best Seller</span>}

      <div
        className="image-container"
        onClick={handleCardClick}
        style={{ cursor: "pointer" }}
      >
        <img src={image} alt={name} />
        <button
          className="wishlist-btn"
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
        >
          {wishlist.includes(product.id) ? (
            <FaHeart color="#FF5722" />
          ) : (
            <FaRegHeart />
          )}
        </button>
      </div>

      <div
        className="card-content"
        onClick={handleCardClick}
        style={{ cursor: "pointer" }}
      >
        <span className="brand-name">{brand}</span>
        <h3 className="product-name">{name}</h3>

        <div className="rating-container">
          <span className="stars">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar
                key={index}
                color={index < Math.round(rating) ? "#FFD700" : "#555"}
                size={12}
              />
            ))}
          </span>
          <span className="review-count">({reviews} Reviews)</span>
        </div>

        <div className="features-grid">
          {features &&
            features.map((feature, idx) => (
              <div key={idx} className="feature-box">
                <div className="feature-icon">{getIcon(feature.iconType)}</div>
                <span className="feature-text">{feature.text}</span>
              </div>
            ))}
        </div>

        <div className="price-container">
          <div className="price-row">
            <span className="current-price">
              ₹{price.toLocaleString("en-IN")}
            </span>
            <span className="original-price">
              ₹{originalPrice.toLocaleString("en-IN")}
            </span>
            <span className="discount-tag text-green-500">{discount}% OFF</span>
          </div>
          <div className="price-row stock-row">
            {inStock ? (
              <span className="stock-status in-stock">
                <FaCheckCircle size={14} /> In Stock
              </span>
            ) : (
              <span className="stock-status out-of-stock">
                <FaTimesCircle size={14} /> Out of Stock
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="buttons">
        {inStock ? (
          <>
            <button onClick={(e) => e.stopPropagation()}>Buy Now</button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }}
            >
              Add To Cart
            </button>
          </>
        ) : (
          <button
            className="notify-btn"
            onClick={() =>
              alert("We will notify you when this item is back in stock!")
            }
            style={{
              marginTop: "25px",
            }}
          >
            Notify Me
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
