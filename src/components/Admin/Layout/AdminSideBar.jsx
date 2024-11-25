/* eslint-disable react/prop-types */
import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import {GrWorkshop} from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import { CiMoneyBill } from "react-icons/ci";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";
import { CiMoneyCheck1 } from "react-icons/ci";
// import { MdOutlineLocalOffer } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import './AdminSideBar.css'

const AdminSideBar = ({ active,sidebarActive}) => {
  return (
    <div className={`transition-all ease delay-200 w-[90%] min-[1000px]:w-full min-w-[18.75rem] min-h-[125vh] h-full bg-white overflow-y-auto ${!sidebarActive?'max-[1000px]:block':'max-[1000px]:hidden'}  absolute top-[80px] pl-5 min-[1000px]:sticky min-[1000px]:top-[80px] left-0 min-[1000px]:px-10 pt-6 z-10 shrink-0`}>
      {/* single item */}
      <div 
      className={` ${active === 1?'admin-sidebar-active':'admin-sidebar-item'} flex items-center cursor-pointer !font-[600] mb-[0.8rem]`}
      >
        <Link to="/admin/dashboard" className="w-full flex items-center">
          <RxDashboard
            size={30}
            color={`${active === 1 ? "white" : "#555"}`}
          />
          <h5
            className={`block pl-2 text-[18px] font-[600] ${
              active === 1 ? "text-[white]" : "text-[#555]"
            }`}
          >
            Dashboard
          </h5>
        </Link>
      </div>

      <div 
      className={` ${active === 2?'admin-sidebar-active':'admin-sidebar-item'} flex items-center cursor-pointer !font-[600] mb-[0.8rem]`}
      >
        <Link to="/admin-orders" className="w-full flex items-center">
          <FiShoppingBag
            size={30}
            color={`${active === 2 ? "white" : "#555"}`}
          />
          <h5
            className={`block pl-2 text-[18px] font-[600] ${
              active === 2 ? "text-[white]" : "text-[#555]"
            }`}
          >
            All Orders
          </h5>
        </Link>
      </div>

      <div 
      className={` ${active === 3?'admin-sidebar-active':'admin-sidebar-item'} flex items-center cursor-pointer !font-[600] mb-[0.8rem]`}
      >
        <Link to="/admin-sellers" className="w-full flex items-center">
          <GrWorkshop
            size={30}
            color={`${active === 3 ? "white" : "#555"}`}
          />
          <h5
            className={`block pl-2 text-[18px] font-[600] ${
              active === 3 ? "text-[white]" : "text-[#555]"
            }`}
          >
            All Sellers
          </h5>
        </Link>
      </div>

      <div 
      className={` ${active === 4?'admin-sidebar-active':'admin-sidebar-item'} flex items-center cursor-pointer !font-[600] mb-[0.8rem]`}
      >
        <Link to="/admin-users" className="w-full flex items-center">
          <HiOutlineUserGroup
            size={30}
            color={`${active === 4 ? "white" : "#555"}`}
          />
          <h5
            className={`block pl-2 text-[18px] font-[600] ${
              active === 4 ? "text-[white]" : "text-[#555]"
            }`}
          >
            All Customers
          </h5>
        </Link>
      </div>

      <div 
      className={` ${active === 5?'admin-sidebar-active':'admin-sidebar-item'} flex items-center cursor-pointer !font-[600] mb-[0.8rem]`}
      >
        <Link to="/admin-products" className="w-full flex items-center">
          <BsHandbag
            size={30}
            color={`${active === 5 ? "white" : "#555"}`}
          />
          <h5
            className={`block pl-2 text-[18px] font-[600] ${
              active === 5 ? "text-[white]" : "text-[#555]"
            }`}
          >
            All Products
          </h5>
        </Link>
      </div>

      {/* <div className="w-full flex items-center p-4">
        <Link to="/admin-events" className="w-full flex items-center">
          <MdOutlineLocalOffer
            size={30}
            color={`${active === 6 ? "crimson" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 6 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            All Events
          </h5>
        </Link>
      </div> */}



      <div 
      className={` ${active === 7?'admin-sidebar-active':'admin-sidebar-item'} flex items-center cursor-pointer !font-[600] mb-[0.8rem]`}
      >
        <Link
          to="/admin-withdraw-request"
          className="w-full flex items-center"
        >
          <CiMoneyBill
            size={30}
            color={`${active === 7 ? "white" : "#555"}`}
          />
          <h5
            className={`block pl-2 text-[18px] font-[600] ${
              active === 7 ? "text-[white]" : "text-[#555]"
            }`}
          >
            All Withdraws
          </h5>
        </Link>
      </div>

      <div 
      className={` ${active === 9?'admin-sidebar-active':'admin-sidebar-item'} flex items-center cursor-pointer !font-[600] mb-[0.8rem]`}
      >
        <Link
          to="/admin-refund-request"
          className="w-full flex items-center"
        >
          <MdOutlineSettingsBackupRestore
            size={30}
            color={`${active === 9 ? "white" : "#555"}`}
          />
          <h5
            className={`block pl-2 text-[18px] font-[600] ${
              active === 9 ? "text-[white]" : "text-[#555]"
            }`}
          >
            Request Refund
          </h5>
        </Link>
      </div>

      <div 
      className={` ${active === 10?'admin-sidebar-active':'admin-sidebar-item'} flex items-center cursor-pointer !font-[600] mb-[0.8rem]`}
      >
        <Link
          to="/admin-refunds"
          className="w-full flex items-center"
        >
          <CiMoneyCheck1
            size={30}
            color={`${active === 10 ? "white" : "#555"}`}
          />
          <h5
            className={`block pl-2 text-[18px] font-[600] ${
              active === 10 ? "text-[white]" : "text-[#555]"
            }`}
          >
            Refunds
          </h5>
        </Link>
      </div>

      <div 
      className={` ${active === 8?'admin-sidebar-active':'admin-sidebar-item'} flex items-center cursor-pointer !font-[600] mb-[0.8rem]`}
      >
        <Link
          to="/profile"
          className="w-full flex items-center"
        >
          <AiOutlineSetting
            size={30}
            color={`${active === 8 ? "white" : "#555"}`}
          />
          <h5
            className={`block pl-2 text-[18px] font-[600] ${
              active === 8 ? "text-[white]" : "text-[#555]"
            }`}
          >
            Settings
          </h5>
        </Link>
      </div>

    </div>
  );
};

export default AdminSideBar;
