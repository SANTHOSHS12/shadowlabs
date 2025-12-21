import Button from "./Button";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-white relative z-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wide">Begin your Shadow journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Simple pricing for <br /> complex conversations.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12">

          {/* Free Plan */}
          <div className="rounded-3xl p-8 border border-gray-200 bg-white flex flex-col items-start min-h-[420px] hover:border-blue-200 transition-colors">
            <h4 className="font-bold text-xl mb-2 text-gray-900">Free</h4>
            <div className="flex items-baseline mb-6">
              <span className="text-5xl font-bold text-gray-900">₹0</span>
            </div>
            <Button variant="dark" className="w-full mb-8 font-bold">
              Get Started
            </Button>
            <ul className="space-y-4 flex-1">
              <li className="text-sm text-gray-600 font-medium flex items-center gap-3">
                <span className="bg-blue-50 rounded-full p-0.5"><Check className="w-3 h-3 text-blue-600" /></span>
                Real-time transcription
              </li>
              <li className="text-sm text-gray-600 font-medium flex items-center gap-3">
                <span className="bg-blue-50 rounded-full p-0.5"><Check className="w-3 h-3 text-blue-600" /></span>
                Basic analysis
              </li>
              <li className="text-sm text-gray-600 font-medium flex items-center gap-3">
                <span className="bg-blue-50 rounded-full p-0.5"><Check className="w-3 h-3 text-blue-600" /></span>
                1 hour storage
              </li>
            </ul>
          </div>

          {/* Pro Plan - Highlighted White Theme */}
          <div className="rounded-3xl p-8 bg-white border-2 border-blue-600 flex flex-col items-start relative min-h-[460px] shadow-2xl shadow-blue-100 transform md:-translate-y-6">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-xl rounded-tr-[22px]">
              Most Popular
            </div>
            <h4 className="font-bold text-xl mb-2 text-blue-600">Pro</h4>
            <div className="flex items-baseline mb-6">
              <span className="text-5xl font-bold text-gray-900">₹20</span>
              <span className="text-gray-500 text-lg ml-1 font-medium">/mo</span>
            </div>
            <Button variant="primary" className="w-full mb-8 font-bold shadow-xl shadow-blue-200">
              Subscribe Now
            </Button>
            <ul className="space-y-4 flex-1">
              <li className="text-sm text-gray-600 font-medium flex items-center gap-3">
                <span className="bg-blue-100 rounded-full p-0.5"><Check className="w-3 h-3 text-blue-600" /></span>
                Unlimited recording
              </li>
              <li className="text-sm text-gray-600 font-medium flex items-center gap-3">
                <span className="bg-blue-100 rounded-full p-0.5"><Check className="w-3 h-3 text-blue-600" /></span>
                Advanced insights
              </li>
              <li className="text-sm text-gray-600 font-medium flex items-center gap-3">
                <span className="bg-blue-100 rounded-full p-0.5"><Check className="w-3 h-3 text-blue-600" /></span>
                Custom vocabulary
              </li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="rounded-3xl p-8 border border-gray-200 bg-white flex flex-col items-start min-h-[420px] hover:border-blue-200 transition-colors">
            <h4 className="font-bold text-xl mb-2 text-gray-900">Enterprise</h4>
            <div className="flex items-baseline mb-6">
              <span className="text-5xl font-bold text-gray-900">₹50</span>
              <span className="text-gray-400 text-lg ml-1 font-medium">/user</span>
            </div>
            <Button variant="outline" className="w-full mb-8 font-bold border-2">
              Contact Sales
            </Button>
            <ul className="space-y-4 flex-1">
              <li className="text-sm text-gray-600 font-medium flex items-center gap-3">
                <span className="bg-blue-50 rounded-full p-0.5"><Check className="w-3 h-3 text-blue-600" /></span>
                Admin dashboard
              </li>
              <li className="text-sm text-gray-600 font-medium flex items-center gap-3">
                <span className="bg-blue-50 rounded-full p-0.5"><Check className="w-3 h-3 text-blue-600" /></span>
                SSO & Security
              </li>
              <li className="text-sm text-gray-600 font-medium flex items-center gap-3">
                <span className="bg-blue-50 rounded-full p-0.5"><Check className="w-3 h-3 text-blue-600" /></span>
                Dedicated support
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
