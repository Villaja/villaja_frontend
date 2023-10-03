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



const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
        {/* <VillajaHeader/> */}
        {/* <Hero /> */}
        {/* <BestDeals /> */}
        {/* <Events /> */}
        {/* <FeaturedProduct /> */}
        {/* <OfficialStoreDeals /> */}
        <div className="homepage-category-body">
          <div className="homepage-category-main">

          <Categories />
          <ItemCatSection itemCatTitle={"Best Selling Items"} items={items}/>
          <ItemCatSection itemCatTitle={"Top Deals"} items={items}/>
          <ItemCatSection itemCatTitle={"Official Store Deals"} items={items}/>
          </div>
        </div>
        {/* <Sponsored /> */}
        {/* <Footer /> */}
        <VillajaFooter/>



    </div>
  )
}

export default HomePage