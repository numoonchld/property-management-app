import React from 'react'
import { Link } from 'react-router-dom'
import OwnerPropertyTable from './OwnerPropertyTable'

function OwnerArea({ loggedInUser }) {
    return <>
        <div className='card w-75 mx-auto my-5 p-5'>
            <h2>Welcome, {loggedInUser.username}</h2>
            <small> <Link to='/logout'>Logout</Link> </small>
            <hr />
            <h4>Properties</h4>
            <OwnerPropertyTable />

        </div>
    </>
}

export default OwnerArea
