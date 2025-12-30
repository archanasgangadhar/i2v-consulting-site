import { FiTrendingUp, FiLayers, FiGlobe, FiTarget, FiBarChart, FiUsers } from "react-icons/fi";
import Home2 from "./backup/Home2";
export default function Consultancy() {
  return (
    
    <div
      className="bg-white min-h-screen pt-20 pb-20"
      style={{ fontFamily: "Candara" }}
    >
      <Home2></Home2>
      <div className="max-w-7xl p-7 mx-auto px-6">

        {/* PAGE TITLE */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-[#222]">
            Consulting <span className="text-[#D32F2F]">Solutions</span>
          </h1>
          <p className="text-neutral-600 text-sm sm:text-base mt-3 max-w-3xl mx-auto">
            We help agri-businesses transform from idea to value through 
            structured Go-To-Market design, digital transformation, capability 
            building, and execution strategy.
          </p>
        </div>

        {/* TOP SECTION: VISION */}
        <div className="bg-[#F7F7F7] rounded-2xl border border-neutral-300 shadow-sm p-10 mb-14">
          <h2 className="text-2xl font-bold text-[#222] mb-4 text-center">
            Our Consulting Approach
          </h2>
          <p className="text-neutral-700 text-sm sm:text-base text-center max-w-4xl mx-auto leading-7">
            We bring deep industry knowledge, field understanding, digital 
            expertise, and structured frameworks to strengthen your GTM engine 
            and build high-performance organisations. Our focus is simple —
            design practical strategies and ensure they are executable on ground.
          </p>
        </div>

        {/* PILLARS SECTION */}
        <h2 className="text-2xl font-bold text-[#222] mb-6 text-center">
          Key Consulting Pillars
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-14">

          <ConsultCard
            icon={<FiTarget className="text-4xl text-[#D32F2F] mx-auto" />}
            title="Go-To-Market Strategy"
            text="We design practical, segment-based GTM strategies that align with your business goals and ensure strong farmer and channel-level execution."
          />

          <ConsultCard
            icon={<FiGlobe className="text-4xl text-[#D32F2F] mx-auto" />}
            title="Market Expansion & Segmentation"
            text="Identify high-potential markets, crop clusters, and customer segments with data-driven targeting and focused field deployment."
          />

          <ConsultCard
            icon={<FiBarChart className="text-4xl text-[#D32F2F] mx-auto" />}
            title="Business Diagnostics"
            text="Complete business health evaluation including product performance, channel strength, competition mapping, and execution gaps."
          />

          <ConsultCard
            icon={<FiLayers className="text-4xl text-[#D32F2F] mx-auto" />}
            title="Digital Transformation"
            text="Build agility with digital dashboards, field-force platforms, performance visibility tools, and farmer engagement systems."
          />

          <ConsultCard
            icon={<FiUsers className="text-4xl text-[#D32F2F] mx-auto" />}
            title="Capability Building"
            text="Strengthen your internal teams with structured training on sales, market development, agronomy, and leadership skills."
          />

          <ConsultCard
            icon={<FiTrendingUp className="text-4xl text-[#D32F2F] mx-auto" />}
            title="Performance Accelerator Programs"
            text="Short-term and long-term interventions to improve sales momentum, conversions, retailer alignment, and field impact."
          />
        </div>

        {/* OUR DIFFERENTIATOR */}
        <div className="bg-[#F7F7F7] border border-neutral-300 rounded-2xl shadow-sm p-10 mb-14">
          <h2 className="text-2xl font-bold text-[#222] mb-4 text-center">
            What Makes Us Different?
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-neutral-700 leading-6">
            <li className="bg-white p-5 rounded-xl shadow border border-neutral-200">
              ✔ Deep agri-domain expertise  
            </li>
            <li className="bg-white p-5 rounded-xl shadow border border-neutral-200">
              ✔ Strong field understanding backed by execution teams  
            </li>
            <li className="bg-white p-5 rounded-xl shadow border border-neutral-200">
              ✔ Practical and actionable recommendations  
            </li>
            <li className="bg-white p-5 rounded-xl shadow border border-neutral-200">
              ✔ Data-driven GTM insights and analytics  
            </li>
            <li className="bg-white p-5 rounded-xl shadow border border-neutral-200">
              ✔ Balanced focus on Product, Process, People  
            </li>
            <li className="bg-white p-5 rounded-xl shadow border border-neutral-200">
              ✔ End-to-end support from design to execution  
            </li>
          </ul>
        </div>

        {/* CTA SECTION */}
        <div className="text-center">
          <p className="text-neutral-600 text-sm mb-4">
            Ready to strengthen your GTM or build a high-performance team?
          </p>

          <a
            href="/contact"
            className="
              inline-block px-10 py-3 bg-[#D32F2F] text-white rounded-full
              font-semibold shadow-md hover:bg-[#B71C1C] transition
            "
          >
            Talk to Our Consulting Team
          </a>
        </div>

      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               REUSABLE CARD                                */
/* -------------------------------------------------------------------------- */

function ConsultCard({ icon, title, text }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6 text-center">
      {icon}
      <h3 className="text-lg font-bold text-[#222] mt-3">{title}</h3>
      <p className="text-sm text-neutral-700 mt-2 leading-6">{text}</p>
    </div>
  );
}
