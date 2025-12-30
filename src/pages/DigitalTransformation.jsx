import { Link } from "react-router-dom";

export default function DigitalTransformation() {
  return (
    <div className="bg-white pt-28 pb-20 px-6" style={{ fontFamily: "Candara" }}>
      <div className="max-w-6xl mx-auto">

        {/* ================= PAGE HEADER ================= */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-[#222]">
            Digital <span className="text-[#D32F2F]">Transformation</span>
          </h1>

          <p className="mt-6 text-lg text-neutral-700 max-w-3xl mx-auto leading-7">
            Enabling data-driven decisions, operational efficiency, and
            scalable execution through practical digital transformation.
          </p>
        </div>

        {/* ================= INTRO ================= */}
        <section className="mb-20">
          <p className="text-neutral-700 text-lg leading-7 max-w-4xl mx-auto text-center">
            In agri-business, digital transformation is not about technology
            alone — it is about improving visibility, speed, accountability,
            and decision-making across complex field operations.
            <br /><br />
            I2V Consulting helps organisations adopt digital solutions that
            enhance execution effectiveness while remaining grounded in
            real-world field realities.
          </p>
        </section>

        {/* ================= TRANSFORMATION AREAS ================= */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#222] text-center mb-10">
            Our Digital Transformation Focus Areas
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <DTCard
              title="Field Force Digitisation"
              text="Digital tools to enable real-time reporting, activity
              tracking, target monitoring, and performance visibility across
              sales and technical teams."
            />

            <DTCard
              title="GTM & Sales Dashboards"
              text="Custom dashboards that provide leadership with clear
              insights into coverage, productivity, sales momentum, and
              execution gaps."
            />

            <DTCard
              title="Farmer Engagement Platforms"
              text="Digital channels to support farmer education, advisory,
              engagement tracking, and feedback collection."
            />

            <DTCard
              title="Process Automation"
              text="Automation of repetitive operational processes to reduce
              manual effort, errors, and delays."
            />

            <DTCard
              title="Data Integration & Analytics"
              text="Integration of multiple data sources to generate actionable
              insights and support faster, evidence-based decisions."
            />

            <DTCard
              title="Change Management & Adoption"
              text="Structured change management to ensure technology adoption
              by field teams, distributors, and stakeholders."
            />
          </div>
        </section>

        {/* ================= WHY I2V ================= */}
        <section className="mb-20 bg-gray-50 border border-gray-200 rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-[#222] text-center mb-8">
            Why I2V for Digital Transformation?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-neutral-700">
            <WhyItem text="Agri-domain-led digital thinking" />
            <WhyItem text="Strong understanding of field execution challenges" />
            <WhyItem text="Practical, scalable digital solutions" />
            <WhyItem text="Focus on adoption, not just implementation" />
            <WhyItem text="Integrated approach with GTM and execution" />
            <WhyItem text="Measured outcomes and continuous improvement" />
          </div>
        </section>

        {/* ================= EXECUTION BRIDGE ================= */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-[#222] mb-6">
            Digital Enablement for Execution Excellence
          </h2>

          <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-7 mb-8">
            Digital transformation delivers value only when it strengthens
            execution. Our execution services ensure that digital initiatives
            are embedded into daily workflows and drive measurable results.
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
            Ready to Accelerate Digital Adoption?
          </h2>

          <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
            Whether you are beginning your digital journey or scaling existing
            platforms, we help you design and implement digital solutions that
            deliver real business impact.
          </p>

          <Link
            to="/contact"
            className="inline-block px-10 py-3 bg-[#D32F2F] text-white font-semibold rounded-full hover:bg-[#B71C1C] transition"
          >
            Talk to Our Digital Experts
          </Link>
        </section>

      </div>
    </div>
  );
}

/* ================= HELPER COMPONENTS ================= */

function DTCard({ title, text }) {
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
    </div>
  );
}
