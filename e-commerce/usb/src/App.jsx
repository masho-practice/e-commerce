import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Shop from './pages/Shop'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import About from './pages/About'
import ProductDetails from './pages/ProductDetails'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Shop />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/product/:productId' element={<ProductDetails />}/>
      
      <Route path='/login' element={<Login />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App