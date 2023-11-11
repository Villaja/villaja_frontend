import ProductCard from '../Route/ProductCard/ProductCard';
import ItemCatSingle from './ItemCatSingle';
import './itemCatSection.css';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Rolling from '../../assets/animations/Rolling.svg';

const ItemCatSection = ({ itemCatTitle, items, catIndex, allProducts }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (allProducts && allProducts?.length > 0) {
      const allProductsData = [...allProducts];
      const sortedData = allProductsData;
      const firstFive = sortedData && sortedData.slice(0, 6);
      setData(firstFive);
      setLoading(false);
    }
  }, [allProducts]);

  return (
    <div className="item-cat-container">
      <div className="ic-header">
        <div className="item-cat-title">{itemCatTitle}</div>
        <div className="seemore-btn">See more &#8250;</div>
      </div>
      <div className={[1, 3].includes(catIndex) ? 'ic-body special-ic-body-one' : `ic-body special-ic-body-two`}>
        {loading ? (
          // Loading Skeleton

          <div className='flex gap-4'>
                     
<div role="status" class="max-w-sm p-4  rounded shadow animate-pulse md:p-6 dark:border-gray-700">
    <div class="flex items-center justify-center h-32 mb-4 bg-gray-300 rounded dark:bg-gray-300">
        <svg class="w-10 h-10 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
    </div>
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
  
    
    <span class="sr-only">Loading...</span>
</div>

         
<div role="status" class="max-w-sm p-4  rounded shadow animate-pulse md:p-6 dark:border-gray-700">
    <div class="flex items-center justify-center h-32 mb-4 bg-gray-300 rounded dark:bg-gray-300">
        <svg class="w-10 h-10 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
    </div>
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
  
    
    <span class="sr-only">Loading...</span>
</div>

         
<div role="status" class="max-w-sm p-4  rounded shadow animate-pulse md:p-6 dark:border-gray-700">
    <div class="flex items-center justify-center h-32 mb-4 bg-gray-300 rounded dark:bg-gray-300">
        <svg class="w-10 h-10 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
    </div>
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
  
    
    <span class="sr-only">Loading...</span>
</div>

         
<div role="status" class="max-w-sm p-4  rounded shadow animate-pulse md:p-6 dark:border-gray-700">
    <div class="flex items-center justify-center h-32 mb-4 bg-gray-300 rounded dark:bg-gray-300">
        <svg class="w-10 h-10 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
    </div>
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
  
    
    <span class="sr-only">Loading...</span>
</div>

         
<div role="status" class="max-w-sm p-4  rounded shadow animate-pulse md:p-6 dark:border-gray-700">
    <div class="flex items-center justify-center h-32 mb-4 bg-gray-300 rounded dark:bg-gray-300">
        <svg class="w-10 h-10 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
    </div>
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
  
    
    <span class="sr-only">Loading...</span>
</div>

         
<div role="status" class="max-w-sm p-4  rounded shadow animate-pulse md:p-6 dark:border-gray-700">
    <div class="flex items-center justify-center h-32 mb-4 bg-gray-300 rounded dark:bg-gray-300">
        <svg class="w-10 h-10 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
    </div>
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
  
    
    <span class="sr-only">Loading...</span>
</div>


          </div>


        ) : (
          // Actual Product Cards
          <>
            {data &&
              data.map((i, index) => (
                <ProductCard data={i} key={index} catIndex={catIndex === 2 ? true : false} />
              ))}
          </>
        )}
      </div>
    </div>
  );
};



export default ItemCatSection;
