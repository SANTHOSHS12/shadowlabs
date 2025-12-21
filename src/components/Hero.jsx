import Button from "./Button";
import heroDashboard from "../assets/hero_dashboard.png";


export default function Hero() {
  return (
    <section className="relative pt-32 pb-40 overflow-hidden bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
        {/* Badge removed as it is not in the design reference */}

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 mx-auto max-w-5xl leading-tight">
          Your Wingman for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-indigo-600">High Stakes Conversations</span>
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          The quiet edge in every conversation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <Button className="px-12 py-5 text-xl font-bold shadow-2xl shadow-primary/40 min-w-[200px]">
            Download App
          </Button>
        </div>

        {/* ... inside the component */}

        {/* ... inside the component */}
        <div className="mt-16 relative px-0 md:px-4">
          <div className="absolute inset-0 bg-primary/20 blur-[120px] h-[400px] rounded-full top-20 -z-10 mx-auto max-w-5xl"></div>
          {/* Increased max-width and removed restrictive padding */}
          <div className="max-w-[1400px] mx-auto rounded-3xl shadow-2xl border border-gray-200/50 bg-gray-50 overflow-hidden min-h-[600px] flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent z-10 pointer-events-none"></div>
            <img
              src={heroDashboard}
              alt="Shadowlabs Dashboard Interface"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
