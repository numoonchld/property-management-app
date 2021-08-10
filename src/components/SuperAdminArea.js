import React from 'react'
import SuperAdminPropertyTable from './SuperAdminPropertyTable'
import SuperAdminOwnerTable from './SuperAdminOwnerTable'

function SuperAdminArea({ loggedInUser }) {
    return (
        <div className='card w-75 mx-auto my-5 p-5'>
            Welcome, {loggedInUser.username}
            <hr />
            <SuperAdminOwnerTable />
            <hr />
            <SuperAdminPropertyTable />
        </div>
    )
}

export default SuperAdminArea
