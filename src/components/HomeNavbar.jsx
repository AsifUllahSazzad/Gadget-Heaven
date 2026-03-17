import { BsCart3 } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const HomeNavbar = () => {

  const navClass = ({ isActive }) =>
  isActive
    ? "bg-gray-700 p-2 px-3 rounded-lg text-white"
    : 'text-white relative inline-block text-black after:content-[] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full';

     const links = <>
            <NavLink to="/" className={navClass}><li>Home</li></NavLink>
            <NavLink to='/statistics' className={navClass}><li>Statistics</li></NavLink>
            <NavLink to='/dashboard' className={navClass}><li>Dashboard</li></NavLink>
    </>


  return (
      <div className="navbar text-white">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost text-xl">Gadget Heaven</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-8 items-center">
            {links}
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <NavLink to='/dashboard#cart' className="btn btn-circle bg-white"><BsCart3/></NavLink>

          <NavLink to='/dashboard#wishlist' className="btn btn-circle bg-white"><FaRegHeart /></NavLink>
        </div>
      </div>
  );
};

export default HomeNavbar;