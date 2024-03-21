import React, { useEffect, useState } from 'react'
import { deleteLocationMaster, listLocationMaster } from '../services/LocationMasterService';
import { useNavigate } from 'react-router-dom';

const ListLocationMasterComponent = () =>{

  const [locationMaster, setLocationMaster] = useState([])

  const navigator = useNavigate();

  useEffect(() => {
    getAllLocationMaster();
  
  }, [])

  function getAllLocationMaster(){
    listLocationMaster().then((response) => {
      setLocationMaster(response.data)
    }).catch(error => {
      console.error(error);
    })
  }

  function addNewLocation(){
    navigator('/add_location')
  }

  function updateLocation(id){
    navigator(`/update_location/${id}`)
  }

  function removeLocation(id){
    console.log(id);

    deleteLocationMaster(id).then((response) => {
      getAllLocationMaster();
    }).catch(error => {
      console.error(error);
    })
  }

  return (
    <div className='container'>

      <h2 className='text-center'>Location Master</h2>
      <button className='btn btn-primary mb-2' onClick={addNewLocation}>Add Location</button>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Location ID</th>
            <th>Location</th>
            <th>Ti</th>
            <th>Hi</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            locationMaster.map(locationMaster =>
              <tr key = {locationMaster.id}>
                <td>{locationMaster.id}</td>
                <td>{locationMaster.location}</td>
                <td>{locationMaster.ti}</td>
                <td>{locationMaster.hi}</td>
                <td>{locationMaster.status}</td>
                <td>
                  <button className='btn btn-info' onClick={() => updateLocation(locationMaster.id)}>Update</button>
                  <button className='btn btn-danger' onClick={() => removeLocation(locationMaster.id)}
                    style={{marginLeft: '10px'}}
                    >Delete</button>
                </td>
              </tr>)
          }

        </tbody>
        </table>
    </div>
    
  )
}

export default ListLocationMasterComponent