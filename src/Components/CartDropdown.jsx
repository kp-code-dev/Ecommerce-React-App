import React, { useRef, useEffect } from "react";
import { useCart } from "../Context/CartContext";
import "./css/CartDropdown.css";
import { FaShoppingCart, FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { PiEmpty } from "react-icons/pi";

function CartDropdown({ onClose }) {
  const { cart, removeFromCart, addToCart, decreaseQuantity } = useCart();
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0,
  );

  return (
    <div className="cart-dropdown" ref={dropdownRef}>
      <div className="cart-header">
        <h3>Your Cart</h3>
        <span className="cart-count">{cart.length} Items</span>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <PiEmpty className="empty-icon" />
          <p>Your cart feels light...</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-img"
                />
                <div className="cart-item-info">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </span>
                  <div className="qty-controls">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      disabled={(item.quantity || 1) <= 1}
                      style={{
                        opacity: (item.quantity || 1) <= 1 ? 0.5 : 1,
                        cursor:
                          (item.quantity || 1) <= 1 ? "not-allowed" : "pointer",
                      }}
                    >
                      <FaMinus size={10} />
                    </button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => addToCart(item)}>
                      <FaPlus size={10} />
                    </button>
                  </div>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <div className="total-row">
              <span>Total:</span>
              <span>₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>
            <button
              className="checkout-btn"
              onClick={() => alert("Checkout functionality coming soon!")}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartDropdown;
