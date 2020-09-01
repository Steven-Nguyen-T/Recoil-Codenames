import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const TeamSideContainer = () => {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button>Score:</ListItem>
      <Divider />
      <ListItem button divider>
        Operatives
      </ListItem>
      <ListItem button>Spymaster</ListItem>
      <Divider light />
    </List>
  );
};

export default TeamSideContainer;
