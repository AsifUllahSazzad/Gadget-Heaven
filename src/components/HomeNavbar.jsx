import { BsCart3 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { AssetContext } from "../layouts/MainLayouts";

const HomeNavbar = () => {
     const links = <>
            <NavLink to="/" className={'text-white'}><li>Home</li></NavLink>
            <NavLink to='/statistics' className={'text-white'}><li>Statistics</li></NavLink>
            <NavLink to='/dashboard' className={'text-white'}><li>Dashboard</li></NavLink>
    </>

    const {cartLength, wishlistLength} = useContext(AssetContext);

    console.log(cartLength, wishlistLength)

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
          <NavLink to='/' className="btn btn-ghost text-xl">Gadget Heaven</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-8">
            {links}
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <NavLink to='/dashboard#cart' className="btn btn-circle bg-white"><BsCart3/>{cartLength}</NavLink>

          <NavLink to='/dashboard#wishlist' className="btn btn-circle bg-white"><FaRegHeart /></NavLink>
        </div>
      </div>
  );
};

export default HomeNavbar;