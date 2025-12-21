import { Share2 } from "lucide-react"; // Keeping lucide-react if needed, otherwise empty.
// Removed unused reference image imports since we are implementing in code.

export default function FeaturesCore() {
    return (
        <section className="bg-white py-32 px-6">
            <div className="max-w-[1400px] mx-auto">

                {/* Section 1: Personality Intelligence */}
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16 mb-32">
                    {/* Image Side - Recreated in Code */}
                    <div className="flex-1 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-400 to-orange-500 aspect-[4/3] p-8 flex items-center justify-center group">

                            {/* Glass Card */}
                            <div className="bg-white/40 backdrop-blur-xl border border-white/50 p-6 rounded-3xl w-full max-w-sm shadow-lg transform transition-transform duration-700 hover:scale-[1.02]">

                                {/* Header */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gray-800 overflow-hidden border-2 border-white/50">
                                            {/* Profile Box Placeholder or simple gradient if no avatar */}
                                            <div className="w-full h-full bg-gradient-to-tr from-gray-700 to-gray-500"></div>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg">Carlos Santos</h3>
                                            <p className="text-gray-700 text-xs font-medium">Angel Investor</p>
                                        </div>
                                    </div>
                                    <div className="bg-[#0077b5] p-1 rounded">
                                        <span className="text-white text-xs font-bold">in</span>
                                    </div>
                                </div>

                                {/* Traits Sliders */}
                                <div className="space-y-4 mb-6">
                                    <div className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">Personality Traits</div>

                                    {/* Slider 1 */}
                                    <div className="relative pt-1">
                                        <div className="flex justify-between text-[10px] font-bold text-gray-600 mb-1">
                                            <span>INTROVERT</span>
                                            <span>EXTROVERT</span>
                                        </div>
                                        <div className="h-1.5 bg-white/50 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-600 rounded-full w-2/3 ml-auto animate-pulse"></div>
                                        </div>
                                        {/* Indicator Dot */}
                                        <div className="absolute top-4 right-[28%] w-3 h-3 bg-blue-600 border-2 border-white rounded-full shadow-sm transform hover:scale-125 transition-transform"></div>
                                    </div>

                                    {/* Slider 2 */}
                                    <div className="relative pt-1">
                                        <div className="flex justify-between text-[10px] font-bold text-gray-600 mb-1">
                                            <span>EMOTIONAL</span>
                                            <span>ANALYTICAL</span>
                                        </div>
                                        <div className="h-1.5 bg-white/50 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-600 rounded-full w-1/2 mx-auto animate-pulse delay-75"></div>
                                        </div>
                                        <div className="absolute top-4 left-[48%] w-3 h-3 bg-blue-600 border-2 border-white rounded-full shadow-sm transform hover:scale-125 transition-transform"></div>
                                    </div>
                                </div>

                                {/* Likes / Dislikes */}
                                <div className="grid grid-cols-2 gap-4 text-xs">
                                    <div>
                                        <div className="font-bold text-gray-800 mb-1">👍 Likes</div>
                                        <ul className="text-gray-700 space-y-1">
                                            <li>• Poker</li>
                                            <li>• Latest Tech trends</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-800 mb-1">👎 Dislikes</div>
                                        <ul className="text-gray-700 space-y-1">
                                            <li>• Outdated tech</li>
                                            <li>• Inefficient Processes</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            {/* Decorative Background Elements */}
                            <div className="absolute top-4 left-4 w-8 h-8 rounded-full border-2 border-white/30 backdrop-blur-sm"></div>
                            <div className="absolute top-4 right-4 text-white hover:rotate-90 transition-transform cursor-pointer">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                            </div>

                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="flex-1 max-w-lg">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                            Personality Intelligence
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                            Shadow picks up how the customer talks and suggests how to match their tone, pace and directness.
                        </p>
                    </div>
                </div>

                {/* Section 2: Core Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Card 1: Higher Sales Facts (Orange) */}
                    <div className="bg-gradient-to-br from-[#FFA500] to-[#FF8C00] rounded-3xl p-8 text-white relative overflow-hidden min-h-[400px] flex flex-col justify-between group">
                        <div className="relative z-10">
                            <h4 className="text-3xl font-bold mb-4">Higher Sales Facts on Tap</h4>
                            <p className="text-orange-50 font-medium text-lg leading-relaxed">
                                See key product, pricing and customer details on screen the moment you need them.
                            </p>
                        </div>

                        {/* Visual: Chat Bubbles */}
                        <div className="mt-8 relative space-y-4">
                            {/* Message 1 */}
                            <div className="bg-white/20 backdrop-blur-md rounded-2xl rounded-tl-none p-4 max-w-[90%] transform transition-transform duration-500 group-hover:translate-x-2">
                                <div className="text-[10px] uppercase tracking-wide text-orange-100 mb-1">Carlos (Investor)</div>
                                <div className="text-sm font-medium">The first "like" button on social media wasn't from Facebook.</div>
                            </div>

                            {/* Message 2 (Shadow) */}
                            <div className="bg-white text-orange-900 rounded-2xl rounded-tr-none p-4 max-w-[90%] ml-auto shadow-lg transform transition-transform duration-500 group-hover:-translate-y-2 delay-75">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center text-[8px] text-white">S</div>
                                    <span className="text-[10px] uppercase tracking-wide text-gray-400">Shadow</span>
                                </div>
                                <div className="text-sm font-bold">True. Vimeo added it in 2005.</div>
                            </div>
                        </div>

                        {/* Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                    </div>

                    {/* Card 2: Objection Handling (Blue Gradient/Glass) */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm relative overflow-hidden min-h-[400px] flex flex-col justify-between group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white pointer-events-none"></div>

                        <div className="relative z-10">
                            <h4 className="text-3xl font-bold mb-4 text-gray-900">Objection Handling</h4>
                            <p className="text-gray-600 font-medium text-lg leading-relaxed">
                                When a customer pushes back, get simple, suggested replies right in the flow of the call.
                            </p>
                        </div>

                        {/* Visual: Inventory Chat */}
                        <div className="mt-8 relative space-y-4 font-mono text-sm">
                            <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-bl-none shadow-sm max-w-[85%] transform transition-transform duration-500 group-hover:scale-105 origin-left">
                                <div className="text-xs text-gray-400 mb-1">Carlos</div>
                                <div className="text-gray-700">Shadow, what is our current inventory count for the main warehouse stock?</div>
                            </div>

                            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-2xl rounded-br-none shadow-md max-w-[90%] border border-blue-500 ml-auto transform transition-transform duration-500 group-hover:-translate-y-2 delay-100">
                                <div className="flex justify-between items-center mb-1 border-b border-white/20 pb-1">
                                    <span className="text-xs opacity-75">Shadow</span>
                                    <span className="text-[10px] bg-white/20 px-1 rounded">Live Data</span>
                                </div>
                                <div>The system currently reports <span className="font-bold underline">12 items</span> in inventory.</div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Multi-Lingual Support (Ocean Blue) */}
                    <div className="bg-gradient-to-b from-cyan-400 to-blue-500 rounded-3xl p-8 text-white relative overflow-hidden min-h-[400px] flex flex-col justify-between group">
                        <div className="relative z-10">
                            <h4 className="text-3xl font-bold mb-4">Multi-Lingual Support</h4>
                            <p className="text-cyan-50 font-medium text-lg leading-relaxed">
                                Speak naturally—English, Hinglish or a mix—while Shadow keeps your message clear and professional.
                            </p>
                        </div>

                        {/* Visual: Translation Bubbles */}
                        <div className="mt-8 relative space-y-4">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl max-w-[80%] transform transition-transform duration-500 group-hover:translate-x-3">
                                <div className="text-xs text-cyan-100 mb-1">Priya</div>
                                <div className="font-medium">"Isme toh bohot time lagega."</div>
                            </div>

                            <div className="bg-white text-gray-800 p-4 rounded-2xl shadow-xl max-w-[90%] ml-auto relative transform transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-1 delay-75">
                                <div className="absolute -top-3 -right-3 bg-green-400 text-green-900 text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">Translated</div>
                                <div className="text-xs text-gray-400 mb-1">Shadow | Sales Rep</div>
                                <div className="font-medium text-sm">"That will take a lot of time." <br /> <span className="text-green-600 font-bold">→ Suggestion: Use 'Express' feature.</span></div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Sharper Storytelling (Glass/Mesh) */}
                    <div className="relative rounded-3xl p-8 overflow-hidden min-h-[400px] flex flex-col justify-between group border border-gray-100 shadow-md">
                        {/* Mesh Background */}
                        <div className="absolute inset-0 bg-blue-50">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                            <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                        </div>

                        <div className="relative z-10">
                            <h4 className="text-3xl font-bold mb-4 text-gray-900">Sharper Storytelling</h4>
                            <p className="text-gray-600 font-medium text-lg leading-relaxed">
                                Get timely nudges to use the right examples, numbers and customer stories.
                            </p>
                        </div>

                        {/* Visual: Story Cards */}
                        <div className="relative z-10 mt-8">
                            {/* Card Stack Effect */}
                            <div className="absolute top-0 left-0 w-full transform transition-all duration-500 group-hover:translate-y-[-10px] opacity-60 scale-95 origin-bottom">
                                <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                                    <div className="h-2 w-1/3 bg-gray-200 rounded mb-2"></div>
                                    <div className="h-2 w-2/3 bg-gray-100 rounded"></div>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-lg relative transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">Timely Nudge</div>
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <span className="text-xs italic">i</span>
                                    </div>
                                </div>
                                <div className="text-sm font-medium text-gray-800 mb-2">
                                    This is a bit like D-Day. The Allies didn't attack the entire French coast...
                                </div>
                                <div className="text-xs text-gray-500">
                                    Relevance: <span className="text-green-600 font-bold">High (98%)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
