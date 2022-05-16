import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Dashboard from './pages/Dashboard'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Header from './components/Header'
import Register from './pages/Register'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
    <ToastContainer />
    </>
  )
}

export default App
