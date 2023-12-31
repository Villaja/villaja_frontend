import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import './ProductPageStyle/ProductPage.css'
import VillajaFooter from "../components/VillajaFooter/VillajaFooter";
import CategoryComponent from "./CatalogPage/CategoryComponent";
import MobileCategpryIcon from '../assets/mobile_category_icon.svg'
import { TbFilter } from "react-icons/tb";

import SingleItemCard from "../components/SingleItemCard/SingleItemCard";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import ItemCatSection from "../components/ItemCatSection/ItemCatSection";
import { items } from '../mock_data/Sample_Items'

import FilterList from '../assets/filterList.svg'
import FilterTabs from '../assets/filterTabs.svg'


const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const searchData = searchParams.get("searchTerm");
  const {allProducts,isLoading} = useSelector((state) => state.products);
  const [data, setData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [scategory,setCategory] = useState('')
  const [pageNumber,setPageNumber] = useState(24)
  const [catItemFiltered,setCatItemFiltered] = useState([])
  const [allCatProducts,setAllCatProducts] = useState([])
  const [priceFilter,setPriceFilter] = useState({min:0,max:3000000})
  const [brandFilter,setBrandFilter] = useState(["apple","oppo","samsung","infinix","nokia","blackberry","google"])
  const [colorFilter,setcolorFilter] = useState(["black","white","silver","gold","gray"])
  const [activeHeadingValue,SetActiveHeadingValue] = useState("")
  const headingNumber = {Phones:2,Computers:3,Tablets:4,Accessories:5}
  const [openFilter,setOpenFilter] = useState(false)
  const [itemDisplay,setItemDisplay] = useState(false)
  const [sortValue,setSortValue] = useState('New Arrivals')
  const [ratingFilter,setRatingFilter] = useState()
  const [osFilter,setOsFilter] = useState()
  const [conditionFilter,setConditionFilter] = useState()

  const location = useLocation()
  const queryP = new useSearchParams(window.location.search)

  const firstRender = useRef(true)


  useEffect(() => {
    if (categoryData === null) {
      const d = allProducts;
      setData(d);
    } else {
      let d
      if(searchData)
      {
        d =
        allProducts && allProducts.filter((i) => i.name.toLowerCase().includes(searchData.toLowerCase()));
        console.log();
      }
      else
      {
        d =
        allProducts && allProducts.filter((i) => i.category === categoryData);
      }
      setAllCatProducts(d)
      setData(d);
    }
    //    window.scrollTo(0,0);
  }, [allProducts]);

  useEffect(() => {
    if(firstRender.current)
    {
      firstRender.current = false
    }
    else
    {

      console.log(queryP[0].get('category'));
      SetActiveHeadingValue(queryP[0].get('category'))
      window.location.reload();
    }
  },[queryP[0].get('category'),queryP[0].get('searchTerm')])

  useEffect(() => 
  {
    setRatingFilter(searchParams.get('ratings'))
    setOsFilter(searchParams.get('os')?.split(','))
    setConditionFilter(searchParams.get('condition'))
  },[searchParams])

  useEffect(() => {
    if(allProducts){
      if(searchData)
      {
        setData(allProducts.filter((i) => i.name.toLowerCase().includes(searchData.toLowerCase()) && (i.originalPrice >= priceFilter.min && i.originalPrice <= priceFilter.max) && (ratingFilter?i.ratings >= ratingFilter:true) && (conditionFilter?i.condition === conditionFilter:true) && (osFilter?osFilter.includes(i.os):true)))

      }
      else
      {

        console.log(allProducts[0])
        setData(allProducts.filter((i) => i.category === categoryData && (i.originalPrice >= priceFilter.min && i.originalPrice <= priceFilter.max) && (ratingFilter?i.ratings >= ratingFilter:true) && (conditionFilter?i.condition === conditionFilter:true) && (osFilter?osFilter.includes(i.os):true)))
      }
    }
    console.log(allProducts);
  },[pageNumber,allProducts,priceFilter,brandFilter,colorFilter,ratingFilter,conditionFilter,osFilter])


   useEffect(() => {
      if(openFilter) {document.body.style.height = "125vh"; window.scrollTo(0,0)}
      else {document.body.style.height = "125vh";}
  }, [openFilter]);


   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() =>{
    let tempData = data?.slice(0)
    if(sortValue === "New Arrivals")
    {
      setFinalData(tempData)
    }
    else if(sortValue === "Price: Low to High")
    {
      setFinalData(tempData.sort((a,b) => {
                      return(a.originalPrice - b.originalPrice)
                    }))
    }
    else if(sortValue === "Price: High to Low")
    {
      setFinalData(tempData.sort((a,b) => {
                      return(b.originalPrice - a.originalPrice)
                    }))
    }
    else if(sortValue === "Customer Rating")
    {
      setFinalData(tempData.sort((a,b) => {
                      return(b.ratings - a.ratings)
                    }))
    }
  },[data,sortValue])

  return (
  <>
  {
    isLoading ? (
      <Loader />
    ) : (
      <div>
      <Header activeHeading={headingNumber[activeHeadingValue]} />
      {/* <br /> */}
      {/* <br /> */}
      {/* <div className="homepage-category-body">
          <div className="homepage-category-main">
            <ItemCatSection itemCatTitle={"Best Selling Items"} allProducts={allProducts} items={items} catIndex={1} />
          </div>
      </div> */}
      {/* <br /> */}
      {/* <br /> */}
      <div className="cc-main-body min-h-[80vh]">

        <div className=" p-6 mx-auto text-center text-[1.5rem]">
                  <span className="min-[756px]:hidden font-medium ">{searchData?<>{`Results for `}<span className="text-[#025492]">{"'"+searchData+"'"}</span></>:categoryData}</span>
                  
        </div>

      <div className="catalog-page-body">
                <div className={`catalog-filter-section ${openFilter?'catalog-filter-mobile':''}`}>
                  <CategoryComponent category={categoryData} setOpenFilter={setOpenFilter} setPriceFilter={setPriceFilter} setcolorFilter={setcolorFilter} setBrandFilter={setBrandFilter}/>
                </div>

                

                <div className="cid-top-filter">
                      <div className="ctf-action ctf-action-1" onClick={() => setItemDisplay(!itemDisplay)}>
                        {!itemDisplay?<img src={FilterTabs} alt="" className="w-[40px] h-[40px]"/>:<img src={FilterList} alt="" className="w-[50px] h-[60px]"/>}
                      </div>
                      <div className="ctf-action ctf-action-2" >
                        <select name="sortFilter" id="sortFilter" value={sortValue} onChange={(e) => setSortValue(e.target.value)}>
                          <option value="New Arrivals">New Arrivals</option>
                          <option value="Price: Low to High">Price: Low to High</option>
                          <option value="Price: High to Low">Price: High to Low</option>
                          <option value="Customer Rating">Customer Rating</option>
                        </select>
                      </div>
                      <div className="ctf-action ctf-action-3 flex justify-center w-full" onClick={() => setOpenFilter(true)}>
                        <span> FILTER </span>
                      </div>
                </div>
                { data && data.length > 0 ?<div className={`catalog-item-display ${openFilter?'hidden':''}`}>

                    <div className="max-[756px]:hidden cid-top-bar">
                      <div className="  cid-top-catname text-xl  sm:text-2xl font-medium">
                         {searchData?<>{`Results for `}<span className="text-[#025492]">{"'"+searchData+"'"}</span></>:categoryData}
                      </div>

                      <div className="ctf-action ctf-action-2" >
                        <select name="sortFilter" id="sortFilter2" value={sortValue} onChange={(e) => setSortValue(e.target.value)}>
                          <option value="New Arrivals">New Arrivals</option>
                          <option value="Price: Low to High">Price: Low to High</option>
                          <option value="Price: High to Low">Price: High to Low</option>
                          <option value="Customer Rating">Customer Rating</option>
                        </select>
                      </div>
                      
                    </div>
                    
                    
                      <div className="cid-main-header pl-3">
                        {pageNumber-23 +"-" + pageNumber} &nbsp; / &nbsp; <span>{data.length} products found</span>
                      </div>
                      <div className={`cid-main ${itemDisplay?"cid-main-tab":''}`}>
                      {
                        finalData?.slice(pageNumber-24,pageNumber).map((item,id) => {
                          return <div className="cid-item" key={id}>
                            <ProductCard data = {item} key={id} itemDisplay={itemDisplay}/>
                          </div>
                        })
                      }
                    </div>

                    <div className="cid-undernav-wrapper">
                      <div className="cid-undernav">
                        <div className={`underNav-action underNav-previous ${pageNumber===24?'btn-inactive':""}`} onClick={() => {setPageNumber(pageNumber-24)}}>&#8249; &nbsp; &nbsp; previous</div>
                        <div className="underNav-current">{pageNumber/24}</div>
                        <div className="underNav-slash"> / </div>
                        <div className="underNav-total">{Math.ceil(data.length/24)}</div>
                        <div className={`underNav-action underNav-next ${pageNumber>=data.length?'btn-inactive':""}`} onClick={() => {setPageNumber(pageNumber+24)}}>Next &nbsp; &nbsp; &#8250;</div>
                      </div>
                    </div>
                </div> : <h1 className="text-center w-full pb-[100px] text-[20px]">
                      No products Found!
                    </h1>}

                {/* {data && data.length === 0 ? (
                  <div className="catalog-item-display">

                    <h1 className="text-center w-full pb-[100px] text-[20px]">
                      No products Found!
                    </h1>
                  </div>
                  ) : null} */}
        </div>

      </div>
      
      {/* <div className={`${styles.section}`}>
        <div className="grid grid-cols-2 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No products Found!
          </h1>
        ) : null}
      </div> */}
      {/* <Footer /> */}
      <VillajaFooter/>
    </div>
    )
  }
  </>
  );
};

export default ProductsPage;





// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useSearchParams } from "react-router-dom";
// import Footer from "../components/Layout/Footer";
// import Header from "../components/Layout/Header";
// import Loader from "../components/Layout/Loader";
// import ProductCard from "../components/Route/ProductCard/ProductCard";
// import VillajaFooter from "../components/VillajaFooter/VillajaFooter";
// import styles from "../styles/styles";

// const ProductsPage = () => {
//   const [searchParams] = useSearchParams();
//   const categoryData = searchParams.get("category");
//   const {allProducts,isLoading} = useSelector((state) => state.products);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     if (categoryData === null) {
//       const d = allProducts;
//       setData(d);
//     } else {
//       const d =
//       allProducts && allProducts.filter((i) => i.category === categoryData);
//       setData(d);
//     }
//     //    window.scrollTo(0,0);
//   }, [allProducts]);

//   return (
//   <>
//   {
//     isLoading ? (
//       <Loader />
//     ) : (
//       <div>
//       <Header activeHeading={3} />
//       <br />
//       <br />
//       <div className={`${styles.section}`}>
//         <div className="grid grid-cols-2 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
//           {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
//         </div>
//         {data && data.length === 0 ? (
//           <h1 className="text-center w-full pb-[100px] text-[20px]">
//             No products Found!
//           </h1>
//         ) : null}
//       </div>
//       <VillajaFooter />
//     </div>
//     )
//   }
//   </>
//   );
// };

// export default ProductsPage;

