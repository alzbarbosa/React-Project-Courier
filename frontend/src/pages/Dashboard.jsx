import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import OrderForm from "../components/OrderForm"
import Spinner from '../components/Spinner'
import { getOrders, reset } from "../features/orders/orderSlice"
import OrderItem from "../components/OrderItem"

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {orders, isLoading, isError, message} = useSelector((state) => state.orders)

  useEffect(() => {
    if(isError) {
      console.log(message)
    } 

    if(!user) {
      navigate('/login')
    }
    dispatch(getOrders())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if(isLoading) {
    return <Spinner />
  }

  const ordersCreated = orders.map((order) => {
          return <OrderItem key={order._id} name={order.name} order={order}/>
        })
console.log(orders)
  return (
    <>
    <section>
      <h1>Welcom {user && user.name}</h1>
      <p>Shipment Dashboard</p>
    </section>
    <OrderForm />
    <section>
      {ordersCreated}
    </section>
    </>
  )
}

export default Dashboard