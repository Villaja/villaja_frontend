import {useState} from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import AllWithdraw from "../components/Admin/AllWithdraw";

const AdminDashboardWithdraw = () => {
const [open,setOpen] = useState(true)

  return (
    <div>
      <AdminHeader setOpen={setOpen} open={open} />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="">
            <AdminSideBar active={7} sidebarActive={open}/>
          </div>
          <AllWithdraw />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardWithdraw