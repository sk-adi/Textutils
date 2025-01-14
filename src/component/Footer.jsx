import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-semibold mb-4 md:mb-0">Your Logo</div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-6 text-sm">
          <a href="/" className="hover:text-gray-400 transition-colors">
            Home
          </a>
          <a href="/" className="hover:text-gray-400 transition-colors">
            About
          </a>
          <a href="/" className="hover:text-gray-400 transition-colors">
            Contact Us
          </a>
          <a href="/" className="hover:text-gray-400 transition-colors">
            Terms of Use
          </a>
          <a href="/" className="hover:text-gray-400 transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 mt-4">
        &copy; {new Date().getFullYear()} TextUtils. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
