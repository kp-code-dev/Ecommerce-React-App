import { marqueeData } from "../../data/marqueeData";
import "../css/marqueeContainer.css";

function MarqueeContainer() {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {marqueeData.map((item) => (
          <span className="pro" key={item.id}>
            {" "}
            {item.icon} {item.name}{" "}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MarqueeContainer;
