


// import HeroPic from '../../'
import HeroPic from '../../assets/hero_iphonepic.svg'
import villajaLogoHeader from '../../assets/villaja_logo.svg'
import villajaLogo from '../../assets/villaja_footer_logo.svg'
import VillajaHeaderDropdown from '../../components/VillajaHeader/VillajaHeaderDropdown'





import { useNavigate } from 'react-router-dom'

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { categoriesData, productData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart, 
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";
import logo from '../../assets/villaja.png'

import './Header.css'
import '../../components/VillajaHeader/villajaHeader.css'

const Header = ({ activeHeading }) => {

  const navigate = useNavigate()
    const [dropdownHoverState,setHoverState] = useState(0)

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isSeller } = useSelector((state) => state.seller);
  
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      allProducts &&
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  const submitHandle = (i) => {
    navigate(`/products?category=${i.target.innerHTML.split(" ")[0]}`);
    window.location.reload();
  };

  return (
    <>
      <div className={`${styles.section}`}>
        
      </div>
      <div
        className={`${
          active === true ? "vh-header-wrapper" : null
        } transition `}
      >
        <div
          className={`vh-header-container`}
        >
          
          {/* <div>
            <Link to="/">
             <img src={logo} alt="logo"/>
            </Link>
          </div> */}
          {/* navitems */}
          {/* <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div> */}

          <div className="vh-item vh-logo">
           <Link to={'/'}>
                <img src={villajaLogoHeader} alt="" />
            </Link>
        </div>

        <div className="vh-menu">
            <div className="vh-item vh-menu-item" onMouseOver={() => setHoverState(1)} onMouseOut={() => setHoverState(0)} onClick={(e) => submitHandle(e)}> <div>Phones &nbsp;</div>
            {(dropdownHoverState === 1) && <VillajaHeaderDropdown categoryNames={["Basic Phones","Smart Phones"]}/>}
            </div>
            <div className="vh-item vh-menu-item" onMouseOver={() => setHoverState(2)} onMouseOut={() => setHoverState(0)} onClick={(e) => submitHandle(e)}>Tablets &nbsp;
            {(dropdownHoverState === 2) && <VillajaHeaderDropdown categoryNames={["Professional Tablets","Educational Tablets"]}/>} </div>
            <div className="vh-item vh-menu-item" onMouseOver={() => setHoverState(3)} onMouseOut={() => setHoverState(0)} onClick={(e) => submitHandle(e)}>Computers  &nbsp;
            {(dropdownHoverState === 3) &&<VillajaHeaderDropdown categoryNames={["Laptops","Desktops"]}/>} </div>
            <div className="vh-item vh-menu-item" onMouseOver={() => setHoverState(4)} onMouseOut={() => setHoverState(0)} onClick={(e) => submitHandle(e)}>Accessories &nbsp;
            {(dropdownHoverState === 4) && <VillajaHeaderDropdown categoryNames={["EarHeadphones","Smart Watches","Speakers","Micropphones","Chargers","Phone Cases","Storage Devices","Gaming Devices","Keyboards & Mice","Laptop Bags","Stands & Lights","Sytlus & Tablets"]}/> }</div>
            <div className="vh-item vh-menu-item">Support</div>
        </div>

          <div className="flex" style={{gap:"2rem"}}>
            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}
              >
                <AiOutlineHeart size={30} />
                <span className="absolute right-0 top-0 rounded-full bg-[#00b4d8] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {wishlist && wishlist.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart
                  size={30}
                  // color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#00b4d8] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <CgProfile size={30} />
                  </Link>
                ) : (
                  <Link className="rounded-lg px-5 py-2 bg-blue-600 text-white" to="/user/login">
                    Sign In
                  </Link>
                )}
              </div>
            </div>

            {/* cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/* wishlist popup */}
            {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null}
          </div>
        </div>
        
      </div>










      {/* mobile header */}
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        }
      w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            <Link to="/">
              <p className="text-xl font-bold"></p>
            </Link>
          </div>
          <div>
            <div
              className="relative mr-[20px]"
              onClick={() => setOpenCart(true)}
            >
              <AiOutlineShoppingCart size={30} />
              <span class="absolute right-0 top-0 rounded-full bg-red-500 w-4 h-4 top right p-0 m-0 text-gray-900 font-mono text-[12px]  leading-tight text-center">
                {cart && cart.length}
              </span>
            </div>
          </div>
          {/* cart popup */}
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

          {/* wishlist popup */}
          {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
        </div>

        {/* header sidebar */}
        {open && (
          <div
            className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
          >
            <div className="fixed w-[70%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="w-full justify-between flex pr-3">
                <div>
                  <div
                    className="relative mr-[15px]"
                    onClick={() => setOpenWishlist(true) || setOpen(false)}
                  >
                    <AiOutlineHeart size={30} className="mt-5 ml-3" />
                    <span class="absolute right-0 top-0 rounded-full bg-red-500 w-4 h-4 top right p-0 m-0 text-gray-900 font-mono text-[12px]  leading-tight text-center">
                      {wishlist && wishlist.length}
                    </span>
                  </div>
                </div>
                <RxCross1
                  size={30}
                  className="ml-4 mt-5"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="my-8 w-[92%] m-auto h-[40px relative]">
                <input
                  type="search"
                  placeholder="Search Product..."
                  className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                {searchData && (
                  <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
                    {searchData.map((i) => {
                      const d = i.name;

                      const Product_name = d.replace(/\s+/g, "-");
                      return (
                        <Link to={`/product/${Product_name}`}>
                          <div className="flex items-center">
                            <img
                              src={i.image_Url[0]?.url}
                              alt=""
                              className="w-[50px] mr-2"
                            />
                            <h5>{i.name}</h5>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Navbar active={activeHeading} />
              <div className={`${styles.button} ml-4 !rounded-[4px]`}>
                <Link to="/profile">
                  <h1 className="text-[#fff] flex items-center">
                    Dashboard <IoIosArrowForward className="ml-1" />
                  </h1>
                </Link>
              </div>
              <br />
              <br />
              <br />

              <div className="flex w-full justify-center">
                {isAuthenticated ? (
                  <div>
                    <Link to="/profile">
                      <img
                        src={`${user.avatar?.url}`}
                        alt=""
                        className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                      />
                     
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/user/login"
                      className="text-[18px] pr-[10px] text-[#000000b7]"
                    >
                      Login 
                    </Link>
                    <Link
                      to="/user/signup"
                      className="text-[18px] text-[#000000b7]"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/*Hero Section */}

      <div className={`hero-container`}>
        <div className="hero-pic-container">
            <img src={HeroPic} alt="" />
        </div>
        <div className="hero-search-section">
            <div className="hs-logo">
                <img src={villajaLogo} alt="" />
            </div>
            <div className="hs-text"><span>Phones</span> <span>from sellers you can trust</span></div>
            <div className="w-[100%] relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="h-[58px] w-full px-2  pl-6 text-lg border-gray-200 border-[2px] rounded-md"
              />
              <AiOutlineSearch
                size={30}
                className="absolute right-2 top-3 cursor-pointer"
              />
              {searchData && searchData.length !== 0 ? (
                <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                  {searchData &&
                    searchData.map((i, index) => {
                      return (
                        <Link to={`/product/${i._id}`}>
                          <div className="w-full flex items-start-py-3">
                            <img
                              src={`${i.images[0]?.url}`}
                              alt=""
                              className="w-[40px] h-[40px] mr-[10px]"
                            />
                            <h1>{i.name}</h1>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              ) : null}
            </div>
        </div>
      </div>



      {/* <div className="hidden 800px:h-[30px] px-16 py-4 800px:my-[30px] 800px:flex items-center justify-between">
        
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[58px] w-[270px] hidden 1000px:block">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button
                className={`h-[100%] w-full flex justify-between mb-4 items-center border-gray-200 border-[2px] pl-10 bg-white font-sans text-md font-[500] select-none rounded`}
              >
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
        </div> */}




















        

      
    </>
  );
};

export default Header;






