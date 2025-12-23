import { Ghost, Twitter, Linkedin, Github } from "lucide-react";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">

        {/* Left: Logo & Copyright */}
        <div className="flex-1">
          <div className="flex items-center gap-2 font-bold text-xl text-gray-900 mb-6">
            <span className="font-bold text-xl tracking-tight">SHADOWLABS</span>
          </div>
          <p className="text-gray-500 mb-6 text-sm max-w-xs">
            Make everyone on your team your best rep. Smarter conversations. Higher conversions. Half the cost.
          </p>
        </div>

        {/* Right: Links */}
        <div className="flex flex-col gap-4 text-gray-500 text-sm">
          <div className="font-bold text-gray-900 mb-2">Navigation</div>
          <a href="#enterprise" className="hover:text-primary">Enterprise</a>
          <a href="#features" className="hover:text-primary">Features</a>
          <a href="#why-us" className="hover:text-primary">Why Us?</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-100 flex justify-between items-center text-sm text-gray-400">
        <div>© 2025 Shadowlabs Inc. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Terms</a>
        </div>
      </div>
    </footer>
  );
}
