import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Lottie from "react-lottie";
import animationData from "../assets/animations/107043-success.json";
import VillajaFooter from "../components/VillajaFooter/VillajaFooter";
import { Link } from "react-router-dom";


const OrderSuccessPage = () => {
  return (
    <div>
      <Header />
      <Success />
      <VillajaFooter />
    </div>
  );
};

const Success = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} width={300} height={300} />
      <h5 className="text-center mb-6 text-[25px] text-[#000000a1]">
        Your order is successful 😍
      </h5>
      <p className="text-center mb-2">track your order in your dashboard page</p>
      <p className="text-center mb-4 font-bold text-blue-500"><Link to="/profile">Go to Dashboard</Link></p>
      <br />
      <br />
    </div>
  );
};

export default OrderSuccessPage;
