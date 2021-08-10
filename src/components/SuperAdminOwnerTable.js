import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'


const TableRow = ({ user }) => {

    const { users, setUsers } = useContext(AuthContext)

    const handleUserActive = (event) => {
        
        setUsers(users.map( eachUser => {
            if (eachUser.username === user.username) {
                return {
                    ...eachUser,
                    isActive: event.target.checked
                }
            }
            return eachUser
        }))
    }

    return <>
        <tr>
            <td>
                {user.username}
            </td>
            <td>
                {user.password}
            </td>
            <td>
                <input
                    type='checkbox'
                    checked={user.isActive} 
                    onChange={handleUserActive}
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
                <th>Password</th>
                <th>Active</th>
                <th>Type</th>
            </thead>
            <tbody>
                {users.filter(user => user.level !== 0).map(user => <TableRow user={user} />)}
            </tbody>
        </table>
    </>
}

export default SuperAdminOwnerTable
