import { React, useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Singup = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [phoneNumber, setPhonenumber] = useState("")
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [success, setSuccess] = useState(false)
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileInputChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setLoading(true); // Start loading
    try {
      const response = await axios.post(
        `${server}/user/register`,
        {
          email,
          password,
          firstname,
          lastname,
          phoneNumber,
        },
        { withCredentials: true }
      );
  
      if (response.status === 200 || response.status === 201) {
        const { token } = response.data;
        localStorage.setItem('user-token', token);
        toast.success("sign up Success!");
        // setSuccess(true)
        navigate("/");
        window.location.reload();
      } else {
        toast.error("register Failed");
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
  //   if(success){
  //    navigate('/')
  //   }
  //  }, [success]);
 
 

  return (
    <div>
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-2 text-center text-3xl font-bold text-gray-900">
          Create An Account
        </h2>
      </div>
      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700"
              >
                First Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="text"
                  autoComplete="name"
                  required
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder="Enter your first name"
                  className="appearance-none block w-full border dark:border-[#ABABB5] text-[#ABABB5] p-3 rounded-[8px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-[#00B4D8] sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700"
              >
                Last Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="text"
                  autoComplete="name"
                  required
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="Enter your last name"
                  className="appearance-none block w-full border dark:border-[#ABABB5] text-[#ABABB5] p-3 rounded-[8px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-[#00B4D8] sm:text-sm"
                />
              </div>
            </div>

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
                  autoComplete="name"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jaysmith@example.com"
                  className="appearance-none block w-full border dark:border-[#ABABB5] text-[#ABABB5] p-3 rounded-[8px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-[#00B4D8] sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="text"
                  autoComplete="phone"
                  required
                  value={phoneNumber}
                  placeholder="0909090909"
                  onChange={(e) => setPhonenumber(e.target.value)}
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
                  placeholder="Enter your Password"
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

            <div>
              {/* <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <div className="mt-2 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={avatar}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )}
                </span>
                
              </div> */}
            </div>

            <div>
            <button
              type="submit"
              className={`login-button group relative w-full h-[45px] shadow-md flex justify-center items-center py-2 px-4 border border-transparent text-[1.05rem] font-light rounded-md text-white ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
              }`}
              disabled={loading}
            >
              {loading ? "Loading..." : "SIGN UP"}
            </button>
            </div>
            <div className={`dha-box ${styles.noramlFlex} w-full`}>
              <span></span>
              <h4>Already have an account?</h4>
              <span></span>
            </div>
              <Link to="/user/login" className={` text-[#0077B6] pl-2 w-full`} style={{textDecoration:'none'}}>

              <div className="login-signup-btn h-[45px] flex justify-center items-center py-2 px-4 text-[1.05rem] font-light rounded-md">
                  Sign In
                </div>
                </Link>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Singup;
