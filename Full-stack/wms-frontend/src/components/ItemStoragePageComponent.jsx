import React from 'react'
import { useNavigate } from 'react-router-dom'

const ReceivingPageComponent = () => {

    const navigator = useNavigate();

    function receivingStorage(){
        navigator('/receiving_storage')
    }

    function itemStorageList(){
        navigator('/item_storage')
    }

  return (
    <div>
        <h1 className="text-center">Storage</h1>
        <div>
        <h2 onClick={receivingStorage} style={{ cursor: 'pointer' }}>Storage</h2>
        <h2 onClick={itemStorageList} style={{ cursor: 'pointer' }}>Item Storage Data</h2>
        </div>
    </div>
  )
}

export default ReceivingPageComponent