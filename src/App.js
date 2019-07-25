import React, { Component } from 'react';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar.js'
import Main from './Components/Main';
import Copyright from './Components/Copyright/Copyright';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Main />
        <Copyright />
      </div>
    );
  }
}

export default App;
