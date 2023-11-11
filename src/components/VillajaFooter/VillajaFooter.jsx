import './villajaFooter.css'
import villajaLogo from '../../assets/villaja_footer_logo.svg'
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
            <div className="vf-menu-item">Terms of Use</div>
            <div className="vf-menu-item">Privacy Policy</div>
            <div className="vf-menu-item">About</div>
            <div className="vf-menu-item">Contact</div>
            <div className="vf-menu-item">Careers</div>
        </div>
    </div>
  )
}

export default VillajaFooter