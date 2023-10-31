import {useState} from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import AllSellers from "../components/Admin/AllSellers";

const AdminDashboardSellers = () => {
  const [open,setOpen] = useState(true)

  return (
    <div>
      <AdminHeader setOpen={setOpen} open={open} />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="">
            <AdminSideBar active={3} sidebarActive={open}/>
          </div>
          <AllSellers />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardSellers