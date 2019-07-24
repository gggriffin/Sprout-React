import React, { Component } from 'react';
import Header from './Components/Header';
import NavBar from './Components/NavBar'
import Main from './Components/Main';
import Copyright from './Components/Copyright';

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
