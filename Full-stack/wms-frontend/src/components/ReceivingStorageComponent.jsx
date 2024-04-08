import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getReceivingStorage, createItemStorage, updateReceivingStatus } from '../services/ReceivingStorageService'

const ReceivingStorageComponent = () => {

    const[id, setId]=useState('')
    const[sku, setSku]=useState('')
    const[qty_received, setQtyReceived]=useState('')
    const[storage_id, setStorageId]=useState('')

    const qty = qty_received;

    const [errors, setErrors] = useState({
        sku: '',
        storage_id: '',
        qty: ''
    })

    const navigator = useNavigate();


    const [receiving, setReceiving] = useState(undefined)
    const [item_storage, setItemStorage] = useState(undefined)

    const getReceiving = async () => {
        const data = await getReceivingStorage(id).then(response => response.data)
        setSku(data.sku)
        setQtyReceived(data.qty_received)
    }

    function createItemStorage1(e){
        e.preventDefault(); //preventDefault holds the error message, or else it will disappear from the web app

         if(validateForm()){ //validateForm is what prevents empty data to go post into database, i have coded the funtions as per stated below

            const item_storage = {sku,qty,storage_id}
            console.log(item_storage)

            createItemStorage(item_storage)
            .then((response) => {
                console.log(response.data);
                return updateReceivingStatus1(e); // returning a promise to chain
            })
            .then(() => {
                console.log('Both operations completed successfully');
                navigator('/item_storage_page');
            })
            .catch(error => {
                console.error(error);
            });

        }
        
    }

    function updateReceivingStatus1(e){
            e.preventDefault(); //preventDefault holds the error message, or else it will disappear from the web app


            const receiving = {}
            console.log(receiving)

            updateReceivingStatus(id, receiving).then((response) => {
                console.log(response.data);
                // navigator('/receiving')
            }).catch(error => {
                console.error(error);
            })
        }

    

    function validateForm(){
        let valid = true;
                            //... is spread operator to copy object into another object, we are copying errors object into seperate variable
        const errorsCopy = {... errors}

        if(sku){
            errorsCopy.sku = '';
        } else{
            errorsCopy.sku = 'Sku is required';
            valid = false;
        }

        if(storage_id){
            errorsCopy.storage_id = '';
        } else{
            errorsCopy.storage_id = 'Location is required';
            valid = false;
        }

        if(qty){
            errorsCopy.qty = '';
        } else{
            errorsCopy.qty = 'Qty is required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }
    
    
  return (
    <div className='container'>
        <br /><br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h2 className='text-center'>Storage</h2>
                <div className='card-body'>
                <form>
                    <div className='form-group mb-2'>
                        <label className='form-label'>Receiving Id:</label>
                        <input
                            type='text'
                            placeholder='Enter receiving ID'
                            name='id'
                            value={id}
                            className={`form-control ${ errors.sku ? 'is-invalid': '' }`}
                            onChange={(e) => setId(e.target.value)}
                            >
                        </input>
                        { errors.sku && <div className='invalid-feedback'> { errors.sku} </div> }
                    </div>

                    <button type='button' className='btn btn-info' onClick={getReceiving}>Load data</button>

                    <div className='form-group mb-2'>
                        <label className='form-label'>Sku code:</label>
                        <input
                            type='text'
                            placeholder='Enter SKU code'
                            name='sku'
                            value={sku}
                            onChange={(e) => setSku(e.target.value)}
                            >
                        </input>
                    </div>

                    <div className='form-group mb-2'>
                        <label className='form-label'>Qty Received:</label>
                        <input
                            type='text'
                            placeholder='Enter Quantity Received'
                            name='qty_received'
                            value={qty_received}
                            onChange={(e) => setQtyReceived(e.target.value)}
                        >
                        </input>
                    </div>

                    <div className='form-group mb-2'>
                        <label className='form-label'>To Location:</label>
                        <input
                            type='text'
                            placeholder='Enter To Location'
                            name='storage_id'
                            value={storage_id}
                            onChange={(e) => setStorageId(e.target.value)}
                        >
                        </input>
                    </div>
                        <button className='btn btn-success' onClick={createItemStorage1}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReceivingStorageComponent