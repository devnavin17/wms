import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createReceiving } from '../services/ItemMasterService'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const ReceivingComponent = () =>{
  

    const[sku, setSku] = useState('')
    const[qty_received, setQtyReceived] = useState('')
    const[expiry_date, setExpiryDate] = useState(new Date())
    //const[received_time, setReceivedTime] = useState('')

    //const {id} = useParams();
    //error handling
    const [errors, setErrors] = useState({
        sku: '',
        qty_received: '',
        expiry_date: ''
    });

    const navigator = useNavigate();

    const handleDateChange = (date) => {
        setExpiryDate(date);
    };
    

    function saveReceiving(e){
        e.preventDefault();

        if(validateForm()){

            const receiving = {sku,qty_received,expiry_date}
            console.log(receiving)

        createReceiving(receiving).then((response) =>{
            console.log(response.data);
            navigator('/receiving_list')
        }).catch(error => {
            console.error(error);
        })
    }
        
}

        //error validation
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
    
            if(qty_received){
                errorsCopy.qty_received = '';
            } else {
                errorsCopy.qty_received = 'Receiving qty is required'
                valid = false;
            }
    
            setErrors(errorsCopy);
    
            return valid;
        }

    return (
    <div className='container'>
        <br /><br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'></div>
            <h2 className='text-center'>Item Receiving</h2>
            <div className='card-body'>
                <form>
                     <div className='form-group mb-2'>
                        <label className='form-label'>Sku code:</label>
                        <input
                            type='text'
                            placeholder='Enter SKU code'
                            name='sku'
                            value={sku}
                            className={`form-control ${ errors.sku ? 'is-invalid': '' }`}
                            onChange={(e) => setSku(e.target.value)}
                            >
                            </input>
                            { errors.sku && <div className='invalid-feedback'> { errors.sku} </div> }
                            </div>

                            <div className='form-group mb-2'>
                            <label className='form-label'>Qty Received:</label>
                            <input
                                type='text'
                                placeholder='Enter Quantity Received'
                                name='qty_received'
                                value={qty_received}
                                className={`form-control ${ errors.qty_received ? 'is-invalid': '' }`}
                                onChange={(e) => setQtyReceived(e.target.value)}
                            >
                            </input>
                            { errors.qty_received && <div className='invalid-feedback'> { errors.qty_received} </div> }
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Expiry Date:</label>
                            <br />
                            <DatePicker
                                selected={expiry_date}
                                onChange={handleDateChange}
                                dateFormat={"YYYY-MM-dd"}
                                className='form-control'
                                />
                            {/* <input
                                type='text' //type = 'password' will mask the input data
                                placeholder='Enter correct expiry date'
                                name='expiry_date'
                                value={expiry_date}
                                className='form-control'
                                onChange={(e) => setExpiryDate(e.target.value)}
                            >
                            </input> */}
                        </div>
                        <button className='btn btn-success' onClick={saveReceiving}>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ReceivingComponent