import { atom } from "recoil";

// State for each atom: dynamically create 25 on render
export const gameTileState = memoize((id, color, text) =>
  atom({
    key: `gameTile${id}`,
    default: {
      text,
      isFlipped: false,
      votes: [],
      color,
    },
  })
);
