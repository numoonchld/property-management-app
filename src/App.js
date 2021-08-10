import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout'
import { AuthContext } from './contexts/AuthContext';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [users, setUsers] = useState([{ username: `superuser0`, password: `0000`, isActive: true, level: 0 }])
  const [loggedInUser, setLoggedInUser] = useState(null)


  return <div className="App">
    <AuthContext.Provider value={{ users, isAuthenticated, loggedInUser, setUsers, setIsAuthenticated, setLoggedInUser }}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/logout' component={Logout} />
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  </div>



}

export default App;
