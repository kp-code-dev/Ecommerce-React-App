import { FaBars, FaUserCircle } from "react-icons/fa";
import "../Components/css/Topbar.css";

export default function Topbar({ isSidebarOpen, setIsSidebarOpen, activeTab }) {
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
          <span className="crumb-admin">ADMIN</span>
          <span className="crumb-sep"> / </span>
          <span className="crumb-active">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </span>
        </span>
      </div>

      <div className="header-right">
        <div className="admin-profile">
          <FaUserCircle size={24} />
          <span>Admin</span>
          <span className="caret">▾</span>
        </div>
      </div>
    </header>
  );
}
