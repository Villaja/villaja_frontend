import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../utils/server";
import { toast } from "react-toastify";
import styles from "../../styles/styles";
import { RxAvatar } from "react-icons/rx";
import VillajaFooter from '../../components/VillajaFooter/VillajaFooter.jsx'
import VillajaHeader from '../../components/VillajaHeader/VillajaHeader.jsx'
import Header from '../../components/SellerHeader/SellerHeader'
import Footer from '../../components/SellerFooter/SellerFooter'

const ShopCreate = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false)
  const [zipCode, setZipCode] = useState();
  const [avatar, setAvatar] = useState();
  const [accountType, setAccountType] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setLoading(true); // Start loading
    try {
      const response = await axios.post(
        `${server}/shop/create-shop`,
        {
          name,
          email,
          password,
          fullName,
          avatar,
          zipCode,
          address,
          phoneNumber,
          accountType,
        },
        { withCredentials: true }
      );
  
      if (response.status === 200 || response.status === 201) {
        const { token } = response.data;
        // localStorage.setItem('seller-token', token);
        toast.success("sign up Success!");
        setShowModal(true);
        // setSuccess(true)
        // navigate("/shop/login");
        // window.location.reload();
      } else {
        toast.error("sign up Failed");
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

  const closeModal = () => {
    setShowModal(false);
    navigate("/shop/login");
  };

  const handleFileInputChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const handleAccountTypeChange = (e) => {
    setAccountType(e.target.value); // Update accountType when a radio button is selected
  };

  return (
    <div>
    <Header/>
    <div className="min-h-screen justify-left py-12 sm:px-12 lg:px-8">
      <div className="sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-left pl-8 text-3xl font-bold text-gray-900">
          Seller Signup.
        </h2>
        <p className="mt-2 text-left pl-8 text-lg text-gray-900">
          Seller account Information
        </p>
      </div>
      <div className={`mt-8 sm:w-full bg-white rounded-lg shadow ${showModal ? 'hidden' : ''} sm:max-w-[52rem]`}>
        <div className="py-8 px-4  sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Shop Name
              </label>
              <div className="mt-1">
                <input
                  type="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
                <p className="mb-3">Account Type</p>
                <div className="flex mb-3">
                  <label
                    className="ml-2 mr-2 mb-3 block text-sm text-gray-900"
                  >
                    Individual
                  </label>
                  <input
                    type="radio"
                    name="accountType"
                    value="Individual" // Set the value for Individual
                    required
                    onChange={handleAccountTypeChange}
                    checked={accountType === "Individual"}
                    className="h-4 w-4 text-blue-600 mt-1 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </div>
                <div className="flex">
                  <label
                    className="ml-2 mr-2 mb-3 block text-sm text-gray-900"
                  >
                    Registered Business
                  </label>
                  <input
                    type="radio"
                    name="accountType"
                    value="Business" // Set the value for Business
                    required
                    onChange={handleAccountTypeChange}
                    checked={accountType === "Business"}
                    className="h-4 w-4 text-blue-600 mt-1 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </div>
              </div>

              

           
              <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Account Handler  Fullname
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="fullName"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Account Handler Phone Number
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="phone-number"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
               Shop Address
              </label>
              <div className="mt-1">
                <input
                  type="address"
                  name="address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Zip Code
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="zipcode"
                  required
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              >shop logo(optional)</label>
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
                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <span>Upload a file</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>

            <div className='flex'>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  required
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Accept Our Terms and conditions
                </label>
              </div>

            <div>
            <div>
      <button
      type="submit"
      className={`login-button group relative w-full h-[45px] shadow-md flex justify-center items-center py-2 px-4 border border-transparent text-[1.05rem] font-light rounded-md text-white ${
      loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
      }`}
      disabled={loading}
      >
      {loading ? "Loading..." : "Sign Up"}
      </button>
      </div>
      <div className={`dha-box ${styles.noramlFlex} w-full`}>
        <span></span>
        <h4>Already have an account?</h4>
        <span></span>
      </div>

  <Link to="/shop/login" className={` text-[#0077B6] pl-2 w-full`} style={{textDecoration:'none'}}>
    <div className="login-signup-btn h-[45px] flex justify-center items-center py-2 px-4 text-[1.05rem] font-light rounded-md">
      Sign In
    </div>
  </Link>
  </div>
          
          </form>
        </div>
      </div>
    </div>
    <Footer/>

    {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
              <h2 className="text-3xl font-bold mb-4">Sign Up Successful!</h2>
              <p className="mb-4">
                An <span className="text-blue-400">activation link</span> has been sent to your email. Please check your inbox(your spam as well) and click the link to activate your account.
              </p>
              <button
                className="bg-blue-400 w-full text-white px-4 py-2 rounded-md"
                onClick={closeModal}
              >
                Okay
              </button>
            </div>
          </div>
        )}
    </div>
  );
};

export default ShopCreate;