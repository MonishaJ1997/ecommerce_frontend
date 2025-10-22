import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#f47c26] text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">My store</h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-200 transition">
          Home
        </Link>
        <Link to="/products" className="hover:text-gray-200 transition">
          Products
        </Link>
        <Link to="/checkout" className="hover:text-gray-200 transition">
          Checkout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
