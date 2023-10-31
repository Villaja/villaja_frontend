import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import { AiOutlineArrowRight, AiOutlineMoneyCollect } from "react-icons/ai";
import { MdBorderClear } from "react-icons/md";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfAdmin } from "../../redux/actions/order";
import Loader from "../Layout/Loader";
import { getAllSellers } from "../../redux/actions/sellers";

import CalendarIcon from '../../assets/AdminAssets/calendar.svg'

const AdminDashboardMain = () => {
  const dispatch = useDispatch();

  const { adminOrders,adminOrderLoading } = useSelector((state) => state.order);
  const { sellers } = useSelector((state) => state.seller);

  useEffect(() => {
    dispatch(getAllOrdersOfAdmin());
    dispatch(getAllSellers());
  }, []);

  function formattedDate(d = new Date) {
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());
    const year = String(d.getFullYear());

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return `${day}/${month}/${year}`;
  }


   const adminEarning = adminOrders && adminOrders.reduce((acc,item) => acc + item.totalPrice * .10, 0);


   const adminBalance = adminEarning?.toFixed(2);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      headerAlign: 'center',
      minWidth: 130,
      flex: 0.7,
      renderCell: (params) => {
        return(

        
        params.getValue(params.id, "status") === "Delivered" ?
          <div className="delivered">
            Delivered
          </div>  : 
          ['Transferred to delivery partner','Received','Shipping','Processing','On the way'].includes(params.getValue(params.id, "status") )? <div className="processing">{params.getValue(params.id, "status")}</div>
          :
          <div className="cancelled">Cancelled</div>
        )
        
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: "createdAt",
      headerName: "Order Date",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
  ];

  const row = [];
  adminOrders &&
  adminOrders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item?.cart?.reduce((acc, item) => acc + item.qty, 0),
        total: "₦" + item?.totalPrice ,
        status: item?.status,
        createdAt: item?.createdAt.slice(0,10),
      });
    });

  return (
   <>
    {
      adminOrderLoading ? (
        <Loader />
      ) : (
        <div className="w-full p-6 bg-[#f4f4f4] min-h-[120vh]">
        <h3 className="text-[1.875rem] font-[800] mb-[1.25rem]">Admin Overview</h3>
        <div className="bg-white p-[1.81rem] rounded-[0.3125rem]">
          <div className="flex justify-between items-center mb-[0.75rem]">
            <h1 className="font-[600] text-[1.2rem] min-[500px]:text-[1.5625rem]">General Analytics</h1>
            <div className="opacity-[0.4] px-[1.25rem] py-[0.75rem] flex items-center gap-[0.88rem] border max-w-[11.5rem] rounded-[0.625rem]">
              <img src={CalendarIcon} alt="" />
              {formattedDate()}
            </div>
          </div>
          <div className="w-full block 800px:flex items-center justify-between">
            <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-[#f9fcff] shadow rounded px-6 py-5">
              <div className="pl-[0.56rem] pb-[1.25rem] border-l-[0.1375rem] border-[#0075FF]">
                
                <h3
                  className={`${styles.productTitle} !text-[1rem] leading-5 !font-[500] text-[#00000085] flex justify-between items-center w-full`}
                >
                  Total Sales

                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.125 4.6875C3.125 4.2731 3.28962 3.87567 3.58265 3.58265C3.87567 3.28962 4.2731 3.125 4.6875 3.125H8.125C8.29076 3.125 8.44973 3.05915 8.56694 2.94194C8.68415 2.82473 8.75 2.66576 8.75 2.5C8.75 2.33424 8.68415 2.17527 8.56694 2.05806C8.44973 1.94085 8.29076 1.875 8.125 1.875H4.6875C3.94158 1.875 3.22621 2.17132 2.69876 2.69876C2.17132 3.22621 1.875 3.94158 1.875 4.6875V15.3125C1.875 16.0584 2.17132 16.7738 2.69876 17.3012C3.22621 17.8287 3.94158 18.125 4.6875 18.125H15.3125C16.0584 18.125 16.7738 17.8287 17.3012 17.3012C17.8287 16.7738 18.125 16.0584 18.125 15.3125V11.875C18.125 11.7092 18.0592 11.5503 17.9419 11.4331C17.8247 11.3158 17.6658 11.25 17.5 11.25C17.3342 11.25 17.1753 11.3158 17.0581 11.4331C16.9408 11.5503 16.875 11.7092 16.875 11.875V15.3125C16.875 15.7269 16.7104 16.1243 16.4174 16.4174C16.1243 16.7104 15.7269 16.875 15.3125 16.875H10V12.3563C10 11.7313 9.75175 11.132 9.30987 10.6901C8.86799 10.2482 8.26867 10 7.64375 10H3.125V4.6875ZM3.125 11.25H7.64375C8.255 11.25 8.75 11.745 8.75 12.3563V16.875H4.6875C4.2731 16.875 3.87567 16.7104 3.58265 16.4174C3.28962 16.1243 3.125 15.7269 3.125 15.3125V11.25ZM11.25 2.5C11.25 2.33424 11.3158 2.17527 11.4331 2.05806C11.5503 1.94085 11.7092 1.875 11.875 1.875H17.5C17.6658 1.875 17.8247 1.94085 17.9419 2.05806C18.0592 2.17527 18.125 2.33424 18.125 2.5V8.125C18.125 8.29076 18.0592 8.44973 17.9419 8.56694C17.8247 8.68415 17.6658 8.75 17.5 8.75C17.3342 8.75 17.1753 8.68415 17.0581 8.56694C16.9408 8.44973 16.875 8.29076 16.875 8.125V4.00875L12.3169 8.56687C12.199 8.68072 12.0411 8.74372 11.8772 8.7423C11.7134 8.74087 11.5566 8.67514 11.4407 8.55926C11.3249 8.44338 11.2591 8.28662 11.2577 8.12275C11.2563 7.95888 11.3193 7.801 11.4331 7.68313L15.9913 3.125H11.875C11.7092 3.125 11.5503 3.05915 11.4331 2.94194C11.3158 2.82473 11.25 2.66576 11.25 2.5Z" fill="#0075FF"/>
                  </svg>

                </h3>
                <h5 className="pt-2 text-[1.5625rem] font-[500]">{adminBalance} <span className="font-[600]">NGN</span></h5>
              </div>
              <Link to="/admin-withdraw-request">
                <h5 className="pt-4 pl-2 text-[#0075ff] font-[500]">All Withdraws</h5>
              </Link>
            </div>
    
            <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-[#FDF6FF] shadow rounded px-6 py-5">
              <div className="pl-[0.56rem] pb-[1.25rem] border-l-[0.1375rem] border-[#BA00FD]">
                
                <h3
                  className={`${styles.productTitle} !text-[1rem] leading-5 !font-[500] text-[#00000085] flex justify-between items-center w-full`}
                >
                  Total Sellers

                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.125 4.6875C3.125 4.2731 3.28962 3.87567 3.58265 3.58265C3.87567 3.28962 4.2731 3.125 4.6875 3.125H8.125C8.29076 3.125 8.44973 3.05915 8.56694 2.94194C8.68415 2.82473 8.75 2.66576 8.75 2.5C8.75 2.33424 8.68415 2.17527 8.56694 2.05806C8.44973 1.94085 8.29076 1.875 8.125 1.875H4.6875C3.94158 1.875 3.22621 2.17132 2.69876 2.69876C2.17132 3.22621 1.875 3.94158 1.875 4.6875V15.3125C1.875 16.0584 2.17132 16.7738 2.69876 17.3012C3.22621 17.8287 3.94158 18.125 4.6875 18.125H15.3125C16.0584 18.125 16.7738 17.8287 17.3012 17.3012C17.8287 16.7738 18.125 16.0584 18.125 15.3125V11.875C18.125 11.7092 18.0592 11.5503 17.9419 11.4331C17.8247 11.3158 17.6658 11.25 17.5 11.25C17.3342 11.25 17.1753 11.3158 17.0581 11.4331C16.9408 11.5503 16.875 11.7092 16.875 11.875V15.3125C16.875 15.7269 16.7104 16.1243 16.4174 16.4174C16.1243 16.7104 15.7269 16.875 15.3125 16.875H10V12.3563C10 11.7313 9.75175 11.132 9.30987 10.6901C8.86799 10.2482 8.26867 10 7.64375 10H3.125V4.6875ZM3.125 11.25H7.64375C8.255 11.25 8.75 11.745 8.75 12.3563V16.875H4.6875C4.2731 16.875 3.87567 16.7104 3.58265 16.4174C3.28962 16.1243 3.125 15.7269 3.125 15.3125V11.25ZM11.25 2.5C11.25 2.33424 11.3158 2.17527 11.4331 2.05806C11.5503 1.94085 11.7092 1.875 11.875 1.875H17.5C17.6658 1.875 17.8247 1.94085 17.9419 2.05806C18.0592 2.17527 18.125 2.33424 18.125 2.5V8.125C18.125 8.29076 18.0592 8.44973 17.9419 8.56694C17.8247 8.68415 17.6658 8.75 17.5 8.75C17.3342 8.75 17.1753 8.68415 17.0581 8.56694C16.9408 8.44973 16.875 8.29076 16.875 8.125V4.00875L12.3169 8.56687C12.199 8.68072 12.0411 8.74372 11.8772 8.7423C11.7134 8.74087 11.5566 8.67514 11.4407 8.55926C11.3249 8.44338 11.2591 8.28662 11.2577 8.12275C11.2563 7.95888 11.3193 7.801 11.4331 7.68313L15.9913 3.125H11.875C11.7092 3.125 11.5503 3.05915 11.4331 2.94194C11.3158 2.82473 11.25 2.66576 11.25 2.5Z" fill="#BA00FD"/>
                  </svg>

                </h3>
                <h5 className="pt-2 text-[1.5625rem] font-[500]">{sellers && sellers.length} </h5>
              </div>
              <Link to="/admin-sellers">
                <h5 className="pt-4 pl-2 text-[#BA00FD] font-[500]">All Sellers</h5>
              </Link>
            </div>
    
            <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-[#FFF9F9] shadow rounded px-6 py-5">
              <div className="pl-[0.56rem] pb-[1.25rem] border-l-[0.1375rem] border-[#F00]">
                
                <h3
                  className={`${styles.productTitle} !text-[1rem] leading-5 !font-[500] text-[#00000085] flex justify-between items-center w-full`}
                >
                  Total Orders

                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.125 4.6875C3.125 4.2731 3.28962 3.87567 3.58265 3.58265C3.87567 3.28962 4.2731 3.125 4.6875 3.125H8.125C8.29076 3.125 8.44973 3.05915 8.56694 2.94194C8.68415 2.82473 8.75 2.66576 8.75 2.5C8.75 2.33424 8.68415 2.17527 8.56694 2.05806C8.44973 1.94085 8.29076 1.875 8.125 1.875H4.6875C3.94158 1.875 3.22621 2.17132 2.69876 2.69876C2.17132 3.22621 1.875 3.94158 1.875 4.6875V15.3125C1.875 16.0584 2.17132 16.7738 2.69876 17.3012C3.22621 17.8287 3.94158 18.125 4.6875 18.125H15.3125C16.0584 18.125 16.7738 17.8287 17.3012 17.3012C17.8287 16.7738 18.125 16.0584 18.125 15.3125V11.875C18.125 11.7092 18.0592 11.5503 17.9419 11.4331C17.8247 11.3158 17.6658 11.25 17.5 11.25C17.3342 11.25 17.1753 11.3158 17.0581 11.4331C16.9408 11.5503 16.875 11.7092 16.875 11.875V15.3125C16.875 15.7269 16.7104 16.1243 16.4174 16.4174C16.1243 16.7104 15.7269 16.875 15.3125 16.875H10V12.3563C10 11.7313 9.75175 11.132 9.30987 10.6901C8.86799 10.2482 8.26867 10 7.64375 10H3.125V4.6875ZM3.125 11.25H7.64375C8.255 11.25 8.75 11.745 8.75 12.3563V16.875H4.6875C4.2731 16.875 3.87567 16.7104 3.58265 16.4174C3.28962 16.1243 3.125 15.7269 3.125 15.3125V11.25ZM11.25 2.5C11.25 2.33424 11.3158 2.17527 11.4331 2.05806C11.5503 1.94085 11.7092 1.875 11.875 1.875H17.5C17.6658 1.875 17.8247 1.94085 17.9419 2.05806C18.0592 2.17527 18.125 2.33424 18.125 2.5V8.125C18.125 8.29076 18.0592 8.44973 17.9419 8.56694C17.8247 8.68415 17.6658 8.75 17.5 8.75C17.3342 8.75 17.1753 8.68415 17.0581 8.56694C16.9408 8.44973 16.875 8.29076 16.875 8.125V4.00875L12.3169 8.56687C12.199 8.68072 12.0411 8.74372 11.8772 8.7423C11.7134 8.74087 11.5566 8.67514 11.4407 8.55926C11.3249 8.44338 11.2591 8.28662 11.2577 8.12275C11.2563 7.95888 11.3193 7.801 11.4331 7.68313L15.9913 3.125H11.875C11.7092 3.125 11.5503 3.05915 11.4331 2.94194C11.3158 2.82473 11.25 2.66576 11.25 2.5Z" fill="#F00"/>
                  </svg>

                </h3>
                <h5 className="pt-2 text-[1.5625rem] font-[500]">{adminOrders && adminOrders.length} </h5>
              </div>
              <Link to="/admin-orders">
                <h5 className="pt-4 pl-2 text-[#F00] font-[500]">All Orders</h5>
              </Link>
            </div>
          </div>
        </div>
  
        <br />
        <div className="bg-white p-[1.81rem] rounded-[0.3125rem]">
          <h3 className="font-[600] text-[1.2rem] min-[500px]:text-[1.5625rem] mb-[1.38rem]">Latest Orders</h3>
          <div className="w-full min-h-[45vh] bg-white rounded">
            <DataGrid
              rows={row}
              columns={columns}
              pageSize={4}
              disableSelectionOnClick
              autoHeight
            />
          </div>
        </div>

      </div>
      )
    }
   </>
  );
};

export default AdminDashboardMain;
