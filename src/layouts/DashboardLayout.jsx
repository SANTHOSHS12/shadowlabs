import { Outlet, Link } from "react-router-dom";
import { LayoutDashboard, Calendar, Layers, Settings, LogOut } from "lucide-react";

export default function DashboardLayout() {
    return (
        <div className="flex h-screen bg-background text-gray-900">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
                <div className="p-6">
                    <Link to="/" className="text-xl font-bold flex items-center gap-2">
                        <LayoutDashboard className="w-6 h-6 text-primary" />
                        <span>Shadow Labs</span>
                    </Link>
                </div>

                <nav className="flex-1 px-4 space-y-1">
                    <SideLink to="/app" icon={<LayoutDashboard size={20} />} label="Home" active />
                    <SideLink to="/app/meetings" icon={<Calendar size={20} />} label="Meetings" />
                    <SideLink to="/app/integrations" icon={<Layers size={20} />} label="Integrations" />
                </nav>

                <div className="p-4 border-t border-gray-200">
                    <SideLink to="/settings" icon={<Settings size={20} />} label="Settings" />
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">
                    <div className="flex-1 max-w-xl">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for anything..."
                                className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-full text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            />
                            <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 ml-6">
                        <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-medium text-gray-900">Shubham Gupta</p>
                                <p className="text-xs text-gray-500">Pro Plan</p>
                            </div>
                            <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                                SG
                            </div>
                        </div>
                    </div>
                </header>
                <main className="flex-1 overflow-auto p-6 md:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

function SideLink({ to, icon, label, active }) {
    return (
        <Link
            to={to}
            className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${active
                ? "bg-primary/10 text-primary"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
        >
            {icon}
            {label}
        </Link>
    );
}
