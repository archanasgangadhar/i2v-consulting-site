<<<<<<< HEAD
import { Link } from "react-router-dom";

export default function GoToMarket() {
  return (
    <div className="bg-white pt-28 pb-20 px-6" style={{ fontFamily: "Candara" }}>
      <div className="max-w-6xl mx-auto">

        {/* ================= PAGE HEADER ================= */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-[#222]">
            Go-To-Market <span className="text-[#D32F2F]">Consulting</span>
          </h1>

          <p className="mt-6 text-lg text-neutral-700 max-w-3xl mx-auto leading-7">
            Designing and executing market-ready strategies that translate
            strong products into sustained adoption, revenue growth, and
            competitive advantage.
          </p>
        </div>

        {/* ================= INTRO ================= */}
        <section className="mb-20">
          <p className="text-neutral-700 text-lg leading-7 max-w-4xl mx-auto text-center">
            In agri-business, a strong product alone does not guarantee success.
            Effective Go-To-Market execution requires deep understanding of
            crops, farmers, channels, seasons, and field realities.  
            <br /><br />
            I2V Consulting partners with organisations to build structured,
            practical, and execution-ready GTM strategies that work on ground —
            not just on paper.
          </p>
        </section>

        {/* ================= GTM PILLARS ================= */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#222] text-center mb-10">
            Our Go-To-Market Focus Areas
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <GTMCard
              title="Market & Segment Definition"
              text="Clear identification of priority crops, farmer segments,
              geographies, and growth pockets based on market potential and
              organisational strengths."
            />

            <GTMCard
              title="Product Positioning & Messaging"
              text="Sharper product narratives that connect agronomy benefits
              with farmer pain points, ensuring clarity at distributor,
              retailer, and farmer levels."
            />

            <GTMCard
              title="Channel & Distribution Strategy"
              text="Optimised channel structures, distributor coverage models,
              retailer engagement plans, and incentive mechanisms."
            />

            <GTMCard
              title="Launch & Activation Planning"
              text="End-to-end launch playbooks covering field activities,
              demonstrations, farmer meetings, and ATL/BTL integration."
            />

            <GTMCard
              title="Field Force Design & Deployment"
              text="Right-sizing field teams, defining roles, territories,
              targets, and KPIs aligned with GTM objectives."
            />

            <GTMCard
              title="Performance Tracking & Governance"
              text="Dashboards, review mechanisms, and feedback loops to ensure
              visibility, accountability, and continuous improvement."
            />
          </div>
        </section>

        {/* ================= WHY I2V ================= */}
        <section className="mb-20 bg-gray-50 border border-gray-200 rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-[#222] text-center mb-8">
            Why I2V for Go-To-Market?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-neutral-700">
            <WhyItem text="Deep agri-domain and crop-level understanding" />
            <WhyItem text="Strong linkage between strategy and field execution" />
            <WhyItem text="Practical, implementable GTM frameworks" />
            <WhyItem text="Experience across national and regional launches" />
            <WhyItem text="Balanced focus on Product, Process, and People" />
            <WhyItem text="Proven long-term partnerships with global agri leaders" />
          </div>
        </section>

        {/* ================= EXECUTION BRIDGE ================= */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-[#222] mb-6">
            From Strategy to Execution
          </h2>

          <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-7 mb-8">
            Unlike pure advisory firms, I2V supports organisations beyond
            strategy design. Our execution capabilities ensure that GTM plans
            are translated into disciplined field actions with measurable
            outcomes.
          </p>

          <Link
            to="/execution"
            className="inline-block px-8 py-3 bg-[#D32F2F] text-white font-semibold rounded-full hover:bg-[#B71C1C] transition"
          >
            Explore Execution Services
          </Link>
        </section>

        {/* ================= CTA ================= */}
        <section className="text-center border-t border-gray-200 pt-14">
          <h2 className="text-3xl font-bold text-[#222] mb-4">
            Ready to Strengthen Your Go-To-Market?
          </h2>

          <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
            Whether you are launching a new product, expanding into new
            geographies, or improving market penetration — we can help you
            design and deliver a GTM strategy that works.
          </p>

          <Link
            to="/contact"
            className="inline-block px-10 py-3 bg-[#D32F2F] text-white font-semibold rounded-full hover:bg-[#B71C1C] transition"
          >
            Talk to Our GTM Experts
          </Link>
        </section>

      </div>
    </div>
  );
}

/* ================= HELPER COMPONENTS ================= */

function GTMCard({ title, text }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-[#222] mb-3">{title}</h3>
      <p className="text-neutral-700 leading-6">{text}</p>
    </div>
  );
}

function WhyItem({ text }) {
  return (
    <div className="border border-gray-200 rounded-xl p-5 text-center">
      {text}
=======
export default function GoToMarket() {
  return (
    <div className="pt-24 px-6" style={{ fontFamily: 'Candara' }}>
      <h1 className="text-4xl font-bold text-[#222]">
        Go-To-Market <span className="text-[#D32F2F]">Consulting</span>
      </h1>
      <p className="mt-4 text-neutral-700 text-lg">
        This is a dummy Go-To-Market page.
      </p>
>>>>>>> 824dcd6460ac3d92cd37b815f3c1c7d2a85ba8c7
    </div>
  );
}
