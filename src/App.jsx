// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import CustomerHomePage from './pages/CustomerHomepage/CustomerHomepage';
import './App.css'
import CatalogPage from './pages/CatalogPage/CatalogPage';
import VillajaHeader from './components/VillajaHeader/VillajaHeader';
import VillajaFooter from './components/VillajaFooter/VillajaFooter';
import Villaja_hero from './components/VillajaHero/Villaja_hero';
import { useEffect, useState } from 'react';
import {CustomerLogin, CustomerSignUp, SellerLogin, SellerSignUp} from './components';

function App() {

  return (
    <div className='app-wrapper'>
      <Router>
        <VillajaHeader/>
       {/* <Header changeLoggedIn = {setIsLoggedIn} hasLoggedIn = {isLoggedIn}/> */}
        <Routes>
          <Route exact path= "/" element={<CustomerHomePage/>}/>
          <Route exact path= "/catalog" element={<CatalogPage/>}/>
        </Routes>
        <VillajaFooter/>
       </Router>
    </div>
  )
}

export default App
