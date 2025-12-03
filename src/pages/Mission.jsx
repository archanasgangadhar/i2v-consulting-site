export default function Mission() {
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
                <strong>Mission • Values • Transformation Philosophy</strong>
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight text-[#222222]">
                Our <span className="text-[#D32F2F]">Mission</span>
              </h1>
              <p className="mt-4 text-sm sm:text-base text-neutral-700 leading-7">
                Our mission is to build a smarter, connected, and future-ready
                agricultural ecosystem by uniting market intelligence, digital
                innovation, and on-ground excellence.
              </p>
              <p className="mt-3 text-sm sm:text-base text-neutral-700 leading-7">
                We enable agri-businesses to unlock true value through precision
                Go-To-Market strategies, farmer-centric engagement, and
                transformative execution. By integrating data, technology, and
                human insight, we ensure every product reaches its full
                potential from idea to impact — creating sustainable growth for
                our partners and meaningful outcomes for farmers.
              </p>
            </div>

            {/* Right: Mission Visual */}
            <div>
              <div className="relative rounded-3xl border border-neutral-200 shadow-lg overflow-hidden bg-[#F5F5F5]">
                <div className="h-64 sm:h-80 bg-cover bg-center relative">
                  <img
                    src="/assets/images/SE.png"
                    alt="Mission driven execution"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />
                  {/* Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2 text-[11px]">
                    <MissionStat label="Strategy" value="Sharp GTM & Design" />
                    <MissionStat label="Execution" value="Disciplined Field Ops" />
                    <MissionStat label="Results" value="Measurable Impact" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: CORE VALUES & PRINCIPLES */}
      <section className="bg-[#F5F5F5] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Core Values */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <h3 className="text-lg font-bold text-[#222222]">Core Values</h3>
              <p className="text-xs text-neutral-600 mt-1">
                How we show up with our clients, partners, and in the field.
              </p>
              <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                <ValueItem label="Safety" />
                <ValueItem label="Ethics" />
                <ValueItem label="Respect for People" />
              </ul>
            </div>

            {/* Operating Philosophy */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <h3 className="text-lg font-bold text-[#222222]">
                Strategy • Execution • Results
              </h3>
              <p className="text-xs text-neutral-600 mt-1">
                Our work is anchored in clarity, discipline, and outcomes.
              </p>
              <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                <MissionLine
                  title="Strategy"
                  text="Define clear GTM choices, segmentation, and channel plays that reflect ground realities."
                />
                <MissionLine
                  title="Execution"
                  text="Translate strategy into simple, repeatable playbooks for field teams, partners, and channels."
                />
                <MissionLine
                  title="Results"
                  text="Track what matters — from retailer reach and farmer adoption to liquidation and ROI."
                />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW WE TRANSFORM */}
      <section className="bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#222222]">
                <strong>How We Drive Transformation</strong>
              </h2>
              <p className="mt-2 text-sm text-neutral-700 max-w-2xl">
                We don’t just design frameworks; we stay with the execution,
                helping clients adapt, learn, and scale across seasons and
                geographies.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TransformCard
              title="Digital First"
              text="Build visibility and control through digital journeys that connect field, channel, and HQ."
            />
            <TransformCard
              title="People Centric"
              text="Equip field teams, retailers, and partners with the right tools, training, and support."
            />
            <TransformCard
              title="Outcome Driven"
              text="Design metrics that matter — adoption, productivity, and long-term value creation."
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: CTA */}
      <section className="bg-[#222222] text-white border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center">
          <p className="text-xl sm:text-2xl font-bold">
            Let&apos;s turn your strategy into visible, measurable outcomes.
          </p>
          <p className="mt-3 text-sm text-neutral-300 max-w-xl mx-auto">
            Whether you&apos;re reimagining GTM, scaling a pilot, or digitising
            field execution, we can help you design, deploy, and sustain the
            journey.
          </p>
          <a
            href="/contact"
            className="mt-5 inline-flex items-center rounded-full bg-[#D32F2F] px-6 py-2.5 text-sm shadow-md hover:bg-[#B71C1C] transition"
          >
            Discuss Your Mission
          </a>
        </div>
      </section>
    </div>
  );
}

/* ---- Helper Components ---- */

function MissionStat({ label, value }) {
  return (
    <div className="bg-white/90 rounded-xl px-3 py-2 shadow flex flex-col gap-1">
      <div className="text-[10px] text-neutral-500 uppercase tracking-wide">
        {label}
      </div>
      <div className="text-xs font-bold text-[#D32F2F]">{value}</div>
    </div>
  );
}

function ValueItem({ label }) {
  return (
    <div className="flex items-center gap-2">
      <CheckIcon />
      <span>{label}</span>
    </div>
  );
}

function MissionLine({ title, text }) {
  return (
    <li className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <TargetIconSmall />
        <span className="font-semibold">{title}</span>
      </div>
      <p className="text-xs text-neutral-600 leading-5 pl-6">{text}</p>
    </li>
  );
}

function TransformCard({ title, text }) {
  return (
    <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition p-4">
      <h4 className="text-sm font-bold text-[#222222]">{title}</h4>
      <p className="mt-2 text-xs text-neutral-600 leading-5">{text}</p>
    </div>
  );
}

/* Icons reused in same visual language as Execution.jsx */

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D32F2F"
      strokeWidth="2"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function TargetIconSmall() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D32F2F"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
