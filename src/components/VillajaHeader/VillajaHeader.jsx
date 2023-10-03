import React, { useState } from 'react';
import './villajaHeader.css';
import villajaLogo from '../../assets/villaja_logo.svg';
import searchIcon from '../../assets/search_icon.svg';
import profileIcon from '../../assets/profile_icon.svg';
import cartIcon from '../../assets/cart_icon.svg';
import menuBtn from '../../assets/menu_btn.svg';
import VillajaHeaderDropdown from './VillajaHeaderDropdown';
import { Link, useLocation } from 'react-router-dom';

const VillajaHeader = () => {
  const [dropdownHoverState, setHoverState] = useState(0);
  const location = useLocation();

  const submitHandle = (e) => {
    // Define the logic for handling menu item clicks here
  };

  return (
    <div className="vh-header-wrapper" style={{ display: ['seller', 'login', 'signup'].includes(location.pathname.split('/')[1]) ? 'none' : 'block' }}>
      <div className="vh-header-container">
        <div className="vh-item vh-logo">
          <Link to={'/'}>
            <img src={villajaLogo} alt="" />
          </Link>
        </div>

        <div className="vh-menu">
          <div
            className="vh-item vh-menu-item"
            onMouseOver={() => setHoverState(1)}
            onMouseOut={() => setHoverState(0)}
            onClick={submitHandle}
          >
            Phones
            {dropdownHoverState === 1 && <VillajaHeaderDropdown categoryNames={['Basic Phones', 'Smart Phones']} />}
          </div>
          <div
            className="vh-item vh-menu-item"
            onMouseOver={() => setHoverState(2)}
            onMouseOut={() => setHoverState(0)}
            onClick={submitHandle}
          >
            Tablets &nbsp;
            {dropdownHoverState === 2 && <VillajaHeaderDropdown categoryNames={['Professional Tablets', 'Educational Tablets']} />}
          </div>
          <div
            className="vh-item vh-menu-item"
            onMouseOver={() => setHoverState(3)}
            onMouseOut={() => setHoverState(0)}
            onClick={submitHandle}
          >
            Computers &nbsp;
            {dropdownHoverState === 3 && <VillajaHeaderDropdown categoryNames={['Laptops', 'Desktops']} />}
          </div>
          <div
            className="vh-item vh-menu-item"
            onMouseOver={() => setHoverState(4)}
            onMouseOut={() => setHoverState(0)}
            onClick={submitHandle}
          >
            Accessories &nbsp;
            {dropdownHoverState === 4 && (
              <VillajaHeaderDropdown
                categoryNames={[
                  'EarHeadphones',
                  'Smart Watches',
                  'Speakers',
                  'Micropphones',
                  'Chargers',
                  'Phone Cases',
                  'Storage Devices',
                  'Gaming Devices',
                  'Keyboards & Mice',
                  'Laptop Bags',
                  'Stands & Lights',
                  'Sytlus & Tablets',
                ]}
              />
            )}
          </div>
          <div className="vh-item vh-menu-item">Support</div>
        </div>

        <div className="mobile-menu">
          <img src={menuBtn} alt="menu button" className="aux-img" />
        </div>
      </div>
    </div>
  );
};

export default VillajaHeader;
