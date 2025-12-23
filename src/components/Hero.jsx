import { ChevronUp } from "lucide-react";
import Button from "./Button";
import DashboardPreview from "./DashboardPreview";




export default function Hero() {
  return (
    <section className="relative pt-32 pb-10 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#0f172a] mb-8 mx-auto max-w-5xl leading-[1.1]">
          Your Wingman for <br />
          High Stakes Conversations
        </h1>



        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-12 font-medium">
          The quiet edge in every conversation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <div className="inline-flex items-center bg-[#050914] text-white rounded-[6px] shadow-lg overflow-hidden transition-transform hover:scale-105">
            <button className="px-8 py-3.5 text-[17px] font-medium hover:bg-white/5 transition-colors">
              Download App
            </button>
            <div className="w-[1px] h-6 bg-gray-700"></div>
            <button className="px-4 py-3.5 hover:bg-white/5 transition-colors flex items-center justify-center">
              <ChevronUp size={20} strokeWidth={2} />
            </button>
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute inset-x-0 -top-20 -z-10 flex justify-center">
            <div className="w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"></div>
          </div>

          {/* Immersive Dashboard Frame */}
          <div className="relative mx-auto w-full max-w-[1200px] shadow-2xl rounded-[32px] overflow-hidden">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
