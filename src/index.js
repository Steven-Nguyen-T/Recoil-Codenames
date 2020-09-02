import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { RecoilRoot, atom, selector } from "recoil";
import RecoilizeDebugger from "recoilize";

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "dsdff", // default value (aka initial value)
});
const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

ReactDOM.render(
  <RecoilRoot>
    <RecoilizeDebugger
      nodes={[textState, charCountState]}
      root={document.getElementById("root")}
    />
    <App />
  </RecoilRoot>,
  document.getElementById("root")
);
