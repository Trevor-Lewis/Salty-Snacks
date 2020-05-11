import React from 'react';

// Components
import ZipForm from '../Form';

// Material UI
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            width:"100%",
            padding: "100px 45px 45px 45px",
        },
    },
}));


function Delivery() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Paper elevation={3}>
            {/* <Typography variant='h5' component='h2'>
                We Deliver to the local Nashville area!
            </Typography> */}
            <ZipForm />
        </Paper>
      </div>
    )
}

export default Delivery
