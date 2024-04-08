import React from 'react'
import { useNavigate } from 'react-router-dom'

const MainPageComponent = () =>{

    const navigator = useNavigate();
    
    function listItemMaster(){
        navigator('/item_master')
    }

    function listLocationMaster(){
      navigator('/location_master')
    }

    function receivingPage(){
      navigator('/receiving_page')
    }

    function itemStoragePage (){
      navigator ('/item_storage_page')
    }


  return (
    <div>
    <h1 className="text-center">Welcome to Warehouse Management System</h1>
    <div>
        <h2 onClick={listItemMaster} style={{ cursor: 'pointer' }}>Item Master</h2>
        {/* //<Link to="/item_master">Go to Item Master</Link> */}
        {/* <a href="google.com">item</a> */}
        <h2 onClick={receivingPage} style={{ cursor: 'pointer' }}>Receiving</h2>
        <h2 onClick={listLocationMaster} style={{ cursor: 'pointer' }}>Location Master</h2>
        <h2 onClick={itemStoragePage} style={{ cursor: 'pointer' }}>Storage</h2>
    </div>
    </div>
  )
}

export default MainPageComponent



// style={{ paddingLeft: '20px'}}