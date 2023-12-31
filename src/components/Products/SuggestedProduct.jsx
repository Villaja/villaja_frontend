import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/styles";
import ProductCard from "../Route/ProductCard/ProductCard";
import SingleItemCard from "../SingleItemCard/SingleItemCard";
import { Link } from "react-router-dom";

const SuggestedProduct = ({ data}) => {
  const {allProducts} = useSelector((state) => state.products);
  const [productData,setProductData] = useState();

  useEffect(() => {
    const d =
    allProducts && allProducts.filter((i) => i.category === data.category && i._id !== data._id);
    setProductData(d);
  }, []);

  return (
    
    <div>
      <div className={`item-cat-container`}>
        {/* <div className={`${styles.heading}`}>
          <h1>Featured Products</h1>
        </div> */}
        <div className="ic-header">
            <div className="item-cat-title">RELATED PRODUCTS</div>
            <Link to="/all" className="seemore-btn">See more &#8250; </Link>
        </div>
        <div className="grid grid-cols-2 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {
            <>
              {productData &&
                productData.slice(0,5).map((i, index) => (
                  <ProductCard className="shadow-lg" data={i} key={index} itemDisplay={true}/>
                ))}
            </>
          }
        </div>
      </div>
      {/* {data ? (
        <div className={`p-4 ${styles.section}`}>
          <h2
            className={`${styles.heading} text-[25px] font-[500] border-b mb-5`}
          >
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
             {
                productData && productData.map((i,index) => (
                    <ProductCard data={i} key={index} />
                ))
             }
      </div>
        </div>
      ) : null} */}
    </div>
    
  );
};

export default SuggestedProduct;