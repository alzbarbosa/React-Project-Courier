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
        <form onSubmit={onSubmit}>
            <label htmlFor='name'>Name</label>
            <input 
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={onChange}
            />

            <label htmlFor='address'>Adress</label>
            <input 
            type='text'
            name='address'
            id='address'
            value={address}
            onChange={onChange}
            />

            <label htmlFor='postalCode'>Postal Code</label>
            <input 
            type='text'
            name='postalCode'
            id='postalCode'
            value={postalCode}
            onChange={onChange}
            />

            <label htmlFor='city'>City</label>
            <input 
            type='text'
            name='city'
            id='city'
            value={city}
            onChange={onChange}
            />
             
            <label htmlFor='province'>Province</label> 
            <input 
            type='text'
            name='province'
            id='province'
            value={province}
            onChange={onChange}
            />
             
            <label htmlFor='phone'>Phone</label>
            <input 
            type='number'
            name='phone'
            id='phone'
            value={phone}
            onChange={onChange}
            />
                    
            <div>
               <button type='submit'>Submit</button>    
            </div>   
        

        </form>
    </section>
  )
}

export default OrderForm

/*
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
