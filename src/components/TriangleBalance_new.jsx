import React, { useState, useEffect } from "react";
import logo from "/assets/images/logo_trans1.png";
import triangleBG from "/assets/images/triangle_bg1.png";

/* -----------------------------------------
   GLOBAL STYLES: SLIDERS + LOGO ANIMATION
------------------------------------------ */
const globalStyle = `
  /* Slider base line */
  input[type=range] {
    -webkit-appearance: none;
    width: 100px;
    height: 10px;
    background: #878282ff;
    border-radius: 4px;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
    transition: box-shadow 0.25s ease, background-color 0.25s ease;
  }

  input[type=range]:focus {
    outline: none;
  }

  /* Slider Thumb */
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 18px;
    width: 18px;
    background: #800000;
    border-radius: 50%;
    border: 2px solid black;
    cursor: pointer;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  input[type=range]::-webkit-slider-thumb:active {
    transform: scale(1.12);
    box-shadow: 0 0 8px rgba(128, 0, 0, 0.6);
  }

  input[type=range]::-moz-range-thumb {
    height: 18px;
    width: 18px;
    background: #800000;
    border-radius: 50%;
    border: 2px solid black;
    cursor: pointer;
  }

  /* Pulse Glow on Center Logo */
  .triangle-logo-pulse {
    animation: logoPulse 2.6s ease-in-out infinite;
    box-shadow: 0 0 14px rgba(183, 28, 28, 0.55);
  }

  @keyframes logoPulse {
    0% { transform: scale(1); box-shadow: 0 0 8px rgba(183,28,28,0.5); }
    50% { transform: scale(1.06); box-shadow: 0 0 18px rgba(183,28,28,0.9); }
    100% { transform: scale(1); box-shadow: 0 0 8px rgba(183,28,28,0.5); }
  }
`;

export default function TriangleBalance_New_NoContainerEffects() {
  const [product, setProduct] = useState(5);
  const [people, setPeople] = useState(5);
  const [process, setProcess] = useState(5);
  const [isMounted, setIsMounted] = useState(false);

  /* Animation Sequence */
  useEffect(() => {
    setIsMounted(true);

    const seq = [
      { product: 2, people: 8, process: 10 },
      { product: 2, people: 5, process: 10 },
      { product: 6, people: 8, process: 10 },
    ];

    let i = 0;
    const intv = setInterval(() => {
      setProduct(seq[i].product);
      setPeople(seq[i].people);
      setProcess(seq[i].process);
      i++;
      if (i >= seq.length) clearInterval(intv);
    }, 1850);

    return () => clearInterval(intv);
  }, []);

  /* Triangle Math */
  const total = product + people + process;
  const wP = product / total;
  const wPe = people / total;
  const wPr = process / total;

  const TOP = { x: 50, y: 8 };
  const LEFT = { x: 10, y: 88 };
  const RIGHT = { x: 90, y: 88 };

  const centerX = TOP.x * wP + LEFT.x * wPe + RIGHT.x * wPr;
  const centerY = TOP.y * wP + LEFT.y * wPe + RIGHT.y * wPr;

  /* Your selected colors */
  const COLOR_PRODUCT = "#4f0202";
  const COLOR_PEOPLE = "#8c8989";
  const COLOR_PROCESS = "#B71C1C";

  return (
    <>
      <style>{globalStyle}</style>

      <div className="flex flex-col items-center mt-4">
        {/* CLEAN container — no glow, no tilt, no effects */}
        <div
          className={`
            relative
            w-[220px] h-[220px]
sm:w-[280px] sm:h-[280px]
md:w-[320px] md:h-[300px]
lg:w-[360px] lg:h-[330px]

            transition-all duration-1700
            ${isMounted ? "opacity-100 scale-100" : "opacity-0 scale-75"}
          `}
        >
          {/* TRIANGLE ONLY IMAGE BACKGROUND (clipped) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          >
            <img
              src={triangleBG}
              className="w-full h-full object-cover"
              alt="Triangle BG"
            />
          </div>

          {/* TRIANGLE Frosted Overlay */}
          <div
            className="absolute inset-0 backdrop-blur-md bg-white/40 border border-black"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          />

          {/* TRIANGLE LINES */}
          <svg className="absolute inset-0 w-full h-full">
            <line x1="50%" y1="0%" x2="0%" y2="100%" stroke="black" strokeWidth="3" />
            <line x1="50%" y1="0%" x2="100%" y2="100%" stroke="black" strokeWidth="3" />
            <line x1="0%" y1="100%" x2="100%" y2="100%" stroke="black" strokeWidth="3" />
          </svg>

          {/* PRODUCT NODE */}
          <Node x={TOP.x} y={TOP.y} label="Product" icon="📈" tint={COLOR_PRODUCT}>
            <Slider value={product} onChange={setProduct} />
          </Node>

          {/* PEOPLE NODE */}
          <Node x={LEFT.x} y={LEFT.y} label="People" icon="👤" tint={COLOR_PEOPLE}>
            <Slider value={people} onChange={setPeople} />
          </Node>

          {/* PROCESS NODE */}
          
          <Node x={RIGHT.x} y={RIGHT.y} label="Process" icon="⚙️" tint={COLOR_PROCESS}>
            <Slider value={process} onChange={setProcess} />
          </Node>

          {/* CENTER LOGO */}
          <img
            src={logo}
            alt="Logo"
            className="absolute w-18 h-18 rounded-full triangle-logo-pulse transition-all duration-600 ease-out"
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

/* SLIDER */
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

/* NODE COMPONENT */
function Node({ x, y, label, icon, tint, children }) {
  const soft = `${tint}33`; // soft tint
  const glow = `${tint}80`; // soft glow

  return (
    <div
      className="absolute flex flex-col items-center text-center transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div
        className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center backdrop-blur-md border border-black rounded-full"
        style={{
          backgroundColor: soft,
          boxShadow: `0 0 14px ${glow}`
        }}
      >
        <span className="text-lg sm:text-xl">{icon}</span>
      </div>

      <div
  className="mt-2 font-extrabold text-black"
  style={{
    fontSize: "20px",
    textShadow: `
      1px 1px 6px rgba(247, 243, 243, 0.95),
      -1px -1px 3px rgba(221, 15, 15, 0.45)
    `
  }}
>{label}</div>
       <div
  className="mt-2 font-extrabold text-black"
  style={{
    fontSize: "50px",
    textShadow: `
      1px 1px 6px rgba(247, 243, 243, 0.95),
      -1px -1px 3px rgba(221, 15, 15, 0.45)
    `
  }}
>{children}</div>
    </div>
  );
}
