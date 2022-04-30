const OrderItem = (props) => {
  return (
    <>
    <div>
      <div>{new Date(props.order.createdAt).toLocaleString('en-US')}</div>
      <h2>{props.name}</h2>
    </div>
    </>
  )
}

export default OrderItem
