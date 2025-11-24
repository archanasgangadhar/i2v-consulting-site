import { useState } from "react";

export default function TriangleBalance() {
  const [product, setProduct] = useState(7);
  const [people, setPeople] = useState(3);
  const [process, setProcess] = useState(7);

  // Movement factor (adjust for sensitivity)
  const factor = 8;

  // Calculate X (left-right) and Y (up-down) movement
  const x = (process - people) * factor;
  const y = -product * factor;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      
      {/* TRIANGLE AREA */}
     <div className="relative w-80 h-80 flex items-center justify-center">

        {/* Background Triangle */}
        <div
          className="absolute w-0 h-0"
          style={{
            borderLeft: "160px solid transparent",
            borderRight: "160px solid transparent",
            borderBottom: "280px solid #fde4e4",
            filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.15))",
          }}
        ></div>
        {/* Labels */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-lg font-bold text-[#D32F2F]">
          Product
        </div>

        <div className="absolute bottom-1 left-1 text-lg font-bold text-[#D32F2F]">
          People
        </div>

        <div className="absolute bottom-2 right-1 text-lg font-bold text-[#D32F2F]">
          Process
        </div>

        {/* I2V LOGO with animation */}
        <img
          src="/assets/images/logo2.jpg"
          alt="I2V Logo"
          className="w-10 h-10 absolute transition-all duration-700 ease-out"
          style={{
            transform: `translate(${x}px, ${y}px)`
          }}
        />
      </div>

      {/* INPUT CONTROLS */}
      <div className="mt-10 grid grid-cols-1 gap-2 text-center font-[Candara]">
        
        <label className="text-lg font-semibold">
          Product: {product}
          <input
            type="range"
            min="0"
            max="10"
            value={product}
            onChange={(e) => setProduct(Number(e.target.value))}
            className="w-44 ml-4"
          />
        </label>

        <label className="text-lg font-semibold">
          People: {people}
          <input
            type="range"
            min="0"
            max="10"
            value={people}
            onChange={(e) => setPeople(Number(e.target.value))}
            className="w-44 ml-4"
          />
        </label>

        <label className="text-lg font-semibold">
          Process: {process}
          <input
            type="range"
            min="0"
            max="10"
            value={process}
            onChange={(e) => setProcess(Number(e.target.value))}
            className="w-44 ml-4"
          />
        </label>

      </div>
    </div>
  );
}
