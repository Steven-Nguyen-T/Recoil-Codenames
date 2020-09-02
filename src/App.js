import React from "react";
import GameBoardContainer from "./components/GameBoard/GameBoardContainer";
import TeamSideContainer from "./components/TeamSide/TeamSideContainer";
import GameLogicContainer from "./components/GameLogic/GameLogicContainer";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
      <Typography variant="h2" align="center">
        Codenames
      </Typography>
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
      <Typography variant="h4" align="right">
        <GameLogicContainer />
      </Typography>
    </div>
  );
}

export default App;
