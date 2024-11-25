import {useState} from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import RefundsList from '../components/Admin/RefundsList';

const AdminRefundsListPage = () => {
    const [open,setOpen] = useState(true)
  return (
    <div>
      <AdminHeader setOpen={setOpen} open={open} />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="">
            <AdminSideBar active={10} sidebarActive={open}/>
          </div>
          <RefundsList/>
        </div>
      </div>
    </div>
  )
}

export default AdminRefundsListPage