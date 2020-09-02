import { atom } from "recoil";

// export const canvasLayoutState = atom({
//   key: "canvasLayoutState",
//   default: {
//     x: 0,
//     y: 0,
//     width: 800,
//     height: 600,
//   },
// });

// make gamebo

// keeping track of textState
export const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "sdsssds", // default value (aka initial value)
});

// keeping tack of the score -- maybe these will be selectors just based off gameboard
export const redTeam = atom({
  key: "redTeam", // unique ID (with respect to other atoms/selectors)
  default: {
    score: 9,
    operatives: [],
    spymaster: [],
  }, // default value (aka initial value)
});
