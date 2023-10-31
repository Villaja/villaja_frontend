import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../redux/actions/user";
import { DataGrid } from "@material-ui/data-grid";
import { AiOutlineDelete } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { Button } from "@material-ui/core";
import styles from "../../styles/styles";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const AllUsers = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleDelete = async (id) => {
    const token = localStorage.getItem('user-token'); // Retrieve the user token from localStorage
  
    if (!token) {
      // Handle the case where the user is not authenticated
      console.log('User is not authenticated.');
      return;
    }
  
    await axios
      .delete(`${server}/user/delete-user/${id}`, {
        withCredentials: true,
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        toast.success(res.data.message);
      });
  
    dispatch(getAllUsers());
  };
  

  const columns = [
    { field: "id", headerName: "User ID", minWidth: 150, flex: 0.7 },

    {
      field: "name",
      headerName: "name",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "email",
      headerName: "Email",
      type: "text",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "role",
      headerName: "User Role",
      type: "text",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "joinedAt",
      headerName: "joinedAt",
      type: "text",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "Delete User",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => setUserId(params.id) || setOpen(true)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  const [rowState,setRowState] = useState([])
  const [mobileSearch,setMobileSearch] = useState(window.screen.width < 500?true:false)

  const handleSearchChange = (e) => {
    setRowState(users.filter((od) => od._id.includes(e.target.value)).map((item) => {
        return ({
          id: item._id,
        name: `${item.firstname + ' ' + item.lastname}`,
        email: item.email,
        role: item.role,
        joinedAt: item.createdAt.slice(0, 10),
        })
    }))
  }

  useEffect(() => {
    console.log(users);
    users && setRowState(users.map((item) => {
      return ({
          id: item._id,
        name:  `${item.firstname + ' ' + item.lastname}`,
        email: item.email,
        role: item.role,
        joinedAt: item.createdAt.slice(0, 10),
      })
    }))
  },[users])

  const row = [];
  users &&
    users.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        email: item.email,
        role: item.role,
        joinedAt: item.createdAt.slice(0, 10),
      });
    });

  return (
    <div className="w-full min-h-[120vh] pt-5 rounded flex justify-center bg-[#F4F4F4] p-6">
      <div className="w-full 500px:pl-8 800px:pt-1 bg-white rounded-[0.3125rem]">
              <h1 className="font-semibold text-[2rem] p-4 mb-4 border-b-[0.1rem] border-[#000000/25]">Customers</h1>


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
        {open && (
          <div className="w-full fixed top-0 left-0 z-[999] bg-[#00000039] flex items-center justify-center h-screen">
            <div className="w-[95%] 800px:w-[40%] min-h-[20vh] bg-white rounded shadow p-5">
              <div className="w-full flex justify-end cursor-pointer">
                <RxCross1 size={25} onClick={() => setOpen(false)} />
              </div>
              <h3 className="text-[25px] text-center py-5 font-Poppins text-[#000000cb]">
                Are you sure you wanna delete this user?
              </h3>
              <div className="w-full flex items-center justify-center">
                <div
                  className={`${styles.button} text-white text-[18px] !h-[42px] mr-4`}
                  onClick={() => setOpen(false)}
                >
                  cancel
                </div>
                <div
                  className={`${styles.button} text-white text-[18px] !h-[42px] ml-4`}
                  onClick={() =>  setOpen(false) || handleDelete(userId)}
                >
                  confirm
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
