import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ShopCategory from './pages/ShopCategory'
import banner1 from '/src/Assets/banner_mens.png'
import banner2 from '/src/Assets/banner_women.png'
import banner3 from '/src/Assets/banner_kids.png'


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/men' element={<ShopCategory banner={banner1} category='men' />} />
          <Route path='/women' element={<ShopCategory banner={banner2} category='women' />} />
          <Route path='/kids' element={<ShopCategory banner={banner3} category='kids' />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App