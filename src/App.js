import React from "react";
import GameBoardContainer from "./components/GameBoard/GameBoardContainer";
import TeamSideContainer from "./components/TeamSide/TeamSideContainer";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <TeamSideContainer />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <GameBoardContainer />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <TeamSideContainer />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
