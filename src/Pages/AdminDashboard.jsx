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
        return (
          <div className="placeholder-content">
            <h2>Product Management</h2>
          </div>
        );
      case "orders":
        return (
          <div className="placeholder-content">
            <h2>Order Management</h2>
          </div>
        );
      case "users":
        return (
          <div className="placeholder-content">
            <h2>User Management</h2>
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
