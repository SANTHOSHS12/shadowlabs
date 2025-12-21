import MeetingCard from "../components/MeetingCard";
import { Plus, FileText, PlayCircle, ArrowRight } from "lucide-react";
import Button from "../components/Button";

export default function DashboardHome() {
    return (
        <div className="max-w-5xl mx-auto space-y-10">
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
                        <span className="bg-gray-900 text-white p-1.5 rounded-lg"><PlayCircle size={24} fill="white" className="text-gray-900" /></span>
                        Shadow says hi, Shubham
                    </h1>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="ghost" className="bg-blue-50 hover:bg-blue-100 text-primary px-4 py-2 text-sm border-transparent">
                        Analyse profile
                    </Button>
                    <Button className="px-4 py-2 text-sm gap-2 pl-4 pr-5 shadow-sm shadow-primary/30">
                        Set up a meet
                        <ArrowRight size={16} />
                    </Button>
                </div>
            </div>

            {/* Upcoming Meetings */}
            <div>
                <h2 className="text-gray-500 text-sm font-medium mb-6 uppercase tracking-wider">Upcoming meetings today</h2>
                <div className="space-y-4">
                    <MeetingCard
                        time="Today at 4:00 PM"
                        title="Villy HQ"
                        participants={["You", "Shubham Gupta", "Harshil Sagar"]}
                    />
                    <MeetingCard
                        time="Today at 6:00 PM"
                        title="Villy product ideation"
                        participants={["You", "Shubham Gupta", "Harshil Sagar"]}
                    />
                </div>
            </div>

            {/* Previous Meetings */}
            <div>
                <h2 className="text-gray-500 text-sm font-medium mb-6 uppercase tracking-wider">Previous Meetings</h2>

                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden divide-y divide-gray-50">
                    {/* Section Header - Today */}
                    <div className="px-6 py-3 bg-gray-50/50 text-xs font-semibold text-gray-500">Today</div>
                    <MeetingRow title="Untitled Meeting" duration="30:23" summary="Meeting with Shubham Gupta, Harshil Sagar and 4 more" />

                    {/* Section Header - Yesterday */}
                    <div className="px-6 py-3 bg-gray-50/50 text-xs font-semibold text-gray-500">Yesterday</div>
                    <MeetingRow title="Product Meeting" duration="45:00" summary="Meeting with Shubham Gupta, Harshil Sagar and 2 others" />

                    {/* Section Header - Date */}
                    <div className="px-6 py-3 bg-gray-50/50 text-xs font-semibold text-gray-500">11 Oct 2025</div>
                    <MeetingRow title="Product Meeting" duration="45:00" summary="Meeting with Shubham Gupta, Harshil Sagar and 2 others" />
                </div>
            </div>
        </div>
    );
}

function MeetingRow({ title, duration, summary }) {
    return (
        <div className="px-6 py-4 flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer group">
            <div className="flex items-center gap-4 mb-2 md:mb-0">
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <FileText size={16} />
                </span>
                <div>
                    <span className="font-medium text-gray-900 mr-3">{title}</span>
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{duration}</span>
                </div>
            </div>
            <div className="text-sm text-gray-500">{summary}</div>
        </div>
    );
}
