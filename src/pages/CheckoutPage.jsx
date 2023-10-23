import React from 'react'
import Header from '../components/Layout/Header'
import CheckoutSteps from "../components/Checkout/CheckoutSteps";
import Checkout from "../components/Checkout/Checkout";
import Footer from '../components/Layout/Footer';
import VillajaFooter from '../components/VillajaFooter/VillajaFooter';

const CheckoutPage = () => {
  return (
    <div>
        <Header />
        <br />
        {/* <br /> */}
        {/* <CheckoutSteps active={1} /> */}
        <Checkout />
        <br />
        <br />
        {/* <Footer /> */}
        <VillajaFooter/>
    </div>
  )
}

export default CheckoutPage