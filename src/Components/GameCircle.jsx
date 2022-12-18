import React from "react";

const GameCircle = ({ id, children, color }) => {
  const handleClick = (id) => {
    // alert("click" + id);
  };
  return (
    <div
      className="gameCircle"
      onClick={() => handleClick(id)}
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );
};

export default GameCircle;
