import React from "react";
import "./secondary-heading.scss";

const SecondaryHeading = ({ children, light }) => {
  return (
    <div>
      <h2
        className={[
          "secondary-heading",
          light ? "secondary-heading-light" : null,
        ].join(" ")}
      >
        {children}
      </h2>
    </div>
  );
};

export default SecondaryHeading;
