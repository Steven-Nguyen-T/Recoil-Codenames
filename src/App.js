import React from "react";
import GameBoardContainer from "./components/GameBoard/GameBoardContainer";
import TeamSideContainer from "./components/TeamSide/TeamSideContainer";

function App() {
  return (
    <div>
      <TeamSideContainer />
      <GameBoardContainer />
      <TeamSideContainer />
    </div>
  );
}

export default App;
