import { atom } from "recoil";

// make gamebo

// keeping tack of the score -- maybe these will be selectors just based off gameboard
export const redTeamState = atom({
  key: "redTeam", // unique ID (with respect to other atoms/selectors)
  default: {
    score: 9,
    operatives: [],
    spymaster: [],
  }, // default value (aka initial value)
});

export const blueTeamState = atom({
  key: "blueTeam", // unique ID (with respect to other atoms/selectors)
  default: {
    score: 8,
    operatives: [],
    spymaster: [],
  }, // default value (aka initial value)
});

// Create a gameboard -- gameboard should become filled with 25, word, isFlipped etc...
export const gameBoardState = atom({
  key: "gameBoard",
  default: [],
});
