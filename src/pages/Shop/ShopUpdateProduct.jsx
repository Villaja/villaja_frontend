import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'

import UpdateProductDetails from '../../components/Shop/UpdateProduct';

const ShopUpdateProduct = () => {
  return (
    <div>
        <DashboardHeader />
        <div className="flex items-center justify-between w-full">
            <div className="w-[80px] 800px:w-[330px]">
              <DashboardSideBar active={20} />
            </div>
            <div className="w-full justify-center flex">
                <UpdateProductDetails />
            </div>
          </div>
          
    </div>
  )
}

export default ShopUpdateProduct