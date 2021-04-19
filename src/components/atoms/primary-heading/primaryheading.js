import React from "react";
import "./primaryheading.scss";

const primaryHeading = ({ children }) => {
  return (
    <div>
      <h1 className="primaryheading">{children}</h1>
    </div>
  );
};

export default primaryHeading;
