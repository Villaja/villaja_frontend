import React, { useEffect, useState } from "react";
import { BsFillBagFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/styles";
import { getAllOrdersOfUser } from "../redux/actions/order";
import { server } from "../server";
import { RxCross1 } from "react-icons/rx";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";

const UserOrderDetails = () => {
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [rating, setRating] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch,user._id]);

  const data = orders && orders.find((item) => item._id === id);

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
          productId: selectedItem?._id,
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
      setOpen(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  
  
  const refundHandler = async () => {
    try {
      const token = localStorage.getItem('user-token'); // Retrieve the user token from localStorage
      if (!token) {
        // Handle the case where the user is not authenticated
        toast.error('User is not authenticated.');
        return;
      }
      
      const response = await axios.put(
        `${server}/order/order-refund/${id}`,
        {
          status: "Processing refund",
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
  
      toast.success(response.data.message);
      dispatch(getAllOrdersOfUser(user._id));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  

  return (
    <div className={`py-4 min-h-screen ${styles.section}`}>
      <div className="w-full flex flex-col items-center mt-10 md:flex-row md:justify-between">
        <div className="flex items-center">
          <BsFillBagFill size={30} />
          <h1 className="pl-2 text-3xl md:text-4xl">Order Details</h1>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-row md:items-center pt-6 md:pt-0">
        <h5 className="text-lg md:text-xl mb-2 md:mb-0 md:mr-4">
          Order ID: <span>#{data?._id?.slice(0, 8)}</span>
        </h5>
        <h5 className="text-[#00000084]">
          Placed on: <span>{data?.createdAt?.slice(0, 10)}</span>
        </h5>
      </div>

      {/* order items */}
      <br />
      <br />
      {data &&
        data?.cart.map((item, index) => {
          return(
          <div className="w-full flex items-start mb-5 shadow-md bg-white p-4 hover:shadow-lg transition duration-300">
            <img
              src={`${item.images[0]?.url}`}
              alt={item.name}
              className="w-32 h-32 object-cover rounded-md"
            />
            <div className="w-full pl-3">
              <h5 className="text-xl font-semibold  pl-4">{item.name}</h5>
              <h5 className="pl-3 text-sm text-[#00000091] pl-5">
                ₦{item.discountPrice} x {item.qty}
              </h5>
             
            </div>
            
            {!item.isReviewed && data?.status === "Delivered" ?  
            
            
          <div
                className={`${styles.button} text-white 
                lg:text-red-500= text-center`}
                onClick={() => setOpen(true) || setSelectedItem(item)}
              >
                Write review
              </div> : (
             null
            )}
          </div>
          )
         })}

      <p className="text-xl">Status : {data?.status}</p>



      {/* review popup */}
      {open && (
        <div className="w-full fixed top-0 left-0 h-[125vh] bg-[#0005] z-50 flex items-center justify-center">
          <div className="w-[50%] h-min bg-[#fff] shadow rounded-md p-3">
            <div className="w-full flex justify-end p-3">
              <RxCross1
                size={30}
                onClick={() => setOpen(false)}
                className="cursor-pointer"
              />
            </div>
            <h2 className="text-[30px] font-[500] font-Poppins text-center">
              Give a Review
            </h2>
            <br />
            <div className="w-full flex">
              <img
                src={`${selectedItem?.images[0]?.url}`}
                alt=""
                className="w-[80px] h-[80px]"
              />
              <div>
                <div className="pl-3 text-[20px]">{selectedItem?.name}</div>
                <h4 className="pl-3 text-[20px]">
                  ₦{selectedItem?.discountPrice} x {selectedItem?.qty}
                </h4>
              </div>
            </div>

            <br />
            <br />

            {/* ratings */}
            <h5 className="pl-3 text-[20px] font-[500]">
              Give a Rating <span className="text-red-500">*</span>
            </h5>
            <div className="flex w-full ml-2 pt-1">
              {[1, 2, 3, 4, 5].map((i) =>
                rating >= i ? (
                  <AiFillStar
                    key={i}
                    className="mr-1 cursor-pointer"
                    color="rgb(246,186,0)"
                    size={25}
                    onClick={() => setRating(i)}
                  />
                ) : (
                  <AiOutlineStar
                    key={i}
                    className="mr-1 cursor-pointer"
                    color="rgb(246,186,0)"
                    size={25}
                    onClick={() => setRating(i)}
                  />
                )
              )}
            </div>
            <br />
            <div className="w-full ml-3">
              <label className="block text-[20px] font-[500]">
                Write a comment
                <span className="ml-1 font-[400] text-[16px] text-[#00000052]">
                  (optional)
                </span>
              </label>
              <textarea
                name="comment"
                id=""
                cols="20"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="How was your product? write your expresion about it!"
                className="mt-2 w-[95%] border p-2 outline-none"
              ></textarea>
            </div>
            <div
              className={`${styles.button} text-white text-[20px] ml-3`}
              onClick={rating > 1 ? reviewHandler : null}
            >
              Submit
            </div>
          </div>
        </div>
      )}

      <div className="border-t w-full text-right">
        <h5 className="pt-3 text-[18px]">
          Total Price: <strong>₦{data?.totalPrice}</strong>
        </h5>
      </div>
      <br />
      <br />
      <div className="justify-between flex">
        <div className="w-full">
          <h4 className="pt-3 text-lg font-bold">Shipping Address:</h4><br/>
          <h4 className="pt-3 text-lg py-2 ">
            {data?.shippingAddress.address1 +
              " " +
              data?.shippingAddress.address2}
          </h4>
          <h4 className="text-lg py-2  ">{data?.shippingAddress.country}</h4>
          <h4 className="text-lg">{data?.shippingAddress.city}</h4>
          <h4 className="text-lg py-2">{data?.user?.phoneNumber}</h4>
        </div>
        <div className="w-full">
          <h4 className="pt-3 text-lg font-bold  ">Payment Info:</h4><br/><br/><br/>
          <h4> 
            Status:{" "}
            {data?.paymentInfo?.status ? data?.paymentInfo?.status : "Payment on Delivery"}
          </h4>
          <br />
           {
           /* data?.status === "Delivered" && (
              <div className={`${styles.button} text-white`}
              onClick={refundHandler}
              >Give a Refund</div>
            )*/
           }
        </div>
      </div>
      <br />
      <Link to="/profile">
        <div className={`${styles.button} text-white`}>Go Back</div>
      </Link>
      <br />
      <br />
    </div>
  );
};

export default UserOrderDetails;
