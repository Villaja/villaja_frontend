// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import CustomerHomePage from './pages/CustomerHomepage/CustomerHomepage';
import './App.css'
import CatalogPage from './pages/CatalogPage/CatalogPage';
import VillajaHeader from './components/VillajaHeader/VillajaHeader';
import VillajaFooter from './components/VillajaFooter/VillajaFooter';
import {CustomerLogin, CustomerSignUp, SellerLogin, SellerSignUp} from './components';
import CategoryComponent from './pages/CatalogPage/CategoryComponent';
import { useState } from 'react';

function App() {

  const [selectedCatalogCategory,setSelectedCatalogCategory] = useState('')

  return (
    <div className='app-wrapper'>
      <Router>
        <VillajaHeader/>
       {/* <Header changeLoggedIn = {setIsLoggedIn} hasLoggedIn = {isLoggedIn}/> */}
        <Routes>
          <Route exact path= "/" element={<CustomerHomePage/>}/>
          <Route exact path= "/catalog/:id" element={<CatalogPage setSelectedCatalogCategory={setSelectedCatalogCategory}/>}/>
          <Route exact path= "/catalog/filter" element={<CategoryComponent category={selectedCatalogCategory} isMobile={'true'}/>}/>
        </Routes>
        <VillajaFooter/>
       </Router>
    </div>
  )
}

export default App
