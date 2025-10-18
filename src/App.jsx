
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Landingpage from './pages/Landingpage'
import Addproduct from './pages/Addproduct'

import Productpage from './pages/Productpage'
import Pagenotfound from './pages/Pagenotfound'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'


function App() {
   const [userInput,setUserInput]= useState({
      productDetails:{
        product:'',
        quantity:'',
        vendor:'',
        location:'',
        // unit:''
      }
    })


  return (
    <>
    <Header/>
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Landingpage/>}/>
    <Route path='error' element={<Pagenotfound/>}/>
    <Route path='add' element={<Addproduct userInput={userInput} setUserInput={setUserInput} />}/>
    <Route path='addedproducts' element={<Productpage userInput={userInput} setUserInput={setUserInput}/>}/>


    </Routes>
  
  
  </BrowserRouter>

      <Footer/>
    </>
  )
}

export default App
