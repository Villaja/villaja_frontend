import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import ProductLoading from "../../ProductLoading";
import { Link } from "react-router-dom";

const BestDeals = () => {
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (allProducts && allProducts?.length > 0) {
      const allProductsData = [...allProducts];
      const sortedData = allProductsData?.sort((a, b) => {
        const percentageDiffA = ((a.originalPrice - a.discountPrice) / a.originalPrice) * 100;
        const percentageDiffB = ((b.originalPrice - b.discountPrice) / b.originalPrice) * 100;
    
        return percentageDiffB - percentageDiffA;
      });
    
      const firstFive = sortedData && sortedData.slice(0, 6);
      setData(firstFive);
      setLoading(false);
    }
    
  }, [allProducts]);

  return (
    <div>
      <div className={`${styles.section}`}>
        {/* <div className={`${styles.heading}`}>
          <h1 className="mt-4 sm:mt-1">Best Selling Items</h1>
        </div> */}
        <div className="ic-header">
            <div className="item-cat-title">Trending Products</div>
            <Link to="/all" className="seemore-btn">See more &#8250; </Link>
        </div>
        <div className="grid grid-cols-2 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-6 xl:gap-[30px] mb-12 border-0">
          {loading ? (
             <p className="text-center"><ProductLoading/></p>
          ) : (
            <>
              {data &&
                data.map((i, index) => (
                  <ProductCard data={i} key={index} />
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
