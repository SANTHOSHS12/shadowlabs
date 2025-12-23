import { Link } from "react-router-dom";
import { Ghost, Menu, X } from "lucide-react";
import Button from "./Button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault(); // Prevent URL update
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group z-50 relative" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-900 via-[#0f172a] to-[#1e293b] flex items-center justify-center shadow-lg shadow-gray-900/20 ring-1 ring-gray-900/10 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent)]"></div>
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900">
            SHADOW<span className="text-[#0ea5e9]">LABS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <a href="#enterprise" onClick={(e) => handleScroll(e, 'enterprise')} className="hover:text-gray-900 transition-colors">Enterprise</a>
          <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#pricing" onClick={(e) => handleScroll(e, 'pricing')} className="hover:text-gray-900 transition-colors">Pricing</a>
          <a href="#why-us" onClick={(e) => handleScroll(e, 'why-us')} className="hover:text-gray-900 transition-colors">Why us?</a>
        </nav>

        <div className="hidden md:flex items-center gap-8">
          {/* Desktop Auth Placeholders if needed */}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden z-50 relative text-gray-600 hover:text-gray-900 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-0 top-0 bg-white border-b border-gray-100 p-6 pt-24 shadow-xl md:hidden flex flex-col gap-6 items-center"
            >
              <a
                href="#enterprise"
                onClick={(e) => handleScroll(e, 'enterprise')}
                className="text-lg font-medium text-gray-600 hover:text-gray-900"
              >
                Enterprise
              </a>
              <a
                href="#features"
                onClick={(e) => handleScroll(e, 'features')}
                className="text-lg font-medium text-gray-600 hover:text-gray-900"
              >
                Features
              </a>
              <a
                href="#pricing"
                onClick={(e) => handleScroll(e, 'pricing')}
                className="text-lg font-medium text-gray-600 hover:text-gray-900"
              >
                Pricing
              </a>
              <a
                href="#why-us"
                onClick={(e) => handleScroll(e, 'why-us')}
                className="text-lg font-medium text-gray-600 hover:text-gray-900"
              >
                Why us?
              </a>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}
