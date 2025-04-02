import { useState } from "react";
import logo from "../assets/Logonavbar.png";
const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-10 pt-2 flex justify-between md:justify-between items-center relative shadow pb-1 bg-white-800 text-black">
      <div className="hidden font-bold md:flex space-x-6">
        <a className="hover:text-bluegreen hover:underline" href="/">
          Home
        </a>
        <a className="hover:text-bluegreen hover:underline" href="/Story">
          Story
        </a>
        <a className="hover:text-bluegreen hover:underline" href="/Favorite">
          Favorite
        </a>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="md:hidden focus:outline-none text-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <img className="w-15 " src={logo} alt="Logo" />

      <div className="hidden font-bold md:flex space-x-4">
        <a
          className="rounded-xl p-3 hover:underline hover:bg-white hover:text-black"
          href="/Register"
        >
          Register
        </a>
        <a
          className="rounded-xl p-3 bg-[#983FFD]  hover:text-bluegreen"
          href="/Login"
        >
          Login
        </a>
      </div>

      {open && (
        <div className="absolute top-full left-0 w-full bg-white-800 text-black lg:hidden flex flex-col items-left py-5 space-y-4 px-7">
          <a
            className="hover:text-bluegreen font-bold hover:underline"
            href="/"
          >
            Home
          </a>
          <a
            className="hover:text-bluegreen font-bold hover:underline"
            href="/Story"
          >
            Story
          </a>
          <a
            className="hover:text-bluegreen font-bold hover:underline"
            href="/Favorites"
          >
            Favorite
          </a>
          <a
            className="rounded-xl font-bold hover:bg-white hover:text-black"
            href="/talk"
          >
            Register
          </a>
          <a
            className="rounded-xl p-3 bg-[#983FFD] w-20 font-bold hover:text-bluegreen"
            href="/started"
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
