import React, { useContext } from 'react'
import { PropertyContext } from '../contexts/PropertyContext'
import { AuthContext } from '../contexts/AuthContext'

const TableRow = ({ property }) => {


    return <>
        <tr>
            <td>
                {property.propertyName}
            </td>


            <td>
                {property.price}
            </td>

        </tr></>

}

function UserMyProperties() {
    const { properties } = useContext(PropertyContext)
    const { loggedInUser } = useContext(AuthContext)

    return <>
        <table className="table mt-3 mb-5 border ">
            <thead>
                <th>Property Name</th>
                <th>Price</th>
            </thead>
            <tbody>
                {properties.filter(property => property.isActive === true && property.propertyBuyer === loggedInUser.username && property.isSold === true).map(property => <TableRow property={property} />)}
            </tbody>
        </table>
    </>

}

export default UserMyProperties
