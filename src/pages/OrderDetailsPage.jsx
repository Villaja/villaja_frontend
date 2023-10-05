import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import UserOrderDetails from "../components/UserOrderDetails";
import VillajaFooter from '../components/VillajaFooter/VillajaFooter';

const OrderDetailsPage = () => {
  return (
    <div>
        <Header />
        <UserOrderDetails />
        <VillajaFooter/>
    </div>
  )
}

export default OrderDetailsPage