import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

export default function Login() {
  const { authUser, setAuthUser } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/user/login", data, {
        withCredentials: true,
      });

      toast.success("Login successful!");
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      setAuthUser(response.data);
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.error || "Login failed");
    }
    setIsLoading(false);
  };

  return (
    <div className="flex h-auto mt-20 justify-center ">
      <div className="h-[100%]  w-full max-w-sm bg-white shadow-lg rounded-2xl p-6">
        {/* Logo & Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back!</h2>
          <p className="text-gray-500">Sign in to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "Password is required" })}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 text-white font-medium rounded-lg bg-purple-600 hover:bg-purple-500 transition-all"
          >
            {isLoading ? "Logging in..." : "Sign In"}
          </button>
        </form>

        {/* Links */}
        <div className="mt-4 text-center text-sm">
          <Link to="#" className="text-purple-600 hover:underline">
            Forgot password?
          </Link>
        </div>
        <div className="mt-2 text-center text-sm">
          New here?{" "}
          <Link to="/signup" className="text-pink-600 hover:underline">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
