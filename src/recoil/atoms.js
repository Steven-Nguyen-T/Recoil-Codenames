import { atom } from "recoil";

export const gameBoardState = atom({
  key: "gameBoardState",
  default: {
    // array with all tiles/words
  },
});

// State for each atom: dynamically create 25 on render
// word
// team color
// isSelected

// Team Side State

// General Game Logic State
