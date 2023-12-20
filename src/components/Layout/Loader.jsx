import React from "react";
import Lottie from "react-lottie";
import animationData from '../../assets/animations/24151-ecommerce-animation.json'

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* <img src="https://lottie.host/embed/99a5e03c-6d33-4c5c-9b32-aac73e3ace23/o7Rd1Fgj2p.json" alt="" /> */}
      <iframe src="https://lottie.host/embed/34185618-ce9f-43a4-a694-f88aa7c3bc90/pIILnA0J2X.json"width={300} height={300}></iframe>
      {/* <iframe src="https://lottie.host/embed/e23d4373-749e-4370-a263-b7d3d2804403/2tm390Gzql.json" width={300} height={300}></iframe> */}
      {/* <Lottie options={defaultOptions} width={300} height={300} /> */}
    </div>
  );
};

export default Loader;
