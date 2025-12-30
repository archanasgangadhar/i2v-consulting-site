export default function Team() {
  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "Candara, ui-sans-serif, system-ui" }}
    >
      {/* HERO SECTION */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 pt-6 pb-1 lg:pt-10 lg:pb-1">
          <div className="grid lg:grid-cols-2 gap-5 items-center">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#D32F2F] mb-3">
                <strong>Leadership • Execution Team • Field Network</strong>
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight text-[#222222]">
                Our <span className="text-[#D32F2F]">Team</span>
              </h1>
              <p className="mt-4 text-sm sm:text-base text-neutral-700 leading-7">
                Behind every transformation story is a team that listens, thinks,
                and executes together. Our leadership combines deep agri-domain
                expertise with a sharp understanding of Go-To-Market, while our
                on-ground teams bring discipline, energy, and empathy to every
                interaction.
              </p>
              <p className="mt-3 text-sm sm:text-base text-neutral-700 leading-7">
                We work as one unit — leadership, project office, and field —
                to ensure that every visit, every demo, and every campaign is
                aligned to clear outcomes.
              </p>
            </div>

            {/* Right: Team Image */}
            <div>
              <div className="relative rounded-3xl border border-neutral-200 shadow-lg overflow-hidden bg-[#F5F5F5]">
                <div className="h-64 sm:h-80 bg-cover bg-center relative">
                  <img
                    src="/assets/images/teamwork-makes-dream-work.jpg"
                    alt="Team at work"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-xs text-white max-w-xs">
                    <p className="font-semibold">
                      “Teamwork that connects the last mile to leadership.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: LEADERSHIP */}
      <section className="bg-[#F5F5F5] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#222222]">
                Leadership Team
              </h2>
              <p className="mt-2 text-sm text-neutral-700 max-w-2xl">
                Our directors bring a blend of field experience, strategic
                thinking, and transformation mindset to every engagement.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Director 1 */}
            <LeaderCard
              name="Tusharika Sinha"
              role="Director"
              imgSrc="/assets/images/tusharika.jpg"
              bio="Leads transformation programmes with a strong focus on digital GTM, capability building, and people-centric change in agri-input organisations."
            />

            {/* Director 2 */}
            <LeaderCard
              name="Anjaneyulu S V S"
              role="Director"
              imgSrc="/assets/images/SVS.jpg"
              bio="Brings deep experience in agri-channel development, field execution, and designing scalable, process-driven Go-To-Market models."
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: EXECUTION & FIELD FORCE */}
      <section className="bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#222222]">
                The Execution Engine
              </h3>
              <p className="mt-3 text-sm text-neutral-700 leading-6">
                Our project and field teams are structured to deliver consistent,
                compliant, and high-quality execution — across seasons, states,
                and crops. From staffing and training to monitoring and
                productivity management, we stay close to the ground.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li>• Dedicated project office for planning, analytics, and reporting.</li>
                <li>• Field officers aligned to campaigns, crops, and geographies.</li>
                <li>• Clear playbooks, digital tools, and training to ensure consistency.</li>
              </ul>
            </div>

            <div className="bg-[#F5F5F5] rounded-2xl shadow-sm border border-neutral-200 p-6">
              <h4 className="text-sm font-bold text-[#222222] mb-4">
                How Our Teams Partner With You
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-700">
                <Tag>Onboard & Train Field Teams</Tag>
                <Tag>Plan & Execute Campaigns</Tag>
                <Tag>Monitor & Drive Productivity</Tag>
                <Tag>Ensure Compliance & Reporting</Tag>
                <Tag>Support Retailer & Farmer Engagement</Tag>
                <Tag>Enable Digital & Drone-led Initiatives</Tag>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CTA */}
      <section className="bg-[#222222] text-white border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center">
          <p className="text-xl sm:text-2xl font-bold">
            Work with a team that owns the outcome, not just the plan.
          </p>
          <p className="mt-3 text-sm text-neutral-300 max-w-xl mx-auto">
            From leadership to last-mile field execution, we operate as one
            extended team with our clients.
          </p>
          <a
            href="/contact"
            className="mt-5 inline-flex items-center rounded-full bg-[#D32F2F] px-6 py-2.5 text-sm shadow-md hover:bg-[#B71C1C] transition"
          >
            Meet the Team
          </a>
        </div>
      </section>
    </div>
  );
}

/* ---- Helper Components ---- */

function LeaderCard({ name, role, imgSrc, bio }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-5 flex flex-col sm:flex-row gap-4 items-start">
      <div className="w-28 h-28 rounded-2xl overflow-hidden bg-neutral-100 flex-shrink-0">
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h4 className="text-sm font-bold text-[#222222]">{name}</h4>
        <p className="text-xs text-[#D32F2F] font-semibold mt-1">{role}</p>
        <p className="mt-2 text-xs text-neutral-600 leading-5">{bio}</p>
      </div>
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
