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
import { useState } from "react";
import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import "../pages/Styles/AdminDashboard.css";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  // Dummy Data
  const weeklyStats = [
    { name: "Mon", sales: 4000 },
    { name: "Tue", sales: 3000 },
    { name: "Wed", sales: 5000 },
    { name: "Thu", sales: 2780 },
    { name: "Fri", sales: 1890 },
    { name: "Sat", sales: 2390 },
    { name: "Sun", sales: 3490 },
  ];

  const recentOrders = [
    { id: "#1234", user: "John Doe", amount: "$120", status: "Completed" },
    { id: "#1235", user: "Jane Smith", amount: "$85", status: "Processing" },
    { id: "#1236", user: "Bob Johnson", amount: "$200", status: "Pending" },
    { id: "#1237", user: "Alice Brown", amount: "$45", status: "Completed" },
    { id: "#1238", user: "Charlie Davis", amount: "$300", status: "Completed" },
  ];

  const pieData = [
    { name: "Completed", value: 400, color: "#00e676" },
    { name: "Processing", value: 300, color: "#2196f3" },
    { name: "Pending", value: 300, color: "#ffc107" },
    { name: "Cancelled", value: 200, color: "#ff1744" },
  ];

  const topProducts = [
    { name: "Mechanical Keyboard", sales: 120 },
    { name: "Gaming Mouse", sales: 98 },
    { name: "Curved Monitor", sales: 86 },
    { name: "RGB Headset", sales: 75 },
    { name: "Gaming Chair", sales: 65 },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="dashboard-view">
            {/* 1. Stat Cards (1 row 4 column) */}
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Total Sales</h3>
                <p className="stat-value">$24,000</p>
                <span className="stat-trend positive">+12%</span>
              </div>
              <div className="stat-card">
                <h3>Total Orders</h3>
                <p className="stat-value">1,240</p>
                <span className="stat-trend positive">+5%</span>
              </div>
              <div className="stat-card">
                <h3>Total Products</h3>
                <p className="stat-value">150</p>
                <span className="stat-trend">0%</span>
              </div>
              <div className="stat-card">
                <h3>Active Users</h3>
                <p className="stat-value">890</p>
                <span className="stat-trend positive">+8%</span>
              </div>
            </div>

            {/* 2. Mini Line Chart (Weekly) */}
            <div className="chart-container">
              <h3>Weekly Sales Overview</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={weeklyStats}>
                  <XAxis dataKey="name" stroke="#555" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#111",
                      border: "1px solid #333",
                    }}
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
                    padding: "8px",
                    background: "#222",
                    color: "#fff",
                    border: "1px solid #444",
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
                <p className="stat-value">$12,000</p>
                <span className="stat-trend positive">+8%</span>
              </div>
              <div className="stat-card">
                <h3>Avg Order Value</h3>
                <p className="stat-value">$85</p>
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
                        backgroundColor: "#111",
                        border: "1px solid #333",
                      }}
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
                      contentStyle={{ backgroundColor: "#111", border: "none" }}
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
