import React, {useEffect, useState} from 'react'
import { deleteItemMaster, listItemMaster } from '../services/ItemMasterService'
import { useNavigate } from 'react-router-dom'

const ListItemMasterComponent = () => {

    // function to connect with rest API to pull data
    const [itemMaster, setItemMaster] = useState([])

    const navigator = useNavigate();

    // function to connect (get response of the rest API) with rest API to pull data, listItemMaster gets data from ItemMaster service
    useEffect(() => {
        getAllItemMaster(); //getAllItemMaster was created to call into this useEffect and also at deleteItemMaster function below, originally i coded this in the useEffect block, now you can see the function below

    }, [])

    function getAllItemMaster(){
        listItemMaster().then((response) => {
            setItemMaster(response.data)
        }).catch(error => {
            console.error(error);
        })
    }

    //add item navigator
    function addNewItem(){
        navigator('/add_item')
    }

    //update item navigator
    function updateItem(id){
        navigator(`/update_item/${id}`)
    }

    function removeItem(id){
        console.log(id);

        deleteItemMaster(id).then((response) => {
            getAllItemMaster();// the function is used here to be called again
        }).catch(error => {
            console.error(error);
        })
    }

  return (
    <div className='container'>

        <h2 className='text-center'>List of Items</h2>
        <button className='btn btn-primary mb-2' onClick={addNewItem}>Add Item</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Item ID</th>
                    <th>Sku</th>
                    <th>Attribute 1</th>
                    <th>Attribute 1</th>
                    <th>Actions</th>
                </tr>
            </thead>
                <tbody>
                    {
                        itemMaster.map(itemMaster =>
                            <tr key={itemMaster.id}>
                                <td>{itemMaster.id}</td>
                                <td>{itemMaster.sku}</td>
                                <td>{itemMaster.attribute1}</td>
                                <td>{itemMaster.attribute2}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateItem(itemMaster.id)}>Update</button>
                                    <button className='btn btn-danger' onClick={() => removeItem(itemMaster.id)}
                                        style={{marginLeft: '10px'}}
                                    >Delete</button>
                                </td>
                            </tr>
                            )
                    }
                </tbody>
        </table>
    </div>
  )
}

export default ListItemMasterComponent