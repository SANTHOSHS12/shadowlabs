import salesGlobalRef from "../assets/sales_global_ref.png";
import salesPitchRef from "../assets/sales_pitch_ref.png";
import salesConversionsRef from "../assets/sales_conversions_ref.png";
import salesEquityRef from "../assets/sales_equity_ref.png";

export default function FeaturesSales() {
  return (
    <section className="bg-gray-50 py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <h2 className="text-base text-gray-900 mb-4 uppercase tracking-wide">
            <span className="font-medium text-gray-500">For </span>
            <span className="font-extrabold text-gray-900">Sales Professionals</span>
          </h2>
          <p className="text-xl text-gray-800 max-w-4xl mb-8 font-medium leading-relaxed">
            Access instant facts, handle objections confidently, adapt your storytelling and tone, and communicate clearly—even in mixed languages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Make Your Team Global */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group min-h-[500px] flex flex-col">
            <div className="relative z-10 mb-8">
              <h4 className="text-3xl font-bold mb-4 text-gray-900">Make Your Team Global</h4>
              <p className="text-gray-600 font-medium text-lg leading-relaxed">
                Help reps sell across regions and industries by bridging language, cultural and context gaps on every call.
              </p>
            </div>
            <div className="mt-auto relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img src={salesGlobalRef} alt="Global Team Feature" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Card 2: Personalised Sales Pitch */}
          <div className="bg-gradient-to-b from-blue-50 to-white rounded-3xl p-8 border border-blue-100/50 shadow-sm relative overflow-hidden group min-h-[500px] flex flex-col">
            <div className="relative z-10 mb-8">
              <h4 className="text-3xl font-bold mb-4 text-gray-900">Personalised Sales Pitch</h4>
              <p className="text-gray-600 font-medium text-lg leading-relaxed">
                Shadow listens for intent and willingness to pay in real time, and nudges reps to the right offer, price and proof.
              </p>
            </div>
            <div className="mt-auto relative rounded-2xl overflow-hidden shadow-lg border border-blue-100">
              <img src={salesPitchRef} alt="Personalised Pitch Feature" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Card 3: Higher Sales Conversions (Full Width or Large?) - Design shows it as a large card 
              Actually usually these are 2x2 grid. Let's stick to 2 cols for now unless image dimensions suggest otherwise.
          */}
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-8 border border-teal-100/50 shadow-sm relative overflow-hidden group min-h-[500px] flex flex-col">
            <div className="relative z-10 mb-8">
              <h4 className="text-3xl font-bold mb-4 text-gray-900">Higher Sales Conversions</h4>
              <p className="text-gray-600 font-medium text-lg leading-relaxed">
                Help your reps run focused conversations that uncover real needs and move deals to close.
              </p>
            </div>
            <div className="mt-auto relative rounded-2xl overflow-hidden shadow-lg">
              <img src={salesConversionsRef} alt="Higher Conversions Feature" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Card 4: Performance Equity */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group min-h-[500px] flex flex-col">
            <div className="relative z-10 mb-8">
              <h4 className="text-3xl font-bold mb-4 text-gray-900">Performance Equity Across the Team</h4>
              <p className="text-gray-600 font-medium text-lg leading-relaxed">
                Turn what your best reps do—questions, phrasing, timing—into live guidance for everyone on the team.
              </p>
            </div>
            <div className="mt-auto relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img src={salesEquityRef} alt="Performance Equity Feature" className="w-full h-auto object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
