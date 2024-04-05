import {
  CiSearch,
  CiHeart,
  CiUser,
  CiShoppingCart,
  CiMenuBurger,
  CiHeadphones,
} from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi2";
import Link from "next/link";
import Select from "../select";

export default function Nav() {
  return (
    <div>
      {/* Top Navigation */}
      <nav className="hidden sm:flex bg-gray-800 mx-auto px-4 py-2 flex justify-between items-center text-white text-sm">
        <span className="hidden sm:block">Welcome to Needus & Get the best product</span>
        <div className="flex items-center space-x-1 sm:space-x-4">
          <Select label={"Language"} options={["ENG", "ESP", "DEU"]} />
          <Select label={"Currency"} options={["USD", "EUR", "GBP", "JPY"]} />
        </div>
      </nav>

      {/* Mid Navigation */}
      <nav className="flex px-4 py-4 sm:py-6 justify-between items-center">
        <button className="flex sm:hidden text-2xl font-bold bg-red-600 text-white p-2">
          <CiMenuBurger />
        </button>

        <Link className="font-bold text-xl text-gray-800" href="/">
          Needus<span className="text-red-500">.</span>
        </Link>

        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Search */}
          <div className="hidden sm:flex border border-gray-300 items-center flex-grow pl-3 p-0.5">
            <input className="w-full" type="text" placeholder="Search Products" />
            <button className="bg-gray-800 text-white p-2">
              <CiSearch />
            </button>
          </div>

          {/* Categories */}
          <div className="hidden sm:flex border border-gray-300 items-center flex-grow px-3 py-0.5">
            <select className="w-full appearance-none" aria-label="All Categories">
              <option value="">All Categories</option>
            </select>
            <button className="p-2">
              <HiChevronDown />
            </button>

            <div className="flex items-center pl-8">
              <Link href="/login">
                <div className="hover:text-gray-400 mr-2">Login</div>
              </Link>
              <Link href="/signup">
                <div className="hover:text-gray-400 border-l border-gray-300 pl-2">Signup</div>
              </Link>
            </div>
          </div>

          {/* Mobile Icons */}
          <CiSearch className="flex sm:hidden text-2xl font-bold" />
          <CiUser className="flex sm:hidden text-2xl font-bold" />

          {/* Web & Mobile Icons */}
          <CiHeart className="text-2xl font-bold" />
          <button className="relative text-gray-800 hover:text-gray-600">
            <CiShoppingCart className="text-2xl font-bold" />
            <span className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2 inline-flex px-2 py-1 text-xs font-bold text-red-100 bg-red-600 rounded-full">
              6
            </span>
          </button>
        </div>
      </nav>

      {/* Bottom Navigation */}
      <nav className="hidden sm:flex text-white flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center justify-center bg-red-600 w-1/4 min-h-16">
          <div className="flex items-center space-x-4">
            <CiMenuBurger />
            <Select
              label={"All Categories"}
              options={["All Categories", "ESP", "DEU"]}
              className="w-36"
            />
          </div>
        </div>

        {/* Mid side */}
        <div className="bg-gray-800 flex justify-center space-x-4 w-2/4 min-h-16">
          {["Home", "About", "Product", "Pages", "Contact"].map((link, index) => (
            <Link
              href="#"
              className="hover:text-red-600 py-4 px-2 flex items-center min-h-16"
              key={index}
            >
              <span>{link}</span>
              <HiChevronDown className="ml-1" />
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex bg-gray-800 w-1/4 items-center ml-0.5 min-h-16">
          <CiHeadphones className="text-3xl text-red-600 m-4" />
          <div className="flex flex-col">
            <p>Contact us 24/7</p>
            <p className="ml-2 font-bold">+12012987481</p>
          </div>
        </div>
      </nav>
    </div>
  );
}
