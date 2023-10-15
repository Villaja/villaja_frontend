import './sellerFooter.css'
import VillajaLogoLight from '../../assets/villaja_logo_light.svg'
import { Link } from 'react-router-dom'

const SellerFooter = () => {

  return (
    <div className="seller-footer-wrapper">
        <div className="seller-footer-container">
          <Link to="/">
            <div className="sfc-logo" onC>
                <img src={VillajaLogoLight} alt="" />
            </div>
          </Link>
            <div className="sfc-menu">
                <div className="sfc-menu-item">Help</div>
                <div className="sfc-menu-item">Terms of Use</div>
                <div className="sfc-menu-item">Privacy Policy</div>
                <div className="sfc-menu-item">Contact</div>
            </div>
        </div>
    </div>
  )
}

export default SellerFooter