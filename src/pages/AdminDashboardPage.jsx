import {useState} from "react";
import AdminHeader from "../components/Layout/AdminHeader";
import AdminSideBar from "../components/Admin/Layout/AdminSideBar";
import AdminDashboardMain from "../components/Admin/AdminDashboardMain";

const AdminDashboardPage = () => {

    const [open,setOpen] = useState(true)

  return (
    <div>
      <AdminHeader setOpen={setOpen} open={open} />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="transition-all ease delay-200">
            <AdminSideBar active={1} sidebarActive={open}/>
          </div>
          <AdminDashboardMain />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
