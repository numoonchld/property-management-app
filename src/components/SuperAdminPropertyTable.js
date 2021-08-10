import React, { useContext } from 'react'
import { PropertyContext } from '../contexts/PropertyContext'


const TableRow = ({ property }) => {

    const { properties, setProperties } = useContext(PropertyContext)

    const handlePropertyActive = (event) => {
        
        setProperties(properties.map( eachProperty => {
            if (eachProperty.propertyName === property.propertyName) {
                return {
                    ...eachProperty,
                    isActive: event.target.checked
                }
            }
            return eachProperty
        }))
    }

    const handlePropertyApproval = (event) => {
        
        setProperties(properties.map( eachProperty => {
            if (eachProperty.propertyName === property.propertyName) {
                return {
                    ...eachProperty,
                    isApproved: event.target.checked
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
                <input
                    type='checkbox'
                    checked={property.isActive} 
                    onChange={handlePropertyActive}
                />
            </td>
            <td>
                <input
                    type='checkbox'
                    checked={property.isApproved} 
                    onChange={handlePropertyApproval}
                />
            </td>
            <td>
                {property.propertyOwner}
            </td>
            <td>
                {property.isSold ? property.propertyBuyer : `Not Sold`}
            </td>
            <td>
                {property.price}
            </td>
        </tr>
    </>
}

function SuperAdminPropertyTable() {

    const { properties } = useContext(PropertyContext)

    return <>
        <table className="table mt-3 mb-5 border ">
            <thead>
                <th>Property Name</th>
                <th>Active</th>
                <th>Approved</th>
                <th>Owner</th>
                <th>Buyer</th>
                <th>Price</th>
            </thead>
            <tbody>
                {properties.filter(property => property.isActive === true).map(property => <TableRow property={property} />)}
            </tbody>
        </table>
    </>
}

export default SuperAdminPropertyTable
