import TriangleBalance from "../components/TriangleBalance1";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full">

      {/* LEFT RED BAND */}
      <div 
        className="w-1/2 bg-[#D32F2F] flex items-center justify-center text-white p-10"
        style={{ fontFamily: "Candara" }}
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-wide">I2V Consulting</h1>
          <p className="text-xl opacity-90">
            The Transformation Team
          </p>
          <p className="max-w-md text-lg opacity-80 leading-relaxed">
            Empowering organizations with People, Process and Product excellence 
            through innovation, digital transformation & efficient execution.
          </p>
        </div>
      </div>

      {/* RIGHT WHITE TRIANGLE SIDE */}
      <div className="w-1/2 bg-white flex items-center justify-center p-10">
        <TriangleBalance />
      </div>
    </div>
  );
}
