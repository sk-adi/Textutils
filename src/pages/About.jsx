import React from 'react';

function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="container mx-auto p-8 max-w-4xl bg-white rounded-lg shadow-lg mt-8 mb-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">About TextUtils</h1>
        <p className="text-lg text-gray-700 mb-4">
          TextUtils is a powerful and easy-to-use web application that helps you manipulate text in various ways. You can:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li className="text-lg text-gray-700">Convert text to UPPERCASE or lowercase.</li>
          <li className="text-lg text-gray-700">Trim extra spaces from the text.</li>
          <li className="text-lg text-gray-700">Copy text to your clipboard for easy sharing.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Developer Information</h2>
        <p className="text-lg text-gray-700 mb-4">
          TextUtils is built by <strong className="font-semibold">Aditya Kumar</strong>, a passionate web developer. This project is part of my ongoing learning journey in web development. You can explore more of my work on my GitHub profile:
        </p>
        <a href="https://github.com/sk-adi" className="text-blue-600 hover:text-blue-400 text-lg font-semibold">
          Visit my GitHub Profile
        </a>
      </div>
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Aditya Kumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default About;
