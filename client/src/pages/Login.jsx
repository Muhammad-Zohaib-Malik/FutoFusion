import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { login } from "../../store/slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, loginData); 
      const data = response.data;

      if (data.success) {
        setLoginData({ email: "", password: "" });
        toast.success(data.message);
        
        
        dispatch(login(data));
        
        navigate(`/${data.role}/profile`); 
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] mt-8">
      <div className="w-[80vw] px-6 py-8 border border-gray-500 rounded-3xl sm:w-[30vw] md:w-[50vw] lg:w-[30vw] xl:w-[35vw] shadow-lg">
        <h1 className="mb-6 text-3xl font-semibold tracking-widest text-center text-gray-400">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                className="w-full px-4 py-2 tracking-wide text-white placeholder-gray-400 bg-gray-800 border-none rounded-lg focus:ring-2"
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                required
                autoComplete="off"
                value={loginData.email} // Corrected to use loginData
                onChange={handleChange}
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium">
                Password
              </label>
              <input
                className="w-full px-4 py-2 tracking-wide text-white bg-gray-800 border-none rounded-lg focus:ring-2 focus:ring-blue-500"
                type="password"
                name="password"
                id="password"
                placeholder="**********"
                required
                autoComplete="off"
                value={loginData.password} // Corrected to use loginData
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 mt-6 font-medium tracking-wide transition-all duration-200 ease-in-out bg-gray-800 rounded-lg hover:bg-gray-950"
          >
            Login
          </button>

          {/* Signup Redirect Link */}
          <Link to={"/signup"} className="text-[13px] mt-3 flex justify-end text-gray-500">
            Signup
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
