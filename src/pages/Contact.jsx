import React from "react";

function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      {/* Left Section (About Developer) */}
      <div className="container mx-auto p-8 max-w-6xl bg-white rounded-xl shadow-2xl mt-12 mb-12 flex flex-col md:flex-row items-center md:items-start">
        <div className="leftpart md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            About the Developer
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Hi! I’m <strong className="font-semibold text-blue-600">Aditya Kumar</strong>, a
            passionate web developer. I specialize in building user-friendly web
            applications using modern web technologies. Feel free to reach out
            if you have any questions or suggestions about the TextUtils app or
            any of my projects!
          </p>
          <p className="text-lg text-gray-700 mb-4">
            You can check out my other projects on my
            <a
              href="https://github.com/sk-adi"
              className="text-blue-600 hover:text-blue-500 ml-1 font-semibold"
            >
              GitHub
            </a>
            .
          </p>
        </div>

        {/* Right Section (Contact Form) */}
        <div className="rightpart md:w-2/3">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Contact Us
          </h2>
          <form className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full h-12 px-4 text-lg text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email id"
              className="w-full h-12 px-4 text-lg text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              className="w-full h-32 px-4 py-2 text-lg text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
