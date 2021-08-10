import React from 'react'
import { Link } from 'react-router-dom'
import UserMyProperties from './UserMyProperties'

import UserPropertyTable from './UserPropertyTable'

function UserArea({ loggedInUser }) {


    return <>
    <div className='card w-75 mx-auto my-5 p-5'>
            <h2>Welcome, {loggedInUser.username}</h2>
            <small> <Link to='/logout'>Logout</Link> </small>
            <hr />
            <h4>Properties For Sale</h4> 
            <UserPropertyTable />
            <hr />
            <h4> My Properties </h4>
            <UserMyProperties/>
        </div></>
}

export default UserArea
