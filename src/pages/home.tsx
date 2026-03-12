import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const titles = ["Software Engineer", "AI/ML Engineer", "Game Developer"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const portfolios = [
    "Full Stack Web Development",
    "Software Engineering",
    "AI/ML Engineering",
    "Game Development",
  ];

  const languages = ["C++", "Python", "TypeScript", "JavaScript"];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center relative overflow-hidden">
      
      {/* Center Content */}
      <div className="text-center z-10">
        <h1 className="text-6xl font-extrabold text-cyan-400 drop-shadow-[0_0_15px_rgb(0,255,255)]">
          Daeldevs
        </h1>

        <p className="text-2xl font-semibold text-fuchsia-500 drop-shadow-[0_0_10px_rgb(255,0,255)] mt-2 transition-all duration-500">
          {titles[currentTitleIndex]}
        </p>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex justify-between mt-20 px-20 z-10">
        
        {/* LEFT SIDE - Portfolios */}
        <div>
          <h2 className="text-xl mb-4 text-cyan-400 tracking-widest uppercase">
            Portfolios
          </h2>

          <div className="flex flex-col gap-4">
            {portfolios.map((item, index) => (
              <Link
                key={index}
                to="/"
                className="group relative px-6 py-3 border border-cyan-400 
                           text-cyan-400 font-semibold uppercase tracking-wider
                           transition-all duration-300
                           hover:bg-cyan-400 hover:text-black
                           hover:shadow-[0_0_20px_rgb(0,255,255)]
                           before:absolute before:inset-0 before:border before:border-cyan-400
                           before:translate-x-1 before:translate-y-1
                           before:-z-10 before:opacity-30
                           hover:before:translate-x-0 hover:before:translate-y-0"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - Languages */}
        <div className="text-right">
          <h2 className="text-xl mb-4 text-fuchsia-500 tracking-widest uppercase">
            Languages
          </h2>

          <div className="flex flex-col gap-3">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="text-lg text-gray-300 hover:text-fuchsia-400 
                           transition duration-300"
              >
                {lang}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Optional subtle background glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full top-20 left-10"></div>
      <div className="absolute w-[500px] h-[500px] bg-fuchsia-500/10 blur-[120px] rounded-full bottom-20 right-10"></div>

    </div>
  );
}
