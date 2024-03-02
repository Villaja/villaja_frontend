import React from "react";
import {BsPatchCheckFill} from 'react-icons/bs'
import { AiOutlineLogin, AiOutlineMessage } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import {
  MdOutlineAdminPanelSettings,
  MdOutlinePassword,
  MdOutlineTrackChanges,
} from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { RxPerson } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import './ProfileSidebar.css'

const ProfileSidebar = ({ setActive, active }) => {
  const navigate = useNavigate();
 const {user} = useSelector((state) => state.user);
 const logoutHandler = () => {
  // Remove the token from local storage
  localStorage.removeItem('user-token');
  window.location.reload(true);
  // Redirect to the login page
  navigate('/user/login');
};

  return (
    <div className="profile-sidebar 1100px:block w-full bg-transparent shadow-sm rounded-[10px] 1100px:p-4 1100px:pt-8 gap-[1rem]">
      <div
        className={` ${active === 1?'profile-sidebar-active':'profile-sidebar-item'} flex items-center cursor-pointer  1100px:mb-[1.75rem] gap-[0.75rem]`}
        onClick={() => setActive(1)}
      >
        <RxPerson size={25} color={active === 1 ? "white" : ""} />
        <span
          className={` ${
            active === 1 ? "text-white" : ""
          } 800px:block`}
        >
          Profile
        </span>
      </div>
      <div
        className={` ${active === 2?'profile-sidebar-active':'profile-sidebar-item'} flex items-center cursor-pointer w-full 1100px:mb-[1.75rem] gap-[0.75rem]`}
        onClick={() => setActive(2)}
      >
        <HiOutlineShoppingBag size={25} color={active === 2 ? "white" : ""} />
        <span
          className={`${
            active === 2 ? "text-white" : ""
          } 800px:block `}
        >
          Orders
        </span>
      </div>
      {/* <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(3)}
      >
        <HiOutlineReceiptRefund size={20} color={active === 3 ? "dodgerblue" : ""} />
        <span
          className={`pl-3 ${
            active === 3 ? "text-blue-400" : ""
          } 800px:block hidden`}
        >
          Refunds
        </span>
      </div> */}

      <div
        className={` ${active === 4?'profile-sidebar-active':'profile-sidebar-item'} flex items-center cursor-pointer w-full 1100px:mb-[1.75rem] gap-[0.75rem]`}
        onClick={() => setActive(4) || navigate("/inbox")}
      >
        <AiOutlineMessage size={20} color={active === 4 ? "dodgerblue" : ""} />
        <span
          className={`pl-3 ${
            active === 4 ? "text-blue-400" : ""
          } 800px:block hidden`}
        >
          Inbox
        </span>
      </div>

      <div
        className={` ${active === 5?'profile-sidebar-active':'profile-sidebar-item'} flex items-center cursor-pointer w-full 1100px:mb-[1.75rem] gap-[0.75rem]`}
        onClick={() => setActive(5)}
      >
        <BsPatchCheckFill size={25} color={active === 5 ? "white" : ""} />
        <span
          className={`${
            active === 5 ? "text-white" : ""
          } 800px:block `}
        >
          Delivery Approval
        </span>
      </div>

      <div
        className={` ${active === 6?'profile-sidebar-active':'profile-sidebar-item'} flex items-center cursor-pointer w-full 1100px:mb-[1.75rem] 1100px:gap-[0.75rem] `}
        onClick={() => setActive(6)}
      >
        <RiLockPasswordLine size={25} color={active === 6 ? "white" : ""} />
        <span
          className={`${
            active === 6 ? "text-white" : ""
          } 800px:block `}
        >
          Change Password
        </span>
      </div>

      {/* <div
        className={` ${active === 7?'profile-sidebar-active':'profile-sidebar-item'} flex items-center cursor-pointer w-full 1100px:mb-[1.75rem] gap-[0.75rem]`}
        onClick={() => setActive(7)}
      >
        <TbAddressBook size={20} color={active === 7 ? "white" : ""} />
        <span
          className={` ${
            active === 7 ? "text-white" : ""
          } 800px:block `}
        >
          Address
        </span>
      </div> */}

      {user && user?.role === "Admin" && (
        <Link to="/admin/dashboard">
          <div
            className={` ${active === 8?'profile-sidebar-active':'profile-sidebar-item'} flex items-center cursor-pointer w-full 1100px:mb-[1.75rem] gap-[0.75rem]`}
            onClick={() => setActive(8)}
          >
            <MdOutlineAdminPanelSettings
              size={25}
              color={active === 7 ? "white" : ""}
            />
            <span
              className={`${
                active === 8 ? "text-white" : ""
              } 800px:block `}
            >
              Admin Dashboard
            </span>
          </div>
        </Link>
      )}
      <div
        className={` ${active === 8?'profile-sidebar-active':'profile-sidebar-item'} flex items-center cursor-pointer w-full 1100px:mb-[1.75rem] gap-[0.75rem]`}
        onClick={logoutHandler}
      >
        <AiOutlineLogin size={25} color={active === 8 ? "white" : ""} />
        <span
          className={`${
            active === 8 ? "text-white" : ""
          } 800px:block `}
        >
          Log out
        </span>
      </div>
    </div>
  );
};

export default ProfileSidebar;
