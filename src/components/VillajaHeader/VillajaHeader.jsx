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
    <div className="vh-header-wrapper" style={location.pathname.split('/')[1]=='seller'?{display:"none"}:null}>

    <div className="vh-header-container">
        <div className="vh-item vh-logo">
           <Link to={'/'}>
                <img src={villajaLogo} alt="" />
            </Link>
        </div>

        <div className="vh-menu">
            <div className="vh-item vh-menu-item" onMouseOver={() => setHoverState(1)} onMouseOut={() => setHoverState(0)}> <div><Link to={'/catalog/mobile-phones'} style={{textDecoration:"none",color:"inherit"}}>Phones</Link></div>
            {(dropdownHoverState === 1) && <VillajaHeaderDropdown categoryNames={["Basic Phones","Smart Phones"]}/>}
            </div>
            <div className="vh-item vh-menu-item" onMouseOver={() => setHoverState(2)} onMouseOut={() => setHoverState(0)} >Tablets
            {(dropdownHoverState === 2) && <VillajaHeaderDropdown categoryNames={["Professional Tablets","Educational Tablets"]}/>} </div>
            <div className="vh-item vh-menu-item" onMouseOver={() => setHoverState(3)} onMouseOut={() => setHoverState(0)}>Computers
            {(dropdownHoverState === 3) &&<VillajaHeaderDropdown categoryNames={["Laptops","Desktops"]}/>} </div>
            <div className="vh-item vh-menu-item" onMouseOver={() => setHoverState(4)} onMouseOut={() => setHoverState(0)}>Accessories
            {(dropdownHoverState === 4) && <VillajaHeaderDropdown categoryNames={["EarHeadphones","Smart Watches","Speakers","Micropphones","Chargers","Phone Cases","Storage Devices","Gaming Devices","Keyboards & Mice","Laptop Bags","Stands & Lights","Sytlus & Tablets"]}/> }</div>
            <div className="vh-item vh-menu-item">Support</div>
        </div>

        <div className="vh-aux-menu">
            <div className="vh-item vh-aux-item">
                <img src={searchIcon} alt="search icon" className='aux-img'/>
            </div>
            <div className="vh-item vh-aux-item" >
                <img src={cartIcon} alt="cart icon" className='aux-img' />
            </div>
            <div className="vh-item vh-aux-item">
                <img src={profileIcon} alt="profile icon" className='aux-img' />
            </div>
        </div>

        

        <div className="mobile-menu">
            <img src={menuBtn} alt="menu button" className='aux-img'/>
        </div>
    </div>
    </div>

  )
}

export default VillajaHeader