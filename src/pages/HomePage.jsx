import React from 'react'
import Header from "../components/Layout/Header";
import VillajaHeader from '../components/VillajaHeader/VillajaHeader';
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import OfficialStoreDeals from "../components/Route/OfficialStoreDeals/OfficialStoreDeals";

import Events from "../components/Events/Events";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";
import VillajaFooter from '../components/VillajaFooter/VillajaFooter';
import ItemCatSection from '../components/ItemCatSection/ItemCatSection'
import { items } from '../mock_data/Sample_Items'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules';

import './HomePage.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

import ApplePhone from '../assets/sliderImages/hero_iphone15pro.jpg'
import AccessoriesImg from '../assets/sliderImages/macbookHero.jpg'
import rightArrow from '../assets/sliderImages/rightArrow.svg'
import slider2 from '../assets/sliderImages/slider2.jpg'

import Slider1 from '../assets/sliderImages/SliderMedia/large.mp4'
import Slider2 from '../assets/sliderImages/SliderMedia/vivo.webp'
import Slider3 from '../assets/sliderImages/SliderMedia/galaxyVideo.webm'
import Slider4 from '../assets/sliderImages/SliderMedia/SurfacePro.webp'
import Slider5 from '../assets/sliderImages/SliderMedia/flipPhone.jpg'
import Slider6 from '../assets/sliderImages/SliderMedia/alienwareHero.png'
import { useSelector } from 'react-redux';
import ShopAccessories from '../components/ShopAccessories/ShopAccessories';



const HomePage = () => {
  const { allProducts } = useSelector((state) => state.products);
  return (
    <div>
        <Header activeHeading={1} />

        <div className="homepage-slider">
          
          <Swiper pagination={true} 
          autoplay={{delay: 20000,disableOnInteraction: false,pauseOnMouseEnter: true}} 
          modules={[Pagination,Autoplay]} className="mySwiper" >
            <SwiperSlide className='swiper-slide'>

              <div className="swiper-slide-item">
                <div className="homepage-slider-info">
                  <div className="hsinfo-main">
                    <div className="hsinfo-top">
                      <p>
                        Get the Latest Apple products
                      </p>
                    </div>
                    <div className="hsinfo-btn">View Offers <span><img src={rightArrow} alt="" /></span></div>
                  </div>
                </div>
                <img src={AccessoriesImg} alt="" className='swiper-slide-video'/>
              </div>
            
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>

              <div className="swiper-slide-item">
                <div className="homepage-slider-info">
                  <div className="hsinfo-main">
                    <div className="hsinfo-top">
                      <p>
                        Get the Latest Apple products
                      </p>
                    </div>
                    <div className="hsinfo-btn">View Offers <span><img src={rightArrow} alt="" /></span></div>
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
                        Get the Latest Apple products
                      </p>
                    </div>
                    <div className="hsinfo-btn">View Offers <span><img src={rightArrow} alt="" /></span></div>
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
                        Get the Latest Apple products
                      </p>
                    </div>
                    <div className="hsinfo-btn">View Offers <span><img src={rightArrow} alt="" /></span></div>
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
                        Get the Latest Apple products
                      </p>
                    </div>
                    <div className="hsinfo-btn">View Offers <span><img src={rightArrow} alt="" /></span></div>
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
                        Get the Latest Apple products
                      </p>
                    </div>
                    <div className="hsinfo-btn">View Offers <span><img src={rightArrow} alt="" /></span></div>
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
                        Get the Latest Apple products
                      </p>
                    </div>
                    <div className="hsinfo-btn">View Offers <span><img src={rightArrow} alt="" /></span></div>
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
                        Get the Latest Apple products
                      </p>
                    </div>
                    <div className="hsinfo-btn">View Offers <span><img src={rightArrow} alt="" /></span></div>
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
                        Get the Latest Apple products
                      </p>
                    </div>
                    <div className="hsinfo-btn">View Offers <span><img src={rightArrow} alt="" /></span></div>
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
          <ItemCatSection itemCatTitle={"Best Selling Items"} allProducts={allProducts} items={items} catIndex={1} />
          <ItemCatSection itemCatTitle={"Top Deals"} allProducts={allProducts} items={items} catIndex={2} />
          <ItemCatSection itemCatTitle={"Official Store Deals"} allProducts={allProducts} items={items} catIndex={3} />
          <ShopAccessories/>
          </div>
        </div>
        {/* <Sponsored /> */}
        {/* <Footer /> */}
        <VillajaFooter/>



        {/* <VillajaHeader/> */}
        {/* <Hero /> */}
        {/* <BestDeals /> */}
        {/* <Events /> */}
        {/* <FeaturedProduct /> */}
        {/* <OfficialStoreDeals /> */}


    </div>
  )
}

export default HomePage
