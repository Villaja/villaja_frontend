import './sellerFooter.css'
import VillajaLogoLight from '../../assets/villaja_logo_light.svg'

const SellerFooter = () => {
  return (
    <div className="seller-footer-wrapper">
        <div className="seller-footer-container">
            <div className="sfc-logo">
                <img src={VillajaLogoLight} alt="" />
            </div>
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