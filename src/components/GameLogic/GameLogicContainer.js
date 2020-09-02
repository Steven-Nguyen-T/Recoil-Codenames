// Typing the word and hitting enter stuff
import React from "react";

import * as atoms from "../../recoil/store";
import { useRecoilState } from "recoil";

const { gameBoardState } = atoms;
// subscribe to the game board and the team sides, when hit will reset

const GameLogicContainer = () => {
  const [gameBoard, setGameBoard] = useRecoilState(gameBoardState);

  // create function to create a new game board
  const newGame = () => {
    const arr = [];
    for (let i = 0; i < 25; i++) {
      arr.push(Math.floor(Math.random() * Math.floor(100)));
    }
    console.log(arr);
    setGameBoard(arr);
  };

  return <button onClick={() => newGame()}>next game</button>;
};

export default GameLogicContainer;
