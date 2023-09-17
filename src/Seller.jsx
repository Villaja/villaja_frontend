import { Routes, Route, useLocation} from 'react-router-dom';
import SellerInventory from './pages/SellerInventory/SellerInventory';
import SellerHome from './pages/SellerHome/SellerHome';
import SellerFooter from './components/SellerFooter/SellerFooter';
import SellerHeader from './components/SellerHeader/SellerHeader';
import { useEffect } from 'react';
import SellerNav from './components/SellerNav/SellerNav';

import './seller.css'
import SellerNewProduct from './pages/SellerNewProduct/SellerNewProduct';

const Seller = ({setIsSeller}) => {

  return (
    <div className='seller-page-wrapper'>
        <SellerHeader/>

        <div className="seller-main-wrapper">
            <div className="seller-main-container">
                <SellerNav />
                <Routes>
                    <Route exact path='/' element={<SellerHome/>}/>
                    <Route exact path= "/inventory" element={<SellerInventory/>}/>
                    <Route exact path= "/new-product/:category" element={<SellerNewProduct/>}/>
                </Routes>
                
            </div>
        </div>
        <SellerFooter/>
    </div>
  )
}

export default Seller