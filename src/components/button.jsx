import React, { useState } from "react";

const Button = () => {
  const [bgColor, setBgColor] = useState("white"); // default bg

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition duration-300 `} style={{ backgroundColor: bgColor }}>
      <h1 className="text-2xl font-bold mb-6"> Change background color</h1>

      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
          onClick={() => setBgColor("pink")}
        >
          Pink
        </button>

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setBgColor("blue")}
        >
          Blue
        </button>

        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => setBgColor("green")}
        >
           Green
        </button>
      </div>
    </div>
  );
};

export default Button;
