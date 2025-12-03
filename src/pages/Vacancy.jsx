import { FiMapPin, FiBriefcase, FiClock } from "react-icons/fi";

export default function Vacancy() {
  return (
    <div
      className="bg-white min-h-screen pt-16 pb-20"
      style={{ fontFamily: "Candara" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* PAGE TITLE */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#222]">
            Current <span className="text-[#D32F2F]">Vacancies</span>
          </h1>
          <p className="text-neutral-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Join our fast-growing execution and digital transformation team.
          </p>
        </div>

        {/* JOB LISTINGS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* FIELD OFFICERS */}
          <div className="bg-[#F7F7F7] rounded-2xl border border-neutral-300 shadow-sm p-8">
            <h2 className="text-xl font-bold text-[#222] mb-4">Field Officers</h2>
            
            <div className="space-y-3 text-sm text-neutral-700">
              <p className="flex items-center gap-2">
                <FiMapPin className="text-[#D32F2F]" /> <span>Maharashtra</span>
              </p>
              <p className="flex items-center gap-2">
                <FiBriefcase className="text-[#D32F2F]" /> 
                <span>Experience: Minimum 4 Years</span>
              </p>
              <p className="flex items-center gap-2">
                <FiClock className="text-[#D32F2F]" /> 
                <span>Positions Available: 200</span>
              </p>

              <p className="mt-4 leading-6">
                We are looking for experienced Field Officers with strong exposure in 
                agriculture, field marketing, farmer engagement, and Go-To-Market execution.
              </p>

              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Farmer and retailer engagement</li>
                <li>Campaign & Demo execution</li>
                <li>Daily reporting & field discipline</li>
                <li>Deep understanding of agri-input products</li>
              </ul>

              <a
                href="/contact"
                className="inline-block mt-5 px-6 py-2.5 bg-[#D32F2F] text-white rounded-full shadow-md text-sm hover:bg-[#B71C1C] transition"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* FULL STACK DEVELOPERS */}
          <div className="bg-[#F7F7F7] rounded-2xl border border-neutral-300 shadow-sm p-8">
            <h2 className="text-xl font-bold text-[#222] mb-4">Full Stack Developers</h2>

            <div className="space-y-3 text-sm text-neutral-700">
              <p className="flex items-center gap-2">
                <FiMapPin className="text-[#D32F2F]" /> <span>Hyderabad (Preferred) / Remote</span>
              </p>
              <p className="flex items-center gap-2">
                <FiBriefcase className="text-[#D32F2F]" /> 
                <span>Experience: Minimum 3 Years</span>
              </p>
              <p className="flex items-center gap-2">
                <FiClock className="text-[#D32F2F]" /> 
                <span>Positions Available: 3</span>
              </p>

              <p className="mt-4 leading-6">
                We are seeking skilled Full Stack Developers to support our digital
                transformation platforms, field applications, and GTM dashboards.
              </p>

              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>React / Node.js / Express</li>
                <li>API Integration & Authentication</li>
                <li>Database handling (MongoDB / PostgreSQL)</li>
                <li>UI/UX understanding (Tailwind preferred)</li>
              </ul>

              <a
                href="/contact"
                className="inline-block mt-5 px-6 py-2.5 bg-[#D32F2F] text-white rounded-full shadow-md text-sm hover:bg-[#B71C1C] transition"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
