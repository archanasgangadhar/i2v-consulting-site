export default function Execution() {
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
               <p className="text-xs tracking-[0.2em] uppercase text-[#D32F2F] mb-3"><strong>Transformation Partner • Digital Solutioneering <br></br>• Design / Development • Agri-Tech</strong>
                
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight text-[#222222]">
                The <span className="text-[#D32F2F]">Transformation </span>Team
              </h1>
              <p className="mt-4 text-sm sm:text-base text-neutral-700 leading-7">
                <strong>At I2V Consulting, we partner with organizations to transform capability, 
                  refine processes, enhance execution, and build a culture of training and 
                  compliance — powered by modern technology and digitalization tailored for 
                  agri-input companies, delivering stronger performance and superior ROI by Real-time field visibility.{" "}</strong>
                               
              </p>

              <div className="mt-6 flex flex-wrap gap-1">
                <a
                  href="/services"
                  className="inline-flex items-center rounded-full bg-[#D32F2F] px-5 py-2.5 text-white text-sm shadow-md hover:bg-[#B71C1C] transition"
                >
                  Explore Services
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-[#D32F2F] px-5 py-2.5 text-sm text-[#D32F2F] hover:bg-[#FFF5F5] transition"
                >
                  Talk to Our Team
                </a>
              </div>

              
            </div>

            {/* Right: Data / Drone Hero Card */}
            <div>
              <div className="relative rounded-3xl border border-neutral-200 shadow-lg overflow-hidden bg-[#F5F5F5]">
                {/* Background */}
                <div className="h-64 sm:h-82 bg-cover bg-center relative"
                  
                ><img   src="/assets/images/SE.png"
                alt="Structured Execution"
                className="w-full h-auto mx-auto"
              style={{ objectFit: "contain" }}
              />

                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/10 to-transparent" />
<br></br>
                  {/* Data overlay block */}
                 {/*  <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-2 text-[11px]">
                    <HeroKPI label="States" value="12+" />
                    <HeroKPI label="Field Activities" value="2500+" />
                    <HeroKPI label="GTM Velocity" value="1.4×" />
                  </div> */ }

                  {/* Drone icon bubble */}
                  <div className="absolute top-4 right-4 bg-white/90 rounded-2xl px-3 py-2 shadow-md flex items-center gap-2 text-xs">
                    <DroneIcon />
                    <span>Drone-enabled Agri</span>
                  </div>
                </div>
                {/* Bottom little “analytics” strip */}                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHAT WE DO */}
      <section className="bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div class="bg-gradient-to-r from-white to-red-900">
              <h2 className="text-xl sm:text-2xl font-bold text-[#222222]">
                {/*     */ } <strong>What We Do</strong> -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FFFFFF]">Technology-driven solutions from strategy to execution.</span> 
              </h2>
              
            </div>
           
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <ServiceCard
              icon={<ChipIcon />}
              title="Digital Transformation"
              text="Design, build, and deploy digital journeys that connect HQ dashboards to last-mile execution."
            />
            <ServiceCard
              icon={<TargetIcon />}
              title="Go-To-Market Strategy"
              text="Sharper segmentation, channel strategy, ATL–BTL planning, and sales process optimization."
            />
            <ServiceCard
              icon={<UsersIcon />}
              title="Staffing Solutions"
              text="Agile staffing and field execution teams aligned to your campaign and seasonal needs."
            />
            <ServiceCard
              icon={<TrainingIcon />}
              title="Training & Capability"
              text="Structured training for field teams, dealer staff, and partners to drive consistent execution."
            />
            <ServiceCard
              icon={<DroneIcon />}
              title="Drone-Enabled Agri"
              text="Coverage planning, drone-based demonstrations, and geo-tagged activity analytics."
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: CORE VALUES & MISSION */}
      <section className="bg-[#F5F5F5] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Core Values */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <img src="/assets/images/decade2.png" className="h-80" /><h3 className="text-lg font-bold text-[#222222]">Core Values</h3>
              <p className="text-xs text-neutral-600 mt-1">
                How we show up in the field, boardroom, and on the ground.
              </p>
              <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                <strong><ValueItem label="Safety" />                 <ValueItem label="Ethics" />
                <ValueItem label="Respect for People" /></strong>
                
              </ul>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <h3 className="text-lg font-bold text-[#222222]">Mission</h3>
              <p className="text-xs text-neutral-600 mt-1">
                Turning strategy into measurable outcomes.
              </p>
              <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                <MissionItem label="Strategy" />
                <MissionItem label="Execution" />
                <MissionItem label="Results" />
              </ul>

              {/* Infographic-like mini bar chart */}
              <div className="mt-5">
                
                <div className="w-130 h-auto">
  <img
    src="/assets/images/home2.jpg"
    alt="My Image"
    className="w-full h-auto rounded-xl"
  />
</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TRUSTED BY INDUSTRY */}
      <section className="bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-[#222222]">
                Trusted by Industry
              </h3>
              <p className="mt-1 text-sm text-neutral-600">
                Experience across global and Indian agri, input, and allied sectors.
              </p>
            </div>
            <p className="text-xs text-neutral-500 max-w-sm">
              Placeholder logos below can be replaced with partner or client identities.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {["AgriCorp", "RuralReach", "CropTech", "InputPlus", "FieldForce", "DataGrow"].map(
              (name) => (
                <div
                  key={name}
                  className="h-16 rounded-xl border border-dashed border-neutral-300 flex items-center justify-center text-xs text-neutral-500 bg-neutral-50"
                >
                  {name} Logo
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* SECTION 4: CTA FOOTER STRIP */}
      <section className="bg-[#222222] text-white border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center">
          <p className="text-xl sm:text-2xl font-bold">
            “Integrity. Innovation. Impact.”
          </p>
          <p className="mt-3 text-sm text-neutral-300 max-w-xl mx-auto">
            From GTM strategy to drone-enabled field execution, we help you align people,
            process, and digital to deliver real business outcomes.
          </p>
          <a
            href="/contact"
            className="mt-5 inline-flex items-center rounded-full bg-[#D32F2F] px-6 py-2.5 text-sm shadow-md hover:bg-[#B71C1C] transition"
          >
            Schedule a Conversation
          </a>
        </div>
      </section>
    </div>
  );
}

/* --------- Small Helper Components (JS Only, no Typescript) --------- */

function MiniStat({ label, value }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-wide text-neutral-500">
        {label}
      </div>
      <div className="text-xs text-[#222222]">{value}</div>
    </div>
  );
}

function HeroKPI({ label, value }) {
  return (
    <div className="bg-white/90 rounded-xl px-3 py-2 shadow flex flex-col gap-1">
      <div className="text-[10px] text-neutral-500 uppercase tracking-wide">
        {label}
      </div>
      <div className="text-sm font-bold text-[#D32F2F]">{value}</div>
    </div>
  );
}

function ServiceCard({ icon, title, text }) {
  return (
    <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[#FFF0F0] flex items-center justify-center">
          {icon}
        </div>
        <h4 className="text-sm font-bold text-[#222222]">{title}</h4>
      </div>
      <p className="text-xs text-neutral-600 leading-5">{text}</p>
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

function MissionItem({ label }) {
  return (
    <div className="flex items-center gap-2">
      <TargetIconSmall />
      <span>{label}</span>
    </div>
  );
}

function Bar({ height, label, highlight }) {
  return (
    <div className="flex flex-col items-center flex-1">
      <div
        className={`w-4 rounded-full ${
          highlight ? "bg-[#D32F2F]" : "bg-[#FFBDBD]"
        }`}
        style={{ height }}
      ></div>
      <div className="mt-1 text-[10px] text-neutral-500">{label}</div>
    </div>
  );
}

/* --------- Simple Line Icons (SVG) --------- */

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

function ChipIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D32F2F"
      strokeWidth="1.8"
    >
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D32F2F"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D32F2F"
      strokeWidth="1.8"
    >
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="11" r="3" />
      <path d="M3 21c1.5-3 4-4 6-4s4.5 1 6 4" />
    </svg>
  );
}

function TrainingIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D32F2F"
      strokeWidth="1.8"
    >
      <path d="M3 7l9-4 9 4-9 4-9-4z" />
      <path d="M12 11v9" />
      <path d="M5 10v6l7 4 7-4v-6" />
    </svg>
  );
}

function DroneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D32F2F"
      strokeWidth="1.8"
    >
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M8 8l8 8M16 8l-8 8" />
    </svg>
  );
}
