import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";
import { useEffect } from "react";
import { PaystackButton } from 'react-paystack'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { RxCross1 } from "react-icons/rx";

const Payment = () => {
  const [orderData, setOrderData] = useState([]);
  const [open, setOpen] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem("latestOrder"));
    setOrderData(orderData);
  }, []);

  const createOrder = async () => {
    // Create your order data as needed for Paystack
    const order = {
      email: user.email, // Replace with your user's email
      amount: Math.round(orderData?.totalPrice * 100), // Amount in kobo (100 kobo = 1 Naira)
      reference: `order-${new Date().getTime()}`, // Generate a unique reference
    };

    try {
      const response = await axios.post(`${server}/payment/process`, order);
      const payment_link = response.data.payment_link;
      window.location.href = payment_link; // Redirect to Paystack's payment page
    } catch (error) {
      toast.error(error.response.data.message || "Payment failed");
    }
  };  

  const order = {
    cart: orderData?.cart,
    shippingAddress: orderData?.shippingAddress,
    user: user && user,
    totalPrice: orderData?.totalPrice,
  };

  const onApprove = async (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;

      let paymentInfo = payer;

      if (paymentInfo !== undefined) {
        paypalPaymentHandler(paymentInfo);
      }
    });
  };

  

  const paymentData = {
    email: user.email,
    amount: Math.round(orderData?.totalPrice * 100),
  };

  const paymentHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Send a request to your server to create a Paystack payment link
      const response = await axios.post(
        `${server}/payment/process`,
        paymentData,
        config
      );
      const payment_link = response.data.payment_link;

      // Open the payment modal
      setShowPaymentModal(true);

      // Set the iframe source to the payment link
      const iframe = document.getElementById("paymentIframe");
      iframe.src = payment_link;

      // Close the modal and display a success alert when payment is successful
      window.addEventListener("message", (event) => {
        if (event.data === "payment_success") {
          setShowPaymentModal(false);
          alert("Payment successful!");
          // Assuming the payment was successful, you can confirm the order here
          // Call the createOrder function or any other logic to confirm the order
          createOrder();
        }
      });
    } catch (error) {
      toast.error(error.response.data.message || "Payment failed");
    }
  };

  const cashOnDeliveryHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    order.paymentInfo = {
      type: "Cash On Delivery",
    };

    await axios
      .post(`${server}/order/create-order`, order, config)
      .then((res) => {
        setOpen(false);
        navigate("/order/success");
        toast.success("Order successful!");
        if(localStorage.getItem('buy-now'))
        {
          console.log('success');
          localStorage.removeItem("buy-now");

        }
        else
        {
          localStorage.setItem("cartItems", JSON.stringify([]));
        }
        localStorage.setItem("latestOrder", JSON.stringify([]));
        window.location.reload();
      });
  };

 

  return (
    <div>
      <div className="w-full flex flex-col items-center py-8">
       
       <div className="w-[90%] 1000px:w-[70%] block 800px:flex">
         <div className="w-full 800px:w-[65%]">
           <PaymentInfo
             user={user}
             open={open}
             setOpen={setOpen}
             onApprove={onApprove}
             createOrder={createOrder}
             paymentHandler={paymentHandler}
             cashOnDeliveryHandler={cashOnDeliveryHandler}
           />
         </div>
         <div className="w-full 800px:w-[35%] 800px:mt-0 mt-8">
           <CartData orderData={orderData} />
         </div>
       </div>
     </div>
    </div>
    
  );
};

const PaymentInfo = ({
  user,
  open,
  setOpen,
  onApprove,
  createOrder,
  paymentHandler,
  cashOnDeliveryHandler,
}) => {
  const [select, setSelect] = useState(1);
  const [orderData, setOrderData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem("latestOrder"));
    setOrderData(orderData);
  }, []);

  const order = {
    cart: orderData?.cart,
    shippingAddress: orderData?.shippingAddress,
    user: user && user,
    totalPrice: orderData?.totalPrice,
  };

  const paystackOrder = async (paymentInfo) => {
    
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    order.paymentInfo = {
      id: paymentInfo.payer_id,
      status: "succeeded",
      type: "Paystack",
    };

    await axios
      .post(`${server}/order/create-order`, order, config)
      .then((res) => {
        setOpen(false);
        navigate("/order/success");
        toast.success("Order successful!");
        if(localStorage.getItem('buy-now'))
        {
          console.log('success');
          localStorage.removeItem("buy-now");

        }
        else
        {
          localStorage.setItem("cartItems", JSON.stringify([]));
        }
        // localStorage.setItem("cartItems", JSON.stringify([]));
        localStorage.setItem("latestOrder", JSON.stringify([]));
        window.location.reload();
      });
  };

  


  const componentProps = {
    email: user?.email, 
    amount: Math.round(orderData?.totalPrice * 100), 
    metadata: {
      name: user?.firstname,
      phone: user?.phoneNumber,
    },
    // publicKey: "pk_live_f5d8cd9c059579b4592ba6b28e9090d9bd887438",
    publicKey: "pk_test_ba3974730a50a8f120783a5c097a2b9603129aa7",
    text: "Pay Now",
    onSuccess: (paymentInfo) => paystackOrder(paymentInfo), 
    onClose: () => alert("your progress would be lost"),
  };
  

  return (
    <div className="w-full 800px:w-[95%] bg-[#fff] rounded-md p-5 pb-8">
      {/* select buttons */}
      <div>
        <div className="flex w-full pb-5 border-b mb-2">
          <div
            className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
            onClick={() => setSelect(2)}
          >
            {select === 2 ? (
              <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
            ) : null}
          </div>
          <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
            Pay with Paystack
          </h4>
        </div>

        {/* paystack */}
        {select === 2 ? (
          <div className="w-full flex">
           
              <PaystackButton className={`${styles.button} bg-blue-600 text-[#fff] mb-6 h-[40px] rounded-[5px] cursor-pointer text-[13px] font-[600]`} {...componentProps} />
           
          </div>
        ) : null}
      </div>
     
      {/* <div>
        <div className="flex w-full pb-5 border-b mb-2">
          <div
            className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
            onClick={() => setSelect(3)}
          >
            {select === 3 ? (
              <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
            ) : null}
          </div>
          <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
            Cash on Delivery
          </h4>
        </div>

      
        {select === 3 ? (
          <div className="w-full flex">
            <form className="w-full" onSubmit={cashOnDeliveryHandler}>
              <input
                type="submit"
                value="Confirm"
                className={`${styles.button} bg-green-500 text-[#fff] h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600]`} style={{background:'linear-gradient(180deg, #00B4D8, #0077B6)'}}
              />
            </form>
          </div>
        ) : null}
      </div> */}
      {/* <p className="mt-4 font-bold text-sm text-gray-500">More Payment Methods Soon</p> */}
    </div>
  );
};

const CartData = ({ orderData }) => {
  const shipping = orderData?.shipping?.toFixed(2);
  return (
    <div className="w-full bg-[#fff] rounded-md p-5 pb-8">
      <div className="flex justify-between">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">subtotal:</h3>
        <h5 className="text-[18px] font-[600]">N{orderData?.subTotalPrice}</h5>
      </div>
      <br />
      <div className="flex justify-between">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">shipping:</h3>
        <h5 className="text-[18px] font-[600]">N{shipping}</h5>
      </div>
      <br />
      <div className="flex justify-between border-b pb-3">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">Discount:</h3>
        <h5 className="text-[18px] font-[600]">{orderData?.discountPrice? "N" + orderData.discountPrice : "-"}</h5>
      </div>
      <h5 className="text-[18px] font-[600] text-end pt-3">
        N{orderData?.totalPrice}
      </h5>
      <br />
    </div>
  );
};

export default Payment;
