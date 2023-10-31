import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import { deleteProduct } from "../../redux/actions/product";
import Loader from "../Layout/Loader";
import axios from "axios";
import { server } from "../../server";
import { useState } from "react";

const AllProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('user-token'); // Retrieve the user token from localStorage
  
    if (!token) {
      // Handle the case where the user is not authenticated
      console.log('User is not authenticated.');
      return;
    }
  
    axios.get(`${server}/product/admin-all-products`, {
      withCredentials: true,
      headers: {
        Authorization: token,
      },
    }).then((res) => {
      setData(res.data.products);
    });
  }, []);
  

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 100,
      flex: 0.6,
    },
    {
      field: "Stock",
      headerName: "Stock",
      type: "number",
      minWidth: 80,
      flex: 0.5,
    },

    {
      field: "sold",
      headerName: "Sold out",
      type: "number",
      minWidth: 130,
      flex: 0.6,
    },
    {
      field: "Preview",
      flex: 0.8,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.id}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const [rowState,setRowState] = useState([])
  const [mobileSearch,setMobileSearch] = useState(window.screen.width < 500?true:false)

  const handleSearchChange = (e) => {
    setRowState(data.filter((od) => od._id.includes(e.target.value)).map((item) => {
        return ({
          id: item._id,
        name: item.name,
        price: "₦ " + item.discountPrice,
        Stock: item.stock,
        sold: item?.sold_out,
          
        })
    }))
  }

  useEffect(() => {
    data && setRowState(data.map((item) => {
      return ({
          id: item._id,
        name: item.name,
        price: "₦ " + item.discountPrice,
        Stock: item.stock,
        sold: item?.sold_out,
      })
    }))
  },[data])

  const row = [];

  data &&
  data.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        price: "₦ " + item.discountPrice,
        Stock: item.stock,
        sold: item?.sold_out,
      });
    });

  return (
    <>
        <div className="w-full min-h-[120vh] pt-5 rounded flex justify-center bg-[#F4F4F4] p-6">
            <div className="w-full 500px:pl-8 800px:pt-1 bg-white rounded-[0.3125rem]">
              <h1 className="font-semibold text-[2rem] p-4 mb-4 border-b-[0.1rem] border-[#000000/25]">Products</h1>


              <div className={`myOrders-search ${mobileSearch?'myOrders-search-mobile':''} mb-6 ml-4`}>
                  <FiSearch size={20} onClick={
                    () => setMobileSearch(!mobileSearch)
                  }/>
                  <input type="text" placeholder="Search..." onChange={(e) => handleSearchChange(e)}/>
              </div>
              <DataGrid
                rows={rowState}
                columns={columns}
                pageSize={10}
                disableSelectionOnClick
                autoHeight
              />
            </div>
        </div>
    </>
  );
};

export default AllProducts;
