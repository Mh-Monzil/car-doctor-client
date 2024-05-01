import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg';
import { RiShoppingBagLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const navLinks = <>
    <Link to="/" className="font-semibold text-base px-4">Home</Link>
    <Link to="/about" className="font-semibold text-base px-4">About</Link>
    <Link to="/services" className="font-semibold text-base px-4">Services</Link>
    <Link to="/blog" className="font-semibold text-base px-4">Blog</Link>
    <Link to="/contact" className="font-semibold text-base px-4">Contact</Link>
  </>;

  return (
    <div className="navbar mt-4 mb-8">
      <div className="navbar-start ">
        <div className="dropdown ">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="">
            <img className="w-16" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {navLinks}
        </ul>
      </div>
      <div className="navbar-end space-x-5">
      <RiShoppingBagLine className="text-2xl" />
      <IoIosSearch className="text-2xl" />
        <a className="border border-primary px-5 py-3 rounded-md font-semibold text-lg text-primary">Appointment</a>
      </div>
    </div>
  );
};

export default Navbar;
