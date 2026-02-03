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
} from "react-icons/fa";
import { PiEmpty } from "react-icons/pi";
// import { useCart } from "../Context/CartContext";

const iconMap = {
  keyboard: <FaKeyboard />,
  mouse: <FaMouse />,
  bolt: <FaBolt />,
  wifi: <FaWifi />,
  headset: <FaHeadset />,
  microphone: <FaMicrophone />,
};

function ProductCard({ product, toggleWishlist, wishlist, ...props }) {
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

  return (
    <div className="cards">
      {bestSeller && <span className="best-seller-badge">Best Seller</span>}

      <div className="image-container">
        <img src={image} alt={name} />
        <button
          className="wishlist-btn"
          onClick={() => toggleWishlist(product.id)}
        >
          {wishlist.includes(product.id) ? (
            <FaHeart color="#FF5722" />
          ) : (
            <FaRegHeart />
          )}
        </button>
      </div>

      <div className="card-content">
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
                {getIcon(feature.iconType)}
                <span>{feature.text}</span>
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
            <span className="discount-tag">{discount}% OFF</span>
          </div>
          {inStock ? (
            <div className="stock-status in-stock">
              <FaCheckCircle /> In Stock
            </div>
          ) : (
            <div className="stock-status out-of-stock">
              <PiEmpty /> Out of Stock
            </div>
          )}
        </div>
      </div>

      <div className="buttons">
        {inStock ? (
          <>
            <button>Buy Now</button>
            <button
            // onClick={() => addToCart(product)}
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
          >
            Notify Me
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
