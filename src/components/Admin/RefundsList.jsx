import { Button } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import {AiOutlineEye } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

import { Link } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { useState } from "react";


const RefundsList = () => {
const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('user-token'); // Retrieve the user token from localStorage
  
    if (!token) {
      // Handle the case where the user is not authenticated
      console.log('User is not authenticated.');
      return;
    }
  
    axios.get(`${server}/refund/get-all-refunds`, {
      withCredentials: true,
      headers: {
        Authorization: token,
      },
    }).then((res) => {
      setData(res.data.data);
    });
  }, []);
  

  const columns = [
    { field: "id", headerName: "Product Id", width: 250, },
    {
      field: "orderId",
      headerName: "orderId",
      width: 250,
      editable:true
    },
    {
      field: "customerId",
      headerName: "customerId",
      width: 250,
    },
    {
      field: "status",
      headerName: "status",
      width: 100,
    },

    {
      field: "transactionRef",
      headerName: "transactionRef",
      width: 250,
    },
    {
      field: "updatedAt",
      headerName: "updatedAt",
      width: 200,
    },
    {
      field: "Preview",
      width: 150,
      headerName: "",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin-order/${params.row.orderId}`} onClick={() => {console.log(params)}}>
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
        orderId: item.orderId,
        customerId: item.customerId,
        status: item.status,
        transactionRef: item?.transactionRef,
        updatedAt:item.updatedAt

          
        })
    }))
  }

  useEffect(() => {
    data && setRowState(data.map((item) => {
      return ({
          id: item._id,
        orderId: item.orderId,
        customerId: item.customerId,
        status: item.status,
        transactionRef: item?.transactionRef,
        updatedAt:item.updatedAt
      })
    }))
  },[data])

  const row = [];

  data &&
  data.forEach((item) => {
      row.push({
        id: item._id,
        orderId: item.orderId,
        customerId: item.customerId,
        status: item.status,
        transactionRef: item?.transactionRef,
        updatedAt:item.updatedAt

      });
    });

  return (
    <>
        <div className="w-full min-h-[120vh] pt-5 rounded flex justify-center bg-[#F4F4F4] p-6">
            <div className="w-full 500px:pl-8 800px:pt-1 bg-white rounded-[0.3125rem]">
              <h1 className="font-semibold text-[2rem] p-4 mb-4 border-b-[0.1rem] border-[#000000/25]">Refund Requests</h1>


              <div className={`myOrders-search ${mobileSearch?'myOrders-search-mobile':''} mb-6 ml-4`}>
                  <FiSearch size={20} onClick={
                    () => setMobileSearch(!mobileSearch)
                  }/>
                  <input type="text" placeholder="Search..." onChange={(e) => handleSearchChange(e)}/>
              </div>
              <DataGrid
                rows={rowState}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: {
                    pageSize: 10,
                    },
                },
                }}
                pageSizeOptions={[10]}
                disableRowSelectionOnClick
              />
            </div>
        </div>
    </>
  );
}

export default RefundsList