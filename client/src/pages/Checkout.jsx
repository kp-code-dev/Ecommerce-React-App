import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Heading from "../components/ui/heading";
import "./css/Checkout.css";

function Checkout() {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    paymentMethod: "creditCard",
  });

  const cartTotal = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0,
  );
  const shipping = cartTotal > 5000 ? 0 : 500;
  const codCharge = formData.paymentMethod === "cod" ? 50 : 0;
  const grandTotal = cartTotal + shipping + codCharge;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully! (Simulation)");
  };

  if (cart.length === 0) {
    return (
      <>
        <Header />
        <div
          className="checkout-page"
          style={{ textAlign: "center", paddingTop: "150px" }}
        >
          <Heading title="Your Cart is Empty" />
          <p style={{ margin: "20px 0", color: "#888" }}>
            Looks like you haven't added any gear yet.
          </p>
          <Link
            to="/store"
            className="cta"
            style={{ display: "inline-block", marginTop: "20px" }}
          >
            Return to Store
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="checkout-page">
        <div className="checkout-container">
          <div className="checkout-form">
            <div className="checkout-section">
              <h2>Billing Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Street Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Zip Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="IN">India</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                  </select>
                </div>

                <h2>Payment Method</h2>
                <div className="form-group">
                  <div className="payment-options">
                    {/* Credit Card Option */}
                    <div className="payment-option">
                      <label
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          cursor: "pointer",
                          marginBottom: "10px",
                        }}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="creditCard"
                          checked={formData.paymentMethod === "creditCard"}
                          onChange={handleInputChange}
                          style={{ width: "auto" }}
                        />
                        Credit / Debit Card
                      </label>
                      {formData.paymentMethod === "creditCard" && (
                        <div
                          className="payment-details"
                          style={{ marginLeft: "25px", marginBottom: "15px" }}
                        >
                          <div className="form-group">
                            <label>Card Number</label>
                            <input
                              type="text"
                              name="cardNumber"
                              value={formData.cardNumber || ""}
                              pattern="[0-9]{16}"
                              minLength="16"
                              maxLength="16"
                              onChange={handleInputChange}
                              placeholder="XXXX XXXX XXXX XXXX"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group">
                              <label>Expiry Date</label>
                              <input
                                type="text"
                                name="expiryDate"
                                value={formData.expiryDate || ""}
                                pattern="(0[1-9]|1[0-2])/(20|21)"
                                minLength="5"
                                maxLength="5"
                                onChange={handleInputChange}
                                placeholder="MM/YY"
                                required
                              />
                            </div>
                            <div className="form-group">
                              <label>CVV</label>
                              <input
                                type="password"
                                name="cvv"
                                value={formData.cvv || ""}
                                pattern="[0-9]{3}"
                                minLength="3"
                                maxLength="3"
                                onChange={handleInputChange}
                                placeholder="123"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* UPI Option */}
                    <div className="payment-option">
                      <label
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          cursor: "pointer",
                          marginBottom: "10px",
                        }}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="upi"
                          checked={formData.paymentMethod === "upi"}
                          onChange={handleInputChange}
                          style={{ width: "auto" }}
                        />
                        UPI / Net Banking
                      </label>
                      {formData.paymentMethod === "upi" && (
                        <div
                          className="payment-details"
                          style={{ marginLeft: "25px", marginBottom: "15px" }}
                        >
                          <div
                            className="form-group"
                            style={{ display: "flex", gap: "10px" }}
                          >
                            <div style={{ flex: 1 }}>
                              <label>UPI ID</label>
                              <input
                                type="text"
                                name="upiId"
                                value={formData.upiId || ""}
                                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                minLength="10"
                                maxLength="15"
                                onChange={handleInputChange}
                                placeholder="username@bank"
                                required
                              />
                            </div>
                            <button
                              type="button"
                              style={{
                                marginTop: "32px",
                                padding: "0 20px",
                                height: "42px",
                                background: "#FF5722",
                                color: "white",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                                fontFamily: "Orbitron",
                              }}
                            >
                              Verify
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* COD Option */}
                    <div className="payment-option">
                      <label
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          cursor: "pointer",
                          marginBottom: "10px",
                        }}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cod"
                          checked={formData.paymentMethod === "cod"}
                          onChange={handleInputChange}
                          style={{ width: "auto" }}
                        />
                        Cash on Delivery
                      </label>
                      {formData.paymentMethod === "cod" && (
                        <div
                          className="payment-details"
                          style={{
                            marginLeft: "25px",
                            marginBottom: "15px",
                            color: "#FF5722",
                            fontSize: "0.9rem",
                          }}
                        >
                          ⓘ A flat ₹50 COD handling fee will be added to your
                          total.
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <button type="submit" className="place-order-btn">
                  PLACE ORDER
                </button>
              </form>
            </div>
          </div>

          <div className="checkout-summary">
            <div className="checkout-section">
              <h2>Order Summary</h2>
              <div className="cart-summary-list">
                {cart.map((item) => (
                  <div key={item.id} className="cart-summary-item">
                    <div className="item-info">
                      <img src={item.image} alt={item.name} />
                      <div className="item-details">
                        <h4>{item.name}</h4>
                        <p>Qty: {item.quantity || 1}</p>
                      </div>
                    </div>
                    <div className="item-price">
                      ₹{(item.price * (item.quantity || 1)).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              <div className="checkout-total">
                <div className="total-row">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toLocaleString()}</span>
                </div>
                <div className="total-row">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                </div>
                {codCharge > 0 && (
                  <div className="total-row">
                    <span>COD Fee</span>
                    <span>₹{codCharge}</span>
                  </div>
                )}
                <div className="total-row final">
                  <span>Total</span>
                  <span>₹{grandTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
