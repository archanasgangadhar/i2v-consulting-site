import { Link } from "react-router-dom";
import TriangleBalance from "../components/TriangleBalance_new";

export default function Home() {
  return (
    <div className="bg-white" style={{ fontFamily: "Candara" }}>

      {/* ================= HERO SECTION ================= */}
      <section className="pt-32 pb-20 text-center px-6 bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold text-[#222] leading-tight">
          Turning <span className="text-[#D32F2F]">Ideas</span> into{" "}
          <span className="text-[#D32F2F]">Value</span>
        </h1>

        <p className="mt-6 text-lg text-neutral-700 max-w-3xl mx-auto leading-7">
          I2V Consulting partners with agri-businesses to design strong
          Go-To-Market strategies and deliver execution excellence across
          markets, channels, and field operations.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/services/consultancy"
            className="px-8 py-3 bg-[#D32F2F] text-white rounded-full font-semibold hover:bg-[#B71C1C] transition"
          >
            Our Consulting
          </Link>

          <Link
            to="/services/execution"
            className="px-8 py-3 border border-[#D32F2F] text-[#D32F2F] rounded-full font-semibold hover:bg-[#D32F2F] hover:text-white transition"
          >
            Execution Services
          </Link>
        </div>
      </section>

      {/* ================= TRIANGLE MODEL ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#222] mb-6">
            Our Core Philosophy
          </h2>

          <p className="text-neutral-700 max-w-3xl mx-auto mb-12 leading-7">
            Sustainable growth happens when <strong>Product</strong>,
            <strong> Process</strong>, and <strong>People</strong> are aligned.
            We help organisations identify imbalances and build harmony across
            all three dimensions.
          </p>

          <div className="flex justify-center">
            <TriangleBalance />
          </div>
        </div>
      </section>

      {/* ================= CONSULTANCY ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#222] text-center mb-10">
            Consultancy Services
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <ServiceCard
              title="Go-To-Market Strategy"
              text="Market segmentation, crop-cluster focus, channel strategy,
              launch planning, and execution frameworks designed specifically
              for agri-business realities."
              link="services/consultancy/go-to-market"
            />

            <ServiceCard
              title="Digital Transformation"
              text="Digitising field operations, dashboards, performance tracking,
              and decision-making systems to improve visibility and speed."
              link="services/consultancy/digital-transformation"
            />
          </div>
        </div>
      </section>

      {/* ================= EXECUTION ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#222] text-center mb-10">
            Execution Capabilities
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <SmallCard title="Staffing" />
            <SmallCard title="Training" />
            <SmallCard title="ATL / BTL" />
            <SmallCard title="Drone Solutions" />
          </div>

          <div className="text-center mt-10">
            <Link
              to="services/execution"
              className="text-[#D32F2F] font-semibold underline"
            >
              Explore Execution Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CREDIBILITY ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#222] mb-6">
            Trusted by Industry Leaders
          </h2>

          <p className="text-neutral-700 text-lg leading-7">
            We have partnered with <strong>Bayer Crop Science</strong> for over
            <strong> 10 years</strong>, supporting multiple Go-To-Market and
            execution initiatives — including renewed engagement in the current
            financial year.
          </p>
        </div>
      </section>

      {/* ================= WHY I2V ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#222] text-center mb-10">
            Why I2V Consulting
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-neutral-700">
            <WhyItem text="Deep agri-domain expertise" />
            <WhyItem text="Strong field-level execution understanding" />
            <WhyItem text="Balanced focus on strategy and delivery" />
            <WhyItem text="Data-driven and practical recommendations" />
            <WhyItem text="Pan-India execution capability" />
            <WhyItem text="Long-term partnership mindset" />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 bg-[#D32F2F] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Value Together
        </h2>

        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Whether you are launching a product, scaling execution, or
          transforming your organisation — we’re ready to partner with you.
        </p>

        <Link
          to="/contact"
          className="inline-block px-10 py-3 bg-white text-[#D32F2F] font-semibold rounded-full hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>

    </div>
  );
}

/* ================= HELPER COMPONENTS ================= */

function ServiceCard({ title, text, link }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-[#222] mb-3">{title}</h3>
      <p className="text-neutral-700 leading-6 mb-4">{text}</p>
      <Link to={link} className="text-[#D32F2F] font-semibold underline">
        Learn more →
      </Link>
    </div>
  );
}

function SmallCard({ title }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 text-center shadow-sm">
      <h3 className="font-bold text-[#222]">{title}</h3>
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
