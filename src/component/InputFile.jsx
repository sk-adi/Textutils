import React, { useState } from "react";

function InputFile() {
  const [text, Settext] = useState("");

  const handleonchange = (e) => {
    Settext(e.target.value);
  };

  const handleUpperCase = () => {
    Settext(text.toUpperCase());
  };

  const handleLowerCase = () => {
    Settext(text.toLowerCase());
  };

  const handleTrim = () => {
    Settext(text.trim());
  };

  const handleCopy = () => {
    const inputArea = document.getElementById("inputArea");
    inputArea.select();
    navigator.clipboard.writeText(inputArea.value);
  };

  const handleClear = () => {
    Settext("");
  };

  const WordCount = text.trim().split(/\s+/).length;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6">
      {/* Main Container */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 space-y-6">
        {/* Input Area */}
        <div>
          <textarea
            id="inputArea"
            value={text}
            onChange={handleonchange}
            placeholder="Enter your text here..."
            className="w-full h-48 p-4 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
          ></textarea>
        </div>

        {/* Buttons Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <button
            onClick={handleUpperCase}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-500 transition focus:ring-2 focus:ring-blue-400"
          >
            UPPERCASE
          </button>
          <button
            onClick={handleLowerCase}
            className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-500 transition focus:ring-2 focus:ring-green-400"
          >
            lowercase
          </button>
          <button
            onClick={handleTrim}
            className="bg-yellow-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500 transition focus:ring-2 focus:ring-yellow-400"
          >
            Trim
          </button>
          <button
            onClick={handleCopy}
            className="bg-purple-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-purple-500 transition focus:ring-2 focus:ring-purple-400"
          >
            Copy Text
          </button>
          <button
            onClick={handleClear}
            className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-500 transition focus:ring-2 focus:ring-red-400"
          >
            Clear Text
          </button>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-between items-center border-t pt-4 text-gray-700">
          <div className="space-y-1">
            <p>
              <strong>Characters:</strong> {text.length}
            </p>
            <p>
              <strong>Words:</strong>{" "}
              {text.trim() === "" ? 0 : WordCount}
            </p>
          </div>
          <div className="space-y-1">
            <p>
              <strong>Reading Time:</strong> {Math.ceil(WordCount / 200)}{" "}
              minutes
            </p>
            <p>
              <strong>Speaking Time:</strong> {Math.ceil(WordCount / 180)}{" "}
              minutes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputFile;
