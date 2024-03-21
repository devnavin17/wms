import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createLocation, getLocationMaster, updateLocationMaster } from '../services/LocationMasterService'

const LocationMasterComponent = () => {

    const[location, setLocation] = useState('')
    const[ti, setTi] = useState('')
    const[hi, setHi] = useState('')

    const {id} = useParams();

    //error handling
    const [errors, setErrors] = useState({
        location:'',
        ti:'',
        hi:''
    })

    const navigator = useNavigate();

    // always rememeber to pass array for useEffect hook, 1 arrowhead function and 1 array
    useEffect (() => {

        if(id){
            getLocationMaster(id).then((response) => {
                setLocation(response.data.location);
                setTi(response.data.ti);
                setHi(response.data.hi);
            }).catch(error => {
                console.error(error);
            })
        }
    },[id])

    function saveOrUpdateLocationMaster(e){
        e.preventDefault(); //preventDefault holds the error message, or else it will disappear from the web app

         if(validateForm()){ //validateForm is what prevents empty data to go post into database, i have coded the funtions as per stated below

            const locationMaster = {location,ti,hi}
            console.log(locationMaster)

            if(id){
                updateLocationMaster(id, locationMaster).then((response) => {
                    console.log(response.data);
                    navigator('/location_master')
                }).catch(error => {
                    console.error(error);
                })
            } else {

            createLocation(locationMaster).then((response) => {
                console.log(response.data);
                navigator('/location_master')
            }).catch(error => {
                console.error(error);
            })

            }
        }
    }

    function validateForm(){
        let valid = true;
                            //... is spread operator to copy object into another object, we are copying errors object into seperate variable
        const errorsCopy = {... errors}

        if(location.trim()){
            errorsCopy.location = '';
        } else{
            errorsCopy.location = 'Location is required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }
        function pageTitle(){
            if(id){
                return <h2 className='text-center'>Update Location</h2>
            }else{
                return<h2 className='text-center'>Add Location</h2 >
            }
        }
    

  return (
    <div className='container'>
        <br /><br />
        <div className='row'>
            <div className = 'row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        pageTitle()
                    }
                    <div className='card-body'></div>
                        <form>
                            <div className='form-group-mb-2'>
                                <label className='form-label'>Location:</label>
                                <input
                                    type = 'text'
                                    placeholder='Enter location'
                                    name='location'
                                    value={location}
                                    className={`form-control ${ errors.location ? 'is-invalid': ''}`}
                                    onChange={(e) => setLocation(e.target.value)}
                                >
                                </input>
                                { errors.location && <div className='invalid-feedback'> { errors.location} </div>}
                            </div>

                            <div className='form-group-mb-2'>
                                <label className='form-label'>Ti:</label>
                                <input
                                    type = 'text'
                                    placeholder='Enter Ti'
                                    name='ti'
                                    value={ti}
                                    className={`form-control ${ errors.ti ? 'is-invalid': ''}`}
                                    onChange={(e) => setTi(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group-mb-2'>
                                <label className='form-label'>Hi:</label>
                                <input
                                    type ='text'
                                    placeholder='Enter Hi'
                                    name='hi'
                                    value={hi}
                                    className={`form-control ${ errors.hi ? 'is-invalid': ''}`}
                                    onChange={(e) => setHi(e.target.value)}
                                >
                                </input>
                            </div>
                            <button className='btn btn-success' onClick={saveOrUpdateLocationMaster}>Submit</button>
                        </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LocationMasterComponent