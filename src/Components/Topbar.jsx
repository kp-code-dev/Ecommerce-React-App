import { useState } from "react";
import { FaBars, FaUserCircle, FaBell } from "react-icons/fa";
import "./css/Topbar.css";

export default function Topbar({
  isSidebarOpen,
  setIsSidebarOpen,
  activeTab,
  onTabChange,
}) {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="admin-header">
      <div className="header-left">
        <button
          className="toggle-btn"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaBars />
        </button>
        {isSidebarOpen && (
          <div
            className="sidebar-overlay"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <span className="breadcrumb">
          <span
            className="crumb-admin"
            onClick={() => onTabChange("dashboard")}
            style={{ cursor: "pointer", color: "#888" }}
          >
            ADMIN
          </span>
          <span className="crumb-sep"> / </span>
          <span className="crumb-active">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </span>
        </span>
      </div>

      <div className="header-right">
        <div className="notification-wrapper">
          <button
            className="icon-btn"
            onClick={() => setShowNotifications(!showNotifications)}
            style={{ position: "relative" }}
          >
            <FaBell size={20} />
            <span className="badge">3</span>
          </button>

          {showNotifications && (
            <div className="notification-dropdown">
              <div className="notif-header">Notifications (3)</div>
              <div className="notif-item unread">New Order #1239 received</div>
              <div className="notif-item unread">Server overload warning</div>
              <div className="notif-item unread">New user registered</div>
              <div className="notif-footer">View All</div>
            </div>
          )}
        </div>

        <div className="admin-profile">
          <FaUserCircle size={24} />
          <span>Admin</span>
          <span className="caret">▾</span>
        </div>
      </div>
    </header>
  );
}
