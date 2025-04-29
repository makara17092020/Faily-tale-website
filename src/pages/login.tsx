import { useState, ChangeEvent, FormEvent } from "react";
import { User, Lock } from "lucide-react";
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    identifier: "", // This can be either username or email for Strapi
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://62.72.46.248:1337/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error?.message || "Login failed");
      }

      console.log("Login successful", data);
      alert("Login successful!");
      // You can store token: data.jwt or user: data.user
    } catch (error) {
      if (error instanceof Error) {
        alert(`Login failed: ${error.message}`);
      } else {
        alert("Login failed: Unknown error");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl">
        <h1 className="text-2xl sm:text-3xl text-[#50C878] font-bold text-center mb-4">
          Log In
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Identifier */}
          <div className="flex items-center gap-2 justify-center">
            <User className="text-[#50C878]" />
            <div className="border border-[#FFD700] p-2 rounded-lg w-full">
              <input
                type="text"
                name="identifier"
                placeholder="Email or Username"
                required
                value={formData.identifier}
                onChange={handleChange}
                className="w-full outline-none p-1 font-medium text-[#50C878]"
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-sm text-right sm:text-right">
            <a href="#" className="font-medium text-[#50C878]">
              Forgot Password?
            </a>
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
            <a href="#" className="block text-sm font-medium text-[#FFD700]">
              You have on Account
            </a>
            <a href="#" className="block text-sm font-medium text-[#50C878]">
              Register
            </a>
          </div>

          <div className="text-center mt-4">
            <a href="#" className="block text-sm font-medium text-[#FFD700]">
              Forget Password
            </a>
            <a href="#" className="block text-sm font-medium text-[#50C878]">
              Reset Password
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
