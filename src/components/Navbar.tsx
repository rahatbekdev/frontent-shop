import { FC, useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar: FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("Warning");
  }

  const { setShowSearch, getCartCount } = context;

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} alt="" className="w-36" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1 uppercase">
          <p>Home</p>
          <hr className="w-1/2 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1 uppercase"
        >
          <p>Collection</p>
          <hr className="w-1/2 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col items-center gap-1 uppercase"
        >
          <p>About</p>
          <hr className="w-1/2 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 uppercase"
        >
          <p>Contact</p>
          <hr className="w-1/2 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt=""
          className="w-5 cursor-pointer"
        />

        <div className="group relative">
          <Link to="/login">
            <img
              src={assets.profile_icon}
              alt=""
              className="w-5 cursor-pointer"
            />
          </Link>

          <div className="group-hover:block hidden absolute dropdown-menu right-0 top-4 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt=""
            className="w-5 min-w-5 hover:scale-110"
          />
          <p
            className="absolute right-[-7px] bottom-[-7px] w-4 text-center leading-4 bg-black
          text-white aspect-square rounded-full text-[8px]"
          >
            {getCartCount()}
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          alt=""
          onClick={() => setVisible(true)}
          className="cursor-pointer w-5 sm:hidden"
        />
      </div>

      {/* Sidebar menu for sn screen */}

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all
        ${visible ? "w-full" : "w-0"}`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer hover:text-yellow-300"
          >
            <img
              src={assets.dropdown_icon}
              alt=""
              className="h-4 rotate-180 cursor-pointer"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className="py-2 pl-6 border"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/collection"
            className="py-2 pl-6 border"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className="py-2 pl-6 border"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className="py-2 pl-6 border"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
