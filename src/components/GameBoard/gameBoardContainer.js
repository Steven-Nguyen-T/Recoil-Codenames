// Function component, should reder 25 gameTiles, one team with 9, on team with 8
import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function GameBoardContainer() {
  const classes = useStyles();

  // generate an array with 25 words
  const [gameBoard, setGameBoard] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
  ]);

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={2.4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={2.4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={2.4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={2.4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={2.4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
