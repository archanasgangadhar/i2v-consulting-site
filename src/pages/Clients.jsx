export default function Clients() {
  return (
    <div
      className="bg-white min-h-screen pt-16 pb-20"
      style={{ fontFamily: "Candara" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* PAGE TITLE */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#222]">
            Our <span className="text-[#D32F2F]">Clients</span>
          </h1>
          <p className="text-neutral-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            We partner with leading organisations to drive Go-To-Market,
            execution, and digital transformation outcomes in the agri domain.
          </p>
        </div>

        {/* HIGHLIGHT CLIENT BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Left: Bayer Client Card */}
          <div className="bg-[#F7F7F7] rounded-2xl border border-neutral-300 shadow-sm p-8">
            <h2 className="text-xl font-bold text-[#222] mb-2">
              Bayer CropScience
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] text-[#D32F2F] mb-4">
              Strategic Agri Partner
            </p>

            <p className="text-sm text-neutral-700 leading-6">
              Bayer CropScience has been a valued client of I2V for nearly{" "}
              <strong>10 years</strong>. Over this period, we have partnered
              across multiple seasons and projects to strengthen field
              execution, farmer engagement, and Go-To-Market initiatives.
            </p>

            <p className="text-sm text-neutral-700 leading-6 mt-3">
              We are proud to continue this relationship in the{" "}
              <strong>current financial year</strong>, with a fresh project
              mandate that further deepens our collaboration in the agri-input
              ecosystem.
            </p>

            <div className="mt-5">
              <h3 className="text-sm font-semibold text-[#222] mb-2">
                Engagement Highlights
              </h3>
              <ul className="list-disc list-inside text-sm text-neutral-700 space-y-1">
                <li>Long-term partnership spanning ~10 years.</li>
                <li>Field marketing and execution support.</li>
                <li>Farmer and channel engagement programs.</li>
                <li>New project awarded again this financial year.</li>
              </ul>
            </div>
          </div>

          {/* Right: Relationship / Philosophy Card */}
          <div className="bg-white rounded-2xl border border-neutral-300 shadow-sm p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#222] mb-3">
                How We Work With Our Clients
              </h2>
              <p className="text-sm text-neutral-700 leading-6">
                Our client relationships are built on{" "}
                <strong>trust, performance, and continuity</strong>. We stay
                closely aligned with leadership goals while remaining deeply
                grounded in field realities.
              </p>
              <p className="text-sm text-neutral-700 leading-6 mt-3">
                With every engagement, our focus is to move from{" "}
                <strong>idea to value</strong> — designing practical Go-To-Market
                approaches and ensuring on-ground execution delivers measurable
                results.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li>• Long-term partnerships, not one-time projects.</li>
                <li>• Clear metrics and visibility on field outcomes.</li>
                <li>• Seamless coordination between client teams and our field force.</li>
              </ul>
            </div>

            <div className="mt-6">
              <p className="text-xs text-neutral-500">
                If you’d like to explore how we can partner with your organisation, 
                we’d be happy to connect.
              </p>
              <a
                href="/contact"
                className="inline-block mt-3 px-6 py-2.5 bg-[#D32F2F] text-white text-sm font-semibold rounded-full shadow-md hover:bg-[#B71C1C] transition"
              >
                Talk to Us
              </a>
            </div>
          </div>
        </div>

        {/* FUTURE-READY SECTION */}
        <div className="mt-14 text-center">
          <p className="text-sm text-neutral-600">
            More client stories and case studies will be added as we expand our
            portfolio of transformation and execution partnerships.
          </p>
        </div>
      </div>
    </div>
  );
}
