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
          <div className="flex gap-4 mb-8 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-900">Visual attributes reference</a>
          </div>
          <div className="flex gap-4 text-xs text-gray-400">
            <p>© {new Date().getFullYear()} Shadow Labs Inc.</p>
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
          </div>
        </div>

        {/* Right: Links */}
        <div className="flex gap-12 text-sm font-semibold text-gray-900">
          <a href="#" className="hover:text-primary">Enterprise</a>
          <a href="#" className="hover:text-primary">Features</a>
          <a href="#" className="hover:text-primary">Why Choose Us?</a>
          <a href="#" className="hover:text-primary">Integrations</a>
        </div>

      </div>
    </footer>
  );
}
