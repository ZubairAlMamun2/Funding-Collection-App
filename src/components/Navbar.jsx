import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../provider/Authprovider";



const NavBar = () => {
    const {user,Logout}=useContext(AuthContext)
    
  console.log(user)
  return (
    <div className="navbar bg-base-200 broder-none rounded-b-lg mb-5 mt-1">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <div className="flex justify-center flex-col gap-3 font-semibold text-base">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/allcampain">All Campaign</NavLink>
            <NavLink to="/addCampaign">Add New Campaign</NavLink>
            <NavLink to="/mycampain">My Campaign</NavLink>
            <NavLink to="/mydonation">My Donations</NavLink>
            </div>
          </ul>
        </div>
        <a className="btn -ml-5 md:-ml-0  btn-ghost text-xl">
        Crowdcube
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <div className="flex  gap-3 items-center font-semibold text-base">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/allcampain">All Campaign</NavLink>
            <NavLink to="/addCampaign">Add New Campaign</NavLink>
            <NavLink to="/mycampain">My Campaign</NavLink>
            <NavLink to="/mydonation">My Donations</NavLink>
            </div>
        </ul>
      </div>
      <div className="navbar-end">
        {
          user?.email &&
          <div> <img title={user.displayName} className="w-10 h-10 border rounded-full" src={user.photoURL} /></div>
        }
        {user?<button onClick={Logout} className='btn btn-primary text-base-100 px-3 py-1'>Log Out</button>:<div ><Link to="/auth/login" className='btn btn-primary text-base-100 px-3 mr-2 py-1 '>Login</Link><Link to="/auth/register" className='btn btn-primary text-base-100 px-3 py-1 '>Register</Link></div>}
      </div>
    </div>
  );
};

export default NavBar;
