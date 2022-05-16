import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context/context';


const SliceOutMenu = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
 
  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <h2>Welcome</h2> 
      <div className='sidebar-header'>
        <h2>{props.name}</h2>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
            <li onClick={()=> props.onClick('ship')} className='sidebar-option'>Create a shipments</li>
            <li onClick={()=> props.onClick('history')} className='sidebar-option'>Your shipments History</li>
            <li onClick={()=> props.onClick('track')} className='sidebar-option'>check a order</li>
      </ul>
    </aside>
  );
};

export default SliceOutMenu;