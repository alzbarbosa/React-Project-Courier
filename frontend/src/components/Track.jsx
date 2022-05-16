import { useState } from "react"

const Track = (props) => {
const [orderId, setOrderId] = useState("")

const onChange = (e) => {
     setOrderId(e.target.value)
   }

  return (
    <div className="container-track">
        <h2>Check a specific order</h2>
        <div className='form-input'>
        <input
        type="text"
        id='order'
        name='order'
        value={orderId}
        placeholder='Enter the order ID'
        onChange={onChange}
        className='input-access' 
        />
        </div>
        <div className="btn-access">
          <button className='btn' onClick={()=> props.onClick(orderId)}>Submit</button>
        </div>
    </div>
  )
}

export default Track