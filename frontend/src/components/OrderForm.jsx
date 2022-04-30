import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createOrder } from '../features/orders/orderSlice'

const OrderForm = () => {

   const [shipmentData, setShipmentData] = useState({
       name:'',
       address:'',
       postalCode:'',
       city:'',
       province:'',
       phone:'',
   }) 
    const {name, address, postalCode, city, province, phone} = shipmentData
     
    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()
        
        const shipData = {
            name,
            address, 
            postalCode, 
            city, 
            province, 
            phone,
        }

        dispatch(createOrder(shipData))
        setShipmentData({
            name:'',
            address:'',
            postalCode:'',
            city:'',
            province:'',
            phone:'',
        })
    }

      const onChange = (e) =>{
        setShipmentData((prevState) => ({
      ...prevState, [e.target.name]: e.target.value
    }))
  }

  return (
    <section>
        <h2 className="tittle-create-ship">Creating Shipment</h2>
        <form onSubmit={onSubmit}>
            <div className="form-individual">
            <label htmlFor='name'>Name</label>
            <input 
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={onChange}
            className='input-shipment'
            />
            </div>

            <div className="form-individual">
            <label htmlFor='address'>Adress</label>
            <input 
            type='text'
            name='address'
            id='address'
            value={address}
            onChange={onChange}
            className='input-shipment'
            />
            </div>

            <div className="form-group">
                <div className='form-individual'>
            <label htmlFor='postalCode'>Postal Code</label>
            <input 
            type='text'
            name='postalCode'
            id='postalCode'
            value={postalCode}
            onChange={onChange}
            className='input-shipment short-input'
            />
            </div>
             <div className='form-individual'>
            <label htmlFor='city'>City</label>
            <input 
            type='text'
            name='city'
            id='city'
            value={city}
            onChange={onChange}
            className='input-shipment medium-input'
            />
            </div>
            </div>

            <div className="form-group">
                <div className='form-individual'>
            <label htmlFor='province'>Province</label> 
            <input 
            type='text'
            name='province'
            id='province'
            value={province}
            onChange={onChange}
            className='input-shipment short-input'
            />
            </div>

             <div className='form-individual'>
            <label htmlFor='phone'>Phone</label>
            <input 
            type='number'
            name='phone'
            id='phone'
            value={phone}
            onChange={onChange}
            className='input-shipment medium-input'
            />
            </div> 

            </div>
   
            <div>
               <button className='btn btn-ship'>Submit</button>    
            </div>   
        

        </form>
    </section>
  )
}

export default OrderForm

/*
<div>
               <button type='submit'>Submit</button>    
            </div>

 name: {
        type: String,
        require: [true, 'Please add a name']
    },
    address: {
        type: String,
        require: [true, 'Please provide an email'],
    },
    postalCode: {
        type: String,
        require: [true, 'Please provide a password']
    },
    city: {
        type: String,
        require: [true, 'Please provide a password']
    },
    province: {
        type: String,
        require: [true, 'Please provide a password']
    },
    phone: {
        type: Number,
        require: [true, 'Please provide a password']
    },

    */
