import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";

const Categories = () => {
  const navigate = useNavigate();
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
                  <h3 className="font-bold text-gray-600 text-sm md:text-base">{i.title}</h3>
                  <p className="text-xs text-gray-600 md:text-sm">{i.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div> */}

<p className="text-2xl text-gray-800 font-bold px-20 mb-4 pt-10 mt-8">Shop By Category</p>

      <div
        className={`${styles.section} bg-white p-6 rounded-lg hidden sm:block  mt-8 sm:mt-2 mb-6`}
        id="categories"
      >
       
        <div className="flex gap-2">
          
          {categoriesData &&
            categoriesData.map((i) => {
              const handleSubmit = (i) => {
                navigate(`/products?category=${i.title}`);
              };
              return (





                
                <div className="w-64 h-64 mx-auto text-center bg-white border-2 rounded-md cursor-pointer p-4 shadow-sm" key={i.id} onClick={() => handleSubmit(i)}>
                  <div className="flex justify-center">
                    <img src={i.image_Url} className="w-32 h-32 object-cover mb-4" alt="" />
                  </div>
                  <p className="text-lg font-semibold text-gray-800">{i.title}</p>
                  <p className="text-sm text-gray-600 mt-2">{i.subTitle}</p>
                </div>

              );
            })}
        </div>
      </div>
    </>
  );
};

export default Categories;
