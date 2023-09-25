import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Signup from "../../components/Signup/Signup";
import VillajaFooter from '../../components/VillajaFooter/VillajaFooter.jsx'
import VillajaHeader from '../../components/VillajaHeader/VillajaHeader.jsx'

const SignupPage = () => {
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
        <Signup />
      <VillajaFooter/>
    </div>
  )
}

export default SignupPage