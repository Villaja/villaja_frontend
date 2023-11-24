/* eslint-disable react/prop-types */
// import HeroPic from '../../'
import HeroPic from '../../assets/hero_iphonepic.svg'
import villajaLogoHeader from '../../assets/villaja_logo.svg'
import villajaLogo from '../../assets/villaja_footer_logo.svg'
import VillajaHeaderDropdown from '../../components/VillajaHeader/VillajaHeaderDropdown'
import ReactTextTransition from "react-text-transition";
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi';
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
// import { categoriesData, productData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart, 
} from "react-icons/ai";

import {CgMenuLeft} from "react-icons/cg"
// import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
// import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";
// import logo from '../../assets/villaja.png'
import './Header.css'
import '../../components/VillajaHeader/villajaHeader.css'
import { Swiper, SwiperSlide } from 'swiper/react'

const Header = ({ activeHeading }) => {

  const navigate = useNavigate()
  const [dropdownHoverState,setHoverState] = useState(0)
  // const { isAuthenticated, user } = useSelector((state) => state.user);
  // const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  // const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);
  const [textIndex,setTextIndex] = useState(0)
  const [mobileSearch,setMobileSearch] = useState(false)

  const texts = ['Phones','Gadgets','Tablets']


  const handleHeroSearch = () => {
    navigate(`/products?searchTerm=${searchTerm}`)
  }

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if(term === "")
    {
      setSearchData([])
    }
    else
    {

      const filteredProducts =
        allProducts &&
        allProducts.filter((product) =>
          product.name.toLowerCase().includes(term.toLowerCase())
        );
      setSearchData(filteredProducts);
    }

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
    // window.location.reload();
  };

  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

  useEffect(() => {
    let interval = setInterval(() => {
      setTextIndex(getRandomInt(0, texts.length - 1));
      // if(textIndex >= texts.length) {
      //   setTextIndex(0); console.log(textIndex);}
      // else {
      //   setTextIndex(textIndex + 1);
      //   console.log('settoh' + textIndex)
      // }
      // setParagraphIndex(getRandomNumber(0, paragraphs.length));
      // setTextFastIndex(getRandomNumber(0, paragraphs.length));
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <nav className='sticky top-0 z-[10000]'>
      <div className={`${styles.section}`}>
        
      </div>
      <div
        className={`${
          active === true ? "vh-header-wrapper " : null
        } vh-header-wrapper heading bg-white transition hidden 800px:flex `}
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

          <div className="vh-item-header-search ">
            <div className='hero-search-wrapper relative'>

            <div className="w-[100%] ">
             
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="h-[44px] w-full px-2  pl-8 text-base border-[2px] rounded-lg"
                onKeyDown={(e) => {if(e.key === "Enter") handleHeroSearch()} }
              />
              
              {searchData && searchData.length !== 0 ? (
                <div className="absolute w-full min-h-[30vh] bg-slate-50 z-[9] p-4">
                  {searchData &&
                    searchData.slice(0,7).map((i, index) => {
                      return (
                        <Link to={`/product/${i._id}`} key={index}>
                          <div className="w-full flex items-start-py-3 mb-2">
                            <div className='w-[40px] min-w-[40px] h-[40px] relative mr-[20px]'>

                            <img
                              src={`${i.images[0]?.url}`}
                              alt=""
                              className="w-full h-full object-contain "
                              />
                            </div>
                            <h1>{i.name.length > 40 ? i.name.slice(0, 40) + "..." : i.name}</h1>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              ) : null}
            </div>
            <div className="search-go-btn" onClick={() => handleHeroSearch()}><BiSearch size="lg" color='#333'/></div>
            </div>
          </div>
        </div>

        <div className="vh-header-right">


          <div className="vh-menu">
              <div className="vh-item vh-menu-item" onMouseEnter={() => setHoverState(1)} onMouseLeave={() => setHoverState(0)} onClick={(e) => submitHandle(e)}>Phones &nbsp;
              {(dropdownHoverState === 1) && <VillajaHeaderDropdown categoryNames={["Basic Phones","Smart Phones"]}/>}
              </div>
              <div className="vh-item vh-menu-item" onMouseOver={() => setHoverState(2)} onMouseLeave={() => setHoverState(0)} onClick={(e) => submitHandle(e)}>Tablets &nbsp;
              {(dropdownHoverState === 2) && <VillajaHeaderDropdown categoryNames={["Professional Tablets","Educational Tablets"]}/>} </div>
              <div className="vh-item vh-menu-item" onMouseOver={() => setHoverState(3)} onMouseLeave={() => setHoverState(0)} onClick={(e) => submitHandle(e)}>Computers  &nbsp;
              {(dropdownHoverState === 3) &&<VillajaHeaderDropdown categoryNames={["Laptops","Desktops"]}/>} </div>
              <div className="vh-item vh-menu-item" onMouseOver={() => setHoverState(4)} onMouseLeave={() => setHoverState(0)} onClick={(e) => submitHandle(e)}>Accessories &nbsp;
              {(dropdownHoverState === 4) && <VillajaHeaderDropdown categoryNames={["Earphones","Smart Watches","Speakers","Microphones","Chargers","Phone Cases","Storage Devices","Gaming Devices","Keyboards & Mice","Laptop Bags","Stands & Lights","Sytlus & Tablets"]}/> }</div>
              <Link to="/faq" className="vh-item vh-menu-item">Support</Link>
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
                  onClick={() => navigate('/cart')}
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
                <div className="relative cursor-pointer mr-[0px]">
                  {localStorage.getItem('user-token') ? (
                    <Link to="/profile">
                      <CgProfile size={30} />
                    </Link>
                  ) : (
                    <Link className="rounded-lg px-5 py-2 bg-[#00b4d8] text-white" to="/user/login" style={{flexShrink:"0"}}>
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
        
      </div>


      {/* mobile header */}
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10 " : null
        }
      w-full ${mobileSearch?'bg-[#111] h-[60px]':'bg-[#fff]'} z-50 top-0 left-0 shadow-sm 800px:hidden`}
      >
        {
          mobileSearch ? 
         
        
        <div className="w-[100%] h-[44px]  relative flex text-center justify-center" style={{transition:"all 0.3s ease"}}> 
              <AiOutlineSearch
                size={20}
                className="absolute left-7 top-5 cursor-pointer"
              />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="h-full w-[90%] mt-2 px-2  pl-8 text-base border-gray-200 border-[2px] rounded-md mobile-search-wrapper"
                onKeyDown={(e) => {if(e.key === "Enter") handleHeroSearch()} }
              />
            
              
                <RxCross1
                size={20}
                className="absolute right-8 top-5 cursor-pointer"
                onClick={() => setMobileSearch(false)}
                />
                :
              
            
              
              
                <div className="absolute w-full min-h-[125vh] bg-slate-50 shadow-sm-2 z-[9] p-4" style={{top:"60px",zIndex:"100000"}}>
              {searchData && searchData.length !== 0 ? (
                <>
                  {searchData &&
                    searchData.slice(0,7).map((i, index) => {
                      return (
                        <Link to={`/product/${i._id}`} key={index}>
                          <div className="w-full flex items-start-py-3 justify-between mb-[16px]" style={{alignItems:"center"}}>
                            <h1 className='ml-[16px] ' style={{maxWidth:"90%",textAlign:"left"}}>{i.name}</h1>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0.555538V7.77754C10 7.92487 9.94147 8.06618 9.83729 8.17036C9.7331 8.27455 9.5918 8.33308 9.44446 8.33308C9.29712 8.33308 9.15582 8.27455 9.05164 8.17036C8.94745 8.06618 8.88892 7.92487 8.88892 7.77754V1.89647L0.948891 9.8372C0.844649 9.94144 0.703267 10 0.555847 10C0.408427 10 0.267045 9.94144 0.162804 9.8372C0.0585623 9.73295 0 9.59157 0 9.44415C0 9.29673 0.0585623 9.15535 0.162804 9.05111L8.10353 1.11108H2.22246C2.07512 1.11108 1.93382 1.05255 1.82964 0.948363C1.72545 0.84418 1.66692 0.702876 1.66692 0.555538C1.66692 0.4082 1.72545 0.266897 1.82964 0.162714C1.93382 0.0585299 2.07512 0 2.22246 0H9.44446C9.5918 0 9.7331 0.0585299 9.83729 0.162714C9.94147 0.266897 10 0.4082 10 0.555538Z" fill="black"/>
                            </svg>

                          </div>
                        </Link>
                      );
                    })}
                </>

                    ) : null}
                    </div>
            </div>
          :
          <div className=''>
        <div className="w-full h-[60px] flex items-center justify-between" style={{transition:"all 0.3s ease"}}>

          <div className='flex items-center'>
            {
              !open?
              <svg width="25" height="25" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-4" onClick={() => setOpen(true)}>
              <path d="M1.33333 0.183594H8C8.35362 0.183594 8.69276 0.32407 8.94281 0.574118C9.19286 0.824167 9.33333 1.16331 9.33333 1.51693C9.33333 1.87055 9.19286 2.20969 8.94281 2.45974C8.69276 2.70978 8.35362 2.85026 8 2.85026H1.33333C0.979711 2.85026 0.640573 2.70978 0.390524 2.45974C0.140476 2.20969 0 1.87055 0 1.51693C0 1.16331 0.140476 0.824167 0.390524 0.574118C0.640573 0.32407 0.979711 0.183594 1.33333 0.183594ZM10.6667 10.8503H17.3333C17.687 10.8503 18.0261 10.9907 18.2761 11.2408C18.5262 11.4908 18.6667 11.83 18.6667 12.1836C18.6667 12.5372 18.5262 12.8764 18.2761 13.1264C18.0261 13.3765 17.687 13.5169 17.3333 13.5169H10.6667C10.313 13.5169 9.97391 13.3765 9.72386 13.1264C9.47381 12.8764 9.33333 12.5372 9.33333 12.1836C9.33333 11.83 9.47381 11.4908 9.72386 11.2408C9.97391 10.9907 10.313 10.8503 10.6667 10.8503ZM1.33333 5.51693H17.3333C17.687 5.51693 18.0261 5.6574 18.2761 5.90745C18.5262 6.1575 18.6667 6.49664 18.6667 6.85026C18.6667 7.20388 18.5262 7.54302 18.2761 7.79307C18.0261 8.04312 17.687 8.18359 17.3333 8.18359H1.33333C0.979711 8.18359 0.640573 8.04312 0.390524 7.79307C0.140476 7.54302 0 7.20388 0 6.85026C0 6.49664 0.140476 6.1575 0.390524 5.90745C0.640573 5.6574 0.979711 5.51693 1.33333 5.51693Z" fill="black"/>
              </svg>
              :
              <RxCross1
                size={25}
                className="ml-4"
                style={{transition:"all 0.3s ease"}}
                onClick={() => setOpen(false)}
                />
            }
            <div className='ml-[20px]'>
              <Link to="/">
                <p className="text-xl font-bold ">
                  <img src={villajaLogoHeader} alt="" />
                </p>
              </Link>
            </div>
          </div>

          <div className='mr-[15px] flex justify-between ' style={{alignItems:"center",gap:"1rem"}}>
            {/* <div style={{cursor:'pointer'}} onClick={() => setMobileSearch(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 25 25" fill="none">
                <path d="M10.0667 18.8516C11.8416 18.8512 13.5655 18.257 14.9637 17.1636L19.3596 21.5596L20.7737 20.1456L16.3777 15.7496C17.4717 14.3512 18.0662 12.627 18.0667 10.8516C18.0667 6.44056 14.4776 2.85156 10.0667 2.85156C5.65565 2.85156 2.06665 6.44056 2.06665 10.8516C2.06665 15.2626 5.65565 18.8516 10.0667 18.8516ZM10.0667 4.85156C13.3757 4.85156 16.0667 7.54256 16.0667 10.8516C16.0667 14.1606 13.3757 16.8516 10.0667 16.8516C6.75765 16.8516 4.06665 14.1606 4.06665 10.8516C4.06665 7.54256 6.75765 4.85156 10.0667 4.85156Z" fill="#111111"/>
              </svg>
            </div> */}
            <div className='mr-[5px]'>
              <div
                className="relative"
                onClick={() => navigate('/cart')}
                >
                <AiOutlineShoppingCart size={30} />
                <span className="absolute right-0 top-0 rounded-full bg-[#00b4d8] w-4 h-4 top right p-0 m-0 text-gray-900 font-mono text-[12px]  leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div>
            <div>
            <div className="relative cursor-pointer mr-[0px]">
                  {localStorage.getItem('user-token') ? (
                    <Link to="/profile">
                      <CgProfile size={30} />
                    </Link>
                  ) : (
                    <Link className="rounded-lg px-5 py-2 bg-[#00b4d8] text-white" to="/user/login" style={{flexShrink:"0"}}>
                      Sign In
                    </Link>
                  )}
                </div>
            </div>
          </div>


         
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

          {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
          </div>
          <div className=' pb-[0.8rem] px-[1rem] '>
            <div className='relative rounded-[24px] border border-[#e4dcdc] flex items-center overflow-hidden p-[0.2rem] px-[0.5rem]'>

              <AiOutlineSearch
                  size={20}
                  className=" cursor-pointer"
                  />
              <input
                  type="text"
                  placeholder="Search Products "
                  value={searchTerm}
                  onClick={() => setMobileSearch(true)}
                  className="h-[35px] w-[100%] px-2 text-base border-gray-200 border-[2px] rounded-md mobile-search-wrapper"
                  onKeyDown={(e) => {if(e.key === "Enter") handleHeroSearch()} }
                  />
            </div>
          </div>
        </div>
        }

        {/* header sidebar */}
        {open && (
          <div
            className={`fixed w-full bg-[#0000005f] z-20 h-full left-0`} style={{top:"60px"}}
          >
            <div className="fixed w-[100%] bg-[#111111] h-[125vh] left-0 z-10 overflow-y-scroll text-white" style={{top:"60px"}}>
              {/* <div className="w-full justify-between flex pr-3 mb-2">
                <div>
                  <div
                    className="relative mr-[15px]"
                    onClick={() => setOpenWishlist(true) || setOpen(false)}
                  >
                    <AiOutlineHeart size={30} className="mt-5 ml-3" />
                    <span class="absolute right-0 top-0 rounded-full bg-[#00b4d8] w-4 h-4 top right p-0 m-0 text-gray-900 font-mono text-[12px]  leading-tight text-center">
                      {wishlist && wishlist.length}
                    </span>
                  </div>
                </div>
                <RxCross1
                  size={30}
                  className="ml-4 mt-5"
                  onClick={() => setOpen(false)}
                />
              </div> */}

              <Navbar active={activeHeading}/>
              <div className={`${styles.noramlFlex}`} style={{flexShrink:"0",marginLeft:"1rem"}}>
              <div className="relative cursor-pointer mr-[15px]">
                
                    {localStorage.getItem('user-token') ? (
                        <Link to="/profile">
                          <CgProfile size={30} />
                        </Link>
                      ) : (
                        <Link className="rounded-lg px-5 py-2 bg-[#00b4d8] text-white" to="/user/login" >
                          Sign In
                        </Link>
                      )}
                    
                  </div>

              </div>

              <div className="w-full justify-between flex pr-3 mb-2 ml-1">
                    <div>
                      <div
                        className="relative mr-[15px]"
                        onClick={() => setOpenWishlist(true) || setOpen(false)}
                      >
                        <AiOutlineHeart size={30} className="mt-5 ml-3" />
                        <span class="absolute right-0 top-0 rounded-full bg-[#00b4d8] w-4 h-4 top right p-0 m-0 text-gray-900 font-mono text-[12px]  leading-tight text-center">
                          {wishlist && wishlist.length}
                        </span>
                      </div>
                    </div>
                    
              </div>
              
              <br />
              <br />
              <br />

              
            </div>
          </div>
        )}
      </div>

      {/*Hero Section */}

      {/* <div className={`hero-container`}>
        <div className="hero-pic-container">
            <img src={HeroPic} alt="" />
        </div>
        <div className="hero-search-section">
            <div className="hs-logo">
                <img src={villajaLogo} alt="" />
            </div>
            <div className="hs-text mb-4">
              
              <ReactTextTransition>
                <span>{texts[textIndex]}</span> 
              </ReactTextTransition>
                
              <span>from sellers you can trust</span>
            </div>
            <div className='hero-search-wrapper'>

            <div className="w-[100%] relative">
              <AiOutlineSearch
                size={20}
                className="absolute left-2 top-2.5 cursor-pointer"
              />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="h-[44px] w-full px-2  pl-8 text-base border-gray-200 border-[2px] rounded-md"
              />
              
              {searchData && searchData.length !== 0 ? (
                <div className="absolute w-full min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                  {searchData &&
                    searchData.slice(0,7).map((i, index) => {
                      return (
                        <Link to={`/product/${i._id}`} key={index}>
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
            <div className="search-go-btn" onClick={() => handleHeroSearch()}>Go</div>
            </div>

        </div>
      </div> */}


      {/* <div className={`hero-container`}>
        <div className="hero-pic-container">
            <img src={HeroPic} alt="" />
        </div>
        <div className="hero-search-section">
            <div className="hs-logo">
                <img src={villajaLogo} alt="" />
            </div>
            <div className="hs-text mb-4">
              
              <ReactTextTransition>
                <span>{texts[textIndex]}</span> 
              </ReactTextTransition>
                
              <span>from sellers you can trust</span>
            </div>
            <div className='hero-search-wrapper'>

            <div className="w-[100%] relative">
              <AiOutlineSearch
                size={20}
                className="absolute left-2 top-2.5 cursor-pointer"
              />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="h-[44px] w-full px-2  pl-8 text-base border-gray-200 border-[2px] rounded-md"
              />
              
              {searchData && searchData.length !== 0 ? (
                <div className="absolute w-full min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                  {searchData &&
                    searchData.slice(0,7).map((i, index) => {
                      return (
                        <Link to={`/product/${i._id}`} key={index}>
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
            <div className="search-go-btn" onClick={() => handleHeroSearch()}>Go</div>
            </div>

        </div>
      </div> */}

    </nav>
  );
};

export default Header;