import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";
import { IoIosArrowForward } from "react-icons/io";
import "./Categories.css";

const Categories = ({ isSellerHomepage }) => {
  const navigate = useNavigate();

  const handleSubmit = (category) => {
    if (category.title === "Accessories") {
      navigate("/accessories");
    } else {
      navigate(`/products?category=${category.title}`);
    }
  };

  return (
    <>
      {/* <div className={`${styles.section} hidden sm:block`}>
        <div
          className={`branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md`}
        >
          {brandingData &&
            brandingData.map((i, index) => (
              <div className="flex items-start" key={index}>
                {i.icon}
                <div className="px-3">
                  <h3 className="font-bold text-gray-600 text-sm md:text-base">
                    {i.title}
                  </h3>
                  <p className="text-xs text-gray-600 md:text-sm">
                    {i.Description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div> */}

      <div className="item-cat-container">
        <div className="ic-header">
          <div className="item-cat-title">
            {isSellerHomepage
              ? "Categories to Sell Under"
              : "Shop By Category"}
          </div>
          {/* <div className="seemore-btn">See more &#8250; </div> */}
        </div>
        <div className="ic-body cat-ic-body">
          {categoriesData &&
            categoriesData.slice(0, 4).map((i) => (
              <div
                className="cat-comp-card h-52 800px:h-72 text-center bg-white  rounded-md cursor-pointer p-4 shadow-sm"
                key={i.id}
                onClick={() => handleSubmit(i)}
              >
                <div className="cat-comp-img-container flex justify-center mb-4">
                  <img
                    src={i.image_Url}
                    className="cat-comp-img w-32 h-32 object-contain mb-4"
                    alt=""
                  />
                </div>
                <div className="cat-text">
                  <p className=" text-md 800px:text-2xl font-medium text-gray-800 mb-2">
                    {i.title}
                  </p>
                  <p
                    className="cat-comp-text text-sm text-gray-600 mt-2"
                    style={{ maxWidth: "20ch", margin: "0 auto" }}
                  >
                    {i.subTitle}
                  </p>
                  {/* <div className="cat-browse-btn flex 800px:hidden">
                    Browse
                    <IoIosArrowForward/>
                  </div> */}
                </div>
              </div>
            ))}
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Categories;
