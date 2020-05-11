import React from "react";
import { Switch, Route } from 'react-router-dom'

// Pages
import About from "./pages/About";
import Delivery from "./pages/Delivery";
import Home from "./pages/Home";

// Material-UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export default function Main() {
  const classes = useStyles();
  return (
    <main>
        <Switch className={classes.container}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/delivery" component={Delivery} />
        </Switch>
    </main>
  );
}
