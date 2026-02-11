function StatCard({ title, value, trend, trendType, onClick }) {
  const trendClass = trendType === "positive" ? "positive" : "negative";
  return (
    <div
      className="stat-card"
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <h3>{title}</h3>
      <p className="stat-value">{value}</p>
      <span className={`stat-trend ${trendClass}`}>{trend}</span>
    </div>
  );
}

export default StatCard;
