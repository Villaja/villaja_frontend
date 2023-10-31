import {useState} from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import AllUsers from "../components/Admin/AllUsers";

const AdminDashboardUsers = () => {
const [open,setOpen] = useState(true)

  return (
    <div>
      <AdminHeader setOpen={setOpen} open={open} />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="">
            <AdminSideBar active={4} sidebarActive={open}/>
          </div>
          <AllUsers />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardUsers