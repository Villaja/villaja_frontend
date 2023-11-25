/* eslint-disable react/prop-types */
import './singleItemCard.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Ratings from '../Products/Ratings';

const SingleItemCard = ({data,itemDisplay}) => {

  const { cart } = useSelector((state) => state.cart);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()

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
    <div className={`single-item-container ${itemDisplay?"":"single-item-container-mobile"}`} onClick={() => navigate(`/product/${data._id}`)}>
        <div className="single-item-img">
            <img src={`${data.images && data.images[0]?.url}`} alt="asdf" />
        </div>
        <div className="single-item-body">
            <div className="si-body-name !h-[6ch]">{data.name.length > 35 ? data.name.slice(0, 35) + "..." : data.name}</div>
            <div className="si-body-price">₦{data.discountPrice === 0
                ? data.originalPrice.toLocaleString()
                : data.discountPrice.toLocaleString()}</div>
            <Ratings rating={data.ratings}/>
        </div>

        {/* <div className="border text-gray-900" onClick={() => addToCartHandler(data._id)}>
            ADD TO CART
        </div> */}
    </div>
  )
}

export default SingleItemCard