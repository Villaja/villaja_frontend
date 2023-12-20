import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VillajaHeader from "../components/VillajaHeader/VillajaHeader";
import VillajaFooter from "../components/VillajaFooter/VillajaFooter";
import axios from "axios";
import { server } from "../server";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Start loading
    try {
      const response = await axios.post(`${server}/user/forgot-password`, {
        email,
      });

      if (response.status === 200 || response.status === 201) {
        // Show the modal
        setSuccess(true);
        setModalVisible(true);
      } else {
        toast.error("Submission Failed");
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
    // Close the modal
    setModalVisible(false);
    // Redirect to the login page after 2 seconds
    setTimeout(() => {
      navigate("/user/login");
    }, 1000);
  };

  return (
    <div>
      <VillajaHeader />
      <div className="min-h-screen flex flex-col  pt-20 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className=" text-center text-3xl font-bold text-gray-900">
            Forgot Password
          </h2>
        </div>
        <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-lg">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-4 font-medium text-gray-700"
                >
                  Enter Your Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Email Address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full border dark:border-[#ABABB5] text-[#ABABB5] p-3 rounded-[8px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-[#025492] sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className={`login-button group relative w-full h-[45px] shadow-md flex justify-center items-center py-2 px-4 border border-transparent text-[1.05rem] font-light rounded-md text-white ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Submit"}
                </button>
              </div>

              <Link to="/user/login" className={` text-[#0077B6] pl-2 w-full`} style={{ textDecoration: "none" }}>
                <div className="login-signup-btn h-[45px] flex justify-center items-center py-2 px-4 text-[1.05rem] font-light rounded-md">
                  Cancel
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <VillajaFooter />

      {/* Modal */}
      {modalVisible && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center block p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block align-middle h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white py-7 px-8">
                <div>
                <center>
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </center>
                  <div className="mt-3 text-center sm:mt-0">
                    <h3
                      className="text-2xl mt-4 mb-2 font-bold  text-center leading-6 text-gray-900"
                      id="modal-headline"
                    >
                      Success!
                    </h3>
                    <div className="mt-2">
                      <p className=" text-gray-500">A password reset link has been sent to your email.</p>
                    </div>
                  </div>
                </div>
              </div>
              <center className="mt-3 px-8 mb-5">
                <button
                  onClick={closeModal}
                  type="button"
                  className="w-full justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700"
                >
                  Okay
                </button>
              </center>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
