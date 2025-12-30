import React from "react";
import TriangleBalance from "../../components/TriangleBalance_new";
import { Link } from "react-router-dom";
import { TbMarquee } from "react-icons/tb";

export default function Home() {
  return (
    <div className="static w-full overflow-hidden m-0 p-0 font-candara"
    style={{
          textShadow: `
            1px 1px 6px rgba(247, 243, 243, 0.95),
            -1px -1px 3px rgba(221, 15, 15, 0.45)
          `,
        }}>
        {/* === MAIN SPLIT AREA === */}
        <div className="relative grid grid-cols-2 md:grid-cols-2 w-full h-[35vh] sm:h-[30vh] md:h-[30vh]">
          <div className="absolute w-full top-20 md:top-25 sm:top-20 text-center z-10 px-4 text-3xl md:text-3xl font-bold p-4">
            <legend style={{
              textShadow: `
                1px 1px 6px rgba(247, 243, 243, 0.95),
                -1px -1px 3px rgba(221, 15, 15, 0.45)
              `,
            }}>We understand Organizational Perspective. Do you?</legend>
            
          </div>
        {/* LEFT - RED COLUMN */}
        <div className="relative bg-red-700 flex flex-col  items-center w-full top-0 text-center text-white px-6 md:px-1"></div>
        
        {/* RIGHT - WHITE COLUMN */}
        <div className="bg-white relative flex flex-col  items-center w-full top-0 text-center text-black px-6 md:px-1">  </div>
        </div>
        
        <div className="relative top-0 grid grid-cols-2 md:grid-cols-2 w-full h-[65vh] sm:h-[60vh] md:h-[55vh]">

          {/* LEFT - RED COLUMN */}
          <div className="relative bg-red-700 flex flex-col  items-center w-full top-0 text-center text-white px-6 md:px-1" style={{shapeOutside :"polygon(0 0, 100% 0, 100% 12%, 35% 89%, 100% 89%, 100% 100%, 0 100%, 0 50%)"}}>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 ">
              Consulting
            </h1>
            <div className="text-lg md:text-xl font-semibold text-center max-w-md">
              Go-To-Market | Digital Transformation
            </div>
          </div>

          {/* RIGHT - WHITE COLUMN */}
          
          <div className="bg-white relative flex flex-col  items-center w-full top-0 text-center text-black px-6 md:px-1" style={{shapeOutside :"polygon(0 31%, 0 0, 100% 0, 100% 56%, 100% 100%, 0 100%, 0 86%, 48% 86%)"}}>
            <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{color: '#b91c1c'}}>
              
              Execution
            </h1>
            <div className="text-lg md:text-xl font-semibold flex flex-wrap justify-center gap-2 text-center max-w-md" >
              Staffing |
              <span className="text-red-700">Training</span> |
              <span className="inline-flex flex-col items-center text-sm">
                <span className="text-xs">ATL</span>
                <span className="relative text-xs bottom-3">___</span>
                <span className="relative text-xs bottom-3">BTL</span>
              </span> |
              <span className="text-red-700">Drones</span>
            </div>
            {/* <img src="/assets/images/10aniversary.jpg" className="px-3 w-30 sm:w-40 md:w-50 xl:w-60" alt="" style={{mixBlendMode:'hard-light'}} />  */}
          </div>

        </div>
      {/* === TRIANGLE + TEXT BELOW IT === */}
      <div className="relative w-full z-30 flex flex-col items-center">
        <div className=" w-full max-w-xl px-4 py-2 -mt-80">
          <TriangleBalance />
          
        <fieldset className="relative w-full mt-10 text-center z-10 px-4">
          <legend
            className="px-2"
            style={{
              textShadow: `
                1px 1px 6px rgba(247, 243, 243, 0.95),
                -1px -1px 3px rgba(221, 15, 15, 0.45)
              `,
            }}
          >
            Take the Assessment and unlock I2V&apos;s guidance to balance Product, Process, and People
          
          </legend>
          <Link
            to="/assessment"
            aria-label="Take the assessment"
            className="w-full inline-flex items-center justify-center backdrop-blur-xl text-black px-3 py-2 md:px-4 md:py-3 text-base sm:text-lg md:text-2xl font-semibold underline transition transform hover:scale-105 cursor-pointer rounded-md"
          >
            <span className="block text-center w-full max-w-[90vw] sm:max-w-md md:max-w-2xl text-base sm:text-md md:text-md leading-tight break-words whitespace-normal">
              Start Assessment and unlock I2V Guidance
            </span>
          </Link>
        </fieldset>

        
        </div>
        
      </div>
    </div>
  );
}
