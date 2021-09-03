import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import SuperAdminArea from './SuperAdminArea'
import OwnerArea from './OwnerArea'
import UserArea from './UserArea'

function Dashboard() {

    const { loggedInUser, isAuthenticated } = useContext(AuthContext)

    if (isAuthenticated && loggedInUser) {

        const currentuserLevel = loggedInUser.level

        // SUPER ADMIN CONTENT

        if (currentuserLevel === 0) {
            return <SuperAdminArea loggedInUser={loggedInUser} />
        }
            
        // OWNER CONTENT
        if (currentuserLevel === `1`) {
            return <OwnerArea loggedInUser={loggedInUser} />
        }
        // USER CONTENT
        if (currentuserLevel === `2`) {
            return <UserArea loggedInUser={loggedInUser} />
        }
            
    }


    return <>
        <div className='card mx-auto w-75 p-5 my-5'>
            <Link to='/'>Login Page</Link>
        </div>
    </>



}

export default Dashboard
