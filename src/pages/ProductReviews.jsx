import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductDetails from "../components/Products/ProductDetails";
import SuggestedProduct from "../components/Products/SuggestedProduct";
import { useSelector } from "react-redux";
import VillajaFooter from "../components/VillajaFooter/VillajaFooter";
import ReviewsDetails from "./ReviewsDetails";

const ProductReviews = () => {
  const { allProducts } = useSelector((state) => state.products);
  const { allEvents } = useSelector((state) => state.events);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const eventData = searchParams.get("isEvent");

  useEffect(() => {
    if (eventData !== null) {
      const data = allEvents && allEvents.find((i) => i._id === id);
      setData(data);
    } else {
      const data = allProducts && allProducts.find((i) => i._id === id);
      setData(data);
    }
  }, [allProducts, allEvents]);

  return (
    <div>
      <Header />
      <ReviewsDetails data={data} />
        {/* {
          !eventData && (
            <>
            {data && <SuggestedProduct data={data} />}
            </>
          )
        } */}
      {/* <Footer /> */}
      <VillajaFooter/>
    </div>
  );
};

export default ProductReviews;