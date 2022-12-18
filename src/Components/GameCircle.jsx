import React from "react";

const GameCircle = ({ id, e, children, handlePick, className }) => {
  const handleClick = (id, e) => {
    // alert("click" + id);
    handlePick(id, e);
  };
  return (
    <div
      className={`gameCircle ${className} ${id % 2 === 0 ? "even" : "odd"}`}
      onClick={() => handleClick(id, e)}
    >
      {children}
    </div>
  );
};

export default GameCircle;
