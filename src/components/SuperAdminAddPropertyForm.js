import React, { useContext, useState } from 'react'
import { PropertyContext } from '../contexts/PropertyContext'
import { AuthContext } from '../contexts/AuthContext'

function SuperAdminAddPropertyForm() {

    const { properties, setProperties } = useContext(PropertyContext)
    const { users, loggedInUser } = useContext(AuthContext)

    const [newPropertyName, setNewPropertyName] = useState(``)
    const [newPropertyOwner, setNewPropertyOwner] = useState(``)
    const [newPropertyPrice, setNewPropertyPrice] = useState(``)

    const handleSubmit = (event) => {
        event.preventDefault()

        setProperties([...properties, {
            propertyName: newPropertyName,
            addedBy: loggedInUser.username,
            propertyOwner: newPropertyOwner,
            isActive: true,
            isApproved: false,
            isSold: false,
            price: newPropertyPrice,
            propertyBuyer: null
        }])
    }

    return <>

        <div className='border p-5'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label >Property Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={newPropertyName}
                        onChange={(event) => { setNewPropertyName(event.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Owner</label>
                    <select
                        className="form-control"
                        value={newPropertyOwner}
                        onChange={event => setNewPropertyOwner(event.target.value)}>
                        <option value="">---</option>
                        {users.filter(user => user.level === `1`).map(user => <option value={user.username}>{user.username} </option>)}
                    </select>
                </div>
                <div className="form-group">
                    <label >Price</label>
                    <input
                        type="number"
                        className="form-control"
                        min='0'
                        value={newPropertyPrice}
                        onChange={(event) => { setNewPropertyPrice(event.target.value) }} />
                </div>
                <button className='btn btn-success' type='submit'>Add Property</button>
            </form>
        </div>

    </>
}

export default SuperAdminAddPropertyForm
