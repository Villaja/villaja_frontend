import { useNavigate } from 'react-router-dom'
import './SellerHomePage.css'

const SellerHomeHeader = () => {
    const navigate = useNavigate()
  return (
    <div className="seller-homeheader-wrapper">
        <div className="seller-homeheader-container">
            <div style={{color:"#69696B",fontWeight:"500"}}>
                <span  style={{fontWeight:"800"}}>villaja </span> seller center
            </div>
            <div className="shhw-actions">
                <div className="shhw-action shhw-login" onClick={() => navigate('/shop/login')}>LOG IN</div>
                <div className="shhw-action shhw-signup" onClick={() => navigate('/shop/signup')}>SIGN UP</div>
            </div>
        </div>
    </div>
  )
}

export default SellerHomeHeader