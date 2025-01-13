import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo text-xl font-semibold">Logo</div>
        <div className="rightside space-x-6">
          <a href="Home" className="hover:text-gray-400">Home</a>
          <a href="about" className="hover:text-gray-400">About</a>
          <a href="contact" className="hover:text-gray-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
