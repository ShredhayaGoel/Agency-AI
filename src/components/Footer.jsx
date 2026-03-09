import React from "react";
import assets from "../assets/assets";

const Footer = ({ theme }) => {
  return (
    <div className="bg-slate-50 dark:bg-gray-900 pt-30 sm:pt-10 mt-20 sm:mt-40 px-40 sm:px-10 lg:px-24 xl:px-40">
      {/* footer top */}
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        <div className="space-y-5 text-sm text-sm text-gray-700 dark:text-white/80">
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            alt="Logo"
          />
          <p className="max-w-md">
            From strategy to execution, we are your trusted partner in
            navigating the digital landscape and achieving your business goals.
          </p>
          <ul className="flex gap-8">
            <li>
              <a className="hover:text-blue-300" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-blue-300" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-blue-300" href="#work">
                Our Work
              </a>
            </li>
            <li>
              <a className="hover:text-blue-300" href="#contact">
                ContactUS
              </a>
            </li>
          </ul>
        </div>
        <div className="text-gray-600 dark:text-gray-400">
          <h3 className="font-semibold"> Subscribe to our Newsletter</h3>

          <p className=" text-sm mt-2 mb-6 ">
            Stay updated with our latest news and updates.
          </p>

          <div className="flex gap-2 text-sm">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-3 text-sm outline-none rounded drk:-gray-200 bg-transparent
    border border-gray-300 dark:border-gray-500"
            />

            <button className="bg-blue-500 text-white rounded px-6">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 dark:border-gray-600 my-6 "></hr>

      {/* footer bottom */}
      <div className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap">
        <p>Copyright 2026 @ Agency.io - All Right Reserved </p>

        <div className="  flex items-center justify-between gap-4">
          <img src={assets.facebook_icon} alt="" />

          <img src={assets.twitter_icon} alt="" />

          <img src={assets.instagram_icon} alt="" />

          <img src={assets.linkedin_icon} alt="" />
        </div>
      </div> 
    </div>
  );
};

export default Footer;
