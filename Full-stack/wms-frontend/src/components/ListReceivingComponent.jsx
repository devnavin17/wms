import React, { useEffect, useState } from 'react'
import { listReceivng } from '../services/ItemMasterService';
// import { useNavigate } from 'react-router-dom'

const ListReceivingComponent = () => {

    const[receiving, setReceiving] = useState([])

    useEffect(() => {
        getAllReceiving();
    }, [])

    function getAllReceiving(){
        listReceivng().then((response) => {
            setReceiving(response.data)
        }).catch(error => {
            console.error(error);
        })
    }

  return (
    <div className='container'>
    <h2 className='text-center'>Received Item List</h2>
    <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Receiving ID</th>
                <th>Sku</th>
                <th>Quantity Received</th>
                <th>Expiry Date</th>
                <th>Received Date</th>
            </tr>
        </thead>
            <tbody>
                {
                receiving.map(receiving =>
                <tr key={receiving.id}>
                    <td>{receiving.id}</td>
                    <td>{receiving.sku}</td>
                    <td>{receiving.qty_received}</td>
                    <td>{receiving.expiry_date}</td>
                    <td>{receiving.received_time}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListReceivingComponent