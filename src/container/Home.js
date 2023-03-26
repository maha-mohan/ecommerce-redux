import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
import Product from './Product'
import Cart from './Cart'


function Home() {
  return (
    <div>
        <Header />
        <Routes>
            <Route path='/' element={<Dashboard /> } />
            <Route path='/product/:id' element={<Product /> } />
            <Route path='/cart' element={<Cart /> } />
           
        </Routes>
    </div>
  )
}

export default Home