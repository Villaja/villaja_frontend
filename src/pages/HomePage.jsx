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

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
        {/* <VillajaHeader/> */}
        {/* <Hero /> */}
        <Categories />
        <BestDeals />
        {/* <Events /> */}
        <FeaturedProduct />
        <OfficialStoreDeals />
        {/* <Sponsored /> */}
        {/* <Footer /> */}
        <VillajaFooter/>
    </div>
  )
}

export default HomePage