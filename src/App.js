import React, { Component } from 'react';

// Styling
import './App.css'

// Material UI
import {createMuiTheme} from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

// Components
import Navigation from './components/Navigation';
import Main from './components/Main';
// import customMuiTheme from './components/Theme';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#212121' },
    secondary: { main: '#FFC107' }
  }
});

class App extends Component {

  render() {
      return (
          <div className="App">
              <MuiThemeProvider theme={theme}>
                <Navigation />
                <Main />
              </MuiThemeProvider>
          </div>
      );
  }
}

export default App;
