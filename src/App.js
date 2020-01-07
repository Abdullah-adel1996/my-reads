import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/pages/Home';
import Search from './Components/pages/Search';
import './App.css';



export class App extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route path="/" exact component={Home} />    
            <Route path="/Search" component={Search} />
          </Switch>
      </div>
    )
  }
}

export default App
