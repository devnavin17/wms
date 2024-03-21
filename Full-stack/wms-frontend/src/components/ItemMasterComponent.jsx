import React, { useEffect, useState } from 'react'
import { createItem, getItemMaster, updateItemMaster } from '../services/ItemMasterService'
import { useNavigate, useParams } from 'react-router-dom'

// add item elements
const ItemMasterComponent = () => {

    
    const[sku, setSku] = useState('')
    const[attribute1, setAttribute1] = useState('')
    const[attribute2, setAttribute2] = useState('')

    const {id} = useParams();
    //error handling
    const [errors, setErrors] = useState({
        sku: '',
        attribute1: '',
        attribute2: ''
    })

    const navigator = useNavigate();

    //this is java arrowhead function
    //const handleSku = (e) => setSku(e.target.value);

    //traditional function
    function handleAttribute1(e){
        setAttribute1(e.target.value);
    }

    //update related functions, showing the data on form immediately, data is pulled from here
    useEffect (() => {

        if(id){
            getItemMaster(id).then((response) => {
                setSku(response.data.sku);
                setAttribute1(response.data.attribute1);
                setAttribute2(response.data.attribute2);
            }).catch(error => {
                console.error(error);
            })
        }
        
    },[id])

    //pending to test arrowhead function for this case in OnClick
    function saveOrUpdateItemMaster(e){
        e.preventDefault(); //preventDefault holds the error message, or else it will disappear from the web app

        //validation logic, save block code inside if statement
        if(validateForm()){

            const itemMaster = {sku,attribute1,attribute2}
            console.log(itemMaster)

            if(id){
                updateItemMaster(id, itemMaster).then((response) => {
                    console.log(response.data);
                    navigator('/item_master')
                }).catch(error => {
                    console.error(error);
                })
            } else {
            //add item code after creation in ItemMasterService
                createItem(itemMaster).then((response) => {
                    console.log(response.data);
                    navigator('/item_master')
            }).catch(error => {
                console.error(error);
            })

            }
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

        if(attribute1.trim()){
            errorsCopy.attribute1 = '';
        } else {
            errorsCopy.attribute1 = 'Attribute 1 is required'
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }
        function pageTitle(){
            if(id){
                return <h2 className='text-center'>Update Item</h2>
            }else{
                return <h2 className='text-center'>Add Item</h2>
            }
        }

  return (
    <div className='container'>
        <br /><br />
        <div className ='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label' >Sku code:</label>
                            <input
                                type='text'
                                placeholder='Enter SKU code'
                                name='sku'
                                value={sku}
                                className={`form-control ${ errors.sku ? 'is-invalid': '' }`}
                                onChange={(e) => setSku(e.target.value)} //you paste the arrow head function directlty on the onChange event handler, you can delete the top fucntion, I did not delete for reference purposes.
                                readOnly
                            >
                            </input>
                            { errors.sku && <div className='invalid-feedback'> { errors.sku} </div> }
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Attribute 1:</label>
                            <input
                                type='text'
                                placeholder='Enter attribute 1'
                                name='attribute1'
                                value={attribute1}
                                className={`form-control ${ errors.attribute1 ? 'is-invalid': '' }`}
                                onChange={handleAttribute1}
                            >
                            </input>
                            { errors.attribute1 && <div className='invalid-feedback'> { errors.attribute1} </div> }
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Attribute 2:</label>
                            <input
                                type='text' //type = 'password' will mask the input data
                                placeholder='Enter attribute 2'
                                name='attribute2'
                                value={attribute2}
                                className={`form-control ${ errors.attribute2 ? 'is-invalid': ''}`}
                                onChange={(e) => setAttribute2(e.target.value)}
                            >
                            </input>
                        </div>

                        <button className='btn btn-success' onClick={saveOrUpdateItemMaster}>Submit</button>
                    </form>

                </div>
            </div>

        </div>

    </div>
  )
}

export default ItemMasterComponent