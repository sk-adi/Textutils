import React from 'react';

function InputFile() {
  return (
    <div className="flex-grow container mx-auto p-8 max-w-4xl bg-white rounded-lg shadow-lg mb-6">
      <div className="input mb-8">
        <input
          type="text"
          placeholder="Enter Text Here"
          className="w-full h-48 p-6 text-xl text-gray-800 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
        />
      </div>
      <div className="btn flex flex-wrap justify-between gap-6">
        <button className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400">UPPERCASE</button>
        <button className="bg-green-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400">lowercase</button>
        <button className="bg-yellow-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-yellow-500 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400">Trim</button>
        <button className="bg-purple-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-purple-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400">Copy Text</button>
        <button className="bg-red-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400">Clear Text</button>
      </div>
    </div>
  );
}

export default InputFile;
