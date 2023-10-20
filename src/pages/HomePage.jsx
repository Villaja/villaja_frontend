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
import AccessoriesImg from '../assets/sliderImages/hero_apple_watch.jpg'
import AccessoriesImg2 from '../assets/sliderImages/promo_airpods_pro.jpg'
import rightArrow from '../assets/sliderImages/rightArrow.svg'
import slider1 from '../assets/sliderImages/slider1.jpg'
import slider2 from '../assets/sliderImages/slider2.jpg'



const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />

        <div className="homepage-slider">
          
          <Swiper pagination={true} 
          autoplay={{delay: 3000,disableOnInteraction: false,pauseOnMouseEnter: true}} 
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
                <img src={AccessoriesImg} alt="" className='swiper-slide-img'/>
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
                <img src={ApplePhone} alt="" className='swiper-slide-img'/>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        
        <div className="homepage-category-body">
          <div className="homepage-category-main">

          <Categories />
          <ItemCatSection itemCatTitle={"Best Selling Items"} items={items} catIndex={1} />
          <ItemCatSection itemCatTitle={"Top Deals"} items={items} catIndex={2} />
          <ItemCatSection itemCatTitle={"Official Store Deals"} items={items} catIndex={3} />
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