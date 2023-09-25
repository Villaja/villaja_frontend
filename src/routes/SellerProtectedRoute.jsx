import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../components/Layout/Loader";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import load from '../assets/animations/24151-ecommerce-animation.json';


const SellerProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: load,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { isLoading, isSeller } = useSelector((state) => state.seller);
  if (isLoading === true) {
    return  <div className="w-full h-screen flex items-center justify-center">
    <Lottie options={defaultOptions} width={300} height={300} />
  </div>
  } else {
    if (!isSeller) {
      navigate('/shop/login');
    }
    return children;
  }
};

export default SellerProtectedRoute;
