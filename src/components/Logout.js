import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { withRouter } from 'react-router-dom'

function Logout({ history }) {

    const { setIsAuthenticated, setLoggedInUser } = useContext(AuthContext)

    const logout = () => {
        setIsAuthenticated(false)
        setLoggedInUser(null)
        history.push('/')
    }

    return <>
        <div className='card mx-auto w-75 p-5 my-5 text-center'>
            <h4>Are you sure you want to logout?</h4>
            <button className='btn btn-success my-3' onClick={logout}> Yes </button>
            <button className='btn btn-primary my-3' onClick={() => history.goBack()}> No </button>
        </div>
    </>
}

export default withRouter(Logout)
