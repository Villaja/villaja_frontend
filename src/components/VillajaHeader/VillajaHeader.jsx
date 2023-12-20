import './villajaHeader.css'
import villajaLogo from '../../assets/villaja_logo_new.png'
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
    <div className="vh-login-header-wrapper" style={location.pathname.split('/')[1]=='seller' || location.pathname.split('/')[1]=='login' || location.pathname.split('/')[1]=='signup' ?{display:"none"}:null}>

    <div className="vh-header-container">
        <div className="vh-item vh-logo mx-auto">
           <Link to={'/'}>
                <img src={villajaLogo} className='h-[30px] w-auto' alt="" />
            </Link>
        </div>

      {
        location.pathname.split('/')[1]=='user' ?null:
       <div className="vh-menu">
            <div className="vh-item vh-menu-item" onMouseOver={() => setHoverState(1)} onMouseOut={() => setHoverState(0)} onClick={(e) => submitHandle(e)}> Phones
            {(dropdownHoverState === 1) && <VillajaHeaderDropdown categoryNames={["Basic Phones","Smart Phones"]}/>}
            </div>
            <div className="vh-item vh-menu-item" onMouseOver={() => setHoverState(2)} onMouseOut={() => setHoverState(0)} onClick={(e) => submitHandle(e)}>Tablets &nbsp;
            {(dropdownHoverState === 2) && <VillajaHeaderDropdown categoryNames={["Professional Tablets","Educational Tablets"]}/>} </div>
            <div className="vh-item vh-menu-item" onMouseOver={() => setHoverState(3)} onMouseOut={() => setHoverState(0)} onClick={(e) => submitHandle(e)}>Computers  &nbsp;
            {(dropdownHoverState === 3) &&<VillajaHeaderDropdown categoryNames={["Laptops","Desktops"]}/>} </div>
            <div className="vh-item vh-menu-item" onMouseOver={() => setHoverState(4)} onMouseOut={() => setHoverState(0)} onClick={(e) => submitHandle(e)}>Accessories &nbsp;
            {(dropdownHoverState === 4) && <VillajaHeaderDropdown categoryNames={["Earphones","Smart Watches","Speakers","Microphones","Chargers","Phone Cases","Storage Devices","Gaming Devices","Keyboards & Mice","Laptop Bags","Stands & Lights","Sytlus & Tablets"]}/> }</div>
            <div className="vh-item vh-menu-item">Support</div>
        </div>
      }
        

        {/* <div className="mobile-menu">
            <img src={menuBtn} alt="menu button" className='aux-img'/>
        </div> */}
    </div>
    </div>

  )
}

export default VillajaHeader
