// import React from 'react';
import logo from "../assets/image.png";
import mornster from "../assets/mornster.png";
const Footer = () => {
  return (
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

  );
};

export default Footer;
