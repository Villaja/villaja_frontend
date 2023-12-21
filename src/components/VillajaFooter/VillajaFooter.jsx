import './villajaFooter.css'
import villajaLogo from '../../assets/Seller SignUp Asset/logo1.png'
import { Link } from 'react-router-dom'


const VillajaFooter = () => {
  return (
    <div className="vf-container" style={location.pathname.split('/')[1]=='seller' || location.pathname.split('/')[1]=='login' ?{display:"none"}:null}>
        <Link to='/'>
          <div className="vf-logo">
              
              <img src={villajaLogo} alt="Villaja Logo" />
          </div>
        </Link>
        <div className="vf-menu">
            <div className="vf-menu-item"><Link to="/shop/home">Sell on Villaja</Link></div>
            <div className="vf-menu-item">Help</div>
            <div className="vf-menu-item"><Link to="/terms-conditions">Terms Of Use</Link></div>
            <div className="vf-menu-item">Privacy Policy</div>
            <div className="vf-menu-item-1">About</div>
            <div className="vf-menu-item-2">Contact</div>
            <div className="vf-menu-item">Careers</div>
        </div>
    </div>
  )
}

export default VillajaFooter