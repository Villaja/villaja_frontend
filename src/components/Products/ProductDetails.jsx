/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import { server } from "../../server";
import styles from "../../styles/styles";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlist";
import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
import Ratings from "./Ratings";
import axios from "axios";
import './productDetails.css'
import SuggestedProduct from "../../components/Products/SuggestedProduct";
import Reviews from "../Reviews/Reviews";
import DeliveryIcon from '../../assets/delivery_icon.svg'
import InStockIcon from '../../assets/inStock.svg'
import SoldOutIcon from '../../assets/soldOut.svg'
import ShopLinkIcon from './shopLinkArrow.svg'


const ProductDetails = ({ data }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.products);
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const queryP = new useSearchParams(window.location.search)

  const firstRender = useRef(true)
  useEffect(() => {
    dispatch(getAllProductsShop(data && data?.shop._id));
    if (wishlist && wishlist.find((i) => i._id === data?._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [data, wishlist]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

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
        const cartData = { ...data, qty: count };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

  const buyNowHandler = () => {
    localStorage.setItem('buy-now',JSON.stringify({...data,qty:count}))
    navigate('/checkout')
  }

  const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings =
    products &&
    products.reduce(
      (acc, product) =>
        acc + product.reviews.reduce((sum, review) => sum + review.rating, 0),
      0
    );

  const avg =  totalRatings / totalReviewsLength || 0;

  const averageRating = avg.toFixed(2);


  const handleMessageSubmit = async () => {
    if (isAuthenticated) {
      const groupTitle = data._id + user._id;
      const userId = user._id;
      const sellerId = data.shop._id;
      await axios
        .post(`${server}/conversation/create-new-conversation`, {
          groupTitle,
          userId,
          sellerId,
        })
        .then((res) => {
          navigate(`/inbox?${res.data.conversation._id}`);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    } else {
      toast.error("Please login to create a conversation");
    }
  };

  useEffect(() => {
    if(firstRender.current)
    {
      firstRender.current = false
    }
    else
    {

      console.log(queryP[0].get('category'));
      window.location.reload();
    }
  },[window.location.pathname.split("/")[2]])

  return (
    <div className="">
      {data ? (
        <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
          <div className="w-full py-10">
            <div className="block w-full 800px:flex" style={{flexDirection:"row-reverse"}}>
              <div className="w-full 800px:w-[50%] 800px:pr-[2rem]" style={{display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
                <img
                  src={`${data && data.images[select]?.url}`}
                  alt=""
                  className="w-[100%] 800px:w-[60%] mb-5"
                />
                <div className="flex" style={{gap:"30px"}}>
                  {data &&
                    data.images.map((i, index) => (
                      <div
                        key={index}
                        className={`${
                          select === 0 ? "null" : "null"
                        } cursor-pointer product-images-small`}
                      >
                        <img
                          src={`${i?.url}`}
                          alt=""
                          className="h-[60px] overflow-hidden"
                          onClick={() => setSelect(index)}
                        />
                      </div>
                    ))}
                  <div
                    className={`${
                      select === 1 ? "border" : "null"
                    } cursor-pointer`}
                  ></div>
                </div>
              </div>
              <div className="w-full 800px:w-[50%] pt-5">
                <h1 className={`${styles.productTitle} !font-semibold `} style={{maxWidth:"45ch",fontSize:'1.7rem'}}>{data.name}</h1>
                <p className="mb-[2rem] 800px:mb-[4rem]"></p>
                <div className="mb-[1.2rem] flex gap-[0.1rem] items-center">
                  <Ratings rating={data.ratings}/>
                  <p className="text-[#0077B6] text-[0.6rem] underline mb-1">{data.reviews.length}</p>
                </div>
                <p className="text-[1.125rem]">Sold by: <span className={`${styles.shop_name} underline pl-2`}>
                        {data.shop.name.toUpperCase()}
                      </span></p>
                <div className="flex pt-3 mb-[1rem]">
                  <h4 className={`${styles.productDiscountPrice}`} style={{fontSize:"2.6rem"}}>
                    ₦{data.discountPrice.toLocaleString()}
                  </h4>
                  <h3 className={`${styles.price}`} >
                    {"₦" + data.originalPrice?.toLocaleString() ? data.originalPrice?.toLocaleString()  : null}
                  </h3>
                </div>

                <div className="flex items-center mb-[1.5rem] justify-between pr-3">
                  <div className="flex items-center gap-[1.8rem]">
                    <button
                      className=" cart-action-btn  transition duration-300 ease-in-out " 
                      onClick={decrementCount}
                    >
                      &#60;
                    </button>
                    <span className=" text-gray-800 rounded-lg font-medium py-[11px]">
                      {count}
                    </span>
                    <button
                      className=" cart-action-btn "
                      onClick={incrementCount}
                    >
                      &#62;
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => removeFromWishlistHandler(data)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => addToWishlistHandler(data)}
                        color={click ? "red" : "#333"}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>
                <div className="availability-icon">
                  {data.stock > 0?<img src={InStockIcon} alt="" />:<img src={SoldOutIcon} alt="" />}
                </div>
                <div
                  className={`addToCart-btn  ${styles.button} w-[100%] !h-[4rem] !mt-6  flex items-center`}
                  onClick={() => addToCartHandler(data._id)}
                >
                  <span className="text-white flex items-center">
                    ADD TO CART 
                  </span>
                </div>
                <div
                  className={`buyNow-btn addToCart-btn  ${styles.button} w-[100%] !h-[4rem] !mt-6 mb-[3rem] flex items-center`}
                  onClick={() => buyNowHandler(data._id)}
                >
                  <span className="text-[#00B4D8] flex items-center">
                    BUY NOW 
                  </span>
                </div>
                {/* <div className="flex items-center pt-8">
                  <Link to={`/shop/preview/${data?.shop._id}`}>
                    <img
                      src={`${data?.shop?.avatar?.url}`}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full mr-2"
                    />
                  </Link>
                  <div className="pr-8">
                    <Link to={`/shop/preview/${data?.shop._id}`}>
                      <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                        {data.shop.name}
                      </h3>
                    </Link>
                    <h5 className="pb-3 text-[15px]">
                      ({averageRating}/5) Ratings
                    </h5>
                  </div>
                  <div
                    className={`bg-gray-300 mt-4 !rounded !h-11`}
                    onClick={handleMessageSubmit}
                  >
                    <span className="text-black font-semibold px-4 py-2 flex items-center">
                      Send A DM<AiOutlineMessage className="ml-1" />
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
            

          <div className="product-details-section flex-col 800px:flex-row">
            <div className="pds-left w-full mb-[2rem] 800px:w-[50%] 800px:mb-0">
              <h1 className="text-[1.7rem] font-[600] mb-[1rem]">Product Details</h1>
              <p className="w-[100%] text-[0.9rem] font-[500] whitespace-pre-line">{data.description}</p>
            </div>

            <div className="pds-right w-full mb-[2rem] 800px:w-[50%]">

              <div className="seller-info-section mb-6">
                <h1 className="text-[1.7rem] font-[600] mb-[1rem]">Seller Information</h1>
                <div className="w-full 800px:w-[50%] mb-6">
                  <Link to={`/shop/preview/${data.shop._id}`}>
                    <div className="flex items-center">
                      <img
                        src={`${data?.shop?.avatar?.url}`}
                        className="w-[50px] h-[50px] rounded-full"
                        alt=""
                      />
                      <div className="pl-3">
                        <h3 className={`${styles.shop_name} underline mr-2`}>{data.shop.name.toUpperCase()}</h3>
                        {/* <h5 className="pb-2 text-[15px]">
                        </h5> */}
                      </div>

                      <img src={ShopLinkIcon} alt="" />
                      
                    </div>
                  </Link>
                  <p className="pt-2">{data.shop.description}</p>
                </div>

                <div>
                  <p className="mb-[1rem] text-[1.125rem] font-[500]"><span className="mr-2 text-[#17E5A1] ">100%</span> Order Fuffilment Rate</p>
                  <p className="mb-[1rem] text-[1.125rem] font-[500]"><span className="ml-[0.5rem] mr-2 text-[#FFB41F]">70%</span> Customer Service</p>
                  <p className="mb-[1rem] text-[1.125rem] font-[500]"><span className="ml-[0.5rem] mr-2 text-[#17E5A1]">80%</span> Quality Rating</p>
                </div>
              </div>

              <div className="more-product-info flex items-center">
                  <img src={DeliveryIcon} alt="" />
                  <div className="delivers-within">Delivers within Lagos in {data.minDelivery}-{data.maxDelivery} days with SHIPPR</div>
              </div>

            </div>

          </div>
          {data && <SuggestedProduct data={data} />}

          
          </div>
          <ProductDetailsInfo
            data={data}
            products={products}
            totalReviewsLength={totalReviewsLength}
            averageRating={averageRating}
          />
          <br />
          <Reviews id={data._id} ratings={data.ratings} reviews={data.reviews} isDetailsPage={true}/>
          <br />
        </div>
      ) : null}
    </div>
  );
};

const ProductDetailsInfo = ({
  data,
  products,
  totalReviewsLength,
  averageRating,
}) => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-[#ffffff]  py-2 rounded">
      <div className="w-full flex  justify-center pt-10 pb-6">
        <div className="relative">
          <h5
            className={
              "text-[#000] text-center max-[500px]:text-[10px]  px-2 800px:py-[0.75rem] 800px:px-[2.75rem] leading-5 font-[600] cursor-pointer min-[1117px]:text-[1.7rem] max-[1117px]:text-[15px]"
            }
            onClick={() => setActive(1)}
          >
            About This Product
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-center max-[500px]:text-[10px]  px-2 800px:py-[0.75rem] 800px:px-[2.75rem] leading-5 font-[600] cursor-pointer min-[1117px]:text-[1.7rem] max-[1117px]:text-[15px]"
            }
            onClick={() => setActive(2)}
          >
            Product Specifications
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-center max-[500px]:text-[10px]  px-2 800px:py-[0.75rem] 800px:px-[2.75rem] leading-5 font-[600] cursor-pointer min-[1117px]:text-[1.7rem] max-[1117px]:text-[15px]"
            }
            onClick={() => setActive(3)}
          >
            What's in The Box
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 800px:text-[1.1rem] text-[0.8rem] leading-8 pb-10 whitespace-pre-line" style={{color:"rgb(0,0,0,0.70)"}}>
            {data.aboutProduct}
          </p>
        </>
      ) : null}

      {active === 2 ? (
        <div className="w-full min-h-[40vh] flex flex-col py-3 overflow-y-auto 800px:text-[1.1rem] text-[0.8rem]" style={{fontWeight:600,color:"rgb(0,0,0,0.70)"}}>
          {/* {data &&
            data.reviews.map((item, index) => (
              <div className="w-full flex my-2">
                <img
                  src={`${item.user.avatar?.url}`}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="pl-2 ">
                  <div className="w-full flex items-center">
                    <h1 className="font-[500] mr-3">{item.user.name}</h1>
                    <Ratings rating={data?.ratings} />
                  </div>
                  <p>{item.comment}</p>
                </div>
              </div>
            ))} */}

            <p>Brand: {data.brand}</p>
            <p>Model Name: {data.model}</p>
            <p>Display Size: {data.displaySize}</p>
            <p>Color: {data.color}</p>
            <p>OS: {data.os}</p>
            <p>Memory Storage Capacity: {data.memorySize}</p>
            <p>Cellular Technology: {data.cellularTechnology}</p>
            <p>Connectivity Technology: {data.connectivityTechnology}</p>
            <p>Sim Card: {data.simCard}</p>
            <p>Dimensions: {data.dimensions}</p>
            <p>Weight: {data.weight}</p>

          {/* <div className="w-full flex justify-center">
            {data && data.reviews.length === 0 && (
              <h5>No Specifications for this product!</h5>
            )}
          </div> */}
        </div>
      ) : null}

      {active === 3 && (
        <div className="w-full block 800px:flex py-3 800px:text-[1.1rem] text-[0.8rem]">
          <p style={{fontWeight:"600",color:"rgb(0,0,0,0.70)"}}>{data.inTheBox}</p>
          {/* <div className="w-full 800px:w-[50%]">
            <Link to={`/shop/preview/${data.shop._id}`}>
              <div className="flex items-center">
                <img
                  src={`${data?.shop?.avatar?.url}`}
                  className="w-[50px] h-[50px] rounded-full"
                  alt=""
                />
                <div className="pl-3">
                  <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                  <h5 className="pb-2 text-[15px]">
                  </h5>
                </div>
              </div>
            </Link>
            <p className="pt-2">{data.shop.description}</p>
          </div>
          <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
            <div className="text-left">
              <h5 className="font-[600]">
                Joined on:{" "}
                <span className="font-[500]">
                  {data.shop?.createdAt?.slice(0, 10)}
                </span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Products:{" "}
                <span className="font-[500]">
                  {products && products.length}
                </span>
              </h5> */}
              {/* <h5 className="font-[600] pt-3">
                Total Reviews:{" "}
                <span className="font-[500]">{totalReviewsLength}</span>
              </h5> */}
              {/* <Link to="/">
                <div
                  className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}
                >
                  <h4 className="text-white">Visit Shop</h4>
                </div>
              </Link> */}
            {/* </div>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
