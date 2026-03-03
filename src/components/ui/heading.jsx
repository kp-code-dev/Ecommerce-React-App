import React from "react";
import "../css/heading.css";

const Heading = ({ title, description, className }) => {
  return (
    <>
      <h1 className={className}>{title}</h1>
      <p className="description">{description}</p>
    </>
  );
};

export default Heading;
