import {useEffect,} from 'react'
import { Link } from 'react-router-dom';
import Header from "../components/Layout/Header";
import Categories from "../components/Route/Categories/Categories";
// import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import OfficialStoreDeals from "../components/Route/OfficialStoreDeals/OfficialStoreDeals";

import VillajaFooter from '../components/VillajaFooter/VillajaFooter';
import { FaInstagram } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules';


import './HomePage.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

import ApplePhone from '../assets/sliderImages/hero_iphone15pro.jpg'
import AccessoriesImg from '../assets/sliderImages/hero_apple_watch.jpg'
import rightArrow from '../assets/sliderImages/rightArrow.svg'
import slider2 from '../assets/sliderImages/slider2.jpg'

import Slider1 from '../assets/sliderImages/SliderMedia/large.mp4'
import Slider2 from '../assets/sliderImages/SliderMedia/vivo.webp'
import Slider3 from '../assets/sliderImages/SliderMedia/galaxyVideo.webm'
import Slider4 from '../assets/sliderImages/SliderMedia/SurfacePro.webp'
import Slider5 from '../assets/sliderImages/SliderMedia/flipPhone.jpg'
import Slider6 from '../assets/sliderImages/SliderMedia/alienwareHero.png'
// import { useSelector } from 'react-redux';
import ShopAccessories from '../components/ShopAccessories/ShopAccessories';
import { useNavigate } from 'react-router-dom';

import VillajaFavicon from '../assets/Villajafavicon.ico'


const HomePage = () => {
  // const { allProducts, bestProducts, myProducts } = useSelector((state) => state.products);
  const navigate = useNavigate()
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      
        {/* <div className='bg-[#f1f1f2] px-4 max-[799px]:hidden'>
          <div className='max-w-[1628px] mx-auto py-2 bg-[#f1f1f2] text-[#025492] font-medium flex justify-between items-center '> <Link to='/shop/home'><div className='flex items-center gap-1'> <img src={VillajaFavicon} className='rounded-[50%] h-[25px] w-auto' alt="" /> Sell on Villaja </div></Link>
          <Link to="https://www.instagram.com/villajatech/?utm_source=ig_web_button_share_sheet&igshid=YzAwZjE1ZTI0Zg==" target='_blank'><FaInstagram size={20}  className='text-gray-600 hover:text-[#025492]'/></Link>
          </div>
        </div> */}
      
        <Header activeHeading={1} />

        <div className="homepage-slider">
          
          <Swiper pagination={true} 
          autoplay={{delay: 10000,disableOnInteraction: false,pauseOnMouseEnter: true}} 
          modules={[Pagination,Autoplay]} className="mySwiper" >
            <SwiperSlide className='swiper-slide'>

              <div className="swiper-slide-item">
                <div className="homepage-slider-info">
                  <div className="hsinfo-main">
                    <div className="hsinfo-top">
                      <p>
                        Explore Trending Products
                      </p>
                    </div>
                    <div className="hsinfo-btn" onClick={() => navigate('/products?category=Smart Watches')}>View Offers <span><img src={rightArrow} alt="" /></span></div>
                  </div>
                </div>
                <img src={AccessoriesImg} alt="" className='swiper-slide-img'/>
              </div>
            
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>

              <div className="swiper-slide-item">
                <div className="homepage-slider-info">
                  <div className="hsinfo-main">
                    <div className="hsinfo-top">
                      <p>
                      Explore Trending Products
                      </p>
                    </div>
                    <div className="hsinfo-btn" onClick={() => navigate('/products?category=Tablets')}>View Offers <span><img src={rightArrow} alt="" /></span></div>
                  </div>
                </div>
                <video src={Slider1} autoPlay muted playsInline className='swiper-slide-video'/>
              </div>
            
            </SwiperSlide>
            <SwiperSlide className='swiper-slide' >
              <div className="swiper-slide-item">
                <div className="homepage-slider-info">
                  <div className="hsinfo-main">
                    <div className="hsinfo-top">
                      <p>
                      Explore Trending Products
                      </p>
                    </div>
                    <div className="hsinfo-btn" onClick={() => navigate('/products?category=Phones')}>View Offers <span><img src={rightArrow} alt="" /></span></div>
                  </div>
                </div>
                <img src={Slider2} alt="" className='swiper-slide-img'/>
              </div>
            </SwiperSlide>

            <SwiperSlide className='swiper-slide'>

              <div className="swiper-slide-item">
                <div className="homepage-slider-info">
                  <div className="hsinfo-main">
                    <div className="hsinfo-top">
                      <p>
                      Explore Trending Products
                      </p>
                    </div>
                    <div className="hsinfo-btn" onClick={() => navigate('/products?category=Tablets')}>View Offers <span><img src={rightArrow} alt="" /></span></div>
                  </div>
                </div>
                <video src={Slider3} autoPlay muted playsInline className='swiper-slide-video'/>
              </div>
            
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>

              <div className="swiper-slide-item">
                <div className="homepage-slider-info">
                  <div className="hsinfo-main">
                    <div className="hsinfo-top">
                      <p>
                      Explore Trending Products
                      </p>
                    </div>
                    <div className="hsinfo-btn" onClick={() => navigate('/products?category=Earphones and Headphones')}>View Offers <span><img src={rightArrow} alt="" /></span></div>
                  </div>
                </div>
                <img src={slider2} alt="" className='swiper-slide-img'/>
              </div>
            
            </SwiperSlide>
            
            <SwiperSlide className='swiper-slide'>
              <div className="swiper-slide-item">
                <div className="homepage-slider-info">
                  <div className="hsinfo-main">
                    <div className="hsinfo-top">
                      <p>
                      Explore Trending Products
                      </p>
                    </div>
                    <div className="hsinfo-btn" onClick={() => navigate('/products?category=Phones')}>View Offers <span><img src={rightArrow} alt="" /></span></div>
                  </div>
                </div>
                <img src={Slider5} alt="" className='swiper-slide-img'/>
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
              <div className="swiper-slide-item">
                <div className="homepage-slider-info">
                  <div className="hsinfo-main">
                    <div className="hsinfo-top">
                      <p>
                      Explore Trending Products
                      </p>
                    </div>
                    <div className="hsinfo-btn" onClick={() => navigate('/products?category=Computers')}>View Offers <span><img src={rightArrow} alt="" /></span></div>
                  </div>
                </div>
                <img src={Slider6} alt="" className='swiper-slide-img' style={{objectFit:"contain"}}/>
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
              <div className="swiper-slide-item">
                <div className="homepage-slider-info">
                  <div className="hsinfo-main">
                    <div className="hsinfo-top">
                      <p>
                      Explore Trending Products
                      </p>
                    </div>
                    <div className="hsinfo-btn" onClick={() => navigate('/products?category=Computers')}>View Offers <span><img src={rightArrow} alt="" /></span></div>
                  </div>
                </div>
                <img src={Slider4} alt="" className='swiper-slide-img'/>
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
              <div className="swiper-slide-item">
                <div className="homepage-slider-info">
                  <div className="hsinfo-main">
                    <div className="hsinfo-top">
                      <p>
                      Explore Trending Products
                      </p>
                    </div>
                    <div className="hsinfo-btn" onClick={() => navigate('/products?category=Phones')}>View Offers <span><img src={rightArrow} alt="" /></span></div>
                  </div>
                </div>
                <img src={ApplePhone} alt="" className='swiper-slide-img'/>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        
        <div className="homepage-category-body">
          <div className="homepage-category-main">

          <Categories />
          {/* <ItemCatSection itemCatTitle={"Best Selling Items"} allProducts={allProducts} items={items} catIndex={1} />
          <ItemCatSection itemCatTitle={"Top Deals"} allProducts={allProducts} items={items} catIndex={2} />
          <ItemCatSection itemCatTitle={"Official Store Deals"} allProducts={allProducts} items={items} catIndex={3} /> */}
         
          </div>
        </div>
        {/* <Sponsored /> */}
        {/* <Footer /> */}
       



        {/* <VillajaHeader/> */}
        {/* <Hero /> */}
        <FeaturedProduct />
        {/* <BestDeals /> */}
        {/* <Events /> */}
       
        <OfficialStoreDeals />

        <ShopAccessories/>
        <VillajaFooter/>


    </div>
  )
}

export default HomePage