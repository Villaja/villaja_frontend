/* eslint-disable react/prop-types */
import './singleItemCard.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
import { useState } from 'react';

const SingleItemCard = ({data}) => {

  const { cart } = useSelector((state) => state.cart);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

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
    <div className="single-item-container">
        <div className="single-item-img">
            <img src={`${data.images && data.images[0]?.url}`} alt="asdf" />
        </div>
        <div className="single-item-body">
            <div className="si-body-name">{data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}</div>
            <div className="si-body-price">₦{data.originalPrice === 0
                ? data.originalPrice
                : data.discountPrice.toLocaleString()}</div>
        </div>
        <div className="add-to-cart-btn" onClick={() => addToCartHandler(data._id)}>
            ADD TO CART
        </div>
    </div>
  )
}

export default SingleItemCard