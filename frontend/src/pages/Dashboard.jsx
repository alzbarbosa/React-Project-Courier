import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import OrderForm from "../components/OrderForm"
import Spinner from '../components/Spinner'
import { getOrders, reset } from "../features/orders/orderSlice"
import OrderItem from "../components/OrderItem"
import Sidebar from "../components/Sidebar"
import Track from "../components/Track"


const Dashboard = () => {
  const [option, setOption] = useState("ship")
  const [orderById, setOrderById] = useState()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { orders, isLoading, isError, message } = useSelector((state) => state.orders)

  useEffect(() => {
    if(isError) {
      console.log(message)
    } 

    if(!user) {
      navigate('/login')
    }
     
    if(user) {
    dispatch(getOrders())
    }

    return () => {
      dispatch(reset())
    }
  }, [user, isError, message, navigate, dispatch])

  if(isLoading) {
    return <Spinner />
  }


  const getOrderById = async (id) => {
   let newOrder = orders.filter(order => {
      return order._id === id? order : "" 
    } )
    setOrderById(newOrder)
  setOption('order')
    console.log(orderById)
  }


  const ordersCreated = orders.map((order) => {
          return <OrderItem 
          key={order._id}
          id={order._id} 
          nameReceiver={order.nameReceiver}
          addressSender={order.addressSender}
          phoneSender={order.phoneSender}
          postalCodeSender={order.postalCodeSender}
          provinceSender={order.provinceSender}
          citySender={order.citySender} 
          nameSender={order.nameSender} 
          addressReceiver={order.addressReceiver}
          phoneReceiver={order.phoneReceiver}
          postalCodeReceiver={order.postalCodeReceiver}
          provinceReceiver={order.provinceReceiver}
          cityReceiver={order.cityReceiver}
          price={order.price}
          weight={order.weight}
          quantity={order.quantity}
          eta={order.eta}
          status={order.status}
          order={order}
          />
        })

  return (
    <>
    <div className="dashboard-container">
    {user && (  
    <Sidebar onClick={setOption} name={user.name}/>
    )}
    {option === 'ship' && <OrderForm />}
    {option === 'history' && (
      <div className="orders-created-container">
      {ordersCreated}
      </div>)}
     {option === 'track' && <Track onClick={getOrderById}/>}
     {option === 'order' && (

        <OrderItem 
          key={orderById._id}
          id={orderById[0]._id} 
          nameReceiver={orderById[0].nameReceiver}
          addressSender={orderById[0].addressSender}
          phoneSender={orderById[0].phoneSender}
          postalCodeSender={orderById[0].postalCodeSender}
          provinceSender={orderById[0].provinceSender}
          citySender={orderById[0].citySender} 
          nameSender={orderById[0].nameSender} 
          addressReceiver={orderById[0].addressReceiver}
          phoneReceiver={orderById[0].phoneReceiver}
          postalCodeReceiver={orderById[0].postalCodeReceiver}
          provinceReceiver={orderById[0].provinceReceiver}
          cityReceiver={orderById[0].cityReceiver}
          price={orderById[0].price}
          weight={orderById[0].weight}
          quantity={orderById[0].quantity}
          eta={orderById[0].eta}
          status={orderById[0].status}
          order={orderById[0]}
          />

     )} 
    </div>
    </>
  )
}

export default Dashboard