import React from "react";

const GameCircle = ({ id, children, color }) => {
  const handleClick = (id) => {
    // alert("click" + id);
  };
  return (
    <div
      onClick={() => handleClick(id)}
      style={{
        backgroundColor: color,
        height: 100,
        width: 100,
        margin: "20px",
        borderRadius: 50,
      }}
    >
      {children}
    </div>
  );
};

export default GameCircle;
