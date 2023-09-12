import './villajaHeader.css'
import villajaLogo from '../../assets/villaja_logo.svg'
import searchIcon from '../../assets/search_icon.svg'
import profileIcon from '../../assets/profile_icon.svg'
import cartIcon from '../../assets/cart_icon.svg'
import menuBtn from '../../assets/menu_btn.svg'


const VillajaHeader = () => {
  return (
    <div className="vh-header-container">
        <div className="vh-item vh-logo">
            <img src={villajaLogo} alt="" />
        </div>

        <div className="vh-menu">
            <div className="vh-item vh-menu-item">Phones</div>
            <div className="vh-item vh-menu-item">Tablets</div>
            <div className="vh-item vh-menu-item">Computers</div>
            <div className="vh-item vh-menu-item">Accessories</div>
            <div className="vh-item vh-menu-item">Support</div>
        </div>

        <div className="vh-aux-menu">
            <div className="vh-item vh-aux-item">
                <img src={searchIcon} alt="search icon" />
            </div>
            <div className="vh-item vh-aux-item">
                <img src={cartIcon} alt="cart icon" />
            </div>
            <div className="vh-item vh-aux-item">
                <img src={profileIcon} alt="profile icon" />
            </div>
        </div>

        <div className="mobile-menu">
            <img src={menuBtn} alt="menu button" />
        </div>
    </div>
  )
}

export default VillajaHeader