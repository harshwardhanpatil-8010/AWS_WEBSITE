import React from "react";

const Separator = ({ orientation = "horizontal", className = "", ...props }) => {
  const separatorStyles =
    orientation === "horizontal"
      ? { width: "100%", height: "1px" }
      : { width: "1px", height: "100%" };

  return (
    <div
      style={{
        backgroundColor: "#e0e0e0", // Light gray
        ...separatorStyles,
      }}
      className={className}
      {...props}
    />
  );
};

export default Separator;
