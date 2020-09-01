import { atom } from "recoil";

export const gameBoardState = atom({
  key: "gameBoardState",
  default: {
    // array with all tiles/words
  },
});
