import { ArrowRight, User } from "lucide-react";
import Button from "./Button";

export default function MeetingCard({ title, time, participants, isNext = false }) {
    return (
        <div className="bg-white border border-gray-100 rounded-xl p-6 mb-4 hover:shadow-md transition-shadow">
            <div className="mb-4">
                <span className="text-gray-500 text-sm font-medium">{time}</span>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                    <div className="flex items-center gap-2 flex-wrap">
                        {participants.map((p, i) => (
                            <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                {p}
                            </span>
                        ))}
                        <span className="text-xs text-gray-400 font-medium">+1 more</span>
                    </div>
                </div>

                <Button variant="white" className="border border-primary text-primary px-5 py-2 text-sm">
                    Join the meeting
                    <ArrowRight size={16} className="ml-2" />
                </Button>
            </div>
        </div>
    );
}
