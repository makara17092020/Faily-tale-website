import { useState } from "react";
import { User, Lock } from "lucide-react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.repeatPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Form Submitted", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl">
        <h1 className="text-2xl sm:text-3xl text-[#50C878] font-bold text-center mb-4">
          Log In 
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div className="flex items-center gap-2 justify-center">
            <User className="text-[#50C878]" />
            <div className="border border-[#FFD700] p-2 rounded-lg w-full">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                value={formData.username}
                onChange={handleChange}
                className="w-full outline-none p-1 font-medium text-[#50C878]"
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-sm text-right sm:text-right">
            <a href="#" className="font-medium  text-[#50C878]">Forgot Password?</a>
          </div>

          {/* Password */}
          <div className="flex items-center gap-2 justify-center">
            <Lock className="text-[#50C878]" />
            <div className="border border-[#FFD700] p-2 rounded-lg w-full">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full outline-none p-1 font-medium text-[#50C878]"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full sm:w-1/2 bg-[#50C878] text-white p-2 rounded-lg cursor-pointer hover:bg-blue-700 flex items-center gap-2 justify-center mx-auto"
          >
            Log In
          </button>

          <div className="text-center mt-4">
            <a href="#" className="block text-sm font-medium text-[#FFD700]">You have on Account</a>
            <a href="#" className="block text-sm font-medium text-[#50C878]">Register</a>
          </div>

          <div className="text-center mt-4">
            <a href="#" className="block text-sm font-medium text-[#FFD700]">Forget Password</a>
            <a href="#" className="block text-sm font-medium text-[#50C878]">Reset Password</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
