const OrderItem = (props) => {
  const {nameReceiver, addressReceiver, provinceReceiver, phoneReceiver, cityReceiver, postalCodeReceiver, nameSender, addressSender, provinceSender, phoneSender, citySender, postalCodeSender, price, quantity, weight, eta, id, status} = props
  return (
    <>
    <article className="container-order-info">
    <h2 className="order-title">Order Number: {id}</h2>
    <div className="container-ship-details">
      <section className="section-details">
      <h3>Sender Information</h3>
      <p><span className="dark-font">Name:</span> {nameSender}</p>
      <p><span className="dark-font">Address:</span> {addressSender}</p>
      <p><span className="dark-font">Postal Code:</span> {postalCodeSender}</p>
      <p><span className="dark-font">City:</span> {citySender}</p>
      <p><span className="dark-font">Province:</span> {provinceSender}</p>
      <p><span className="dark-font">Phone:</span> {phoneSender}</p>
      </section>
      <section className="section-details">
      <h3>Receiver Information</h3>
      <p><span className="dark-font">Name:</span> {nameReceiver}</p>
      <p><span className="dark-font">Address:</span> {addressReceiver}</p>
      <p><span className="dark-font">Postal Code:</span> {postalCodeReceiver}</p>
      <p><span className="dark-font">City:</span> {cityReceiver}</p>
      <p><span className="dark-font">Province:</span> {provinceReceiver}</p>
      <p><span className="dark-font">Phone:</span> {phoneReceiver}</p>
      </section>
      <section className="section-details">
        <h3>Order Information</h3>
        <p><span className="dark-font">Quantity of Packages:</span> {quantity}</p>
        <p><span className="dark-font">Total Weight (lb):</span> {weight}</p>
        <p><span className="dark-font">Price:</span> CAD {price}</p>
        <p><span className="dark-font">ETA:</span> {eta}</p>
        <div>Created on: {new Date(props.order.createdAt).toLocaleString('en-US')}</div>
        <p className="font-weight">Status: {status}</p>
      </section>
    </div>
    </article>
    </>
  )
}

export default OrderItem
