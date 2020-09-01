// Function component, should reder 25 gameTiles, one team with 9, on team with 8
import React, { useState } from "react";
import GameTile from "./GameTile";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    height: 100,
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function GameBoardContainer() {
  const classes = useStyles();

  const [spacing, setSpacing] = React.useState(2);

  // generate an array with 25 tiles
  const [gameBoard, setGameBoard] = useState([
    "flock",
    "known",
    "lethal",
    "song",
    "ready",
    "argue",
    "misty",
    "engine",
    "flowers",
    "expensive",
    "vase",
    "abounding",
    "donkey",
    "simplistic",
    "unite",
    "time",
    "dog",
    "glue",
    "prevent",
    "illustrious",
    "miniature",
    "multiply",
    "dinosaurs",
    "fancy",
    "stupid",
  ]);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {gameBoard.slice(0, 5).map((value) => (
            <Grid key={value} xs item>
              <GameTile word={value} />
            </Grid>
          ))}
        </Grid>
        <Grid container justify="center" spacing={spacing}>
          {gameBoard.slice(5, 10).map((value) => (
            <Grid key={value} xs item>
              <GameTile word={value} />
            </Grid>
          ))}
        </Grid>
        <Grid container justify="center" spacing={spacing}>
          {gameBoard.slice(10, 15).map((value) => (
            <Grid key={value} xs item>
              <GameTile word={value} />
            </Grid>
          ))}
        </Grid>
        <Grid container justify="center" spacing={spacing}>
          {gameBoard.slice(15, 20).map((value) => (
            <Grid key={value} xs item>
              <GameTile word={value} />
            </Grid>
          ))}
        </Grid>
        <Grid container justify="center" spacing={spacing}>
          {gameBoard.slice(20, 25).map((value) => (
            <Grid key={value} xs item>
              <GameTile word={value} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
