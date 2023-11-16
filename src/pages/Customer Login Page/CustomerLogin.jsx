import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Login from "../../components/Login/Login.jsx";
import VillajaFooter from '../../components/VillajaFooter/VillajaFooter.jsx'
import VillajaHeader from '../../components/VillajaHeader/VillajaHeader.jsx'


const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if(isAuthenticated === true){
      navigate("/");
    }
  }, [])
  
  return (
    <div>
      <VillajaHeader/>
      <Login />
      
    </div>
  )
}

export default LoginPage;



