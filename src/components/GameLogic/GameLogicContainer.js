// Typing the word and hitting enter stuff
import React from "react";

import * as atoms from "../../recoil/store";
import { useRecoilState } from "recoil";

const { gameBoardState } = atoms;
// subscribe to the game board and the team sides, when hit will reset

const GameLogicContainer = () => {
  const [gameBoard, setGameBoard] = useRecoilState(gameBoardState);

  // create function to create a new game board

  return <button onClick={() => setGameBoard(["new"])}>next game</button>;
};

export default GameLogicContainer;
