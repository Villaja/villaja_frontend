import React, { useState } from "react";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import Loader from "../components/Layout/Loader";
import ProfileSideBar from "../components/Profile/ProfileSidebar";
import ProfileContent from "../components/Profile/ProfileContent";
import VillajaFooter from '../components/VillajaFooter/VillajaFooter'
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { loading } = useSelector((state) => state.user);
  const [active, setActive] = useState(1);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="800px:bg-[#F8F8F8] min-h-[125vh]">
          <Header />
          <div className={`${styles.section} block 1100px:flex bg-white 500px:py-10 gap-[1.2rem] mt-[2rem] 800px:px-10 rounded-[0.7rem] min-h-[100vh]`}>
            <div className=" sticky 800px:mt-0 ">
              <ProfileSideBar active={active} setActive={setActive} />
            </div>
            <ProfileContent active={active} />
          </div>

          <VillajaFooter/>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
