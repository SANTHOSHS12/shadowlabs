import { TrendingUp, Users, Globe, Layers } from "lucide-react";


export default function FeaturesBusiness() {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-[1400px] mx-auto">

        {/* Centered Features Header as requested */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Features</span>
        </div>

        <div className="mb-16">
          <h2 className="text-base text-gray-900 mb-4 uppercase tracking-wide">
            <span className="font-medium text-gray-500">For </span>
            <span className="font-extrabold text-gray-900">Business Owners</span>
          </h2>
          {/* Main Headline from Scale Conversations design */}
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 max-w-2xl leading-tight mb-8">
            Scale great conversations, <br /> not just teams.
          </h3>
          {/* Description from Business Owners design */}
          <p className="text-xl text-gray-800 max-w-4xl mb-8 font-medium leading-relaxed">
            Drive higher conversions with real-time deal coaching, pitch personalization, and team-wide performance consistency across regions and languages.
          </p>
        </div>

        {/* ... inside the component */}
        <div className="grid grid-cols-1 md://grid-cols-2 gap-8">
          {/* Card 1: Higher Order Conversations */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden min-h-[400px] flex flex-col justify-between group">
            <div className="relative z-10 mb-4">
              <h4 className="text-2xl font-bold mb-2">Higher Order Conversations</h4>
              <p className="text-blue-100/90 text-sm">Real-time cues that steer deal-breakers into deal-makers.</p>
            </div>

            <div className="relative flex justify-center mt-auto h-64 bg-white/20 rounded-xl m-8 items-center border border-white/20 overflow-hidden">
              <span className="text-white/60">visual placeholder</span>
            </div>
          </div>

          {/* Card 2: Patterns and Sales Tech */}
          <div className="bg-gray-50 rounded-3xl p-8 relative overflow-hidden min-h-[400px] border border-gray-100 group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10 opacity-60"></div>

            <div className="mb-8">
              <h4 className="text-2xl font-bold mb-2 text-gray-900">Patterns and Sales Tech</h4>
              <p className="text-gray-500 text-sm">Uncover the winning patterns of your top performers.</p>
            </div>

            <div className="relative flex justify-center h-48 bg-white/50 rounded-xl m-8 items-center border border-gray-200 overflow-hidden">
              <span className="text-gray-400">visual placeholder</span>
            </div>
          </div>

          {/* Card 3: Performance Ready */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 min-h-[320px] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-white opacity-50"></div>
            <div className="relative z-10">
              <div className="flex -space-x-4 mb-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                    <Users className="w-6 h-6 text-gray-400" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center font-bold text-gray-500">
                  +12
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-2 text-gray-900">Performance Ready <br /> Across the Team</h4>
              <p className="text-gray-500 text-sm mt-2">Scale the expertise of your best rep to the entire floor instantly.</p>
            </div>

            <div className="absolute bottom-6 right-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center shadow-xl shadow-purple-200">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Card 4: Global Team */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white min-h-[320px] relative overflow-hidden group">
            <div className="absolute inset-0 opacity-20">
              {/* Abstract wiring/map background */}
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 50 Q 25 20, 50 50 T 100 50" stroke="white" strokeWidth="0.5" />
                <path d="M0 30 Q 25 60, 50 30 T 100 30" stroke="white" strokeWidth="0.5" opacity="0.5" />
                <path d="M0 70 Q 25 40, 50 70 T 100 70" stroke="white" strokeWidth="0.5" opacity="0.5" />
              </svg>
            </div>

            <div className="relative z-10 h-full flex flex-col justify-end">
              <div className="mb-auto">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Never lose Team Context</h4>
              </div>
              <p className="text-gray-400 text-sm">Whether remote or in-office, keep everyone aligned on the latest winning strategies.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
