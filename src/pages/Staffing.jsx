<<<<<<< HEAD
import { Link } from "react-router-dom";

export default function Staffing() {
  return (
    <div className="bg-white pt-28 pb-20 px-6" style={{ fontFamily: "Candara" }}>
      <div className="max-w-6xl mx-auto">

        {/* ================= PAGE HEADER ================= */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-[#222]">
            Field Force <span className="text-[#D32F2F]">Staffing</span>
          </h1>

          <p className="mt-6 text-lg text-neutral-700 max-w-3xl mx-auto leading-7">
            Building high-quality, field-ready teams that deliver disciplined
            execution across crops, territories, and seasons.
          </p>
        </div>

        {/* ================= INTRO ================= */}
        <section className="mb-20 text-center">
          <p className="text-neutral-700 text-lg leading-7 max-w-4xl mx-auto">
            In agri-business, execution success depends heavily on the quality
            of the field force. The right people, deployed correctly, trained
            well, and governed with discipline, make the difference between
            strategy and results.
            <br /><br />
            I2V Consulting provides end-to-end staffing solutions for
            agri-businesses, ensuring teams are market-ready from day one.
          </p>
        </section>

        {/* ================= STAFFING ROLES ================= */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#222] text-center mb-10">
            Field Force Roles We Support
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <RoleCard
              title="Field Officers / Sales Officers"
              points={[
                "Primary interface with farmers, retailers, and influencers",
                "Product promotion, demonstrations, and field activities",
                "Territory coverage and relationship building",
                "Data capture, reporting, and feedback collection",
              ]}
            />

            <RoleCard
              title="Supervisors / Territory In-Charge"
              points={[
                "Supervision and coaching of Field Officers",
                "Execution planning and activity tracking",
                "Distributor and retailer coordination",
                "Performance monitoring and reporting",
              ]}
            />

            <RoleCard
              title="Area / Regional Managers"
              points={[
                "Regional execution leadership",
                "Target planning and achievement tracking",
                "Channel management and escalation handling",
                "Alignment with GTM and marketing strategies",
              ]}
            />

            <RoleCard
              title="Technical / Agronomy Staff"
              points={[
                "Crop advisory and technical support",
                "Farmer education and best practice sharing",
                "Demo planning and evaluation",
                "Technical training for field teams",
              ]}
            />
          </div>
        </section>

        {/* ================= STAFFING CAPABILITIES ================= */}
        <section className="mb-20 bg-gray-50 border border-gray-200 rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-[#222] text-center mb-8">
            Our Staffing Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-neutral-700">
            <Capability text="Large-scale field force deployment" />
            <Capability text="Pan-India and regional staffing coverage" />
            <Capability text="Crop and market-specific hiring" />
            <Capability text="Rapid onboarding and mobilisation" />
            <Capability text="Integrated training and induction support" />
            <Capability text="Performance monitoring & governance" />
          </div>
        </section>

        {/* ================= WHY I2V ================= */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#222] text-center mb-10">
            Why I2V for Field Staffing?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-neutral-700">
            <WhyItem text="Deep understanding of agri field realities" />
            <WhyItem text="Strong execution governance framework" />
            <WhyItem text="Integration with training and execution programs" />
            <WhyItem text="Flexibility for seasonal and project-based needs" />
            <WhyItem text="Proven experience with large agri organisations" />
            <WhyItem text="Focus on productivity, not just headcount" />
          </div>
        </section>

        {/* ================= EXECUTION LINK ================= */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-[#222] mb-6">
            Staffing That Drives Execution
          </h2>

          <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-7 mb-8">
            Our staffing solutions are closely integrated with training,
            ATL/BTL activities, and digital execution tools — ensuring
            consistency, accountability, and impact.
          </p>

          <Link
            to="/services/execution"
            className="inline-block px-8 py-3 bg-[#D32F2F] text-white font-semibold rounded-full hover:bg-[#B71C1C] transition"
          >
            Explore Execution Services
          </Link>
        </section>

        {/* ================= CTA ================= */}
        <section className="text-center border-t border-gray-200 pt-14">
          <h2 className="text-3xl font-bold text-[#222] mb-4">
            Need a Reliable Field Force?
          </h2>

          <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
            Whether you need to scale up for a product launch, seasonal push,
            or long-term deployment — we help you build teams that deliver.
          </p>

          <Link
            to="/contact"
            className="inline-block px-10 py-3 bg-[#D32F2F] text-white font-semibold rounded-full hover:bg-[#B71C1C] transition"
          >
            Discuss Staffing Requirements
          </Link>
        </section>

      </div>
    </div>
  );
}

/* ================= HELPER COMPONENTS ================= */

function RoleCard({ title, points }) {
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

function Capability({ text }) {
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
export default function Staffing() {
  return (
    <div className="pt-24 px-6" style={{ fontFamily: 'Candara' }}>
      <h1 className="text-4xl font-bold text-[#222]">
        Staffing <span className="text-[#D32F2F]">Solutions</span>
      </h1>
      <p className="mt-4 text-neutral-700 text-lg">
        Dummy Staffing Page.
      </p>
>>>>>>> 824dcd6460ac3d92cd37b815f3c1c7d2a85ba8c7
    </div>
  );
}
