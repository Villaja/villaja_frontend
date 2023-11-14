import React from 'react'
import styles from '../../styles/styles'
import ShopInfo from "../../components/Shop/ShopInfo";
import ShopProfileData from "../../components/Shop/ShopProfileData";
import Header from '../../components/Layout/Header';

const ShopPreviewPage = () => {
  return (
    <div>
      <Header/>
       <div className={`${styles.section} bg-white`}>
      <div className="flex flex-wrap py-10 justify-between">
        <div className="w-full md:w-1/4 bg-white rounded-md shadow-sm sticky top-10 left-0 max-h-[90vh] overflow-y-auto">
          <ShopInfo isOwner={false} />
        </div>
        <div className="w-full md:w-3/4 mt-5 rounded-md">
          <ShopProfileData isOwner={false} />
        </div>
      </div>
    </div>
    </div>
   
  );
};


export default ShopPreviewPage