import { Link } from "react-router-dom";
import { Ghost } from "lucide-react";
import Button from "./Button";

import { useState } from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-900 via-[#0f172a] to-[#1e293b] flex items-center justify-center shadow-lg shadow-gray-900/20 ring-1 ring-gray-900/10 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent)]"></div>
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900">
            SHADOW<span className="text-[#0ea5e9]">LABS</span>
          </span>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <a href="#enterprise" className="hover:text-gray-900 transition-colors">Enterprise</a>
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
          <a href="#why-us" className="hover:text-gray-900 transition-colors">Why us?</a>
        </nav>

        <div className="flex items-center gap-8">
          {/* Auth buttons removed as per reference */}
        </div>
      </div>
    </header>
  );
}
