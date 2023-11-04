/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineCamera,
  AiOutlineDelete,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { server } from "../../server";
import styles from "../../styles/styles";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { MdTrackChanges } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import {
  deleteUserAddress,
  loadUser,
  updatUserAddress,
  updateUserInformation,
} from "../../redux/actions/user";

import { Country, State } from "country-state-city";
import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { getAllOrdersOfUser } from "../../redux/actions/order";

import './ProfileContent.css'

import EditIcon from './editIcon.svg'
import EyeIcon from './eyeIcon.svg'
import PadLock from './padlock.svg'
import ApproveBtn from './approve.svg'
import DeclineBtn from './decline.svg'
import FeaturedIcon from './featuredIcon.svg'


const ProfileContent = ({ active }) => {
  const { user, error, successMessage } = useSelector((state) => state.user);
  const [firstname, setFirstName] = useState(user && user.firstname);
  const [lastname, setLastName] = useState(user && user.lastname);
  const [email, setEmail] = useState(user && user.email);
  const [loading, setLoading] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState(user && user.addresses[0]?.country);
  const [city, setCity] = useState(user && user.addresses[0]?.city);
  const [zipCode, setZipCode] = useState(user && user.addresses[0]?.zipCode);
  const [address1, setAddress1] = useState(user && user.addresses[0]?.address1);
  const [address2, setAddress2] = useState(user && user.addresses[0]?.address2);
  const [addressType, setAddressType] = useState(user && user.addresses[0]?.addressType);
  const [avatar, setAvatar] = useState(null);
  const [editActive,setEditActive] = useState(false)
  const [editActiveAddress,setEditActiveAddress] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch({ type: "clearMessages" });
    }
  }, [error, successMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserInformation(firstname, lastname, email, phoneNumber, password));
  };

  const handleAddressSubmit = (e) => {
      e.preventDefault();
      dispatch(updatUserAddress(
          country,
          city,
          address1,
          address2,
          zipCode,
          addressType
        ))
  }

  return (
    <div className=" relative mb-8" style={{maxWidth:"1500px",width:"100%"}}>
      {/* profile */}
      {active === 1 && (
        <>
          <div className="flex justify-center w-full">
            <div className="relative">
            </div>
          </div>
          {window.screen.width < 800 ?null:<br />}
          {/* <br /> */}
          <div className="w-full pl-0 1100px:pl-5 ">
            <h1 className="font-semibold text-[2rem] mb-4">My Profile</h1>
            <form onSubmit={handleSubmit} aria-required={true}>

              <div className="profile-content-pi w-full mb-[1.88rem]">
                <div className="pc-pi-top">
                  <p className="text-[1.4rem] 600px:text-[1.4rem] font-semibold">Personal Information</p>
                  {
                    editActive?

                      <div className="flex items-center gap-[0.5rem]">

                        <input required
                              value="Update"
                              type="submit"
                              className="pc-pi-save" />

                        <div className="pc-pi-edit pc-pi-cancel" onClick={() => setEditActive(false)}>
                          Cancel
                        </div>
                        
                      </div>
                     
                    :
                      <div className="pc-pi-edit" onClick={() => setEditActive(true)}>
                        <span>Edit</span>
                        <img src={EditIcon} alt="" />
                      </div>
                  }
                </div>

                <div className="pc-pi-main">
                  {/**? firstname and lastname */}

                  <div className="pc-pi-main1 flex items-center gap-[0.5rem] 600px:gap-[12rem] mb-4 ">
                    <div className="">
                      <label className="block pb-2 text-[1rem]" style={{color:"rgba(0, 0, 0, 0.35)"}}>First Name</label>
                      <input
                        type="text"
                        className={editActive?`${styles.input} !w-[100%] mb-4 800px:mb-0`:`pcmain-input`}
                        required
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                        readOnly={!editActive?true:false}
                      />
                    </div>
                    <div className="">
                      <label className="block pb-2 text-[1rem]" style={{color:"rgba(0, 0, 0, 0.35)"}}>Last Name</label>
                      <input
                        type="text"
                        className={editActive?`${styles.input} !w-[100%] mb-4 800px:mb-0`:`pcmain-input`}
                        required
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                        readOnly={!editActive?true:false}
                      />
                    </div>
                  </div>

                  {/**? Phone number and email */}
                  <div className="pc-pi-main2 flex items-center gap-[0.5rem] 600px:gap-[12rem] mb-4">
                    <div className="">
                      <label className="block pb-2 text-[1rem]" style={{color:"rgba(0, 0, 0, 0.35)"}}>Phone Number</label>
                      <input
                        type="text"
                        className={editActive?`${styles.input} !w-[100%] mb-4 800px:mb-0`:`pcmain-input`}
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        readOnly={!editActive?true:false}
                      />
                    </div>
                    <div className="">
                      <label className="block pb-2 text-[1rem]" style={{color:"rgba(0, 0, 0, 0.35)"}}>Email</label>
                      <input
                        type="text"
                        className={editActive?`${styles.input} !w-[100%] mb-4 800px:mb-0`:`pcmain-input`}
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        readOnly={!editActive?true:false}
                      />
                    </div>
                  </div>

                  <div className={`${editActive?"profileUpdatePassActive":"profileUpdatePass"} w-full 800px:flex block pb-3`}>
                
                      <div className=" w-[100%] 800px:w-[50%]">
                        <label className="block pb-2 text-[1.2rem]" style={{color:"rgba(0, 0, 0, 0.35)"}}>Enter your password</label>
                        <input
                          type="password"
                          className={`${styles.input} !w-[50%] mb-4 800px:mb-0`}
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                  </div>

                </div>
              </div>

            </form>
            

            <form onSubmit={handleAddressSubmit} aria-required={true}>
                  <div className="profile-content-pi w-full">
                <div className="pc-pi-top">
                  <p className="text-[1.4rem] font-semibold">Address</p>
                  {
                    editActiveAddress?

                      <div className="flex items-center gap-[0.5rem]">

                        <input required
                              value="Update"
                              type="submit"
                              className="pc-pi-save" />

                        <div className="pc-pi-edit pc-pi-cancel" onClick={() => setEditActiveAddress(false)}>
                          Cancel
                        </div>
                        
                      </div>
                     
                    :
                      <div className="pc-pi-edit" onClick={() => setEditActiveAddress(true)}>
                        <span>Edit</span>
                        <img src={EditIcon} alt="" />
                      </div>
                  }
                </div>

                <div className="pc-pi-main w-full  relative">

                  <div className="pc-pi-main3 w-full flex flex-wrap justify-between items-center mb-4  gap-[5rem]" style={{maxWidth:'1050px'}}>
                    <div className="">
                      <label className="block pb-2 text-[1rem]" style={{color:"rgba(0, 0, 0, 0.35)"}}>Country</label>
                      <input
                        type="text"
                        className={editActiveAddress?`${styles.input} !w-[100%] mb-4 800px:mb-0`:`pcmain-input`}
                        required
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </div>
                    <div className="">
                      <label className="block pb-2 text-[1rem]" style={{color:"rgba(0, 0, 0, 0.35)"}}>City</label>
                      <input
                        type="text"
                        className={editActiveAddress?`${styles.input} !w-[100%] mb-4 800px:mb-0`:`pcmain-input`}
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                    <div className="">
                      <label className="block pb-2 text-[1rem]" style={{color:"rgba(0, 0, 0, 0.35)"}}>Address 1</label>
                      <input
                        type="text"
                        className={editActiveAddress?`${styles.input} !w-[100%] mb-4 800px:mb-0`:`pcmain-input`}
                        required
                        value={address1}
                        onChange={(e) => setAddress1(e.target.value)}
                      />
                    </div>

                    <div className="">
                      <label className="block pb-2 text-[1rem]" style={{color:"rgba(0, 0, 0, 0.35)"}}>Address 2</label>
                      <input
                        type="text"
                        className={editActiveAddress?`${styles.input} !w-[100%] mb-4 800px:mb-0`:`pcmain-input`}
                        required
                        value={address2}
                        onChange={(e) => setAddress2(e.target.value)}
                      />
                    </div>
                    <div className="">
                      <label className="block pb-2 text-[1rem]" style={{color:"rgba(0, 0, 0, 0.35)"}}>ZipCode</label>
                      <input
                        type="text"
                        className={editActiveAddress?`${styles.input} !w-[100%] mb-4 800px:mb-0`:`pcmain-input`}
                        required
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                      />
                    </div>
                    <div className="">
                      <label className="block pb-2 text-[1rem]" style={{color:"rgba(0, 0, 0, 0.35)"}}>Address Type</label>
                      <input
                        type="text"
                        className={editActiveAddress?`${styles.input} !w-[100%] mb-4 800px:mb-0`:`pcmain-input`}
                        required
                        value={addressType}
                        onChange={(e) => setAddressType(e.target.value)}
                      />
                    </div>
                  </div>

                </div>
              </div>

            </form>

          </div>
        </>
      )}

      {/* order */}
      {active === 2 && (
        <div>
          <AllOrders />
        </div>
      )}

      {/* Refund */}
      {active === 3 && (
        <div>
          <AllRefundOrders />
        </div>
      )}

      {/* Delivery Approval */}
      {active === 5 && (
        <div>
          <DeliveryApproval />
        </div>
      )}

      {/* Change Password */}
      {active === 6 && (
        <div>
          <ChangePassword />
        </div>
      )}

      {/*  user Address */}
      {active === 7 && (
        <div>
          <Address />
        </div>
      )}
    </div>
  );
};

const AllOrders = () => {
  const { user } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const [myOrderNo,setMyOrderNo] = useState("all")

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, []);

  const columns = [
    { field: "id", headerName: "Order ID",headerClassName: 'orderTable-header', minWidth: 70, flex: 0.7 },
    { field: "createdAt", headerName: "Date", minWidth: 100, flex: 0.7 },

    
    {
      field: "itemsQty",
      headerName: "Unit",
      type: "number",
      minWidth: 70,
      flex: 0.7,
    },

    {
      field: "status",
      headerName: "Status",
      headerAlign: 'center',
      minWidth: 130,
      flex: 0.7,
      renderCell: (params) => {
        return(

        
        params.getValue(params.id, "status") === "Delivered" ?
          <div className="delivered">
            Delivered
          </div>  : 
          params.getValue(params.id, "status") === "Processing"? <div className="processing">processing</div>
          :
          <div className="canceled">Ready To Ship</div>
        )
        
      },
      // cellClassName: (params) => {
      //   return params.getValue(params.id, "status") === "Delivered"
      //     ? "greenColor"
      //     : "redColor";
      // },
    },
    

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: "shop",
      headerName: "Shop",
      type: "string",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "Actions",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                {/* <img src={EyeIcon} alt="" /> */}
                <p className="text-blue-600 font-bold">See More</p>
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const [rowState,setRowState] = useState([])

  const [searchVal,setSearchVal] = useState("")

  const [mobileSearch,setMobileSearch] = useState(window.screen.width < 500?true:false)

  console.log("windowwwww " + window.screen.width);

  const handlePopulateRow = () => {
      const row = [];

    orders &&
      orders.forEach((item) => {
        row.push({
          id: item._id,
          createdAt:item.createdAt.split('T')[0],
          itemsQty: item.cart.length,
          shop: item?.cart?.shop?.name,
          total: "₦ " + item.totalPrice,
          status: item.status,
        });
      });

      return row
  }

  const handleSearchChange = (e) => {
    setSearchVal(e.target.value)
    if(myOrderNo === "all")
    {
      setRowState(orders.filter((od) => od._id.includes(e.target.value)).map((item) => {
        return ({
          id: item._id,
          createdAt:item.createdAt.split('T')[0],
          itemsQty: item.cart.length,
          shop: item?.cart?.shop?.name,
          total: "₦ " + item.totalPrice,
          status: item.status,
        })
    }))
    }
    else
    {

    setRowState(orders.filter((od) => od._id.includes(e.target.value) && od.status.toLowerCase() === myOrderNo).map((item) => {
        return ({
          id: item._id,
          createdAt:item.createdAt.split('T')[0],
          itemsQty: item.cart.length,
          total: "₦ " + item.totalPrice,
          shop: item?.cart?.shop?.name,
          status: item.status,
        })
    }))
    }

  }

  const handleOrderNo = (val) => {
    setMyOrderNo(val)
    if(val != "all")
    {

      setRowState(orders.filter((od) => od.status.toLowerCase() === val && od._id.includes(searchVal)).map((item) => {
        return ({
          id: item._id,
          createdAt:item.createdAt.split('T')[0],
          itemsQty: item.cart.length,
          total: "₦ " + item.totalPrice,
          shop: item?.cart?.shop?.name,
          status: item.status,
        })
    }))
    }
    else
    {
        setRowState(orders.map((item) => {
      return ({
          id: item._id,
          createdAt:item.createdAt.split('T')[0],
          itemsQty: item.cart.length,
          total: "₦ " + item.totalPrice,
          shop: item?.cart?.shop?.name,
          status: item.status,
      })
    }))
    }
  }
  

  useEffect(() => {
    console.log(orders);
  
    orders && setRowState(
      orders.map((item) => {
        const shopNames = item.cart.map((cartItem) => cartItem.shop?.name).join(', ');
  
        return {
          id: item._id,
          createdAt: item.createdAt.split('T')[0],
          itemsQty: item.cart.length,
          total: "₦ " + item.totalPrice,
          shop: shopNames,
          status: item.status,
        };
      })
    );
  }, [orders]);
  
 
  return (
    <div className="500px:pl-8 800px:pt-1">
      <h1 className="font-semibold text-[2rem] mb-4 mt-8">My Orders</h1>

      <div className="myOrders-tabs">
          <div className={`myOrder-tab myOrder-all ${myOrderNo === "all" && 'myOrderActive'}`} onClick = {() => handleOrderNo("all")}>All <span> {orders?.length} </span></div>
          <div className={`myOrder-tab myOrder-delivered ${myOrderNo === "delivered" && 'myOrderActive'}`} onClick = {() => handleOrderNo("delivered")}>Delivered <span> {orders?.filter((od) => od.status === "Delivered").length}  </span></div>
          <div className={`myOrder-tab myOrder-processing ${myOrderNo === "processing" && 'myOrderActive'}`} onClick = {() => handleOrderNo("processing")}>Processing <span> {orders?.filter((od) => od.status === "Processing").length} </span></div>
          <div className={`myOrder-tab myOrder-cancelled ${myOrderNo === "cancelled" && 'myOrderActive'}`} onClick = {() => handleOrderNo("cancelled")}>Cancelled <span> {orders?.filter((od) => od.status === "Cancelled").length} </span></div>
      </div>

      <div className={`myOrders-search ${mobileSearch?'myOrders-search-mobile':''} mb-6`}>
          <FiSearch size={20} onClick={
            () => setMobileSearch(!mobileSearch)
          }/>
          <input type="text" placeholder="Search..." onChange={(e) => handleSearchChange(e)}/>
      </div>

      <DataGrid
        rows={rowState}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        checkboxSelection
        autoHeight
      />
    </div>
  );
};




const DeliveryApproval = () => {

  const { user } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.order);
  const [deliverdCart,setDeliveredCart] = useState([])
  const [openApproval,setOpenApproval] = useState(false)
  const [currentItem,setCurrentItem] = useState("")
  const [currentOrderId,setCurrentOrderId] = useState("")
  const dispatch = useDispatch();

  const [myOrderNo,setMyOrderNo] = useState("all")

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [])


  useEffect(() => {
    orders && setDeliveredCart(orders.filter((od) => od?.status.toLowerCase() === "delivered").map((el) => {
      return(el.cart)
    }))
  },[orders])



  return(
    <>
    {
      openApproval ? 

      <ApprovalPage item={currentItem} user={user} id={currentOrderId} setOpenApproval={setOpenApproval}/>

      :
    <div className="delivery-approval-wrapper 500px:pl-8 800px:pt-1">
      <h1 className="font-semibold text-[2rem] mb-4 mt-8">Product List</h1>
      
      <div className="delivered-product-list">
        {
          deliverdCart.map((dc) => {

          return (dc.map((od) => {
            return(
              <div className="delivered-product-item" key={od._id}>

                <div className="dpi-img">
                  <img src={od.images[0].url} alt="img" />
                </div>
                <div className="dpi-main">
                  <div className="dpi-info">
                    <div className="dpi-info-name">{od.name}</div>
                    <div className="dpi-info-seller">by {od.shop.name}</div>
                    <div className="dpi-info-price">N{od.discountPrice}</div>
                    
                  </div>
                  <div className="dpi-btn" onClick={() => {setCurrentOrderId(dc._id);setCurrentItem(od);setOpenApproval(true)}}>Approve Delivery</div>
                </div>
                
              </div>
            )
          }))
          })
        }
      </div>
    </div>

    }
    </>
    
  );
}


const ApprovalPage = ({item,user,id,setOpenApproval}) => {

  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();



  const reviewHandler = async (e) => {
    try {
      const token = localStorage.getItem('user-token'); // Retrieve the user token from localStorage
      if (!token) {
        // Handle the case where the user is not authenticated
        toast.error('User is not authenticated.');
        return;
      }
      
      const response = await axios.put(
        `${server}/product/create-new-review`,
        {
          user,
          rating,
          comment,
          productId: item?._id,
          orderId: id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
  
      toast.success(response.data.message);
      dispatch(getAllOrdersOfUser(user._id));
      setComment("");
      setRating(null);
      setOpenApproval(false)
      // setOpen(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0,0);
  },[])


  return(
    <div className="approval-page-wrapper">
      <h1 className="font-semibold text-[2rem] mb-4 mt-8">Delivery Approval</h1>

      <div className="approve-delivery-section">
        <div className="ads-top">Approve Delivery <span><img src={FeaturedIcon} alt="" /></span> </div>
        <div className="ads-info">Please confirm that what you ordered is what you got. This is needed to give final approval of the delivery.</div>
        <div className="ads-actions">
          <div className="ads-action ads-approve"><img src={ApproveBtn} alt="" /></div>
          <div className="ads-action ads-decline"><img src={DeclineBtn} alt="" /></div>
        </div>
      </div>

      <div className="approve-delivery-reviews">
        <div className="adr-img">
          <img src={item.images[0].url} alt="" />
        </div>

        <div className="adr-item-name">
          {item.name}
        </div>

        <div className="adr-item-stars">
            <div className="flex w-full  pt-1">
              {[1, 2, 3, 4, 5].map((i) =>
                rating >= i ? (
                  <AiFillStar
                    key={i}
                    className="mr-1 cursor-pointer"
                    color="rgb(246,186,0)"
                    size={40}
                    onClick={() => setRating(i)}
                  />
                ) : (
                  <AiOutlineStar
                    key={i}
                    className="mr-1 cursor-pointer"
                    color="rgb(246,186,0)"
                    size={40}
                    onClick={() => setRating(i)}
                  />
                )
              )}
            </div>

            <div className="w-full mt-4">
              <label className="block text-[20px] font-[500]">
                Review
                
              </label>
              <textarea
                name="comment"
                id=""
                cols="20"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your review about this product"
                className="mt-2 w-[95%] border rounded-md p-4 outline-none"
              ></textarea>
            </div>
            <div
              className={`${styles.button} text-white text-[20px]`}
              onClick={rating > 1 ? reviewHandler : null}
            >
              Submit
            </div>
            <div
              className={`w-[150px] bg-[#f00333] h-[50px] my-3 flex items-center justify-center rounded-md cursor-pointer text-white text-[20px]`}
              onClick={() => setOpenApproval(false)}
            >
              Cancel
            </div>
        </div>
      </div>


    </div>
  )
}




const AllRefundOrders = () => {
  const { user } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, []);

  const eligibleOrders =
    orders && orders.filter((item) => item.status === "Processing refund");

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "Actions",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  eligibleOrders &&
    eligibleOrders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.cart.length,
        total: "₦ " + item.totalPrice,
        status: item.status,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        autoHeight
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

const TrackOrder = () => {
  const { user } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, []);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/track/order/${params.id}`}>
              <Button>
                <MdTrackChanges size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.cart.length,
        total: "₦ " + item.totalPrice,
        status: item.status,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordChangeHandler = async (e) => {
    e.preventDefault();
  
    const token = localStorage.getItem('user-token'); // Retrieve the user token from localStorage
    if (!token) {
      // Handle the case where the user is not authenticated
      console.log('User is not authenticated.');
      return;
    }
  
    await axios
      .put(
        `${server}/user/update-user-password`,
        { oldPassword, newPassword, confirmPassword },
        {
          withCredentials: true,
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        toast.success(res.data.success);
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  
  return (
    <div className="w-full px-5 800px:py-1">
      <img src={PadLock} alt="" className="mt-8" />
      <h1 className="block text-[25px]  font-[600] text-[#000000ba] pb-2 text-[2rem] mt-2">
        Change Password
      </h1>
      <p style={{color: 'rgba(0, 0, 0, 0.30)',fontWeight: '500',lineHeight: '1.49344rem',letterSpacing: '-0.01344rem',maxWidth:'50ch',marginBottom:"2rem"}}>To change your password, please fill in the details below.
        your passwords most contain at least 8 characters, and must have one upper cast letter. </p>
      <div className="w-full">
        <form
          aria-required
          onSubmit={passwordChangeHandler}
          // className="flex flex-col items-center"
        >
          <div className=" w-[100%] 800px:w-[50%] mt-5">
            <label className="block pb-2">Current Password</label>
            <input
              type="password"
              className={`${styles.input} !w-[95%] mb-4 800px:mb-0`} style={{maxWidth:"24rem"}}
              required
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className=" w-[100%] 800px:w-[50%] mt-2">
            <label className="block pb-2">New Password</label>
            <input
              type="password"
              className={`${styles.input} !w-[95%] mb-4 800px:mb-0`} style={{maxWidth:"24rem"}}
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className=" w-[100%] 800px:w-[50%] mt-2">
            <label className="block pb-2">Confirm Password</label>
            <input
              type="password"
              className={`${styles.input} !w-[95%] mb-4 800px:mb-0`} style={{maxWidth:"24rem"}}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
              className={`w-[95%] h-[52px] border-[2px] font-semibold border-[#00A8D1] text-center text-[#00A8D1] rounded-[8px] mt-8 cursor-pointer`} style={{maxWidth:"24rem"}}
              required
              value="Update"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

const Address = () => {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState();
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [addressType, setAddressType] = useState("");
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const addressTypeData = [
    {
      name: "Default",
    },
    {
      name: "Home",
    },
    {
      name: "Office",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (addressType === "" || country === "" || city === "") {
      toast.error("Please fill all the fields!");
    } else {
      dispatch(
        updatUserAddress(
          country,
          city,
          address1,
          address2,
          zipCode,
          addressType
        )
      );
      setOpen(false);
      setCountry("");
      setCity("");
      setAddress1("");
      setAddress2("");
      setZipCode(null);
      setAddressType("");
    }
  };

  const handleDelete = (item) => {
    const id = item._id;
    dispatch(deleteUserAddress(id));
  };

  return (
    <div className="w-full px-5">
      {open && (
        <div className="fixed w-full h-screen bg-[#0000004b] top-0 left-0 flex items-center justify-center ">
          <div className="w-[35%] h-[80vh] bg-white rounded shadow relative overflow-y-scroll">
            <div className="w-full flex justify-end p-3">
              <RxCross1
                size={30}
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>
            <h1 className="text-center text-[25px] font-Poppins">
              Add New Address
            </h1>
            <div className="w-full">
              <form aria-required onSubmit={handleSubmit} className="w-full">
                <div className="w-full block p-4">
                  <div className="w-full pb-2">
                    <label className="block pb-2">Country</label>
                    <select
                      name=""
                      id=""
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-[95%] border h-[40px] rounded-[5px]"
                    >
                      <option value="" className="block border pb-2">
                        choose your country
                      </option>
                      {Country &&
                        Country.getAllCountries().map((item) => (
                          <option
                            className="block pb-2"
                            key={item.isoCode}
                            value={item.isoCode}
                          >
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="w-full pb-2">
                    <label className="block pb-2">Choose your City</label>
                    <select
                      name=""
                      id=""
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-[95%] border h-[40px] rounded-[5px]"
                    >
                      <option value="" className="block border pb-2">
                        choose your city
                      </option>
                      {State &&
                        State.getStatesOfCountry(country).map((item) => (
                          <option
                            className="block pb-2"
                            key={item.isoCode}
                            value={item.isoCode}
                          >
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="w-full pb-2">
                    <label className="block pb-2">Address 1</label>
                    <input
                      type="address"
                      className={`${styles.input}`}
                      required
                      value={address1}
                      onChange={(e) => setAddress1(e.target.value)}
                    />
                  </div>
                  <div className="w-full pb-2">
                    <label className="block pb-2">Address 2</label>
                    <input
                      type="address"
                      className={`${styles.input}`}
                      required
                      value={address2}
                      onChange={(e) => setAddress2(e.target.value)}
                    />
                  </div>

                  <div className="w-full pb-2">
                    <label className="block pb-2">Zip Code</label>
                    <input
                      type="number"
                      className={`${styles.input}`}
                      required
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                    />
                  </div>

                  <div className="w-full pb-2">
                    <label className="block pb-2">Address Type</label>
                    <select
                      name=""
                      id=""
                      value={addressType}
                      onChange={(e) => setAddressType(e.target.value)}
                      className="w-[95%] border h-[40px] rounded-[5px]"
                    >
                      <option value="" className="block border pb-2">
                        Choose your Address Type
                      </option>
                      {addressTypeData &&
                        addressTypeData.map((item) => (
                          <option
                            className="block pb-2"
                            key={item.name}
                            value={item.name}
                          >
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className=" w-full pb-2">
                    <input
                      type="submit"
                      className={`${styles.input} mt-5 cursor-pointer`}
                      required
                      readOnly
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">
          My Addresses
        </h1>
        <div
          className={`${styles.button} !rounded-md`}
          onClick={() => setOpen(true)}
        >
          <span className="text-[#fff]">Add New</span>
        </div>
      </div>
      <br />
      {user &&
        user.addresses.map((item, index) => (
          <div
            className="w-full bg-white h-min 800px:h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10 mb-5"
            key={index}
          >
            <div className="flex items-center">
              <h5 className="pl-5 font-[600]">{item.addressType}</h5>
            </div>
            <div className="pl-8 flex items-center">
              <h6 className="text-[12px] 800px:text-[unset]">
                {item.address1} {item.address2}
              </h6>
            </div>
            <div className="pl-8 flex items-center">
              <h6 className="text-[12px] 800px:text-[unset]">
                {user && user.phoneNumber}
              </h6>
            </div>
            <div className="min-w-[10%] flex items-center justify-between pl-8">
              <AiOutlineDelete
                size={25}
                className="cursor-pointer"
                onClick={() => handleDelete(item)}
              />
            </div>
          </div>
        ))}

      {user && user.addresses.length === 0 && (
        <h5 className="text-center pt-8 text-[18px]">
          You not have any saved address!
        </h5>
      )}
    </div>
  );
};
export default ProfileContent;
