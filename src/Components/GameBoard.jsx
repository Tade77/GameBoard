import React from "react";
import { useState } from "react";
import GameCircle from "./GameCircle";
const numPlayer = 16;
const PLAYER0 = 0;
const PLAYER1 = 1;
const PLAYER2 = 2;

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(0));
  const [player, setPlayer] = useState(PLAYER1);
  // console.log(gameBoard);

  const initBoard = () => {
    const circles = [];
    for (let i = 0; i < numPlayer; i++) {
      circles.push(renderCircle(i));
    }
    return circles;
  };
  const circleClicked = (id) => {
    setGameBoard((prev) => {
      return prev.map((circle, pos) => {
        if (pos === id) return player;
        return circle;
      });
    });
    console.log(gameBoard);
    setPlayer(player === PLAYER1 ? PLAYER2 : PLAYER1);
  };
  const renderCircle = (id) => {
    return (
      <GameCircle
        id={id}
        className={`player${gameBoard[id]}`}
        handlePick={circleClicked}
      />
    );
  };

  return <div className="gameBoard">{initBoard()}</div>;
};

export default GameBoard;
