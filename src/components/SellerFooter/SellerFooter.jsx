import './sellerFooter.css'
import VillajaLogoLight from '../../assets/Seller SignUp Asset/logo.png'
import { Link } from 'react-router-dom'

const SellerFooter = () => {

  return (
    <div className="seller-footer-wrapper">
        <div className="seller-footer-container">
          <Link to="/">
            <div className="sfc-logo" onC>
                <img src={VillajaLogoLight} className="h-[50px] w-[100px]" alt="" />
            </div>
          </Link>
            <div className="sfc-menu">
                <div className="sfc-menu-item">Help</div>
                <div className="sfc-menu-item">Terms of Use</div>
                <div className="sfc-menu-item">Privacy Policy</div>
                <div className="sfc-menu-item-4">Contact</div>
            </div>
        </div>
    </div>
  )
}

export default SellerFooter