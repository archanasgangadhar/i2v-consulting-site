import { Link } from "react-router-dom";

export default function Training() {
  return (
    <div className="bg-white pt-28 pb-20 px-6" style={{ fontFamily: "Candara" }}>
      <div className="max-w-6xl mx-auto">

        {/* ================= PAGE HEADER ================= */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-[#222]">
            Capability <span className="text-[#D32F2F]">Training</span>
          </h1>

          <p className="mt-6 text-lg text-neutral-700 max-w-3xl mx-auto leading-7">
            Building field-ready capabilities that translate knowledge into
            confident execution and measurable performance.
          </p>
        </div>

        {/* ================= INTRO ================= */}
        <section className="mb-20 text-center">
          <p className="text-neutral-700 text-lg leading-7 max-w-4xl mx-auto">
            In agri-business, training is effective only when it improves
            behaviour on ground. Knowledge without application does not drive
            results.
            <br /><br />
            I2V Consulting designs and delivers practical training programs that
            strengthen technical understanding, selling skills, and execution
            discipline across the field force.
          </p>
        </section>

        {/* ================= TRAINING CATEGORIES ================= */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#222] text-center mb-10">
            Training Programs We Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <TrainingCard
              title="Sales & Market Development Training"
              points={[
                "Territory planning and coverage discipline",
                "Farmer engagement and relationship building",
                "Retailer and distributor management",
                "Objection handling and value-based selling",
              ]}
            />

            <TrainingCard
              title="Technical & Agronomy Training"
              points={[
                "Crop-wise agronomy fundamentals",
                "Product application and positioning",
                "Demonstration planning and execution",
                "Farmer problem diagnosis and solutions",
              ]}
            />

            <TrainingCard
              title="Supervisor & First-Line Manager Training"
              points={[
                "Team coaching and performance management",
                "Activity planning and review mechanisms",
                "Target setting and achievement tracking",
                "Field governance and compliance",
              ]}
            />

            <TrainingCard
              title="Leadership & Capability Building"
              points={[
                "Execution leadership mindset",
                "Decision-making and problem solving",
                "Cross-functional coordination",
                "Driving accountability and ownership",
              ]}
            />
          </div>
        </section>

        {/* ================= DELIVERY APPROACH ================= */}
        <section className="mb-20 bg-gray-50 border border-gray-200 rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-[#222] text-center mb-8">
            Our Training Delivery Approach
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-neutral-700">
            <ApproachItem text="Classroom and workshop-based sessions" />
            <ApproachItem text="Field-based coaching and live demonstrations" />
            <ApproachItem text="Role plays and real-life case discussions" />
            <ApproachItem text="Digital and blended learning formats" />
            <ApproachItem text="Pre- and post-training assessments" />
            <ApproachItem text="Continuous reinforcement and follow-ups" />
          </div>
        </section>

        {/* ================= WHY I2V ================= */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#222] text-center mb-10">
            Why I2V for Training?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-neutral-700">
            <WhyItem text="Training designed by practitioners, not theorists" />
            <WhyItem text="Strong alignment with GTM and execution strategy" />
            <WhyItem text="Agri-domain and crop-specific content" />
            <WhyItem text="Focus on behavioural change and productivity" />
            <WhyItem text="Scalable programs for large field teams" />
            <WhyItem text="Measured impact on execution outcomes" />
          </div>
        </section>

        {/* ================= EXECUTION LINK ================= */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-[#222] mb-6">
            Training That Strengthens Execution
          </h2>

          <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-7 mb-8">
            Our training programs are closely integrated with staffing, ATL/BTL
            activities, and digital execution tools — ensuring consistency
            between learning and on-ground application.
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
            Looking to Upskill Your Field Teams?
          </h2>

          <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
            Whether it is a new product launch, capability refresh, or leadership
            development — we help your teams perform with confidence and clarity.
          </p>

          <Link
            to="/contact"
            className="inline-block px-10 py-3 bg-[#D32F2F] text-white font-semibold rounded-full hover:bg-[#B71C1C] transition"
          >
            Discuss Training Requirements
          </Link>
        </section>

      </div>
    </div>
  );
}

/* ================= HELPER COMPONENTS ================= */

function TrainingCard({ title, points }) {
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

function ApproachItem({ text }) {
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
    </div>
  );
}
