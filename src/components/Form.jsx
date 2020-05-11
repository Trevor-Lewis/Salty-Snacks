import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

// Components
import CheckoutMenu from './CheckoutMenu'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));


class ZipForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deliverable: true,
      value: '',
      canDeliver: 'YOU CAN HAS SWEETS',
      cannotDeliver: `I'm sorry, we cannot deliver to your area. :(`
    }
  }
  
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleZipcode = () => {
    this.setState({
      deliverable: null
    }, () => {
    })
  }
  
  checkZipcode = (e) => {
      e.preventDefault()

      if(
        // Thompsons Station
           Number(this.state.value) === 37179
        // Spring Hill 
        || Number(this.state.value) === 37174
        // Franklin
        || Number(this.state.value) === 37027
        || Number(this.state.value) === 37064
        || Number(this.state.value) === 37065
        || Number(this.state.value) === 37067
        || Number(this.state.value) === 37068
        || Number(this.state.value) === 37069
        // Brentwood
        || Number(this.state.value) === 37027
       ) {
        this.setState({
          deliverable: true
        })
      } else {
        this.setState({
          deliverable: false
        })
      }
  }
  render(){    
    // const classes = useStyles();
    if (this.state.deliverable === null) {
      return (
        <form 
          // className={classes.root} 
          onSubmit={this.checkZipcode}
          noValidate 
          autoComplete="off">
        <Typography variant='h5' component='h2'>
          Find out if we can deliver to you!
        </Typography>
            <Typography variant='h5' component='h2'>
                What is your zipcode?
            </Typography>
          <TextField
            value={this.state.value}
            onChange={this.handleChange}
            id="standard-secondary" 
            label="ZipCode" 
            color="secondary" 
          />
        </form>
      );} else if(this.state.deliverable === false) {
        return(
          <Paper>
            <Typography variant='h5' component='h2'>
              {this.state.cannotDeliver}
            </Typography>
            <Button variant="contained" onClick={this.handleZipcode} color="primary">
              Wrong ZipCode?
            </Button>
          </Paper>
        )
      } 
      else {
        return(
          <Paper>
            <Typography>
              Let's get you some snacks!
            </Typography>
            <Button variant="contained" onClick={this.handleZipcode} color="primary">
              Wrong ZipCode?
            </Button>
            <CheckoutMenu />
          </Paper>
        )
      }
      
    }
}

export default ZipForm