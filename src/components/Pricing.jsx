import Button from "./Button";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-white relative z-20">
      <div className="max-w-7xl mx-auto">


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-6">

          {/* Free Plan */}
          <div className="rounded-3xl p-8 border border-gray-200 bg-white flex flex-col h-full hover:shadow-lg transition-shadow">
            <div className="mb-8">
              <span className="text-sm font-medium text-gray-500">Starter</span>
              <h4 className="font-bold text-4xl mt-2 text-gray-900">Free</h4>
            </div>

            <Button variant="dark" className="w-full mb-8 font-bold">
              Download App
            </Button>

            <p className="text-gray-500 text-sm mb-6 font-medium">All essential features.</p>

            <div className="space-y-4 flex-1">
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <span className="bg-gray-100 rounded-full p-0.5 mt-0.5"><Check className="w-3 h-3 text-gray-600" /></span>
                <span>Limited AI responses</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <span className="bg-gray-100 rounded-full p-0.5 mt-0.5"><Check className="w-3 h-3 text-gray-600" /></span>
                <span>Limited meeting notetaking</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <span className="bg-gray-100 rounded-full p-0.5 mt-0.5"><Check className="w-3 h-3 text-gray-600" /></span>
                <span>Customize instructions & upload files</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <span className="bg-gray-100 rounded-full p-0.5 mt-0.5"><Check className="w-3 h-3 text-gray-600" /></span>
                <span>Ask AI about all your past meetings</span>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="rounded-3xl p-8 border border-gray-200 bg-white flex flex-col h-full hover:shadow-lg transition-shadow">
            <div className="mb-8">
              <span className="text-sm font-medium text-gray-500">Pro</span>
              <div className="flex items-baseline mt-2">
                <h4 className="font-bold text-4xl text-gray-900">$20</h4>
                <span className="text-gray-500 text-sm ml-2">/month billed annually*</span>
              </div>
            </div>

            <Button variant="dark" className="w-full mb-8 font-bold">
              Subscribe
            </Button>

            <p className="text-gray-500 text-sm mb-6 font-medium">All essential features.</p>

            <div className="space-y-6 flex-1">
              <div>
                <p className="font-bold text-sm text-gray-900 mb-4">Everything in Starter, plus...</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="bg-gray-100 rounded-full p-0.5 mt-0.5"><Check className="w-3 h-3 text-gray-600" /></span>
                    <span>Unlimited AI responses</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="bg-gray-100 rounded-full p-0.5 mt-0.5"><Check className="w-3 h-3 text-gray-600" /></span>
                    <span>Unlimited meeting notetaking</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="bg-gray-100 rounded-full p-0.5 mt-0.5"><Check className="w-3 h-3 text-gray-600" /></span>
                    <span>Unlimited access to latest AI models</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="bg-gray-100 rounded-full p-0.5 mt-0.5"><Check className="w-3 h-3 text-gray-600" /></span>
                    <span>Priority support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="rounded-3xl p-8 border border-gray-200 bg-white flex flex-col h-full hover:shadow-lg transition-shadow">
            <div className="mb-8">
              <span className="text-sm font-medium text-gray-500">Enterprise</span>
              <div className="flex items-baseline mt-2">
                <h4 className="font-bold text-4xl text-gray-900">$50</h4>
                <span className="text-gray-500 text-sm ml-2">/month billed annually*</span>
              </div>
            </div>

            <Button variant="dark" className="w-full mb-8 font-bold">
              Subscribe
            </Button>

            <p className="text-gray-500 text-sm mb-6 font-medium">All essential features.</p>

            <div className="space-y-6 flex-1">
              <div>
                <p className="font-bold text-sm text-gray-900 mb-4">Everything in Pro, plus...</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="bg-gray-100 rounded-full p-0.5 mt-0.5"><Check className="w-3 h-3 text-gray-600" /></span>
                    <span>Completely hidden to meeting screen sharing software</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
