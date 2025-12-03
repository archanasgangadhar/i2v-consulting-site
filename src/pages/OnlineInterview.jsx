export default function OnlineInterview() {
  return (
    <div
      className="bg-white min-h-screen pt-16 pb-20 px-6"
      style={{ fontFamily: "Candara" }}
    >
      <div className="max-w-4xl mx-auto">
        
        {/* PAGE TITLE */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#222]">
            Online <span className="text-[#D32F2F]">Interview</span>
          </h1>
          <p className="text-neutral-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Welcome to the I2V Online Interview Module.  
            This interactive assessment is designed to evaluate your communication, 
            field understanding, and situational decision-making skills.  
          </p>
        </div>

        {/* CONTENT BOX */}
        <div className="bg-[#F7F7F7] rounded-2xl border border-neutral-300 shadow-sm p-8 text-neutral-700">
          <h2 className="text-xl font-bold text-[#222] mb-4">
            About This Interview
          </h2>

          <p className="text-sm leading-6">
            This interview includes scenario-based questions, practical assessment 
            elements, and a short simulation designed to understand your approach 
            to field execution, communication, and real-world agri-interaction.  
            Please ensure you are in a quiet environment and have stable internet access.
          </p>

          <p className="text-sm mt-4 leading-6">
            Once you begin, a new window will open containing the interactive 
            assessment module. Follow the on-screen instructions and complete 
            all segments before closing the window.
          </p>

          {/* BUTTON */}
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                window.open(
                  "http://localhost:3000/interact_index3",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              className="
                px-8 py-3 bg-[#D32F2F] text-white text-sm font-semibold
                rounded-full shadow-md hover:bg-[#B71C1C] transition
              "
            >
              Start Interview
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
