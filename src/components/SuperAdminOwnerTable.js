import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'


const TableRow = ({ user }) => {

    const { users, setUsers } = useContext(AuthContext)

    return <>
        <tr>
            <td>
                {user.username}
            </td>
            <td>
                <input
                    type='checkbox'
                    checked={user.isActive} 
                />
            </td>
            <td>
                {user.level === `1` ? `Owner` : `User`}
            </td>
        </tr>
    </>
}

function SuperAdminOwnerTable() {

    const { users } = useContext(AuthContext)

    return <>
        <table className="table mt-3 mb-5 border ">
            <thead>
                <th>Username</th>
                <th>Active</th>
                <th>Type</th>
            </thead>
            <tbody>
                {users.filter(user => user.level != 0).map(user => <TableRow user={user} />)}
            </tbody>
        </table>
    </>
}

export default SuperAdminOwnerTable
