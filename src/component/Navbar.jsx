import React from 'react';
import { NavLink,Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo text-xl font-semibold">Logo</div>
        <div className="rightside space-x-6">
          <NavLink to="home" className="hover:text-gray-400">Home</NavLink>
          <NavLink to="about" className="hover:text-gray-400">About</NavLink>
          <NavLink to="contact" className="hover:text-gray-400">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
