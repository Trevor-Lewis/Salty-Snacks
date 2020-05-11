import React from 'react';
import Menu from './Menu';

// Material-UI
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25,
    backgroundColor: theme.primary,
  },
  logo: {
    marginRight: 15,
    fontSize: '1.6rem'
  }
}));


export default function Navigation() {
  
  const classes = useStyles();

  return (
      <AppBar className = {classes.appBar}>
        <Menu />
        <h1 className={classes.logo}>Sugar Buzz</h1>
      </AppBar>
  )
}
