import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout'
import { AuthContext } from './contexts/AuthContext';
import { PropertyContext } from './contexts/PropertyContext'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [users, setUsers] = useState([{ username: `superuser0`, password: `0000`, isActive: true, level: 0 }])
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [properties, setProperties] = useState([])


  return <div className="App">
    <AuthContext.Provider value={{ users, isAuthenticated, loggedInUser, setUsers, setIsAuthenticated, setLoggedInUser }}>
      <PropertyContext.Provider value={ {properties, setProperties}} >
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/logout' component={Logout} />
        </Switch>
      </BrowserRouter>
      </PropertyContext.Provider>
    </AuthContext.Provider>
  </div>



}

export default App;
