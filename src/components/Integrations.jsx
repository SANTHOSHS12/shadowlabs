import { Monitor, Smartphone, Globe } from "lucide-react";

export default function Integrations() {
  return (
    <section className="bg-white pb-32 pt-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
          Works with every meeting platform
        </h2>

        {/* Meeting Platforms */}
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {/* Slack */}
          <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center p-4 border border-gray-100 hover:scale-110 transition-transform font-bold text-gray-500">
            Slack
          </div>
          {/* Google Meet */}
          <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center p-4 border border-gray-100 hover:scale-110 transition-transform font-bold text-gray-500">
            Meet
          </div>
          {/* Teams */}
          <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center p-4 border border-gray-100 hover:scale-110 transition-transform font-bold text-gray-500">
            Teams
          </div>
          {/* Zoom */}
          <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center p-4 border border-gray-100 hover:scale-110 transition-transform font-bold text-gray-500">
            Zoom
          </div>
        </div>

        {/* Integration Strip */}
        <div className="bg-[#FAF9F6] rounded-3xl p-8 max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 border border-gray-100 shadow-inner">

          {/* Left: Integrate with */}
          <div className="flex-1 w-full md:border-r border-gray-200 md:pr-10">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6 text-left">Integrated with</h3>
            <div className="flex gap-6 items-center">
              <span className="font-bold text-gray-400">Salesforce</span>
              <span className="font-bold text-gray-400">Notion</span>
              <span className="font-bold text-gray-400">Jira</span>
            </div>
          </div>

          {/* Right: Compatible for */}
          <div className="flex-1 w-full md:pl-10">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6 text-left">Compatible with</h3>
            <div className="flex gap-8 items-center">
              <div className="flex items-center gap-2 text-gray-600 font-semibold">
                <Monitor className="h-6 w-6" />
                <span>Mac</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 font-semibold">
                <Monitor className="h-6 w-6" />
                <span>Windows</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 font-semibold">
                <Monitor className="h-6 w-6" />
                <span>Linux</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
