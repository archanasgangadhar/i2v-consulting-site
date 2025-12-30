export default function OurStory() {
  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "Candara, ui-sans-serif, system-ui" }}
    >
      {/* HERO SECTION */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 pt-6 pb-1 lg:pt-10 lg:pb-1">
          <div className="grid lg:grid-cols-2 gap-5 items-center">
            {/* Left: Text */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#D32F2F] mb-3">
                <strong>
                  Idea to Value • Agri Go-To-Market • Digital Transformation
                </strong>
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight text-[#222222]">
                Our <span className="text-[#D32F2F]">Story</span>
              </h1>
              <p className="mt-4 text-sm sm:text-base text-neutral-700 leading-7">
                <strong>
                  I2V Consulting was born at the intersection of{" "}
                  strategy, technology, and on-ground execution. We are a
                  transformation partner for agri-input companies that want to
                  move from intuition-driven decisions to data-led,
                  execution-strong growth — from idea to value.
                </strong>
              </p>
              <p className="mt-3 text-sm sm:text-base text-neutral-700 leading-7">
                Over the years, we have worked across production, supply chain,
                field promotion, liquidation, and channel development — building
                digital journeys and execution frameworks that create visibility
                from farmer to boardroom. Our focus has always been simple:
                align people, process, and digital to deliver measurable impact
                in the field.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href="/services"
                  className="inline-flex items-center rounded-full bg-[#D32F2F] px-5 py-2.5 text-white text-sm shadow-md hover:bg-[#B71C1C] transition"
                >
                  Explore How We Work
                </a>
                <a
                  href="/about/mission"
                  className="inline-flex items-center rounded-full border border-[#D32F2F] px-5 py-2.5 text-sm text-[#D32F2F] hover:bg-[#FFF5F5] transition"
                >
                  View Our Mission
                </a>
              </div>
            </div>

            {/* Right: Image / Journey Card */}
            <div>
              <div className="relative rounded-3xl border border-neutral-200 shadow-lg overflow-hidden bg-[#F5F5F5]">
                <div className="h-64 sm:h-80 bg-cover bg-center relative">
                  {/* Replace src with your journey / team visual */}
                  <img
                    src="/assets/images/home2.jpg"
                    alt="Our journey in agri transformation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/10 to-transparent" />
                  {/* Overlay stats */}
                  <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-2 text-[11px]">
                    <MiniStat label="Agri Focus" value="End-to-end GTM" />
                    <MiniStat label="Engagements" value="Campaigns & Projects" />
                    <MiniStat label="Field Force" value="Managed Teams" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: FROM IDEA TO VALUE */}
      <section className="bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#222222]">
                <strong>From Idea to Value</strong>
              </h2>
              <p className="mt-2 text-sm text-neutral-700 max-w-2xl">
                We bridge the gap between leadership intent and last-mile
                execution using a structured approach — catalysing demand,
                building process discipline, and readying the organisation for
                transformation.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <PillarCard
              title="Catalyse Pull"
              text="Design campaigns, demonstrations, and farmer engagement journeys that build organic pull for your brands at the village level."
            />
            <PillarCard
              title="Catalyse Push"
              text="Strengthen channel programmes, retail visibility, and field force productivity with clear metrics and playbooks."
            />
            <PillarCard
              title="Create Process"
              text="Institutionalise repeatable processes, dashboards, and training so performance is not an event, but a habit."
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR JOURNEY SNAPSHOT */}
      <section className="bg-[#F5F5F5] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#222222]">
                Our Journey in Agri Transformation
              </h3>
              <p className="mt-3 text-sm text-neutral-700 leading-6">
                From early projects in field marketing and production support to
                large-scale digital GTM initiatives, our evolution has been
                driven by one question: how do we make every acre, retailer, and
                visit more productive for our clients and more valuable for the
                farmer?
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li>• Deep experience across agri-input, seeds, and allied services.</li>
                <li>• Hands-on engagement from campaign design to on-ground execution.</li>
                <li>• Focus on visibility — from retailer and farmer activity to liquidation.</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <h4 className="text-sm font-bold text-[#222222] mb-4">
                Transformation Themes We Work On
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs text-neutral-700">
                <Tag>Digital GTM & Campaigns</Tag>
                <Tag>Channel & Retail Transformation</Tag>
                <Tag>Farmer Visibility & Advisory</Tag>
                <Tag>Staffing & Managed Services</Tag>
                <Tag>Process & Compliance Training</Tag>
                <Tag>Drone-enabled Demonstrations</Tag>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CTA */}
      <section className="bg-[#222222] text-white border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center">
          <p className="text-xl sm:text-2xl font-bold">
            Ready to write the next chapter of your GTM story?
          </p>
          <p className="mt-3 text-sm text-neutral-300 max-w-xl mx-auto">
            We partner with leadership teams who want to combine strategy,
            digital, and disciplined execution to unlock new growth in agri.
          </p>
          <a
            href="/contact"
            className="mt-5 inline-flex items-center rounded-full bg-[#D32F2F] px-6 py-2.5 text-sm shadow-md hover:bg-[#B71C1C] transition"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
}

/* ---- Small Helper Components ---- */

function MiniStat({ label, value }) {
  return (
    <div className="bg-white/85 rounded-xl px-3 py-2 shadow flex flex-col gap-1">
      <div className="text-[10px] uppercase tracking-wide text-neutral-500">
        {label}
      </div>
      <div className="text-xs font-bold text-[#222222]">{value}</div>
    </div>
  );
}

function PillarCard({ title, text }) {
  return (
    <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition p-4">
      <h4 className="text-sm font-bold text-[#222222]">{title}</h4>
      <p className="mt-2 text-xs text-neutral-600 leading-5">{text}</p>
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#FFF0F0] text-[#D32F2F] px-3 py-1">
      {children}
    </span>
  );
}
