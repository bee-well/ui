import React from "react";
import "./secondary-heading.scss";

const SecondaryHeading = ({ children }) => {
  return (
    <div>
      <h2 className="secondary-heading">{children}</h2>
    </div>
  );
};

export default SecondaryHeading;
