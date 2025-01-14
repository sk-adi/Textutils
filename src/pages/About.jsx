import React from "react";

function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="container mx-auto p-8 max-w-4xl bg-white rounded-lg shadow-lg mt-12 mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About <span className="text-blue-600">TextUtils</span>
        </h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          TextUtils is a powerful and easy-to-use web application that helps you
          manipulate text in various ways. You can:
        </p>
        <ul className="list-disc pl-8 mb-8 space-y-2">
          <li className="text-lg text-gray-700">
            Convert text to <span className="font-semibold">UPPERCASE</span> or <span className="font-semibold">lowercase</span>.
          </li>
          <li className="text-lg text-gray-700">Trim extra spaces from the text.</li>
          <li className="text-lg text-gray-700">Copy text to your clipboard for easy sharing.</li>
        </ul>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Developer Information</h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          TextUtils is built by <strong className="font-bold text-blue-600">Aditya Kumar</strong>, a passionate
          web developer. This project is part of my ongoing learning journey in
          web development. You can explore more of my work on my GitHub profile:
        </p>
        <div className="text-center">
          <a
            href="https://github.com/sk-adi"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-blue-500 hover:shadow-lg transition-all"
          >
            Visit my GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
