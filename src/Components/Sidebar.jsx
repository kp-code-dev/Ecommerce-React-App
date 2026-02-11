import { useState, useContext } from "react";
import AppleToggle from "./AppleToggle";
import { ThemeContext } from "../context/ThemeContext";
import {
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaChartLine,
  FaCog,
  FaChevronDown,
  FaChevronRight,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import "./css/Sidebar.css";

export default function Sidebar({ isOpen, activeTab, onTabChange }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleSubMenu = (id) => {
    setExpandedMenu(expandedMenu === id ? null : id);
  };

  const menuItems = [
    {
      id: "dashboard",
      icon: <MdDashboard title="Dashboard" />,
      label: "Dashboard",
    },
    {
      id: "analytics",
      icon: <FaChartLine title="Analytics" />,
      label: "Analytics",
    },
    {
      id: "products",
      icon: <FaBoxOpen title="Manage Products" />,
      label: "Products",
      subItems: [
        { id: "products-all", label: "All Products" },
        { id: "products-add", label: "Add Product" },
        { id: "products-categories", label: "Categories" },
      ],
    },
    {
      id: "orders",
      icon: <FaShoppingCart title="Manage Orders" />,
      label: "Orders",
      subItems: [
        { id: "orders-all", label: "All Orders" },
        { id: "orders-pending", label: "Pending" },
        { id: "orders-completed", label: "History" },
      ],
    },
    {
      id: "users",
      icon: <FaUsers title="Manage Users" />,
      label: "Users",
      subItems: [
        { id: "users-all", label: "All Users" },
        { id: "users-roles", label: "Roles" },
      ],
    },
    {
      id: "settings",
      icon: <FaCog title="Settings" />,
      label: "Settings",
      subItems: [
        { id: "settings-general", label: "General" },
        { id: "settings-security", label: "Security" },
      ],
    },
  ];

  /* Helper to toggle sub-menus & auto-select first option */
  const handleItemClick = (item) => {
    if (item.subItems) {
      const isExpanding = expandedMenu !== item.id;
      setExpandedMenu(isExpanding ? item.id : null);

      if (isExpanding && item.subItems.length > 0) {
        onTabChange(item.subItems[0].id);
      }
    } else {
      onTabChange(item.id);
      setExpandedMenu(null); // Close other dropdowns if clicking a main link
    }
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <h2>{isOpen ? "Admin Panel" : "AP"}</h2>
      </div>
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`menu-item-container ${activeTab === item.id ? "active" : ""}`}
          >
            <div
              className={`menu-item ${activeTab === item.id ? "active" : ""}`}
              onClick={() => handleItemClick(item)}
            >
              <div className="menu-left">
                {item.icon}
                <span className="link-text">{item.label}</span>
              </div>
              {item.subItems && isOpen && (
                <span className="menu-arrow">
                  {expandedMenu === item.id ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}
                </span>
              )}
            </div>

            {/* Submenu */}
            {item.subItems && expandedMenu === item.id && isOpen && (
              <ul className="sub-menu">
                {item.subItems.map((sub) => (
                  <li
                    key={sub.id}
                    className={activeTab === sub.id ? "active-sub" : ""}
                    onClick={() => onTabChange(sub.id)}
                  >
                    <span className="sub-circle"></span>
                    <span>{sub.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="sidebar-footer">
        {isOpen ? (
          <AppleToggle />
        ) : (
          <div
            onClick={toggleTheme}
            className="collapsed-theme-icon"
            title="Toggle Theme"
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              padding: "10px",
            }}
          >
            <div className="collapsed-theme-icon-box">
              {theme === "dark" ? (
                <FaMoon className="faMoon" size={22} />
              ) : (
                <FaSun className="faSun" size={22} />
              )}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
