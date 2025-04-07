import { useState } from "react";
import { User, Mail, Lock } from "lucide-react";

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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-200 -mt-30">
        <h1 className="text-3xl text-[#50C878] font-bold text-center mb-4">
          Register 
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div className="flex items-center gap-2 justify-center">
            <User className="text-[#50C878]" />
            <div className="border border-[#FFD700] p-2 rounded-lg w-100">
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

          {/* Email */}
          <div className="flex items-center gap-2 justify-center">
            <Mail className="text-[#50C878]" />
            <div className="border border-[#FFD700] p-2 rounded-lg w-100">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full outline-none p-1 font-medium text-[#50C878]"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex items-center gap-2 justify-center">
            <Lock className="text-[#50C878]" />
            <div className="border border-[#FFD700] p-2 rounded-lg w-100">
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

          {/* Forgot Password */}
          <div className="ml-80 text-sm  sm:text-center">
            <a href="#" className="font-medium text-[#50C878]">Forgot Password?</a>
          </div>

          {/* Repeat Password */}
          <div className="flex items-center gap-2 justify-center">
            <Lock className="text-[#50C878]" />
            <div className="border border-[#FFD700] p-2 rounded-lg w-100">
              <input
                type="password"
                name="repeatPassword"
                placeholder="Repeat Password"
                required
                value={formData.repeatPassword}
                onChange={handleChange}
                className="w-full outline-none p-1 font-medium text-[#50C878]"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-50 bg-[#50C878] text-white p-2 rounded-lg cursor-pointer hover:bg-blue-700 flex items-center gap-2 justify-center mx-auto"
          >
            Register
          </button>
          <div className="text-center mt-4 ">
            <a href="#" className="block text-sm font-medium text-[#FFD700] ">Already have an Account?</a>
            <a href="#" className="block text-sm font-medium text-[#50C878]">Log In</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
