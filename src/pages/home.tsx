import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const titles = ["game developer", "software developer"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  // Rotate titles every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      {/* Main title */}
      <h1 className="text-6xl font-extrabold text-blue-500 drop-shadow-[0_0_10px_rgb(0,191,255)]">
        Daeldevs
      </h1>

      {/* Rotating subtitle */}
      <p className="text-2xl font-semibold text-green-500 drop-shadow-[0_0_8px_rgb(0,255,0)] mt-2 transition-all duration-500">
        {titles[currentTitleIndex]}
      </p>

      {/* Optional card */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center mt-10">
        <h2 className="text-2xl font-bold text-gray-800">Tailwind Card</h2>
        <p className="text-gray-600 mt-3">
          This is a simple card layout built with Tailwind CSS.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Learn More
        </button>
      </div>
    </div>
  );
}
