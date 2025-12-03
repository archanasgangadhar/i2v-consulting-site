import { FiGift, FiUsers, FiStar, FiSend } from "react-icons/fi";

export default function Referral() {
  return (
    <div
      className="bg-white min-h-screen pt-16 pb-20"
      style={{ fontFamily: "Candara" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#222]">
            Employee <span className="text-[#D32F2F]">Referral Program</span>
          </h1>
          <p className="text-neutral-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Great teams are built by great people.  
            Help us bring talented individuals into I2V and earn exciting rewards
            for every successful referral!
          </p>
        </div>

        {/* Encouragement Section */}
        <div className="bg-[#F7F7F7] rounded-2xl border border-neutral-300 shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#222] mb-4">Why Refer?</h2>
          <p className="text-sm text-neutral-700 leading-6 mb-4">
            At I2V, we believe that the best talent often comes through our own people.
            You understand our values, our culture, and the kind of people who thrive here.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <li className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm text-center">
              <FiUsers className="text-[#D32F2F] text-3xl mx-auto mb-2" />
              <h3 className="text-md font-semibold text-[#222]">Grow the Team</h3>
              <p className="text-xs text-neutral-600 mt-1">
                Help us find capable team members who strengthen our field & digital capabilities.
              </p>
            </li>

            <li className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm text-center">
              <FiStar className="text-[#D32F2F] text-3xl mx-auto mb-2" />
              <h3 className="text-md font-semibold text-[#222]">Earn Rewards</h3>
              <p className="text-xs text-neutral-600 mt-1">
                Successful referrals are rewarded with bonuses or recognition from leadership.
              </p>
            </li>

            <li className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm text-center">
              <FiGift className="text-[#D32F2F] text-3xl mx-auto mb-2" />
              <h3 className="text-md font-semibold text-[#222]">Make a Difference</h3>
              <p className="text-xs text-neutral-600 mt-1">
                Your recommendation could help someone build a meaningful career.
              </p>
            </li>
          </ul>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#222] mb-6 text-center">
            How the Referral Program Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Find Talent"
              text="Know someone who would be a great fit? Whether field roles or digital roles — refer them!"
            />
            <StepCard
              number="2"
              title="Share Their Details"
              text="Submit the candidate information using the referral submission form below."
            />
            <StepCard
              number="3"
              title="Earn Rewards"
              text="If your referred candidate joins and completes probation — you earn referral benefits!"
            />
          </div>
        </div>

        {/* Referral Form */}
        <div
          className="bg-[#F7F7F7] rounded-2xl border border-neutral-300 shadow-sm p-8"
        >
          <h2 className="text-2xl font-bold text-[#222] mb-4 text-center">
            Submit a Referral
          </h2>
          <p className="text-neutral-700 text-sm text-center mb-6 max-w-xl mx-auto">
            Fill out the details below and our HR team will reach out to the candidate.
          </p>

          <form className="space-y-5 max-w-xl mx-auto">
            <Input label="Your Name" placeholder="Enter your name" />
            <Input label="Your Email" placeholder="Enter your email" />
            <Input label="Candidate Name" placeholder="Enter candidate name" />
            <Input label="Candidate Phone" placeholder="Enter candidate number" />
            <Input label="Candidate Email" placeholder="Enter candidate email" />
            <Input label="Role Referred For" placeholder="E.g. Field Officer / Developer" />

            <button
              type="submit"
              className="
                w-full bg-[#D32F2F] text-white py-3 rounded-xl text-sm font-semibold
                shadow-md hover:bg-[#B71C1C] transition flex items-center justify-center gap-2
              "
            >
              <FiSend className="text-lg" />
              Submit Referral
            </button>
          </form>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-neutral-600">
            Let’s build a stronger I2V family — one great referral at a time.
          </p>
        </div>

      </div>
    </div>
  );
}

/* ---- Reusable Components ---- */

function StepCard({ number, title, text }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6 text-center">
      <div className="text-4xl font-bold text-[#D32F2F] mb-3">{number}</div>
      <h3 className="text-lg font-semibold text-[#222]">{title}</h3>
      <p className="text-sm text-neutral-600 mt-2 leading-6">{text}</p>
    </div>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="text-sm text-neutral-700 font-semibold">{label}</label>
      <input
        type="text"
        className="
          w-full mt-1 border border-neutral-300 p-3 rounded-xl 
          focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F]
        "
        placeholder={placeholder}
      />
    </div>
  );
}
