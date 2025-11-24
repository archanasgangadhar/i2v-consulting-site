import React, { useState, useEffect } from "react";
import logo from "/assets/images/logo-small.jpg";
import triangleBG from "/assets/images/triangle_bg1.png";

/* ----------------------------
   CUSTOM SLIDER CSS (iOS SAFE)
----------------------------- */
const sliderStyle = `
  input[type=range] {
    -webkit-appearance: none;
    width: 90px;
    height: 4px;
    background: #0c0c0cff; /* slider line color */
    border-radius: 4px;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  input[type=range]:focus {
    outline: none;
  }

  /* Thumb styling — cross-browser */
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 18px;
    width: 18px;
    background: #800000;       /* maroon thumb */
    border-radius: 50%;
    border: 2px solid black;   /* black border */
    cursor: pointer;
  }
  input[type=range]::-moz-range-thumb {
    height: 18px;
    width: 18px;
    background: #800000;
    border-radius: 50%;
    border: 2px solid black;
    cursor: pointer;
  }
  input[type=range]::-ms-thumb {
    height: 18px;
    width: 18px;
    background: #800000;
    border-radius: 50%;
    border: 2px solid black;
    cursor: pointer;
  }
`;

export default function TriangleBalance() {
  const [product, setProduct] = useState(5);
  const [people, setPeople] = useState(5);
  const [process, setProcess] = useState(5);
  const [isMounted, setIsMounted] = useState(false);

  /* ----------------------------
     ON LOAD ANIMATION SEQUENCE
  ----------------------------- */
  useEffect(() => {
    setIsMounted(true);

    const sequence = [
      { product: 2, people: 8, process: 10 },
      { product: 2, people: 5, process: 10 },
      { product: 6, people: 8, process: 10 }
    ];

    let index = 0;
    const interval = setInterval(() => {
      const frame = sequence[index];
      setProduct(frame.product);
      setPeople(frame.people);
      setProcess(frame.process);

      index++;
      if (index >= sequence.length) clearInterval(interval);
    }, 850);

    return () => clearInterval(interval);
  }, []);

  /* ----------------------------
     TRIANGLE POINT WEIGHT MATH
  ----------------------------- */
  const total = product + people + process;
  const wP = product / total;
  const wPe = people / total;
  const wPr = process / total;

  const TOP = { x: 50, y: 8 };
  const LEFT = { x: 10, y: 88 };
  const RIGHT = { x: 90, y: 88 };

  const centerX = TOP.x * wP + LEFT.x * wPe + RIGHT.x * wPr;
  const centerY = TOP.y * wP + LEFT.y * wPe + RIGHT.y * wPr;

  return (
    <>
      <style>{sliderStyle}</style>

      <div className="flex flex-col items-center mt-4">
        {/* RESPONSIVE TRIANGLE CONTAINER */}
        <div
          className={`
            relative 
            w-[260px] h-[260px]      
            sm:w-[320px] sm:h-[320px]
            md:w-[360px] md:h-[360px]
            lg:w-[420px] lg:h-[420px]
            transition-all duration-700
            ${isMounted ? "opacity-100 scale-100" : "opacity-0 scale-75"}
          `}
        >
          {/* TRIANGLE IMAGE BACKGROUND (CLIPPED TO TRIANGLE ONLY) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          >
            <img
              src={triangleBG}
              alt="Triangle Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* FROSTED TRIANGLE OVERLAY (ALSO CLIPPED) */}
          <div
            className="absolute inset-0 backdrop-blur-md bg-white/40 border border-black"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          />

          {/* TRIANGLE LINES (MATCH OUTER TRIANGLE) */}
          <svg className="absolute inset-0 w-full h-full">
            <line
              x1="50%" y1="0%"
              x2="0%" y2="100%"
              stroke="black" strokeWidth="3"
            />
            <line
              x1="50%" y1="0%"
              x2="100%" y2="100%"
              stroke="black" strokeWidth="3"
            />
            <line
              x1="0%" y1="100%"
              x2="100%" y2="100%"
              stroke="black" strokeWidth="3"
            />
          </svg>

          {/* PRODUCT NODE */}
          <Node x={TOP.x} y={TOP.y} label="Product" icon="📈">
            <Slider value={product} onChange={setProduct} />
          </Node>

          {/* PEOPLE NODE */}
          <Node x={LEFT.x} y={LEFT.y} label="People" icon="👤">
            <Slider value={people} onChange={setPeople} />
          </Node>

          {/* PROCESS NODE */}
          <Node x={RIGHT.x} y={RIGHT.y} label="Process" icon="⚙️">
            <Slider value={process} onChange={setProcess} />
          </Node>

          {/* MOVING CENTER LOGO */}
          <img
            src={logo}
            alt="Logo"
            className="absolute w-12 h-12 rounded-full drop-shadow-md transition-all duration-500"
            style={{
              left: `calc(${centerX}% - 24px)`,
              top: `calc(${centerY}% - 24px)`
            }}
          />
        </div>
      </div>
    </>
  );
}

/* ----------------------------
   SLIDER COMPONENT
----------------------------- */
function Slider({ value, onChange }) {
  return (
    <div className="flex flex-col items-center">
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <span className="text-[10px] mt-1">{value}</span>
    </div>
  );
}

/* ----------------------------
   TRIANGLE NODE COMPONENT
----------------------------- */
function Node({ x, y, label, icon, children }) {
  return (
    <div
      className="
        absolute 
        flex flex-col items-center text-center
        transform -translate-x-1/2 -translate-y-1/2
      "
      style={{
        left: `${x}%`,
        top: `${y}%`
      }}
    >
      <div
        className="
          w-12 h-12 sm:w-14 sm:h-14
          flex items-center justify-center
          bg-white/70 backdrop-blur-md
          border border-black rounded-full shadow
        "
      >
        <span className="text-lg sm:text-xl">{icon}</span>
      </div>

      <div className="text-[10px] sm:text-[12px] mt-1 font-semibold">
        {label}
      </div>

      <div className="mt-1">
        {children}
      </div>
    </div>
  );
}
