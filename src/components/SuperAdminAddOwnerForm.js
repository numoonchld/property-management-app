import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'

function SuperAdminAddOwnerForm() {

    const { users, setUsers } = useContext(AuthContext)

    const [newUserName, setNewUserName] = useState(``)
    const [newUserPassword, setNewUserPassword] = useState(``)
    const [newUserLevel, setNewUserLevel] = useState(``)

    const handleSubmit = (event) => {
        event.preventDefault()

        setUsers([...users, { username: newUserName, password: newUserPassword, isActive: true, level: newUserLevel }])
        setNewUserName('')
        setNewUserPassword('')
        setNewUserLevel('')
    }

    return <>
        <div className='border p-5'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label >Username</label>
                    <input
                        type="text"
                        className="form-control"
                        value={newUserName}
                        onChange={(event) => { setNewUserName(event.target.value) }} />
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input
                        type="text"
                        className="form-control"
                        value={newUserPassword}
                        onChange={(event) => { setNewUserPassword(event.target.value) }} />
                </div>
                <div className="form-group">
                    <label>User Type</label>
                    <select
                        className="form-control"
                        value={newUserLevel}
                        onChange={event => setNewUserLevel(event.target.value)}>
                        <option value="">---</option>
                        <option value='1'>Owner</option>
                        <option value='2'>User</option>
                    </select>
                </div>
                <button className='btn btn-success' type='submit'>Add User</button>
            </form>
        </div>
    </>
}

export default SuperAdminAddOwnerForm
