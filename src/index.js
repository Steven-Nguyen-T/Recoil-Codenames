import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { RecoilRoot, atom, selector } from "recoil";
import RecoilizeDebugger from "recoilize";

import * as nodes from "./recoil/store";

const root = document.getElementById("root");

ReactDOM.render(
  <RecoilRoot>
    <RecoilizeDebugger nodes={nodes} root={root} />
    <App />
  </RecoilRoot>,
  document.getElementById("root")
);
