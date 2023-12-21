import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineMoneyCollect } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { MdBorderClear, MdAccountBalance, MdOutlineAccountBalance } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import { getAllProductsShop } from "../../redux/actions/product";
import { BsBank,BsShop } from "react-icons/bs";
import { Button } from "@material-ui/core";
import { GrProductHunt } from "react-icons/gr";
import { BiStoreAlt } from "react-icons/bi";
import { DataGrid } from "@material-ui/data-grid";
import { AiOutlineStock } from "react-icons/ai";
import { GiChart } from "react-icons/gi";

const DashboardHero = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    if (seller?._id) {
      dispatch(getAllOrdersOfShop(seller._id));
      dispatch(getAllProductsShop(seller._id));
    }
  }, [dispatch, seller]);

  const availableBalance = seller?.availableBalance?.toFixed(2) || "0.00";

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        const status = params.getValue(params.id, "status");
        if (status === "Delivered") {
          return "text-green-500 font-extrabold";
        } else if (status === "Ready To Ship") {
          return "text-blue-500 font-extrabold";
        } else {
          return "text-yellow-700";
        }
      },
    },
    // {
    //   field: "itemsQty",
    //   headerName: "Items Qty",
    //   type: "number",
    //   minWidth: 130,
    //   flex: 0.7,
    // },

    // {
    //   field: "total",
    //   headerName: "Total",
    //   type: "number",
    //   minWidth: 130,
    //   flex: 0.8,
    // },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                View Order 
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders && orders.forEach((item) => {
    row.push({
        id: item._id,
        // itemsQty: item.cart.reduce((acc, item) => acc + item.qty, 0),
        // total: "₦ " + item.cart.discountPrice.toLocaleString(),
        status: item.status,
      });
  });
  return (
    <div className="w-full p-8">
      <h3 className="text-[22px] font-DM Sans pb-2"></h3>
      <div className="w-full block 800px:flex items-center justify-between">
        <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <MdOutlineAccountBalance
              size={50}
              className="ml-[36px] mb-3 mr-2 "
              fill="#16a637"
            />
            <h3
              className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
            >
            Account Balance{" "}
              
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-2xl text-gray-800 font-bold font-DM Sans">{availableBalance.toLocaleString()}NGN</h5>
          <Link to="/dashboard-withdraw-money">
            <h5 className="pt-4 pl-[36px] font-bold text-[#16a637]">Request Withdraw</h5>
          </Link>
        </div>

        <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <GiChart 
            size={50} className="ml-[36px] mb-3 mr-2"
              fill="#1893f8" />
            <h3
              className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
            >
              Total Orders
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-2xl text-gray-800 font-bold font-DM Sans">{orders && orders.length}</h5>
          <Link to="/dashboard-orders">
            <h5 className="pt-4 pl-[36px] font-bold text-[#1893f8]">View Orders</h5>
          </Link>
        </div>

        <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <BsShop
              size={50}
              className="ml-[36px] mb-3 mr-2"
              fill="#5f4b34"
            />
            <h3
              className={`${styles.productTitle}  !text-[18px] leading-5 !font-[400] text-[#00000085]`}
            >
              Inventory
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-2xl text-gray-800 font-bold font-DM Sans">{products && products.length}</h5>
          <Link to="/dashboard-products">
            <h5 className="pt-4 pl-[36px] text-[#5f4b34S] font-bold">View Products</h5>
          </Link>
        </div>
      </div>

      
      <br />
      <h3 className="text-[22px] font-DM Sans font-semibold pb-2">Latest Orders</h3>
      <div className="w-full min-h-[45vh] bg-white rounded">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
      </div>
    </div>
  );
};

export default DashboardHero;
