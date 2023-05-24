import React from "react";
import Logo from "../../application/assets/Vector.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="flex justify-around p-3  border rounded-b-xl border-gray-300 shadow-md">
      <div className="ml-10">
        <img src={Logo} alt="" className="w-28" />
      </div>
      {/* si il est co montrer ces routes sinon en pas montrer */}
      <div className=" flex justify-center items-center gap-10 font-inter  text-slate-800">
        <Link to="/task" className="hover:bg-slate-100 p-2 rounded-xl hover:animate-pulse font-semibold">tasks</Link>
        <Link to="/dashboard" className="hover:bg-slate-100 p-2 rounded-xl hover:animate-pulse font-semibold">reports</Link>
        <Link to="/profile" className="hover:bg-slate-100 p-2 rounded-xl hover:animate-pulse font-semibold">profile</Link>
      </div>
      <div className="mr-10">
        <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Register
        </button>
      </div>
    </header>
  );
};

export default Navbar;
