import React, {useContext} from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { PropertyContext } from '../contexts/PropertyContext'

const TableRow = ({ property }) => {

    const { properties, setProperties } = useContext(PropertyContext)

    const { loggedInUser } = useContext(AuthContext)


    const buyProperty = () => {

        setProperties(properties.map( eachProperty => {
            if (eachProperty.propertyName === property.propertyName) {
                return {
                    ...eachProperty,
                    isSold: true,
                    propertyBuyer: loggedInUser.username

                }
            }
            return eachProperty
        }))

    }
    return <>
    <tr>
            <td>
                {property.propertyName}
            </td>

            <td>
                {property.propertyOwner}
            </td>
            <td>
                {property.price}
            </td>
            <td>
                <button className="btn btn-success" onClick={buyProperty}> Buy </button>
            </td>
        </tr></>

}

function UserPropertyTable() {

    const { properties } = useContext(PropertyContext)

    return <>
        <table className="table mt-3 mb-5 border ">
            <thead>
                <th>Property Name</th>
                <th>Property Owner</th>
                <th>Price</th>
                <th></th>
            </thead>
            <tbody>
                {properties.filter(property => property.isActive === true && property.isApproved === true && property.isSold === false).map(property => <TableRow property={property} />)}
            </tbody>
        </table>
    </>
}

export default UserPropertyTable
