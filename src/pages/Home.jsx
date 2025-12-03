import React from "react";
import TriangleBalance from "../components/TriangleBalance_new";
import { Link } from "react-router-dom";
import { TbMarquee } from "react-icons/tb";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden m-0 p-0">

      {/* === TOP TITLE === */}
      <div
        className="
          absolute top-4 left-1/2 -translate-x-1/2 
          text-center z-10 px-4
        "
        style={{
          fontFamily: "Candara",
          fontSize: "26px",
          fontWeight: "bold",
          textShadow: `
            1px 1px 6px rgba(247, 243, 243, 0.95),
            -1px -1px 3px rgba(221, 15, 15, 0.45)
          `
        }}
      >
        We understand Organizational Perspective. Do you?
      </div>

      {/* === MAIN SPLIT AREA === */}
      <div className="grid grid-cols-2 w-full min-h-[80vh]">

        {/* LEFT */}
        <div className="bg-[#B80000] flex flex-col items-center justify-center text-white py-16">
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
        <div className="bg-white flex flex-col items-center justify-center text-black py-16">
          <h1
            className="text-4xl font-bold mb-1"
            style={{ fontFamily: "Candara" }}
          >
            Execution
          </h1>

          <div
            className="text-lg font-semibold flex gap-1"
            style={{ fontFamily: "Candara" }}
          >
            Staffing |
            <span className="text-red-600">Training</span> |
            <span className="text-sm">ATL / BTL</span> |
            <span className="text-red-700 font-bold">Drones</span>
          </div>
        </div>
      </div>

      {/* === TRIANGLE + TEXT RIGHT BELOW IT (NO GAP) === */}
      <div
        className="
          absolute 
          top-[28%] sm:top-[29%] md:top-[15%] lg:top-[15%]
          left-1/2 -translate-x-1/2
          z-30 
          flex flex-col items-center
        "
      >
        {/* Triangle */}
        <TriangleBalance />
<br></br>
        {/* Text directly under the triangle (NO GAP) */}
        <p
          className="font-semibold text-black"
          style={{ fontFamily: "Candara" }}
        >
         
          <Link to="/assessment" className="text-black-900 underline ml-1 bg-white/80 ">
          Take the assessment and unlock I2V’s guidance to balance Product, Process, and People.
          </Link>.
        </p>
      </div>
      <div className="mt-3 w-[90%] max-w-md bg-white/80 backdrop-blur-md shadow-lg border border-gray-300 rounded-xl p-4 text-center">
 </div>

    </div>
  );
}
