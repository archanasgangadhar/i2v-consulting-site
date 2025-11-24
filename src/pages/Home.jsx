import React from "react";
import TriangleBalance from "../components/TriangleBalance_new";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden m-0 p-0">

      {/* === TOP TITLE === */}
      <div
        className="absolute top-3 left-1/2 -translate-x-1/2 
                   text-xl font-bold text-black z-10 leading-tight"
        style={{ fontFamily: "Candara" }}
      >
        We understand Organizational Perspective. Do you?
      </div>

      {/* === MAIN SPLIT AREA === */}
      <div className="grid grid-cols-2 w-full h-full">

 {/* LEFT */}
<div className="bg-[#B80000] flex flex-col items-center justify-center text-white py-20">
  <h1
    className="text-4xl font-bold mb-1"
    style={{ fontFamily: "Candara" }}
  >
    Consulting
  </h1>

  <div
    className="text-lg font-semibold"
    style={{ fontFamily: "Candara" }}
  >
    Go-To-Market | Digital Transformation
  </div>
</div>

{/* RIGHT */}
<div className="bg-white flex flex-col items-center justify-center text-black py-20">
  <h1
    className="text-4xl font-bold mb-1"
    style={{ fontFamily: "Candara" }}
  >
    Execution
  </h1>

  <div
    className="text-lg font-semibold text-black flex gap-1"
    style={{ fontFamily: "Candara" }}
  >
    Staffing |
    <span className="text-red-600">Training</span> |
    <span className="text-sm">ATL / BTL</span> |
    <span className="text-red-700 font-bold">Drones</span>
  </div>
</div>

      </div>

     <div
  className="
    absolute 
    top-[28%] sm:top-[30%] md:top-[33%] lg:top-[35%]
    left-1/2 
    -translate-x-1/2 -translate-y-1/3
    z-30 scale-90
  "
>
  <TriangleBalance />
</div>


      {/* === BOTTOM TITLE === */}
      <div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 
                   text-lg font-semibold text-black z-0 leading-tight"
        style={{ fontFamily: "Candara" }}
      >
        <p>
          The I2V Transformation Team can help you,
          <Link to="/assessment" className="assessment-link text-red-700 underline ml-1">
            take assessment
          </Link>.
        </p>
      </div>

    </div>
  );
}
