/* eslint-disable react/prop-types */
// import { AiOutlineGift } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
// import { BiMessageSquareDetail } from 'react-icons/bi'
// import { FiPackage, FiShoppingBag } from 'react-icons/fi'
// import { MdOutlineLocalOffer } from 'react-icons/md'
// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const AdminHeader = ({setOpen,open}) => {
    // const {user} = useSelector((state) => state.user);

  return (
         <div className="w-full h-[80px] bg-white shadow-sm sticky top-0 left-0 z-30 flex items-center justify-between px-1 min-[1000px]:px-16">
          <div className='flex items-center justify-between w-full'>
            <div className='block min-[1000px]:hidden'>
              {
              open?
                <svg width="25" height="25" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-4" onClick={() => setOpen(false)}>
                <path d="M1.33333 0.183594H8C8.35362 0.183594 8.69276 0.32407 8.94281 0.574118C9.19286 0.824167 9.33333 1.16331 9.33333 1.51693C9.33333 1.87055 9.19286 2.20969 8.94281 2.45974C8.69276 2.70978 8.35362 2.85026 8 2.85026H1.33333C0.979711 2.85026 0.640573 2.70978 0.390524 2.45974C0.140476 2.20969 0 1.87055 0 1.51693C0 1.16331 0.140476 0.824167 0.390524 0.574118C0.640573 0.32407 0.979711 0.183594 1.33333 0.183594ZM10.6667 10.8503H17.3333C17.687 10.8503 18.0261 10.9907 18.2761 11.2408C18.5262 11.4908 18.6667 11.83 18.6667 12.1836C18.6667 12.5372 18.5262 12.8764 18.2761 13.1264C18.0261 13.3765 17.687 13.5169 17.3333 13.5169H10.6667C10.313 13.5169 9.97391 13.3765 9.72386 13.1264C9.47381 12.8764 9.33333 12.5372 9.33333 12.1836C9.33333 11.83 9.47381 11.4908 9.72386 11.2408C9.97391 10.9907 10.313 10.8503 10.6667 10.8503ZM1.33333 5.51693H17.3333C17.687 5.51693 18.0261 5.6574 18.2761 5.90745C18.5262 6.1575 18.6667 6.49664 18.6667 6.85026C18.6667 7.20388 18.5262 7.54302 18.2761 7.79307C18.0261 8.04312 17.687 8.18359 17.3333 8.18359H1.33333C0.979711 8.18359 0.640573 8.04312 0.390524 7.79307C0.140476 7.54302 0 7.20388 0 6.85026C0 6.49664 0.140476 6.1575 0.390524 5.90745C0.640573 5.6574 0.979711 5.51693 1.33333 5.51693Z" fill="black"/>
                </svg>
                :
                <RxCross1
                  size={25}
                  className="ml-4"
                  style={{transition:"all 0.3s ease"}}
                  onClick={() => setOpen(true)}
                  />
            }
            </div>
            <Link to="/">
            <div className="shc-logo text-[1.25rem] font-[600]">
              <span className="text-gray-700">Villaja</span> &nbsp; Super Administrator
            </div>
            </Link>

            <div></div>
          </div>
          {/* <div className="flex items-center">
            <div className="flex items-center mr-4">
              <Link to="/dashboard/cupouns" className="800px:block hidden">
                <AiOutlineGift
                  color="#555"
                  size={30}
                  className="mx-5 cursor-pointer"
                />
              </Link>
              <Link to="/dashboard-events" className="800px:block hidden">
                <MdOutlineLocalOffer
                  color="#555"
                  size={30}
                  className="mx-5 cursor-pointer"
                />
              </Link>
              <Link to="/dashboard-products" className="800px:block hidden">
                <FiShoppingBag
                  color="#555"
                  size={30}
                  className="mx-5 cursor-pointer"
                />
              </Link>
              <Link to="/dashboard-orders" className="800px:block hidden">
                <FiPackage color="#555" size={30} className="mx-5 cursor-pointer" />
              </Link>
              <Link to="/dashboard-messages" className="800px:block hidden">
                <BiMessageSquareDetail
                  color="#555"
                  size={30}
                  className="mx-5 cursor-pointer"
                />
              </Link>
                <img
                  src={`${user?.avatar?.url}`}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
            </div>
          </div> */}
    </div>
  )
}

export default AdminHeader