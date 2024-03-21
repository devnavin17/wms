import React from 'react'
import { useNavigate } from 'react-router-dom'

const ReceivingPageComponent = () => {

    const navigator = useNavigate();

    function receiving(){
        navigator('/receiving')
    }

    function receivingList(){
        navigator('/receiving_list')
    }

  return (
    <div>
        <h1 className="text-center">Receiving</h1>
        <div>
        <h2 onClick={receiving} style={{ cursor: 'pointer' }}>Receiving</h2>
        <h2 onClick={receivingList} style={{ cursor: 'pointer' }}>Receiving List</h2>
        </div>
    </div>
  )
}

export default ReceivingPageComponent