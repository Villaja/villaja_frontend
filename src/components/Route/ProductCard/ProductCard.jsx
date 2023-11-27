import React, { useState } from "react";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";
import { useEffect } from "react";
import { addTocart } from "../../../redux/actions/cart";
import { toast } from "react-toastify";
import Ratings from "../../Products/Ratings";
import './ProductCard.css'

const ProductCard = ({ data,isEvent,catIndex }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist]);

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

  return (
    <>
      <div className={`${catIndex?"pc-container-mobile":""} pc-container w-full h-[300px] sm:h-[330px] bg-white rounded-lg sm:shadow-sm pt-3 relative cursor-pointer hover:shadow-[0_24px_36px_0px_rgba(52,87,140,0.12)]`}>
        {/* <div className="flex justify-end"></div> */}
        <div style={{width:"100%",maxWidth:"200px",height:"150px",position:"relative",flexShrink:"0"}}>

        <Link to={`${isEvent === true ? `/product/${data._id}?isEvent=true` : `/product/${data._id}`}`}>
        <img
          src={`${data.images && data.images[0]?.url}`}
          alt=""
          className="h-[100%] sm:h-[100%] w-[100%] sm:w-[100%] object-contain"
        />

        </Link>
        </div>

        <Link className="sm:block hidden">
          <p className='font-semibold px-3 pt-4 text-blue-500 text-[0.6rem] '>{data.shop.name}</p>
        </Link>
        <Link to={`${isEvent === true ? `/product/${data._id}?isEvent=true` : `/product/${data._id}`}`}>
        <p className="h-[6ch] pb-3 pt-2 text-sm sm:text-md text-gray-700 font-semibold px-3 overflow-hidden whitespace-wrap">
  {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
</p>


          <div className="px-3  sm:flex">
            <Ratings rating={data?.ratings} />
          </div>

          <div className="py-2 px-3 flex items-center justify-between">
            <div className="flex">
            <h5 className="pr-1 font-semibold  text-gray-800 text-[1.1rem] min-[500px]:text-[1.2rem]">
              {'₦' + (data.discountPrice === 0?data.originalPrice.toLocaleString():data.discountPrice.toLocaleString())}
            </h5>
            <h4 className="text-[0.55rem] line-through block text-red-400">
              {( data.discountPrice != 0? '₦' + data.originalPrice?.toLocaleString()  : null)}
            </h4>
            </div>
            <span className="hidden sm:block font-semibold pl-2 text-xs text-[#68d284]">
              
            </span>
          </div>
        </Link>

        {/* side options */}
        <div className="px-4 hidden sm:block ">
          {click ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => removeFromWishlistHandler(data)}
              color={click ? "red" : "#333"}
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => addToWishlistHandler(data)}
              color={click ? "red" : "#333"}
              title="Add to wishlist"
            />
          )}
         
          {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
        </div>
      </div>
    </>
  );
};

export default ProductCard;