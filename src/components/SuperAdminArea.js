import React from 'react'
import { Link } from 'react-router-dom'
import SuperAdminPropertyTable from './SuperAdminPropertyTable'
import SuperAdminOwnerTable from './SuperAdminOwnerTable'
import SuperAdminAddOwnerForm from './SuperAdminAddOwnerForm'
import SuperAdminAddPropertyForm from './SuperAdminAddPropertyForm'

function SuperAdminArea({ loggedInUser }) {
    return <>
        <div className='card w-75 mx-auto my-5 p-5'>
            <h2>Welcome, {loggedInUser.username}</h2>
            <small> <Link to='/logout'>Logout</Link> </small>
            <hr />
            <h4>Users</h4>
            <SuperAdminOwnerTable />
            <h4>Add User </h4>
            <SuperAdminAddOwnerForm />
            <hr />
            <h4>Properties</h4>
            <SuperAdminPropertyTable />
            <h4>Add Property</h4>
            <SuperAdminAddPropertyForm />
        </div>
    </>
}

export default SuperAdminArea
