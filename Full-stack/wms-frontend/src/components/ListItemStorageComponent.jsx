import React, { useEffect, useState } from 'react'
import { listItemStorage } from '../services/ReceivingStorageService';


const ListItemStorageComponent = () => {

    const [itemStorage, setItemStorage] = useState([])
    
    useEffect(() => {
        getAllItemStorage();
    }, [])

    function getAllItemStorage(){
        listItemStorage().then((response) => {
            setItemStorage(response.data)
        }).catch(error => {
            console.error(error);
        })
    }

  return (
    <div className='container'>

        <h2 className='text-center'>List of Items Storage</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Sku</th>
                    <th>Quantity</th>
                    <th>Storage ID</th>
                </tr>
            </thead>
                <tbody>
                    {
                        itemStorage.map(itemStorage =>
                            <tr key={itemStorage.id}>
                                <td>{itemStorage.id}</td>
                                <td>{itemStorage.sku}</td>
                                <td>{itemStorage.qty}</td>
                                <td>{itemStorage.storage_id}</td>
                                <td>
                                </td>
                            </tr>
                            )
                    }
                </tbody>
        </table>
    </div>
  )
}

export default ListItemStorageComponent