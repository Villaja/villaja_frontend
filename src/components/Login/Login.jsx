import { React, useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import './Login.css'
import Rolling from '../../assets/animations/Rolling.svg'



const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false)
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setLoading(true); // Start loading
    try {
      const response = await axios.post(
        `${server}/user/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
  
      if (response.status === 200 || response.status === 201) {
        const { token } = response.data;
        localStorage.setItem('user-token', token);
        toast.success("Login Success!");
        // setSuccess(true)
        navigate("/");
        window.location.reload();
      } else {
        toast.error("Login Failed");
      }
    } catch (error) {
      if (error.response) {
        // Handle known error responses with status codes
        toast.error(error.response.data.message);
      } else {
        // Handle unexpected errors (e.g., network issues)
        toast.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };
  

  // useEffect(() => {
  //  if(success){
  //   navigate('/')
  //  }
  // }, [success]);

  return (
    <div>

      
      <div className="min-h-screen flex flex-col  pt-20 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className=" text-center text-3xl font-bold text-gray-900">
        Sign In To Continue
        </h2>
      </div>
      <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full border dark:border-[#ABABB5] text-[#ABABB5] p-3 rounded-[8px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-[#00B4D8] sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full border dark:border-[#ABABB5] text-[#ABABB5] p-3 rounded-[8px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-[#00B4D8] sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div className={`${styles.noramlFlex} justify-between`}>
              <div className={`${styles.noramlFlex}`}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link to="/user/forgot-password" className="text-right mb-3 text-[#0077B6] cursor-pointer">
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div>
             
              
            <button
        type="submit"
        className={`login-button group relative w-full h-[45px] shadow-md flex justify-center items-center py-2 px-4 border border-transparent text-[1.05rem] font-light rounded-md text-white ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
        }`}
        disabled={loading}
      >
        {loading ? <img src={Rolling} /> : "LOG IN"}
      </button>
            </div>
            <div className={`dha-box ${styles.noramlFlex} w-full`}>
              <span></span>
              <h4>Don't have an account?</h4>
              <span></span>
            </div>

              <Link to="/user/signup" className={` text-[#0077B6] pl-2 w-full`} style={{textDecoration:'none'}}>
                <div className="login-signup-btn h-[45px] flex justify-center items-center py-2 px-4 text-[1.05rem] font-light rounded-md">
                  Sign Up
                </div>
              </Link>
          </form>
        </div>
      </div>
    </div>
    </div>
  
   
  );
};

export default Login;
