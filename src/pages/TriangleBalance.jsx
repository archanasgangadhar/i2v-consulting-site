import TriangleBalance from "./TriangleBalance";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* === SOFT SPOTLIGHT BEHIND TRIANGLE === */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[500px] h-[500px] rounded-full
                      bg-[#ffcccc] opacity-40 blur-3xl z-10 pointer-events-none">
      </div>

      {/* === TRIANGLE WIDGET DEAD CENTER === */}
      <div className="absolute top-1/2 left-1/2 
                      -translate-x-1/2 -translate-y-1/2 z-30 fade-in">
        <TriangleBalance />
      </div>

      {/* === SPLIT BACKGROUND SECTION === */}
      <div className="flex flex-col md:flex-row h-screen w-full">

        {/* === LEFT RED SECTION === */}
        <div 
          className="w-full md:w-1/2 bg-[#D32F2F] 
                     flex flex-col items-center justify-center 
                     text-white p-10 fade-in-left"
          style={{ fontFamily: "Candara" }}
        >
          <h1 className="text-5xl font-bold tracking-wide mb-4">
            CONSULTING
          </h1>

          <div className="text-xl flex gap-3 mt-2">
            <a href="/gtm" className="hover:underline cursor-pointer">
              Go-To-Market
            </a>
            <span>|</span>
            <a href="/digital-transformation" className="hover:underline cursor-pointer">
              Digital Transformation
            </a>
          </div>
        </div>

        {/* === GLOWING DIVIDER (VERTICAL ON DESKTOP, HORIZONTAL ON MOBILE) === */}
        <div className="
          hidden md:block w-[3px] bg-gradient-to-b from-[#ff9999] to-[#D32F2F]
          shadow-[0_0_15px_#ff6666] z-20">
        </div>
        <div className="
          md:hidden h-[3px] w-full bg-gradient-to-r from-[#ff9999] to-[#D32F2F]
          shadow-[0_0_15px_#ff6666] z-20">
        </div>

        {/* === RIGHT WHITE SECTION === */}
        <div 
          className="w-full md:w-1/2 bg-white 
                     flex flex-col items-center justify-center 
                     p-10 fade-in-right"
          style={{ fontFamily: "Candara" }}
        >
          <h1 className="text-5xl font-bold text-[#222] tracking-wide mb-4">
            EXECUTION
          </h1>

          <div className="text-xl flex gap-4 mt-2 text-[#D32F2F] font-semibold">
            <a href="/staffing" className="hover:underline cursor-pointer">
              Staffing
            </a>
            <span>|</span>
            <a href="/training" className="hover:underline cursor-pointer">
              Training
            </a>
            <span>|</span>
            <a href="/atl-btl" className="hover:underline cursor-pointer">
              ATL/BTL
            </a>
            <span>|</span>
            <a href="/drones" className="hover:underline cursor-pointer">
              Drones
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
