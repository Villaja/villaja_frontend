
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const ShopLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Start loading

    try {
      await axios.post(
        `${server}/shop/login-shop`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      toast.success("Login Success!");
      navigate("/dashboard");
      window.location.reload(true);
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl text-center text-gray-800 font-semibold mb-6">
          Login to Your Shop
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-600 text-sm">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="text-gray-600 text-sm">
              Password
            </label>
            <input
              type={visible ? "text" : "password"}
              name="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
            {visible ? (
              <AiOutlineEye
                className="absolute top-3 right-4 cursor-pointer text-gray-400"
                size={20}
                onClick={() => setVisible(false)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute top-3 right-4 cursor-pointer text-gray-400"
                size={20}
                onClick={() => setVisible(true)}
              />
            )}
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember-me"
                id="remember-me"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 text-gray-600 text-sm">
                Remember me
              </label>
            </div>
            <Link
              to=".forgot-password"
              className="text-blue-600 text-sm hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <button
            type="submit"
            className={`button ${loading ? "button-disabled" : "button-primary"}`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">
              Don't have an account?{" "}
              <Link to="/shop/signup" className="text-blue-600">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShopLogin;
