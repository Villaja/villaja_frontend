// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useSearchParams } from "react-router-dom";
// import Footer from "../components/Layout/Footer";
// import Header from "../components/Layout/Header";
// import Loader from "../components/Layout/Loader";
// import ProductCard from "../components/Route/ProductCard/ProductCard";
// import styles from "../styles/styles";
// import VillajaFooter from "../components/VillajaFooter/VillajaFooter";
// import CategoryComponent from "./CatalogPage/CategoryComponent";
// import MobileCategpryIcon from '../assets/mobile_category_icon.svg'

// import SingleItemCard from "../components/SingleItemCard/SingleItemCard";

// import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";

// const ProductsPage = () => {
//   const [searchParams] = useSearchParams();
//   const categoryData = searchParams.get("category");
//   const {allProducts,isLoading} = useSelector((state) => state.products);
//   const [data, setData] = useState([]);
//   const [category,setCategory] = useState('')
//   const [pageNumber,setPageNumber] = useState(24)
//   const [catItemFiltered,setCatItemFiltered] = useState([])
//   const [allCatProducts,setAllCatProducts] = useState([])

//   const location = useLocation()



//   useEffect(() => {
//     if (categoryData === null) {
//       const d = allProducts;
//       setData(d);
//     } else {
//       const d =
//       allProducts && allProducts.filter((i) => i.category === categoryData);
//       setAllCatProducts(d)
//       setData(d);
//     }
//     //    window.scrollTo(0,0);
//   }, [allProducts]);

//   useEffect(() => {
//     if(allProducts){

//       setData(allProducts.filter((i) => i.category === categoryData).slice(pageNumber-24,pageNumber))
//     }
//     console.log(allProducts);
//   },[pageNumber,allProducts])



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
//       <div className="cc-main-body">

//       <div className="catalog-page-body">
//                 <div className="catalog-filter-section">
//                   <CategoryComponent category={categoryData}/>
//                 </div>
//                 { data && <div className="catalog-item-display">
//                     <div className="cid-top-bar">
//                       <div className="cid-top-catname">
//                          {categoryData}
//                       </div>
//                       <div className="cid-top-mobile-filter">
//                         <Link to='/catalog/filter'><img src={MobileCategpryIcon} alt="" /></Link>
//                       </div>
//                     </div>
//                       <div className="cid-main-header">
//                         {pageNumber-23 +"-" + pageNumber} &nbsp; / &nbsp; <span>{allCatProducts.length} products found</span>
//                       </div>
//                     <div className="cid-main">
//                       {
//                         data.map((item,id) => {
//                           return <div className="cid-item" key={id}>
//                             <SingleItemCard data = {item} key={id}/>
//                           </div>
//                         })
//                       }
//                     </div>

//                     <div className="cid-undernav-wrapper">
//                       <div className="cid-undernav">
//                         <div className={`underNav-action underNav-previous ${pageNumber===24?'btn-inactive':""}`} onClick={() => {setPageNumber(pageNumber-24)}}>&#8249; &nbsp; &nbsp; previous</div>
//                         <div className="underNav-current">{pageNumber/24}</div>
//                         <div className="underNav-slash"> / </div>
//                         <div className="underNav-total">{Math.ceil(allCatProducts.length/24)}</div>
//                         <div className={`underNav-action underNav-next ${pageNumber>=allCatProducts.length?'btn-inactive':""}`} onClick={() => {setPageNumber(pageNumber+24)}}>Next &nbsp; &nbsp; &#8250;</div>
//                       </div>
//                     </div>
//                 </div> }

//                 {data && data.length === 0 ? (
//                   <div className="catalog-item-display">

//                     <h1 className="text-center w-full pb-[100px] text-[20px]">
//                       No products Found!
//                     </h1>
//                   </div>
//                   ) : null}
//         </div>

//       </div>
      
//       {/* <div className={`${styles.section}`}>
//         <div className="grid grid-cols-2 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
//           {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
//         </div>
//         {data && data.length === 0 ? (
//           <h1 className="text-center w-full pb-[100px] text-[20px]">
//             No products Found!
//           </h1>
//         ) : null}
//       </div> */}
//       {/* <Footer /> */}
//       <VillajaFooter/>
//     </div>
//     )
//   }
//   </>
//   );
// };

// export default ProductsPage;





import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import VillajaFooter from "../components/VillajaFooter/VillajaFooter";
import styles from "../styles/styles";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const {allProducts,isLoading} = useSelector((state) => state.products);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (categoryData === null) {
      const d = allProducts;
      setData(d);
    } else {
      const d =
      allProducts && allProducts.filter((i) => i.category === categoryData);
      setData(d);
    }
    //    window.scrollTo(0,0);
  }, [allProducts]);

  return (
  <>
  {
    isLoading ? (
      <Loader />
    ) : (
      <div>
      <Header activeHeading={3} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-2 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No products Found!
          </h1>
        ) : null}
      </div>
      <VillajaFooter />
    </div>
    )
  }
  </>
  );
};

export default ProductsPage;

