import './App.css';
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import Dashboard from './components/Dashboard';


function App() {
  return <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/dashboard' component={Dashboard} />
    </Switch>
  </BrowserRouter>

}

export default App;
