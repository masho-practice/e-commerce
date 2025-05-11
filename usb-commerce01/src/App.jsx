import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { Shop } from './pages/Shop';
import { Cart } from './pages/Cart';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import { ShopProvider } from './context/ShopContext';
const App = () => {
  return (
    <ShopProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      <Footer />
    </Router>
    </ShopProvider>
  )
}

export default App