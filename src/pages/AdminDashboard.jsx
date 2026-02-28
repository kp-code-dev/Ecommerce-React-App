import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/themeContext";
import Topbar from "../components/admin/topbar";
import Sidebar from "../components/admin/sidebar";
import StatCard from "../components/admin/statCard";
import "../pages/css/AdminDashboard.css";

export default function Dashboard() {
  const { theme } = useContext(ThemeContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const gridColor =
    theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";

  // Dummy Data
  const weeklyStats = [
    { name: "Mon", sales: 0 },
    { name: "Tue", sales: 0 },
    { name: "Wed", sales: 0 },
    { name: "Thu", sales: 0 },
    { name: "Fri", sales: 0 },
    { name: "Sat", sales: 0 },
    { name: "Sun", sales: 0 },
  ];

  const recentOrders = [
    { id: "# ", user: " ", amount: "₹ ", status: "Completed" },
    { id: "# ", user: " ", amount: "₹ ", status: "Processing" },
  ];

  const pieData = [
    { name: "Completed", value: 0, color: "#00e676" },
    { name: "Processing", value: 0, color: "#2196f3" },
    { name: "Pending", value: 0, color: "#ffc107" },
    { name: "Cancelled", value: 0, color: "#ff1744" },
  ];

  const topProducts = [
    { name: "Mechanical Keyboard", sales: 0 },
    { name: "Gaming Mouse", sales: 0 },
    { name: "Curved Monitor", sales: 0 },
    { name: "RGB Headset", sales: 0 },
    { name: "Gaming Chair", sales: 0 },
  ];

  const allProducts = [
    {
      id: "PROD-001",
      name: "Mechanical Keyboard X1",
      category: "Keyboards",
      price: "₹ 4,999",
      stock: 120,
      status: "Active",
    },
    {
      id: "PROD-002",
      name: "Gaming Mouse V2",
      category: "Mice",
      price: "₹ 2,499",
      stock: 85,
      status: "Active",
    },
    {
      id: "PROD-003",
      name: 'Curved Monitor 27"',
      category: "Monitors",
      price: "₹ 18,999",
      stock: 0,
      status: "Out of Stock",
    },
    {
      id: "PROD-004",
      name: "RGB Headset Pro",
      category: "Headsets",
      price: "₹ 3,999",
      stock: 45,
      status: "Active",
    },
  ];

  const allUsers = [
    {
      id: "UID-101",
      name: "John Doe",
      email: "john@example.com",
      role: "Customer",
      joinDate: "12 Feb 2026",
    },
    {
      id: "UID-102",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Customer",
      joinDate: "14 Feb 2026",
    },
    {
      id: "UID-103",
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Admin",
      joinDate: "01 Jan 2025",
    },
    {
      id: "UID-104",
      name: "Alice Brown",
      email: "alice@example.com",
      role: "Customer",
      joinDate: "20 Feb 2026",
    },
    {
      id: "UID-105",
      name: "Charlie Davis",
      email: "charlie@example.com",
      role: "Customer",
      joinDate: "25 Feb 2026",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="dashboard-view">
            {/* 1. Stat Cards (1 row 4 column) */}
            <div className="stats-grid">
              <StatCard
                title="Total Sales"
                value="₹0"
                trend="0%"
                trendType="positive"
                onClick={() => setActiveTab("analytics")}
              />
              <StatCard
                title="Total Orders"
                value="0"
                trend="0%"
                trendType="positive"
                onClick={() => setActiveTab("orders")}
              />
              <StatCard
                title="Total Products"
                value="0"
                trend="0%"
                trendType="neutral"
                onClick={() => setActiveTab("products")}
              />
              <StatCard
                title="Active Users"
                value="1"
                trend="0.1%"
                trendType="positive"
                onClick={() => setActiveTab("users")}
              />
            </div>

            {/* 2. Mini Line Chart (Weekly) */}
            <div className="chart-container">
              <h3>Weekly Sales Overview</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={weeklyStats}>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                  <XAxis dataKey="name" stroke="#555" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      backdropFilter: "blur(2px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "6px",
                      color: "#fff",
                      padding: "0 5px",
                    }}
                    itemStyle={{ color: "#fff" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#FF5722"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* 3. Recent 5 Orders Table */}
            <div className="table-container">
              <h3>Recent Orders</h3>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>User</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.user}</td>
                      <td>{order.amount}</td>
                      <td>
                        <span
                          className={`status-badge status-${order.status.toLowerCase()}`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "analytics":
        return (
          <div className="analytics-view">
            {/* Filters */}
            <div
              className="analytics-header"
              style={{
                marginBottom: "20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h2>Analytics Dashboard</h2>
              <div className="date-filter">
                <select
                  style={{
                    fontFamily: "Rajdhani",
                    padding: "8px",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    backdropFilter: "blur(2px)",
                    color: "rgb(255, 255, 255)",
                    border: "1px solid rgb(68, 68, 68)",
                    borderRadius: "5px",
                  }}
                >
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last Year</option>
                </select>
              </div>
            </div>

            {/* Summary Cards */}
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Monthly Revenue</h3>
                <p className="stat-value">₹ 0</p>
                <span className="stat-trend positive">+0.1%</span>
              </div>
              <div className="stat-card">
                <h3>Avg Order Value</h3>
                <p className="stat-value">₹ 0</p>
                <span className="stat-trend negative">-2%</span>
              </div>
              <div className="stat-card">
                <h3>Conversion Rate</h3>
                <p className="stat-value">0.1%</p>
                <span className="stat-trend positive">+0.5%</span>
              </div>
              <div className="stat-card">
                <h3>Returns</h3>
                <p className="stat-value">0%</p>
                <span className="stat-trend">0%</span>
              </div>
            </div>

            {/* Charts Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                gap: "25px",
                marginBottom: "30px",
              }}
            >
              {/* Product Performance Bar Chart */}
              <div className="chart-container" style={{ margin: 0 }}>
                <h3>Top Products Performance</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={topProducts} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                    <XAxis type="number" stroke="#555" />
                    <YAxis
                      dataKey="name"
                      type="category"
                      width={120}
                      stroke="#999"
                      style={{ fontSize: "12px" }}
                    />
                    <Tooltip
                      cursor={{ fill: "transparent" }}
                      contentStyle={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        backdropFilter: "blur(2px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "6px",
                        color: "#fff",
                        padding: "0 5px",
                      }}
                      itemStyle={{ color: "#fff" }}
                    />
                    <Bar
                      dataKey="sales"
                      fill="#FF5722"
                      radius={[0, 5, 5, 0]}
                      barSize={20}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Order Status Pie Chart */}
              <div className="chart-container" style={{ margin: 0 }}>
                <h3>Order Status Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        backdropFilter: "blur(2px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "6px",
                        color: "#fff",
                        padding: "0 5px",
                      }}
                      itemStyle={{ color: "#fff" }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Top Products Table */}
            <div className="table-container">
              <h3>Top Selling Products</h3>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Sales Count</th>
                    <th>Revenue Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {topProducts.map((p, i) => (
                    <tr key={i}>
                      <td>{p.name}</td>
                      <td>{p.sales}</td>
                      <td>High</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "products":
      case "products-all":
        return (
          <div className="table-container">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <h2>Manage Products</h2>
              <button
                style={{
                  padding: "8px 15px",
                  backgroundColor: "#FF5722",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontFamily: "Orbitron",
                }}
              >
                + Add Product
              </button>
            </div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allProducts.map((p) => (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.category}</td>
                    <td>{p.price}</td>
                    <td>{p.stock}</td>
                    <td>
                      <span
                        className={`status-badge status-${p.status === "Active" ? "completed" : "cancelled"}`}
                      >
                        {p.status}
                      </span>
                    </td>
                    <td>
                      <button
                        style={{
                          padding: "5px 10px",
                          margin: "0 5px",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                          fontFamily: "Rajdhani",
                          backgroundColor: "#2196f3",
                          color: "white",
                        }}
                      >
                        Edit
                      </button>
                      <button
                        style={{
                          padding: "5px 10px",
                          margin: "0 5px",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                          fontFamily: "Rajdhani",
                          backgroundColor: "#ff1744",
                          color: "white",
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "orders":
      case "orders-all":
        return (
          <div className="placeholder-content">
            <h2>Order Management</h2>
          </div>
        );
      case "users":
      case "users-all":
        return (
          <div className="table-container">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <h2>Manage Users</h2>
            </div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Join Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allUsers.map((u) => (
                  <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.role}</td>
                    <td>{u.joinDate}</td>
                    <td>
                      <button
                        style={{
                          padding: "5px 10px",
                          margin: "0 5px",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                          fontFamily: "Rajdhani",
                          backgroundColor: "#2196f3",
                          color: "white",
                        }}
                      >
                        View
                      </button>
                      <button
                        style={{
                          padding: "5px 10px",
                          margin: "0 5px",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                          fontFamily: "Rajdhani",
                          backgroundColor: "#ff1744",
                          color: "white",
                        }}
                      >
                        Ban
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return (
          <div className="placeholder-content">
            <h2>Section Under Construction</h2>
          </div>
        );
    }
  };

  return (
    <div className="admin-container">
      <Topbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="admin-body">
        <Sidebar
          isOpen={isSidebarOpen}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className={`admin-content ${isSidebarOpen ? "shifted" : ""}`}>
          <main className="dashboard-main">{renderContent()}</main>
        </div>
      </div>
    </div>
  );
}
