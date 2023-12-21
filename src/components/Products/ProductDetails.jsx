/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { BiTag } from "react-icons/bi";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import { server } from "../../server";
import styles from "../../styles/styles";
import { BiShoppingBag, BiCreditCard } from "react-icons/bi";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlist";
import { BiX } from "react-icons/bi";
import LoadingSkelenton from "./LoadingSkelenton";
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

  const [loading, setLoading] = useState(true);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.products);
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const [activeImageRange,setActiveImageRange] = useState()
  const [activeImageColor,setActiveImageColor] = useState(0)
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const initialWords = 80;
  const [showFullContent, setShowFullContent] = useState(false);

  const descriptionWords = data?.description.split(" ");
  const displayedContent = showFullContent
    ? data?.description
    : descriptionWords?.slice(0, initialWords).join(" ");

  const toggleReadMore = () => {
    setShowFullContent(!showFullContent);
  };
  
  const queryP = new useSearchParams(window.location.search)

  const firstRender = useRef(true)

  useEffect(()=>{
    if (data?.colorList.length > 0) 
    {
      setActiveImageRange(data.colorList[0].index.split(','))

    }
  },[data])
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      await dispatch(getAllProductsShop(data && data?.shop._id));
      if (wishlist && wishlist.find((i) => i._id === data?._id)) {
        setClick(true);
      } else {
        setClick(false);
        document.title = data ? `${data.name} - Villaja` : "Product Details";
        
      }
      setLoading(false)
    };

    fetchData();
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
    const isItemExists = cart && cart.find((i) => i._id === id && i.color == data.color);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: count, color: data.colorList[activeImageColor]?data.colorList[activeImageColor].color:data.color };
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
    
    <div className="min-h-[100vh] mt-2 rounded-lg">
      {data ? (
      <div className={`${styles.section} w-[95%] mt-5 sm:mt-10 mx-auto bg-white rounded-lg px-2 sm:px-10 `}>
          <div className="w-full pt-10 ">
            <div className="block w-full 800px:flex" style={{flexDirection:"row-reverse"}}>
            <div className="w-full 800px:w-[50%] h-[400px] sm:h-[700px]" style={{display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
              <img
               src={`${data && data.images[select]?.url}`}
               alt=""
               className="w-full h-[250px] sm:h-[600px] object-contain lg:w-[70%] bg-white p-4 mb-5 rounded-md"
             />
             {
              activeImageRange ?
             <div className="flex mt-7 mb-5 gap-2 sm:gap-4">
                               {data &&
                                 data.images.slice(activeImageRange[0], activeImageRange[1]).map((i, index) => (
                                   <div
                                     key={index}
                                     className={`${
                                      select === index ? "null" : "null"
                                    } cursor-pointer bg-white  product-images-small w-[70px] h-[70px] relative flex items-center justify-center`}
                                   >
                                     <img
                                       src={`${i?.url}`}
                                       alt=""
                                       className="h-[90%] w-[90%] overflow-hidden object-contain"
                                       onClick={() => setSelect( parseInt(index) + parseInt(activeImageRange[0]))}
                                     />
                                   </div>
                                 ))}
                               <div
                                 className={`${
                                   select === 1 ? "border" : "null"
                                 } cursor-pointer`}
                               ></div>
                             </div>

                             : 

                             <div className="flex mt-7 mb-5 gap-2 sm:gap-4">
                               {data  &&
                                 data.images.slice(0,5).map((i, index) => (
                                   <div
                                     key={index}
                                     className={`${
                                      select === index ? "null" : "null"
                                    } cursor-pointer bg-white  product-images-small w-[70px] h-[70px] relative flex items-center justify-center`}
                                   >
                                     <img
                                       src={`${i?.url}`}
                                       alt=""
                                       className="h-[90%] w-[90%] overflow-hidden object-contain"
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

      }

              </div>
              <div className="w-full  800px:px-4 rounded-lg  800px:w-[50%] pt-5">
                <h1 className={`${styles.productTitle} sm:text-4xl text-2xl !font-semibold `}>{data.name}</h1>
                <p className="mb-[1rem] 800px:mb-[2rem] text-[#025492] flex items-center gap-1 mt-3 font-semibold text-lg"><span>{data.condition}</span> <BiTag/></p>
                <div className="mb-[1rem] mt-0 gap-[0.1rem] items-center">
                  <Ratings rating={data.ratings}/>
                  <p className="text-[#025492] text-md mt-2 mb-1">{data.reviews.length} Reviews</p>
                </div>
                <p className="text-[1.125rem]" onClick={() => navigate(`/shop/preview/${data.shop._id}`)} >Sold by: <span className={`${styles.shop_name} pl-2`}>
                        {data.shop.name.toUpperCase()}
                      </span></p>
                <div className="flex pt-3 mb-[1rem]">
                  <h4 className={`${styles.productDiscountPrice} !text-[1.7rem] min-[500px]:!text-[2.6rem]`}>
                    {'₦' + (data.discountPrice === 0?data.originalPrice.toLocaleString():data.discountPrice.toLocaleString())}
                  </h4>
                  <h3 className={`${styles.price}`} >
                    {( data.discountPrice != 0? data.originalPrice?.toLocaleString()  : null)}
                    {/* {"₦" + ( data.originalPrice?.toLocaleString() ? data.originalPrice?.toLocaleString()  : null)} */}
                  </h3>
                </div>

                <div className="flex items-center mb-[1.5rem]  justify-between pr-3">
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
                  {data.stock > 0?<img src={InStockIcon} alt="" />:<p className="text-red-500 font-bold text-lg">Out Of Stock<span className="text-xl"> X </span></p>}
                </div>
                
                
                <div className="flex items-center gap-2 mt-8">
                  <span className="font-medium text-[1.1rem]">Color :</span> 
                  {data && data.colorList?.length > 0 ?
                  
                  data.colorList.map((cl,index) => {
                    return(
              <div key={index} onClick={() => {setActiveImageRange(cl.index.split(','));setSelect(cl.index.split(',')[0]);setActiveImageColor(index)}} className={`p-1 border border-[#e8e8e8] ${activeImageColor==index?'!border-[#000000] border-2':''} cursor-pointer`}><div className={`w-[40px] h-[40px]`} style={{background:`${cl.color}`}} ></div></div>

                    )
                  })
                    
                :
                
                
                <div className="p-1 border border-[#000000] border-2"><div className={`w-[40px] h-[40px]`} style={{background:`${data?.color.toLowerCase()}`}} ></div></div>
                }
                </div>

                <div className="flex gap-6 w-full mt-10 sm:mt-8">
                  <div className="w-[50%] text-center">
                  
                  <div
  className="bg-[#025492] text-center items-center cursor-pointer py-4 rounded-lg px-10 flex justify-center"
  onClick={() => addToCartHandler(data._id)}
  disabled={data.stock < 1}
>
  <span className={`text-white flex gap-4 items-center text-sm sm:text-xl ${data.stock < 1 ? 'disabled' : ''}`}>
    <span>ADD TO CART</span> 
    <BiShoppingBag className="hidden sm:block" size='25px'/>
  </span>
</div>

                  </div>



                  <div className="w-[50%]">
                  <div
  className='bg-[transparent] text-center border-2 border-[#025492] cursor-pointer py-4 rounded-lg px-10 flex justify-center'
  disabled={data.stock < 1}
>
  {localStorage.getItem('user-token') ? (
    <span onClick={() => buyNowHandler(data._id)} className={`text-[#025492] text-center flex gap-4 text-sm sm:text-xl ${data.stock < 1 ? 'hidden' : ''}`}>
      {data.stock < 1 ? 'Out Of Stock' : 'BUY NOW'}
      <BiCreditCard className="hidden sm:block" size='25px'/>
    </span>
  ) : (
    <Link
      to="/user/login"
      className={`text-[#025492] ${data.stock < 1 ? 'disabled' : ''}`}
      style={{ textDecoration: 'none' }}
    >
      <div className={`text-[#025492] text-sm sm:text-lg ${data.stock < 1 ? 'disabled' : ''}`}>
        LOGIN TO BUY 
      </div>
    </Link>
  )}
</div>

                  </div>
                </div>
               
         

                <div className="flex items-center pt-8">
                  {/* <Link to={`/shop/preview/${data?.shop._id}`}>
                    <img
                      src={`${data?.shop?.avatar?.url}`}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full mr-2"
                    />
                  </Link> */}
                  {/* <div className="pr-8">
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
                  </div> */}
                </div>
              </div>
            </div>
            

          <div className="product-details-section flex-col 800px:flex-row">
          <div className="pds-left px-5 py-4 rounded-lg w-full mb-[2rem] 800px:w-[50%] 800px:mb-[1.5rem]">
              <h1 className="text-[1.3rem] min-[500px]:text-[1.7rem] font-[600] mb-[1rem]">Product Details</h1>
              <p className="py-2 pr-4 text-sm sm:text-lg leading-8 pb-10 text-[rgba(0,0,0,0.70)] text-justify">
        {displayedContent}
        {!showFullContent && descriptionWords.length > initialWords && (
          <span
            className="text-[#025492] font-bold cursor-pointer"
            onClick={toggleReadMore}
          >
            {" "}
            ...Read More
          </span>
        )}
      </p>
            </div>

            <div className="pds-right w-full mb-[2rem] 800px:w-[70%]">

              <div className="seller-info-section mb-6 mt-7">
                <h1 className="text-2xl font-[600] mb-[1rem]">Seller Information</h1>
                <div className="w-full 800px:w-[50%] mb-6">
                  <Link to={`/shop/preview/${data.shop._id}`}>
                    <div className="flex items-center">
                      <img
                        src={`${data?.shop?.avatar?.url}`}
                        className="w-[50px] h-[50px] rounded-full"
                        alt=""
                      />
                      <div className="pl-2 w-[70%]">
                        <h3 className={`${styles.shop_name} underline mr-2`}>{data.shop.name.toUpperCase()}</h3>
                        {/* <h5 className="pb-2 text-[15px]">
                        </h5> */}
                      
                      </div>

                      
                      
                    </div>
                  </Link>
                

                </div>

               

                <div>
                <h5 className="mb-[1rem] text-[1.125rem] font-[500]">
                      <span className="mr-2 text-[#FFB41F] ">({averageRating}/5)</span> Ratings
                    </h5>
                  <p className="mb-[1rem] text-[1.125rem] font-[500]"><span className="mr-2 text-[#17E5A1] ">100%</span> Order Fuffilment Rate</p>
                  <p className="mb-[1rem] text-[1.125rem] font-[500]"><span className="ml-[0.5rem] mr-2 text-[#FFB41F]">70%</span> Customer Service</p>
                  <p className="mb-[1rem] text-[1.125rem] font-[500]"><span className="ml-[0.5rem] mr-2 text-[#17E5A1]">80%</span> Quality Rating</p>
                </div>
              </div>

              <div className="more-product-info flex items-center text-justify">
                  <img src={DeliveryIcon} alt="" />
                  <div className="delivers-within">Delivers within Lagos in {data.minDelivery}-{data.maxDelivery} with Movelite Logistics</div>
              </div>

            </div>

          </div>
         

          
          </div>
          <ProductDetailsInfo
            data={data}
            products={products}
            totalReviewsLength={totalReviewsLength}
            averageRating={averageRating}
          />
          <br />
          {data && <SuggestedProduct data={data} />}
          <Reviews id={data._id} ratings={data.ratings} reviews={data.reviews} isDetailsPage={true}/>
          <br />
        </div>
      ) : <div className="max-w-[1756px] mx-auto"><LoadingSkelenton/></div>}
      
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
    <div className="bg-white py-2 rounded">
    <div className="w-full flex pt-5 pb-6">
      {[1, 2, 3].map((index) => (
        <div key={index} className="relative mx-2">
          <h5
            className={`text-[#000] pb-1 px-2 leading-5 font-[500] text-sm sm:text-xl cursor-pointer ${
              active === index ? 'text-[#025492]' : 'text-[#000]'
            }`}
            onClick={() => setActive(index)}
          >
            {index === 1 && 'Specifications'}
            {index === 2 && 'About'} 
            {index === 3 && "In The Box"}
          </h5>
          {active === index && <div className={`${styles.active_indicator}`} />}
        </div>
      ))}
    </div>
    
    {active === 2 && (
      <p className="py-2 pl-4 pr-4 text-[1rem] leading-8 pb-10 text-[rgba(0,0,0,0.70)] text-justify">
        {data.aboutProduct}
      </p>
    )}


      {active === 1 ? (
         <div className="w-full min-h-[40vh] pl-4 pr-4 flex flex-col py-3 overflow-y-auto text-lg font-bold text-[rgba(0,0,0,0.70)] text-justify">          {/* {data &&
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

<ul className="list-disc px-10 text-sm space-y-2 sm:text-md sm:space-y-4">
  {data.brand && (
    <li className="font-bold text-[#222]">
      Brand: <span className="text-gray-500">{data.brand}</span>
    </li>
  )}
  {data.model && (
    <li className="font-bold text-[#222]">
      Model Name: <span className="text-gray-500">{data.model}</span>
    </li>
  )}
  {data.displaySize && (
    <li className="font-bold text-[#222]">
      Display Size: <span className="text-gray-500">{data.displaySize}</span>
    </li>
  )}
  {data.color && (
    <li className="font-bold text-[#222]">
      Color: <span className="text-gray-500">{data.color}</span>
    </li>
  )}
  {data.os && (
    <li className="font-bold text-[#222]">
      OS: <span className="text-gray-500">{data.os}</span>
    </li>
  )}
  {data.memorySize && (
    <li className="font-bold text-[#222]">
      Memory Storage(RAM):{" "}
      <span className="text-gray-500">{data.memorySize}</span>
    </li>
  )}
  {data.internalMemory && (
    <li className="font-bold text-[#222]">
      Internal Storage (ROM):{" "}
      <span className="text-gray-500">{data.internalMemory}</span>
    </li>
  )}
  {data.cellularTechnology && (
    <li className="font-bold text-[#222]">
      Cellular Technology:{" "}
      <span className="text-gray-500">{data.cellularTechnology}</span>
    </li>
  )}
  {data.connectivityTechnology && (
    <li className="font-bold text-[#222]">
      Connectivity Technology:{" "}
      <span className="text-gray-500">{data.connectivityTechnology}</span>
    </li>
  )}
  {data.simCard && (
    <li className="font-bold text-[#222]">
      Sim Card: <span className="text-gray-500">{data.simCard}</span>
    </li>
  )}
  {data.dimensions && (
    <li className="font-bold text-[#222]">
      Dimensions: <span className="text-gray-500">{data.dimensions}</span>
    </li>
  )}
  {data.weight && (
    <li className="font-bold text-[#222]">
      Weight: <span className="text-gray-500">{data.weight}</span>
    </li>
  )}
</ul>

            

          {/* <div className="w-full flex justify-center">
            {data && data.reviews.length === 0 && (
              <h5>No Specifications for this product!</h5>
            )}
          </div> */}
        </div>
      ) : null}

      {active === 3 && (
        <div className="w-full block flex py-3 text-[1rem] pl-4 pr-4 text-justify">
        <p style={{ fontWeight: '600', color: 'rgba(0,0,0,0.70)' }}>
          {data.inTheBox}
        </p>
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
