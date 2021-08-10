import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { withRouter } from 'react-router-dom'

function Login({history}) {

    const { users, setIsAuthenticated, setLoggedInUser} = useContext(AuthContext)

    const [username, setUsername] = useState(``)
    const [password, setPassword] = useState(``)    


    const handleSubmit = (event) => {
        event.preventDefault()

        const loginMatch = users.filter( user => user.username === username && user.password === password && user.isActive)

        if (loginMatch.length === 1) {
            setLoggedInUser(loginMatch[0])
            setIsAuthenticated(true)
            history.push('/dashboard')
        }
        else {
            window.alert('Login Credentials incorrect or Inactive User!')
        }

        
        

    }
    return <>

        <div className='card w-75 mx-auto my-5 p-5'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={(event) => {setUsername(event.target.value)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(event) => {setPassword(event.target.value)}}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    </>

}

export default withRouter(Login)
