import './villajaHeader.css'
import villajaLogo from '../../assets/villaja_logo.svg'
import searchIcon from '../../assets/search_icon.svg'
import profileIcon from '../../assets/profile_icon.svg'
import cartIcon from '../../assets/cart_icon.svg'
import menuBtn from '../../assets/menu_btn.svg'
import VillajaHeaderDropdown from './VillajaHeaderDropdown'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'


const VillajaHeader = () => {

    const [dropdownHoverState,setHoverState] = useState(0)

    const location = useLocation()

  return (
    <div className="vh-header-wrapper" style={location.pathname.split('/')[1]=='seller' || location.pathname.split('/')[1]=='login' || location.pathname.split('/')[1]=='signup' ?{display:"none"}:null}>

    <div className="vh-header-container">
        <div className="vh-item vh-logo">
           <Link to={'/'}>
                <img src={villajaLogo} alt="" />
            </Link>
        </div>

       
        

        <div className="mobile-menu">
            <img src={menuBtn} alt="menu button" className='aux-img'/>
        </div>
    </div>
    </div>

  )
}

export default VillajaHeader