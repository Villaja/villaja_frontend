import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa"; // Import the shopping cart icon

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
  return (
    <div className="w-full h-[80px] bg-white shadow-sm sticky top-0 left-0 z-30 flex items-center justify-between px-8">
      <div>
        <Link to="/dashboard">
        <div className="shc-logo text-lg">
        <span className="text-gray-700">villaja</span> &nbsp; seller centre
      </div>
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          {/* Check if the seller's avatar is available */}
          {seller?.avatar?.url ? (
            // <Link to={`/shop/${seller?._id}`}>
            //   <img
            //     src={seller.avatar.url}
            //     alt=""
            //     className="w-[50px] h-[50px] rounded-full object-cover"
            //   />
            // </Link>
            <Link to={`/shop/${seller?._id}`}>
            <FaShoppingCart
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          ) : (
            // If the avatar is not available, display a shopping cart icon
            <Link to={`/shop/${seller?._id}`}>
              <FaShoppingCart
                color="#555"
                size={30}
                className="mx-5 cursor-pointer"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
