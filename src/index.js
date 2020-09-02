import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { RecoilRoot, atom, selector } from "recoil";
import RecoilizeDebugger from "recoilize";

import * as nodes from "./recoil/store";

export const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "ddfddfdsd", // default value (aka initial value)
});
export const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});
const root = document.getElementById("root");

ReactDOM.render(
  <RecoilRoot>
    <RecoilizeDebugger nodes={nodes} root={root} />
    <App />
  </RecoilRoot>,
  document.getElementById("root")
);
