import {useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { FiSearch } from "react-icons/fi";
import AdminHeader from "../components/Layout/AdminHeader";
import AdminSideBar from "../components/Admin/Layout/AdminSideBar";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfAdmin } from "../redux/actions/order";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const AdminDashboardOrders = () => {
  const dispatch = useDispatch();
    const [open,setOpen] = useState(true)


  const { adminOrders, adminOrderLoading } = useSelector(
    (state) => state.order
  );

  useEffect(() => {
    dispatch(getAllOrdersOfAdmin());
  }, []);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    // {
    //   field: "total",
    //   headerName: "Total",
    //   type: "number",
    //   minWidth: 130,
    //   flex: 0.8,
    // },
    {
        field: "createdAt",
        headerName: "Order Date",
        type: "number",
        minWidth: 130,
        flex: 0.8,
    },
    
    {
      field: "Action",
      flex: 1,
      minWidth: 200,
      headerName: "",
      flex:0.8,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin-order/${params.id}`}>
              <Button className="text-blue-500">
                <p className="text-blue-500">
                  Manage Order
                </p>
                
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
    setRowState(adminOrders.filter((od) => od._id.includes(e.target.value)).map((item) => {
        return ({
          id: item._id,
          createdAt:item.createdAt.split('T')[0],
          itemsQty: item.cart.length,
          // total: "₦ " + item.totalPrice,
          status: item.status,
        })
    }))
  }

  useEffect(() => {
    adminOrders && setRowState(adminOrders.map((item) => {
      return ({
          id: item._id,
          createdAt:item.createdAt.split('T')[0],
          itemsQty: item.cart.length,
          // total: "₦ " + item.totalPrice,
          status: item.status,
      })
    }))
  },[adminOrders])


  return (
    <div>
      <AdminHeader setOpen={setOpen} open={open} />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div>
            <AdminSideBar active={2} sidebarActive={open}/>
          </div>

          <div className="w-full min-h-[120vh] pt-5 rounded flex justify-center bg-[#F4F4F4] p-6">
            <div className="w-full 500px:pl-8 800px:pt-1 bg-white rounded-[0.3125rem]">
              <h1 className="font-semibold text-[2rem] p-4 mb-4 border-b-[0.1rem] border-[#000000/25]">Orders</h1>


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
                checkboxSelection
                autoHeight
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardOrders;
