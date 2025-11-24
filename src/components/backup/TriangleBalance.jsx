import React, { useState } from "react";
import logo from "/assets/images/logo2.jpg";
import triangleBG from "/assets/images/triangle_bg1.png";  // your uploaded background

export default function TriangleBalance() {
  const [product, setProduct] = useState(5);
  const [people, setPeople] = useState(5);
  const [process, setProcess] = useState(5);

  // normalize weights
  const total = product + people + process;
  const wP = product / total;
  const wPe = people / total;
  const wPr = process / total;

  // triangle coordinate anchors
  const TOP = { x: 50, y: 8 };
  const LEFT = { x: 10, y: 85 };
  const RIGHT = { x: 90, y: 85 };

  // weighted center point
  const centerX = TOP.x * wP + LEFT.x * wPe + RIGHT.x * wPr;
  const centerY = TOP.y * wP + LEFT.y * wPe + RIGHT.y * wPr;

  return (
    <div className="flex flex-col items-center mt-4">

      {/* === SLIDERS === */}
      <div className="flex gap-6 mb-6 text-black font-bold">
        <Slider label="Product" value={product} onChange={setProduct} color="white" />
        <Slider label="People" value={people} onChange={setPeople} color="white" />
        <Slider label="Process" value={process} onChange={setProcess} color="black" />
      </div>

      {/* === TRIANGLE CONTAINER === */}
      <div className="relative w-[260px] h-[130px] sm:w-[320px] sm:h-[280px]">

        {/* BACKGROUND IMAGE BEHIND TRIANGLE (Style B) */}
        <div className="absolute inset-0 opacity-90">
          <img 
            src={triangleBG}
            alt="Triangle BG"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* FROSTED TRIANGLE OVERLAY (Style C) */}
        <div 
          className="absolute inset-0 backdrop-blur-md bg-white/40 border-[1px] border-black"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
          }}
        />

        {/* TRIANGLE LINES IN BLACK */}
        <svg width="100%" height="100%" className="absolute top-0 left-0 pointer-events-none">
          <line x1="50%" y1="8%" x2="10%" y2="85%" stroke="black" strokeWidth="3"/>
          <line x1="50%" y1="8%" x2="90%" y2="85%" stroke="black" strokeWidth="3"/>
          <line x1="10%" y1="85%" x2="90%" y2="85%" stroke="black" strokeWidth="3"/>
        </svg>

        {/* === LABEL NODES === */}
        <Node x={TOP.x} y={TOP.y} label="Product" icon="📈" className="text-red-600" />
        <Node x={LEFT.x} y={LEFT.y} label="People" icon="👤" />
        <Node x={RIGHT.x} y={RIGHT.y} label="Process" icon="⚙️" />

        {/* === MOVING LOGO === */}
        <img
          src={logo}
          className="absolute w-10 h-10 transition-all duration-500 drop-shadow-xl"
          style={{
            left: `calc(${centerX}% - 28px)`,
            top: `calc(${centerY}% - 28px)`
          }}
          alt="I2V Logo"
        />
      </div>
    </div>
  );
}

/* === SLIDER SUBCOMPONENT === */
function Slider({ label, value, onChange, color }) {
  return (
    <div className="flex flex-col items-center text-center">
      <label className="mb-1">{label}</label>
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`w-28 accent-${color}-600`}
      />
    </div>
  );
}

/* === NODE LABEL COMPONENT === */
function Node({ x, y, label, icon }) {
  return (
    <div
      className="absolute text-center"
      style={{
        left: `calc(${x}% - 25px)`,
        top: `calc(${y}% - 25px)`
      }}
    >
      <div className="w-12 h-12 flex items-center justify-center bg-white/70 backdrop-blur-sm border border-black rounded-full shadow-md">
        <span className="text-lg">{icon}</span>
      </div>
      <div className="text-[11px] mt-1 font-semibold text-black">{label}</div>
    </div>
  );
}
