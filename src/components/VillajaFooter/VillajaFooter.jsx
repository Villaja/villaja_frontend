import './villajaFooter.css'
import villajaLogo from '../../assets/villaja_footer_logo.svg'


const VillajaFooter = () => {
  return (
    <div className="vf-container">
        <div className="vf-logo">
            <img src={villajaLogo} alt="Villaja Logo" />
        </div>
        <div className="vf-menu">
            <div className="vf-menu-item">Sell of Villaja</div>
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