import {useState, useEffect} from 'react'
import { FaSignInAlt, FaShippingFast } from 'react-icons/fa'
import {CgTrack} from 'react-icons/cg'
import {MdSecurity} from 'react-icons/md'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate, Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import {login, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const Login = () => {
  const [formData, setFormData] = useState({
    email:'',
    password:'',
  })

  const { email, password} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    if(isSuccess && user) {
      navigate('/dashboard')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])  



  const onChange = (e) =>{
    setFormData((prevState) => ({
      ...prevState, [e.target.name]: e.target.value
    }))
  }
  
  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }
    dispatch(login(userData))
  }

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
    <div className='container-access'>
    <div className='left-side'> 
    <section className='container-title-icon'>
      <h1><FaSignInAlt /> Login</h1>
    </section>
    
    <section className='container-form'>
      <form onSubmit={onSubmit}>
        <div className='form-input'>
        <input
        type="email"
        id='email'
        name='email'
        value={email}
        placeholder='Enter your email'
        onChange={onChange}
        className='input-access' 
        />
        </div>
        <div className='form-input'>
        <input
        type="password"
        id='password'
        name='password'
        value={password}
        placeholder='Enter your password'
        onChange={onChange} 
        className='input-access'
        />
        </div>
        <div className="btn-access">
          <button className='btn' type='submit'>Login</button>
        </div>

      </form>
    </section>
    </div> 
    <div className='right-side'>
    <section>
      <h2 className='title-offer-account'>Don't have an account yet?</h2>
      <p>Here are some benefits that we offer:</p>
      <p className='benefits-offer-account'><FaShippingFast/> The fastest deliver for packages to the same province</p>
      <p className='benefits-offer-account'><CgTrack/> Easy way to manage and track your packages</p>
      <p className='benefits-offer-account'><MdSecurity/> We deliver your packages with safety and intact</p>
      <p className='link-register'><Link to='/register'>Create an account {`>`}</Link></p>
    </section>
    </div>

    </div>
    </>
  )
}

export default Login