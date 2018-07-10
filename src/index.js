import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './CSS/index.css';

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

// your code goes here
class Home extends Component{
  render(){
    return(
      // your code goes here
      <h1>Home</h1>
    )
  }
}
const Navigation = () => {
  return(
    <div>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/happy'>Happy</NavLink></li>
          <li><NavLink to='/Sleepy'>Sleepy</NavLink></li>
          <li><NavLink to='/guilty'>Guilty</NavLink></li>
        </ul>
    </div>

  );
}


ReactDOM.render((
  <BrowserRouter>
  <div>
    <Navigation/>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/happy' component={Happy} />
      <Route path='/sleepy' component={Sleepy} />
      <Route path='/guilty' component={Guilty} />
    </Switch>
    </div>
  </BrowserRouter>
  ), document.getElementById('root'));
