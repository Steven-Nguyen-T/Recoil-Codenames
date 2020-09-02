import React from "react";
import { useRecoilState } from "recoil";
import * as atoms from "../../recoil/store";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const { redTeamState } = atoms;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const TeamSideContainer = () => {
  const classes = useStyles();

  // using recoil state
  const [redTeam, setRedTeam] = useRecoilState(redTeamState);

  return (
    <div>
      Score: {redTeam.score}
      <Divider />
      Operatives
      <Divider />
      Spymaster
      <Divider />
    </div>
  );
};

export default TeamSideContainer;
