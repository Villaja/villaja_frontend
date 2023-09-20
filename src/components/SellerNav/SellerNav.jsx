import './sellerNav.css'
import { Link, useLocation } from 'react-router-dom'
import CloseIcon from '../../assets/close_icon.svg'

const SellerNav = ({setIsMobile,isMobile}) => {
    const location = useLocation()
  return (
    <div className={`seller-nav-container ${!isMobile?'snc-mobile':''}`} style={location.pathname.split('/')[2]=='new-product'?{display:"none"}:null}>
        <div className="seller-nav-menu" >
            <div className="snm-close" onClick={() => setIsMobile(false)}>{isMobile && <img src={CloseIcon} alt="" />}</div>
            <Link to='/seller/' style={{textDecoration:'none',color:"#111111"}}><div className="snm-item">Home</div></Link>
            <Link to='/seller/' style={{textDecoration:'none',color:"#111111"}}><div className="snm-item">Orders</div></Link>
            <Link to='/seller/inventory' style={{textDecoration:'none',color:"#111111"}} ><div className="snm-item">Inventory</div></Link>
            <Link to='/seller/' style={{textDecoration:'none',color:"#111111"}}><div className="snm-item">Transactions</div></Link>
            <Link to='/seller/balance' style={{textDecoration:'none',color:"#111111"}}><div className="snm-item">Balances</div></Link>
            <Link to='/seller/customers' style={{textDecoration:'none',color:"#111111"}}><div className="snm-item">Customers</div></Link>
            <Link to='/seller/' style={{textDecoration:'none',color:"#111111"}}><div className="snm-item">Settings</div></Link>
        </div>

        <div className="seller-nav-id">IAMVILAJA ID-00000002</div>
    </div>
  )
}

export default SellerNav