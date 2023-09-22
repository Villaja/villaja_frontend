import { Routes, Route, useLocation} from 'react-router-dom';
import SellerInventory from './pages/SellerInventory/SellerInventory';
import SellerHome from './pages/SellerHome/SellerHome';
import SellerFooter from './components/SellerFooter/SellerFooter';
import SellerHeader from './components/SellerHeader/SellerHeader';
import SellerNav from './components/SellerNav/SellerNav';
import SellerNewProduct from './pages/SellerNewProduct/SellerNewProduct';
import SellerBalance from './pages/SellerBalance/SellerBalance';
import SellerCustomer from  './pages/SellerCustomer/SellerCustomer'
import SellerSignUp from './pages/Seller Signup Page/SellerSignUp';
import SellerLogin from './pages/Customer Login Page/CustomerLogin';
import {useState } from 'react';
import './seller.css'

const Seller = ({setIsSeller}) => {

  const [navMobile,setNavMobile] = useState(false)

  return (
    <div className='seller-page-wrapper'>
        <SellerHeader setNavMobile={setNavMobile}/>

        <div className="seller-main-wrapper">
            <div className="seller-main-container">
                <SellerNav setIsMobile={setNavMobile} isMobile={navMobile}/>
                <Routes>
                    <Route exact path='/' element={<SellerHome/>}/>
                    <Route exact path= "/inventory" element={<SellerInventory/>}/>
                    <Route exact path='/signup' element={<SellerSignUp/>}/>
                    <Route exact path='/login' element={<SellerLogin/>}/>
                    <Route exact path= "/new-product/:category" element={<SellerNewProduct/>}/>
                    <Route exact path= "/balance" element={<SellerBalance/>}/>
                    <Route exact path= "/customers" element={<SellerCustomer/>}/>
                </Routes>
                
            </div>
        </div>
        <SellerFooter/>
    </div>
  )
}

export default Seller