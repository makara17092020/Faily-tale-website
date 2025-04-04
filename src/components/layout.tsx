import logo from "../assets/image.png";
import mornster from "../assets/mornster.png";
import hero from "../assets/herosectionhomepage.png"
import { useState } from "react";

const Layout = () => {
  const [open, setOpen] = useState(false);
    return (
      <div className="grid grid-cols-1 gap-4">
        <nav className="fixed w-full px-10 pt-2 flex justify-between md:justify-between items-center bg-white shadow pb-1  text-black">
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

        <div className="mt-18 w-full h-auto bg-green-200  flex items-center justify-center">
            <div className="w-full h-[500px]">
              <img className="h-full w-full" src={hero} alt="" />
            </div>
        </div>

        <footer className="bg-[#50C878] text-white text-center py-5 flex flex-col md:flex-row justify-between flex-wrap gap-10 md:gap-0 px-5">
          <div className="flex flex-col md:flex-row justify-between flex-wrap items-center md:items-start w-full md:w-auto">
            <div className="px-10 text-center md:text-left">
              <img className="w-50" src={logo} alt="" />
              <p className="font-medium text-black mt-10">
                @ 2025 Elfenland Books <br />
                All right reserved
              </p>
            </div>
            <div>
              <img className="w-30 mt-50 ml-5" src={mornster} alt="" />
            </div>
          </div>

          <div className="text-center md:text-left md:mt-5">
            <ul className="flex justify-center md:justify-start flex-wrap">
              <li className=" text-3xl font-bold uppercase text-black">Categories</li>
            </ul>
            <div className="mt-8 text-xl text-black">
              <a href=""><p className="mt-3">Popular</p></a>
              <a href=""><p className="mt-3">New & Coming</p></a>
              <a href=""><p className="mt-3">Series</p></a>
              <a href=""><p className="mt-3">Fairy Tales</p></a>
            </div>
          </div>

          <div className="text-center md:text-left  md:mt-5">
            <ul className="flex justify-center md:justify-start flex-wrap">
              <li className=" text-3xl font-bold uppercase text-black">About Us</li>
            </ul>
            <div className="mt-8 text-xl text-black">
              <a href=""><p className="mt-3">Our Story</p></a>
              <a href=""><p className="mt-3">Instagram</p></a>
              <a href=""><p className="mt-3">Facebook</p></a>
            </div>
          </div>

          <div className="text-center md:text-left md:mt-5">
            <ul className="flex justify-center md:justify-start flex-wrap">
              <li className=" text-3xl text-black font-bold uppercase">Resources</li>
            </ul>
            <div className="mt-8 text-xl text-black">
              <a href=""><p className="mt-3">Reviews</p></a>
              <a href=""><p className="mt-3">Contact Us</p></a>
              <a href=""><p className="mt-3">Privacy Policy</p></a>
              <a href=""><p className="mt-3">Popular</p></a>
            </div>
          </div>
        </footer>
      </div>
    );
  };
  
  export default Layout;
