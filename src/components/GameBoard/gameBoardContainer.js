// Function component, should reder 25 gameTiles, one team with 9, on team with 8
import React, { useEffect } from "react";
import GameTile from "./GameTile";
import * as atoms from "../../recoil/store";
import { useRecoilState } from "recoil";
import axios from 'axios'

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

const { gameBoardState } = atoms;

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

function GameBoardContainer() {
  const classes = useStyles();

  const [spacing, setSpacing] = React.useState(2);
  // generate an array with 25 tiles
  const [gameBoard, setGameBoard] = useRecoilState(gameBoardState);

  useEffect(async () => {
    const arrWords = [];
    const wordBank = await axios.get('./wordList.json')
    const words = wordBank.data['English (Original)']
    for (let i = 0; i < 25; i++) {
      let copy = words.slice(0)
      let randomElement = Math.floor(Math.random() * copy.length)
      arrWords.push(copy[randomElement])
      delete copy[randomElement]
    }
    setGameBoard(arrWords)
  }, [setGameBoard]);

  // We need to just return 25 individual game tiles -- one simple loop
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

export default GameBoardContainer;
