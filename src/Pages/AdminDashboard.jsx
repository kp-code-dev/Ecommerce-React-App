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
import { ThemeContext } from "../context/ThemeContext";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import "../pages/Styles/AdminDashboard.css";

export default function Dashboard() {
  const { theme } = useContext(ThemeContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const gridColor =
    theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";

  // Dummy Data
  const weeklyStats = [
    { name: "Mon", sales: 10 },
    { name: "Tue", sales: 9 },
    { name: "Wed", sales: 8 },
    { name: "Thu", sales: 7 },
    { name: "Fri", sales: 8 },
    { name: "Sat", sales: 9 },
    { name: "Sun", sales: 10 },
  ];

  const recentOrders = [
    { id: "#1234", user: "John Doe", amount: "₹ 120", status: "Completed" },
    { id: "#1235", user: "Jane Smith", amount: "₹ 85", status: "Processing" },
    { id: "#1236", user: "Bob Johnson", amount: "₹ 200", status: "Pending" },
    { id: "#1237", user: "Alice Brown", amount: "₹ 45", status: "Completed" },
    {
      id: "#1238",
      user: "Charlie Davis",
      amount: "₹ 300",
      status: "Completed",
    },
  ];

  const pieData = [
    { name: "Completed", value: 10, color: "#00e676" },
    { name: "Processing", value: 9, color: "#2196f3" },
    { name: "Pending", value: 9, color: "#ffc107" },
    { name: "Cancelled", value: 10, color: "#ff1744" },
  ];

  const topProducts = [
    { name: "Mechanical Keyboard", sales: 10 },
    { name: "Gaming Mouse", sales: 9 },
    { name: "Curved Monitor", sales: 8 },
    { name: "RGB Headset", sales: 9 },
    { name: "Gaming Chair", sales: 10 },
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
                value="₹ 24,000"
                trend="+12%"
                trendType="positive"
                onClick={() => setActiveTab("analytics")}
              />
              <StatCard
                title="Total Orders"
                value="1,240"
                trend="+5%"
                trendType="positive"
                onClick={() => setActiveTab("orders")}
              />
              <StatCard
                title="Total Products"
                value="150"
                trend="0%"
                trendType="neutral"
                onClick={() => setActiveTab("products")}
              />
              <StatCard
                title="Active Users"
                value="890"
                trend="+8%"
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
                <p className="stat-value">₹ 12,000</p>
                <span className="stat-trend positive">+8%</span>
              </div>
              <div className="stat-card">
                <h3>Avg Order Value</h3>
                <p className="stat-value">₹ 85</p>
                <span className="stat-trend negative">-2%</span>
              </div>
              <div className="stat-card">
                <h3>Conversion Rate</h3>
                <p className="stat-value">2.4%</p>
                <span className="stat-trend positive">+0.5%</span>
              </div>
              <div className="stat-card">
                <h3>Returns</h3>
                <p className="stat-value">5%</p>
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
            <p>List of all products with edit/delete actions.</p>
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
