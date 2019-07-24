import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Trending from './Pages/Trending';
import Collaborate from './Pages/Collaborate';
import Projects from './Pages/Projects';


function Main() {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/home' component={Home}></Route>
      <Route exact path='/signup' component={SignUp}></Route>
      <Route exact path='/trending' component={Trending}></Route>
      <Route exact path='/collaborate' component={Collaborate}></Route>
      <Route exact path='/projects' component={Projects}></Route>
    </Switch>
  );
}

export default Main;