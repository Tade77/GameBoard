import React from "react";
import GameCircle from "./GameCircle";

const GameBoard = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr 1fr 1fr",
        padding: "30px",
      }}
    >
      <GameCircle id={1} color="red">
        red
      </GameCircle>
      <GameCircle id={2} color="blue">
        blue
      </GameCircle>
      <GameCircle id={3} color="red">
        red
      </GameCircle>
      <GameCircle id={4} color="blue">
        blue
      </GameCircle>
      <GameCircle id={5} color="red">
        red
      </GameCircle>
      <GameCircle id={6} color="blue">
        blue
      </GameCircle>
      <GameCircle id={7} color="red">
        red
      </GameCircle>
      <GameCircle id={7} color="blue">
        blue
      </GameCircle>
      <GameCircle id={7} color="red">
        blue
      </GameCircle>
      <GameCircle id={7} color="blue">
        blue
      </GameCircle>
      <GameCircle id={7} color="red">
        blue
      </GameCircle>
      <GameCircle id={7} color="blue">
        blue
      </GameCircle>
      <GameCircle id={7} color="red">
        blue
      </GameCircle>
      <GameCircle id={7} color="blue">
        blue
      </GameCircle>
      <GameCircle id={7} color="red">
        blue
      </GameCircle>
      <GameCircle id={7} color="blue">
        blue
      </GameCircle>
    </div>
  );
};

export default GameBoard;
