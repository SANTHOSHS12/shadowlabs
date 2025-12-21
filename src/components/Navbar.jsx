import { Link } from "react-router-dom";
import { Ghost } from "lucide-react";
import Button from "./Button";
import logoRef from "../assets/navbar_logo_ref.png";
import { useState } from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-gray-900">
          <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white">
            <Ghost className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight">SHADOWLABS</span>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <a href="#enterprise" className="hover:text-primary transition-colors">Enterprise</a>
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#why-us" className="hover:text-primary transition-colors">Why us?</a>
        </nav>

        <div className="flex items-center gap-8">
          <Link to="/app" className="text-base font-bold text-gray-700 hover:text-primary transition-colors">
            Log in
          </Link>
          <Button className="px-8 py-3 text-base font-bold shadow-xl shadow-primary/30 bg-primary hover:bg-blue-700 text-white transform hover:scale-105 transition-all">
            Sign up Free
          </Button>
        </div>
      </div>
    </header>
  );
}
