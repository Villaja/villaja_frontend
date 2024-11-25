import {useState} from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import Refund from '../components/Admin/Refund';


const AdminRefundPage = () => {
    const [open,setOpen] = useState(true)
  return (
    <div>
      <AdminHeader setOpen={setOpen} open={open} />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="">
            <AdminSideBar active={9} sidebarActive={open}/>
          </div>
          <Refund />
        </div>
      </div>
    </div>
  )
}



export default AdminRefundPage