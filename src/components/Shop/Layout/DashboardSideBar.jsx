import React from "react";
import { AiOutlineFolderAdd, AiOutlineGift } from "react-icons/ai";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocalOffer, MdForklift, MdTrolley } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { VscNewFile } from "react-icons/vsc";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdAutoAwesomeMosaic } from "react-icons/md";
import { GrAtm } from "react-icons/gr";
import { BsCashStack, BsShop } from "react-icons/bs";
import { GrOrderedList } from "react-icons/gr";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { MdAtm } from "react-icons/md";
import { server } from "../../../server";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LiaClipboardCheckSolid } from "react-icons/lia";
import {HiClipboardDocumentList } from "react-icons/hi2";
import { BiSolidShoppingBags } from "react-icons/bi";
import { RiUserSettingsFill, RiLogoutBoxFill } from "react-icons/ri";
import { FaCircleDollarToSlot } from "react-icons/fa6";


const DashboardSideBar = ({ active }) => {

  const navigate = useNavigate()


  const logoutHandler = async () => {
    localStorage.removeItem('seller-token');
    // window.location.reload(true);
    // Redirect to the login page
    navigate('/shop/login');
};






  return (
    <div className="w-50 pl-1 sm:pl-10 pt-32 bg-white shadow-sm fixed  top-0 left-0 z-10">
      {/* single item */}
      <div className="w-full flex items-center p-4">
  <Link
    to="/dashboard"
    className={`w-full flex items-center ${
      active === 1
        ? "bg-[#025492] text-white"
        : "bg-white text-[#555]"
    } p-2 rounded-lg transition-all`}
  >
    <MdAutoAwesomeMosaic
      size={30}
      color={active === 1 ? "white" : "#555"}
    />
    <h5
      className={`hidden 800px:block pl-2 text-[18px] font-bold ${
        active === 1 ? "text-white" : "text-[#555]"
      }`}
    >
      Dashboard
    </h5>
  </Link>
</div>

<div className="w-full flex items-center p-4">
  <Link to="/dashboard-orders" className={`w-full flex items-center ${
    active === 2
      ? "bg-[#025492] text-white"
      : "bg-white text-[#555]"
  } p-2 rounded-lg transition-all`}>
    <BiSolidShoppingBags
      size={30}
      color={active === 2 ? "white" : "#555"}
    />
    <h5
      className={`hidden 800px:block pl-2 text-[18px] font-bold ${
        active === 2 ? "text-white" : "text-[#555]"
      }`}
    >
      Orders
    </h5>
  </Link>
</div>

<div className="w-full flex items-center p-4">
  <Link to="/dashboard-products" className={`w-full flex items-center ${
    active === 3
      ? "bg-[#025492] text-white"
      : "bg-white text-[#555]"
  } p-2 rounded-lg transition-all`}>
    <HiClipboardDocumentList
      size={30}
      color={active === 3 ? "white" : "#555"}
    />
    <h5
      className={`hidden 800px:block pl-2 text-[18px] font-bold ${
        active === 3 ? "text-white" : "text-[#555]"
      }`}
    >
      Inventory
    </h5>
  </Link>
</div>

<div className="w-full flex items-center p-4">
  <Link to="/dashboard-create-product" className={`w-full flex items-center ${
    active === 4
      ? "bg-[#025492] text-white"
      : "bg-white text-[#555]"
  } p-2 rounded-lg transition-all`}>
    <MdForklift
      size={30}
      color={active === 4 ? "white" : "#555"}
    />
    <h5
      className={`hidden 800px:block pl-2 text-[18px] font-bold ${
        active === 4 ? "text-white" : "text-[#555]"
      }`}
    >
      Add A Product
    </h5>
  </Link>
</div>


<div className="w-full flex items-center p-4">
  <Link to="/dashboard-withdraw-money" className={`w-full flex items-center ${
    active === 7
      ? "bg-[#025492] text-white"
      : "bg-white text-[#555]"
  } p-2 rounded-lg transition-all`}>
    <FaCircleDollarToSlot
      size={30}
      color={active === 4 ? "white" : "#555"}
    />
    <h5
      className={`hidden 800px:block pl-2 text-[18px] font-bold ${
        active === 7 ? "text-white" : "text-[#555]"
      }`}
    >
      Request Payout
    </h5>
  </Link>
</div>

<div className="w-full flex items-center p-4">
  <Link to="/settings" className={`w-full flex items-center ${
    active === 11
      ? "bg-[#025492] text-white"
      : "bg-white text-[#555]"
  } p-2 rounded-lg transition-all`}>
    <RiUserSettingsFill
      size={30}
      color={active === 11 ? "white" : "#555"}
    />
    <h5
      className={`hidden 800px:block pl-2 text-[18px] font-bold ${
        active === 11 ? "text-white" : "text-[#555]"
      }`}
    >
      Settings
    </h5>
  </Link>
</div>

<div className="w-full flex items-center p-4">
  <span onClick={logoutHandler} className={`w-full flex cursor-pointer items-center ${
    active === 11
      ? ""
      : ""
  } p-2 rounded-lg transition-all`}>
    <RiLogoutBoxFill
      size={30}
      color={"#555"}
    />
    <h5
      className={`hidden text-[#555] 800px:block pl-2 text-[18px] font-bold`}
      onClick={logoutHandler}
    >
      Logout
    </h5>
  </span>
</div>


    </div>
  );
};

export default DashboardSideBar;
