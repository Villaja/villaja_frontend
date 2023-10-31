import {useState} from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import AllProducts from "../components/Admin/AllProducts";

const AdminDashboardProducts = () => {
  const [open,setOpen] = useState(true)

  return (
    <div>
      <AdminHeader setOpen={setOpen} open={open} />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="">
            <AdminSideBar active={5} sidebarActive={open}/>
          </div>
          <AllProducts />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardProducts