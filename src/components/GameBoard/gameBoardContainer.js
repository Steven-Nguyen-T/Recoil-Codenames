// Function component, should reder 25 gameTiles, one team with 9, on team with 8
import React, { useState } from "react";
import GameTile from "./GameTile";

function GameBoardContainer() {
  // generate an array with 25 tiles
  const [gameBoard, setGameBoard] = useState([
    "flock",
    "known",
    "lethal",
    "song",
    "ready",
    "argue",
    "misty",
    "engine",
    "flowers",
    "expensive",
    "vase",
    "abounding",
    "donkey",
    "simplistic",
    "unite",
    "time",
    "dog",
    "glue",
    "prevent",
    "illustrious",
    "miniature",
    "multiply",
    "dinosaurs",
    "fancy",
    "stupid",
  ]);

  // We need to just return 25 individual game tiles -- one simple loop
  return (
    <div>
      {gameBoard.map((value) => (
        <GameTile />
      ))}
    </div>
  );
}

export default GameBoardContainer;
