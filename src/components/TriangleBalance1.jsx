import { useState } from "react";

export default function TriangleBalance() {
  const [product, setProduct] = useState(7);
  const [people, setPeople] = useState(3);
  const [process, setProcess] = useState(7);

  // limit valid input 0–10
  const safeValue = (v) => {
    const num = Number(v);
    if (isNaN(num)) return 0;
    if (num < 0) return 0;
    if (num > 10) return 10;
    return num;
  };

  // movement multiplier
  const factor = 6;
  const x = (process - people) * factor;
  const y = -(product) * factor;

  return (
    <div className="flex flex-col items-center justify-center">

      <h2 
        className="text-2xl font-bold text-[#222] mb-6"
        style={{ fontFamily: "Candara" }}
      >
        Balance Matrix
      </h2>

      {/* TRIANGLE DRAWING */}
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

        <div className="absolute bottom-2 left-4 text-lg font-bold text-[#D32F2F]">
          People
        </div>

        <div className="absolute bottom-2 right-4 text-lg font-bold text-[#D32F2F]">
          Process
        </div>

        {/* MOVING LOGO */}
        <img
          src="/assets/images/logo2.jpg"
          alt="I2V Logo"
          className="w-10 h-10 absolute transition-all duration-700 ease-out"
          style={{ transform: `translate(${x}px, ${y}px)` }}
        />
      </div>

      {/* TEXTBOX INPUTS */}
      <div className="mt-10 space-y-4 text-[#222]" style={{ fontFamily: "Candara" }}>

        <InputBox label="Product" value={product} setValue={setProduct} safeValue={safeValue} />
        <InputBox label="People" value={people} setValue={setPeople} safeValue={safeValue} />
        <InputBox label="Process" value={process} setValue={setProcess} safeValue={safeValue} />

      </div>
    </div>
  );
}


// SUBCOMPONENT: Textbox field
function InputBox({ label, value, setValue, safeValue }) {
  return (
    <label className="text-lg font-semibold flex items-center gap-4">
      <span className="w-24">{label}:</span>
      <input
        type="number"
        min="0"
        max="10"
        value={value}
        onChange={(e) => setValue(safeValue(e.target.value))}
        className="w-24 border border-gray-400 rounded p-1 text-center focus:outline-none 
                   focus:ring-2 focus:ring-[#D32F2F]"
      />
    </label>
  );
}
