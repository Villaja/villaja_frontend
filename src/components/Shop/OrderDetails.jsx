import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import { BsFillBagFill } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import { server } from "../../server";
import axios from "axios";
import { toast } from "react-toastify";

const OrderDetails = () => {
  const { orders, isLoading } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfShop(seller._id));
  }, [dispatch]);

  const data = orders && orders.find((item) => item._id === id);

  const updateOrderStatus = async () => {
    setLoading(true);

    const token = localStorage.getItem("seller-token");

    await axios
      .put(
        `${server}/order/update-order-status/${id}`,
        {
          status,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        toast.success("Order updated!");
        navigate("/dashboard-orders");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });

    setLoading(false);
  };

  const cancelOrder = async () => {
    setLoading(true);

    const token = localStorage.getItem("seller-token");

    await axios
      .put(
        `${server}/order/update-order-status/${id}`,
        {
          status: "Processing",
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        toast.success("Order updated!");
        dispatch(getAllOrdersOfShop(seller._id));
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });

    setLoading(false);
  };

  const getStatusButtonText = (status) => {
    switch (status) {
      case "Processing":
        return "Ready To Ship";
      case "Ready To Ship":
        return "Ready for Shipping";
      default:
        return "Update Status";
    }
  };

  return (
    <div className={`py-4 px-4 md:px-20 min-h-screen ${styles.section}`}>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <BsFillBagFill size={30} color="green" />
          <h1 className="pl-2 text-[25px]">Order Details</h1>
        </div>
        <Link to="/dashboard-orders">
          <div
            className={`${styles.button} bg-[#0077B6] !rounded-[4px] text-white font-[600] !h-[45px] text-[18px]`}
          >
            Back To Orders
          </div>
        </Link>
      </div>

      <div className="w-full flex items-center justify-between pt-6">
        <h5 className="text-[#00000084]">
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
        data?.cart.map((item, index) => (
          <div className="w-full flex items-start mb-5" key={index}>
            <img
              src={`${item.images[0]?.url}`}
              alt=""
              className="w-[80x] h-[80px]"
            />
            <div className="w-full">
              <h5 className="pl-3 text-[20px]">{item.name}</h5>
              <h5 className="pl-3 text-[20px] text-[#00000091]">
                ₦{item.discountPrice} x {item.qty}
              </h5>
            </div>
          </div>
        ))}

      <div className="border-t w-full text-right">
        {/* <h5 className="pt-3 text-[18px]">
          Total Price: <strong>₦{data?.totalPrice.toLocaleString()}</strong>
        </h5> */}
      </div>
      <br />
      <br />
      {/* <div className="w-full 800px:flex items-center">
        <div className="w-full 800px:w-[60%]">
          <h4 className="pt-3 text-[20px] font-[600]">Delivery Address:</h4>
          <h4 className="pt-3 text-[20px]">
            {data?.shippingAddress.address1 +
              " " +
              data?.shippingAddress.address2}
          </h4>
          <h4 className=" text-[20px]">{data?.shippingAddress.country}</h4>
          <h4 className=" text-[20px]">{data?.shippingAddress.city}</h4>
          <h4 className=" text-[20px]">{data?.user?.phoneNumber}</h4>
        </div>
        <div className="w-full 800px:w-[40%] pl-20">
          <h4 className="pt-3 text-[20px] text-semibold">Payment Info:</h4>
          <h4>
            Status:{" "}
            {data?.paymentInfo?.status ? data?.paymentInfo?.status : "Payment On Delevery"}
          </h4>
        </div>
      </div> */}
      <br />
      <br />
      <h4 className="pt-3 text-[20px] font-[600]">Order Status:</h4>
      {data?.status !== "Processing refund" && data?.status !== "Refund Success" && data?.status !== "Ready To Ship" && (
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-[230px] mt-2 border h-[40px] rounded-[5px]"
        >
          {[
            "Processing",
            "recieved",
            "Ready To Ship",
          ]
            .slice(
              [
                "Processing",
                "recieved",
                "Ready To Ship",
              ].indexOf(data?.status)
            )
            .map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
        </select>
      )}
      {data?.status === "Processing refund" || data?.status === "Refund Success" ? (
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-[200px] mt-2 border h-[35px] rounded-[5px]"
        >
          {[
            "Processing refund",
            "Refund Success",
          ]
            .slice(
              [
                "Processing refund",
                "Refund Success",
              ].indexOf(data?.status)
            )
            .map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
        </select>
      ) : null}

      <div className="mt-5">
      {data?.status !== "Processing refund" && data?.status !== "Refund Success" && data?.status !== "Ready To Ship" && (
        <button
          className={`${styles.button} bg- [#0077B6] !rounded-[4px] text-white font-[600] !h-[45px] text-[18px]`}
          onClick={
            data?.status !== "Processing refund"
              ? updateOrderStatus
              : cancelOrder
          }
          disabled={loading}
        >
          {loading ? "Loading..." : "Upadate Order"}
        </button>
      )}
        {data?.status === "Ready To Ship" && (
          <div>
            <p className="mt-4 mb-4">Order Is Ready To Ship, the Admin has been contacted</p>
            <button
            className={`${styles.button} bg-red-200 !rounded-[4px] text-red-500 font-[600] !h-[45px] text-[18px]`}
            onClick={cancelOrder}
            disabled={loading}
          >
            Cancel order
          </button>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default OrderDetails;
