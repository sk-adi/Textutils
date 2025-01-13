import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="leftpart text-xl font-semibold">Logo</div>
        <div className="rightpart space-x-6">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/" className="hover:text-gray-400">About</a>
          <a href="/" className="hover:text-gray-400">Contact Us</a>
          <a href="/" className="hover:text-gray-400">Terms of Use</a>
          <a href="/" className="hover:text-gray-400">Privacy Policy</a>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 mt-4">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
