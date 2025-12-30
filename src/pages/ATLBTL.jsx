<<<<<<< HEAD
import { Link } from "react-router-dom";

export default function ATLBTL() {
  return (
    <div className="bg-white pt-28 pb-20 px-6" style={{ fontFamily: "Candara" }}>
      <div className="max-w-6xl mx-auto">

        {/* ================= PAGE HEADER ================= */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-[#222]">
            ATL / BTL <span className="text-[#D32F2F]">Execution</span>
          </h1>

          <p className="mt-6 text-lg text-neutral-700 max-w-3xl mx-auto leading-7">
            Driving awareness, engagement, and adoption through disciplined
            above-the-line and below-the-line execution.
          </p>
        </div>

        {/* ================= INTRO ================= */}
        <section className="mb-20 text-center">
          <p className="text-neutral-700 text-lg leading-7 max-w-4xl mx-auto">
            In agri-business, marketing effectiveness is defined not by creative
            ideas alone, but by how well campaigns are executed on ground.
            <br /><br />
            I2V Consulting ensures that ATL and BTL initiatives are integrated,
            well-coordinated, and delivered with precision across markets,
            seasons, and crops.
          </p>
        </section>

        {/* ================= ATL SECTION ================= */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#222] text-center mb-10">
            Above-The-Line (ATL) Activities
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <ATLBTLCard
              title="Mass Media Campaign Support"
              points={[
                "Campaign roll-out coordination at regional and local levels",
                "Alignment of ATL messaging with GTM objectives",
                "Support for print, radio, outdoor, and digital campaigns",
              ]}
            />

            <ATLBTLCard
              title="Brand Visibility & Recall"
              points={[
                "Hoardings, wall paintings, and branding assets",
                "Crop and season-specific creative deployment",
                "Market-wise visibility planning and execution",
              ]}
            />
          </div>
        </section>

        {/* ================= BTL SECTION ================= */}
        <section className="mb-20 bg-gray-50 border border-gray-200 rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-[#222] text-center mb-10">
            Below-The-Line (BTL) Activities
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <ATLBTLCard
              title="Farmer Meetings & Engagement Programs"
              points={[
                "Village-level farmer meetings",
                "Crop seminars and knowledge sessions",
                "Farmer group interactions and feedback capture",
              ]}
            />

            <ATLBTLCard
              title="Demonstrations & Field Days"
              points={[
                "Product and technology demonstrations",
                "Demo plot planning and execution",
                "Result documentation and learning dissemination",
              ]}
            />

            <ATLBTLCard
              title="Retailer & Channel Activation"
              points={[
                "Retailer meets and incentive programs",
                "Distributor engagement initiatives",
                "Point-of-sale branding and activation",
              ]}
            />

            <ATLBTLCard
              title="Localised Promotions"
              points={[
                "Seasonal promotions and schemes",
                "Crop-specific activation programs",
                "Hyper-local execution tailored to market needs",
              ]}
            />
          </div>
        </section>

        {/* ================= EXECUTION DISCIPLINE ================= */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#222] text-center mb-10">
            Execution Discipline & Governance
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-neutral-700">
            <DisciplineItem text="Detailed activity planning and calendars" />
            <DisciplineItem text="Deployment of trained field teams" />
            <DisciplineItem text="On-ground supervision and quality checks" />
            <DisciplineItem text="Activity reporting and documentation" />
            <DisciplineItem text="Integration with digital tracking tools" />
            <DisciplineItem text="Post-activity evaluation and learning" />
          </div>
        </section>

        {/* ================= WHY I2V ================= */}
        <section className="mb-20 bg-gray-50 border border-gray-200 rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-[#222] text-center mb-8">
            Why I2V for ATL / BTL Execution?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-neutral-700">
            <WhyItem text="Strong understanding of agri marketing dynamics" />
            <WhyItem text="Deep integration with field force execution" />
            <WhyItem text="Pan-India and regional activation capability" />
            <WhyItem text="Season and crop-aligned execution planning" />
            <WhyItem text="Focus on adoption, not just visibility" />
            <WhyItem text="Proven track record with large agri brands" />
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="text-center border-t border-gray-200 pt-14">
          <h2 className="text-3xl font-bold text-[#222] mb-4">
            Need High-Impact ATL / BTL Execution?
          </h2>

          <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
            From national campaigns to hyper-local activations, we help you
            execute marketing initiatives that deliver visibility, engagement,
            and measurable impact.
          </p>

          <Link
            to="/contact"
            className="inline-block px-10 py-3 bg-[#D32F2F] text-white font-semibold rounded-full hover:bg-[#B71C1C] transition"
          >
            Discuss ATL / BTL Requirements
          </Link>
        </section>

      </div>
    </div>
  );
}

/* ================= HELPER COMPONENTS ================= */

function ATLBTLCard({ title, points }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-[#222] mb-4">{title}</h3>
      <ul className="list-disc list-inside text-neutral-700 space-y-2">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

function DisciplineItem({ text }) {
  return (
    <div className="border border-gray-200 rounded-xl p-5 text-center">
      {text}
    </div>
  );
}

function WhyItem({ text }) {
  return (
    <div className="border border-gray-200 rounded-xl p-5 text-center">
      {text}
=======
export default function ATLBTL() {
  return (
    <div className="pt-24 px-6" style={{ fontFamily: 'Candara' }}>
      <h1 className="text-4xl font-bold text-[#222]">
        ATL / BTL <span className="text-[#D32F2F]">Activation</span>
      </h1>
      <p className="mt-4 text-neutral-700 text-lg">
        Dummy ATL / BTL Page.
      </p>
>>>>>>> 824dcd6460ac3d92cd37b815f3c1c7d2a85ba8c7
    </div>
  );
}
