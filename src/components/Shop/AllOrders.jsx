import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../Layout/Loader";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import { AiOutlineArrowRight } from "react-icons/ai";

const AllOrders = () => {
  const { orders, isLoading } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrdersOfShop(seller._id));
  }, [dispatch]);

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
    //   cellClassName: "font-bold",
    //   flex: 0.7,
    // },

    // {
    //   field: "total",
    //   headerName: "Total",
    //   cellClassName: "font-bold",
    //   type: "number",
    //   minWidth: 130,
    //   flex: 0.8,
    // },

    {
      field: "Action",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button className="text-blue-500">
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

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        // itemsQty: item.cart.length,
        // total: "₦" + item.totalPrice.toLocaleString(),
        status: item.status,
      });
    });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      )}
    </>
  );
};

export default AllOrders;
