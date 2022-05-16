import React from 'react'


const Sidebar = (props) => {
  return (
    <>
    <div className="container-sidebar">
    <div className='sidebar-welcome'>
    <h2>Welcome</h2> 
    <h2>{props.name}</h2>
    </div>
    <h2 className='sidebar-option-title'>Options</h2>
    <ul className="options-container">
    <li onClick={()=> props.onClick('ship')} className='sidebar-option'>Create a shipments</li>
    <li onClick={()=> props.onClick('history')} className='sidebar-option'>Your shipments History</li>
    <li onClick={()=> props.onClick('track')} className='sidebar-option'>check a order</li>
    </ul>
    </div>
    </>
  )
}

export default Sidebar