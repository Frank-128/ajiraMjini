import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

function Navbar() {
  const [search,setSearch]=useState(false);

  return (
    <div className="z-20">
      <nav className="bg-blue-900  px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/home" className="flex items-center">
            <img
              src="logo.png"
              className="mr-3 h-6 sm:h-9 rounded-full"
              alt="Ajira mjini"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Ajira mjini
            </span>
          </Link>
          <div
            className="hidden justify-between items-center relative right-96 w-full mr-48 md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-blue-900  dark:border-gray-700">
              <li className="bg-amber-300  p-4 rounded-3xl">
                <Link
                  to="/home"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="bg-amber-300  p-4 rounded-3xl">
                <Link
                  to="/login"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  My applications
                </Link>
              </li>
              <li onClick={()=>setSearch(!search)} className="bg-amber-300 cursor-pointer p-4 rounded-3xl">
                
                  Search
                
              </li>
              <li className="bg-amber-300  p-4 rounded-3xl">
                <Link
                  to="/home"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="absolute right-16 m-4 flex-col flex flex-wrap justify-between items-center mx-auto">
            <span className="text-2xl text-yellow-200 bg-green-600 rounded-xl p-1">John Doe</span>
            
              <br/>
             <span className="text-2xl cursor-pointer">Logout<FontAwesomeIcon icon="fa-sharp fa-solid fa-right-from-bracket" /></span> 
            
          </div>
        </div>
      </nav>
      {search &&
      <Search/>}
    </div>
  );
}

export default Navbar;
