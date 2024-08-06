import React from "react";

const Text = ({ children, color, size, className }) => {
  return (
    <p style={{ color, fontSize: size || 16 }} className={className}>
      {children}
    </p>
  );
};

export default Text;
