/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Layout/Header'
import VillajaFooter from '../../components/VillajaFooter/VillajaFooter'
// import { RxCross1 } from "react-icons/rx";
// import { IoBagHandleOutline } from "react-icons/io5";
// import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import { addTocart, removeFromCart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
import './CartPage.css'
import { useState, useEffect } from 'react';

const CartPage = () => {

  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const removeFromCartHandler = (data) => {
    dispatch(removeFromCart(data));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.qty * (item.discountPrice?item.discountPrice:item.originalPrice),
    0
  );

  const quantityChangeHandler = (data) => {
    dispatch(addTocart(data));
  };

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <Header/>
      <div className="cart-page-wrapper w-[91.67%] mx-auto max-w-[1665px] p-[1rem]">
        <div className="cart-page-container max-w-full py-1 py-3rem mx-auto my-0 flex justify-between gap-1rem flex-wrap">
          <div className='w-full max-w-[65rem] mb-[3rem]'>

          <h1 className='text-[1.7rem] font-[600] mb-[1.5rem]'>Your Cart</h1>
          
            {cart && cart.length === 0 ? (
             <div className="w-full h-screen flex items-center justify-center">
                <h5>Cart Items is empty!</h5>
              </div>
            ) : (
              <div className="cart-page-items bg-white shadow-md transition duration-300 hover:shadow-lg">
                <div className="w-full text-left py-2 ">
                        {cart &&
                      cart.map((i, index) => (
                        <CartSingle
                         key={index}
                         data={i}
                         quantityChangeHandler={quantityChangeHandler}
                         removeFromCartHandler={removeFromCartHandler}
                        />
      ))}
    </div>
  

</div>
            )}

          </div>
          
          <div className="p-[1rem] mb-3 shadow-[0_8px_16px_8px_rgba(0,0,0,0.12)] w-full max-w-[31rem] max-h-[20.5rem] rounded-[0.5rem] max-[1267px]:mx-[auto]">
                  <h1 className='text-[1.7rem] font-[600] mb-[0.5rem]'>Cart Summary</h1>
                  <p className='text-[1.125rem] font-[500] mb-[2.7rem]'>Sub Total:</p>
                  <div className='text-[2.3rem] font-[600] mb-[2.5rem] flex justify-center'>
                    ₦{totalPrice.toLocaleString()}
                  </div>

                  {/* checkout buttons */}
                  <Link to={`${user?.email?"/checkout":'/user/login'}`}>
                    <div
                      className={`h-[2.75rem] my-0 mx-[auto] flex items-center justify-center w-[100%] max-w-[16.5rem] bg-gradient-to-b from-[#00B4D8] to-[#0077B6] rounded-[0.5rem]`}
                    >
                      <h1 className="text-[#fff] text-[18px] font-[600] ">
                        {`${user?.email?"CHECK OUT":'LOGIN TO CONTINUE'}`}
                      </h1>
                    </div>
                  </Link>
          </div>
        
        </div>
      </div>
      <VillajaFooter/>
    </>
  )
}


const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {

  const navigate = useNavigate()

  const [value, setValue] = useState(data.qty);
  const totalPrice = (data.discountPrice?data.discountPrice:data.originalPrice) * value;

  const increment = (data) => {
    if (data.stock < value) {
      toast.error("Product stock limited!");
    } else {
      setValue(value + 1);
      const updateCartData = { ...data, qty: value + 1 };
      quantityChangeHandler(updateCartData);
    }
  };

  const decrement = (data) => {
    setValue(value === 1 ? 1 : value - 1);
    const updateCartData = { ...data, qty: value === 1 ? 1 : value - 1 };
    quantityChangeHandler(updateCartData);
  };

  return (

    <div className="p-[1.2rem]">
      <div className="w-full flex  justify-between ">

        <div className='flex gap-[1rem] min-[400px]:gap-[2.25rem] min-500px:pl-[1rem]'>
          <div className='max-[385px]:w-[4rem] w-[6rem] h-[6rem] relative shrink-0 '>
            <img
              src={`${data?.images[0]?.url}`}
              alt=""
              className="w-[100%] h-[100%] object-contain"
              
              />
          </div>
          <div className="flex flex-col justify-between shrink">
            
            <h1 className="font-normal text-[0.8rem] min-[756px]:text-[1.2rem] cursor-pointer" onClick={() => navigate(`/product/${data._id}`)}>{data.name.length > 80 ? data.name.slice(0, 80) + "..." : data.name}</h1>

            <div className='flex items-center gap-[1rem]'>
              <div className='flex item-center gap-[2rem]'>
                <div
                  className="border text-[#7d879c] border-[#7d879c] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
                  onClick={() => decrement(data)}
                >
                
                  &#60;
                </div>
                
                <span className="">{data.qty}</span>
                
                <div
                  className={`border text-[#00B4D8] border-[#00B4D8] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} items-center justify-center cursor-pointer`}
                  onClick={() => increment(data)}
                >
                  &#62;
                </div>
              </div>

              <div
                className="text-[#0077B6] text-[0.75rem] font-normal underline cursor-pointer"
                onClick={() => removeFromCartHandler(data)} >
                  Delete
              </div>
              

            </div>


          </div>
        </div>


        <div>
            {/* <h4 className="font-[400] text-[15px] text-[#00000082]">
            ₦{data.discountPrice.toLocaleString()} * {value}
            </h4> */}
            <h4 className="font-[500] text-[0.8rem] min-[500px]:text-[1.125rem] text-[#111] font-Manrope min-w-[11ch] text-center">
            ₦{totalPrice.toLocaleString()}
            </h4>
          </div>
        
      </div>
    </div>
  );
};

export default CartPage