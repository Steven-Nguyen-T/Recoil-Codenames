// Typing the word and hitting enter stuff
import React from "react";
import * as atoms from "../../recoil/store";
import { useRecoilState } from "recoil";
import axios from 'axios';

const { gameBoardState } = atoms;
// subscribe to the game board and the team sides, when hit will reset
const GameLogicContainer = () => {
  const [gameBoard, setGameBoard] = useRecoilState(gameBoardState);
  // create function to create a new game board
  // const newGame = () => {
  //   const arr = [];
  //   for (let i = 0; i < 25; i++) {
  //     arr.push(Math.floor(Math.random() * Math.floor(9999)));
  //   }
  //   console.log(arr);
  //   setGameBoard(arr);
  // };
  const newGame = async () => {
    const arrWords = [];
    const wordBank = await axios.get('./wordList.json')
    const words = wordBank.data['English (Original)']
    for (let i = 0; i < 25; i++) {
      let copy = words.slice(0)
      let randomElement = Math.floor(Math.random() * copy.length)
      arrWords.push(copy[randomElement])
      delete copy[randomElement]
    }
    setGameBoard(arrWords)
  } 
  return <button onClick={() => newGame()}>next game</button>;
};
export default GameLogicContainer;