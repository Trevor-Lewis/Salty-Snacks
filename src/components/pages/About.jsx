import React from 'react';

// Material UI
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            width:"100%",
            padding: "45px",
        },
    },
}));


function About() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Paper elevation={3}>
          This is the ABOUT page
        </Paper>
      </div>
    )
}

export default About
