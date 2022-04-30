import {FaSignInAlt, FaSignOutAlt, FaUser, FaShippingFast} from 'react-icons/fa'
import {CgTrack} from 'react-icons/cg'
import {AiOutlineHome} from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'

import {Link, useNavigate} from 'react-router-dom'
import logo from "../logo.svg"

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state)=> state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  return (
      <header className='header'>
        <nav className="navbar">
          <div className="logo-all">
            <img src={logo} alt="logo" width="50px" height="auto"/>
            <h3 className="logo-name">React Couries Express</h3>
          </div>
          <ul className="menu-items">
            <li><Link to="/"><AiOutlineHome/> Home</Link></li>
            <li><Link to="/dashboard"><FaShippingFast/> Shipment</Link></li>
            <li><Link to="/tracking"><CgTrack /> Tracking</Link></li>
            {user? (
              <li onClick={onLogout}>
                  <FaSignOutAlt />Logout
              </li>
            ) : (
              <>
             <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
            </>
            )}  
      </ul>
      </nav>

    </header>
  )
}

export default Header

/*
 <li>
                <button onClick={onLogout}>
                  <FaSignOutAlt />Logout
                </button>
              </li>

*/
