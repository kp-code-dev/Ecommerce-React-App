import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Modal from "./modal";
import CartDropdown from "../cart/cartDropdown";
import { useCart } from "../../context/cartContext";
import icon from "../../assets/images/logo/logo.svg";
import "../css/header.css";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch, FaBars } from "react-icons/fa";
import { BiSolidUserCircle } from "react-icons/bi";

function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { cart } = useCart();
  const searchRef = useRef(null);
  const inputRef = useRef(null); // Add input ref
  const navigate = useNavigate();

  const cartCount = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  useEffect(() => {
    // Focus input when searchOpen becomes true
    if (searchOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 100); // Small delay for CSS transition
    }
  }, [searchOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const executeSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/store?search=${encodeURIComponent(searchTerm)}`);
      setSearchOpen(false);
      setMobileMenuOpen(false);
      setSearchTerm("");
    } else {
      setSearchOpen(false);
    }
  };

  const handleDesktopSearch = () => {
    if (!searchOpen) {
      setSearchOpen(true);
    } else {
      executeSearch();
    }
  };

  return (
    <header>
      <Link to={"/"} className="brand-container">
        <img src={icon} alt="icon" className="icon" />

        <div className="brand-text">
          <span className="brand-title">WORLD OF MSD</span>
          <span className="brand-subtitle">Gaming Accessories</span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="navbar">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/store/"}>Store</NavLink>
        <NavLink to={"/custom-builds/"}>Custom Builds</NavLink>
        <div className="search" ref={searchRef}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search Products..."
            className={searchOpen ? "active" : ""}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && executeSearch()}
          />
          <button id="btn" onClick={handleDesktopSearch}>
            <FaSearch />
          </button>
        </div>
        <div style={{ position: "relative" }}>
          <button id="btn" onClick={() => setCartOpen(!cartOpen)}>
            <FaCartShopping />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          {cartOpen && <CartDropdown onClose={() => setCartOpen(false)} />}
        </div>
        <button id="btn" onClick={() => setOpen(true)}>
          <BiSolidUserCircle size={30} />
        </button>
      </nav>

      {/* Mobile Navigation */}
      <nav className="navbar-mobile">
        <button id="btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <FaBars />
        </button>
        <div
          className="navbar-mobile-links"
          style={{ display: mobileMenuOpen ? "flex" : "none" }}
        >
          <div className="navbar-mobile-search">
            <input
              type="text"
              placeholder="Search Products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && executeSearch()}
            />
            <button id="btn" onClick={executeSearch}>
              <FaSearch />
            </button>
          </div>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/store/"}>Store</NavLink>
          <NavLink to={"/custom-builds/"}>Custom Builds</NavLink>
        </div>
      </nav>
      <div className="navbar-mobile-actions">
        <div style={{ position: "relative" }}>
          <button id="btn" onClick={() => setCartOpen(!cartOpen)}>
            <FaCartShopping />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          {/* Mobile Cart Dropdown could go here, or redirect to cart page */}
        </div>
        <button id="btn" onClick={() => setOpen(true)}>
          <BiSolidUserCircle size={30} />
        </button>
        <Modal open={open} onClose={() => setOpen(false)} />
      </div>
    </header>
  );
}

export default Header;
