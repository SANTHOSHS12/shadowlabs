import { Share2, Lock, Users, Zap, Layout, Shield } from "lucide-react";

export default function WhyUs() {
  const points = [
    { title: "Control / Privacy First", desc: "Enterprise-grade encryption and data isolation.", icon: <Lock className="w-5 h-5 text-primary" /> },
    { title: "Enterprise Ready", desc: "SSO, Audit Logs, and Role-Based Access.", icon: <Users className="w-5 h-5 text-blue-400" /> },
    { title: "Behavioral Insights", desc: "Understand buyer psychology in real-time.", icon: <Zap className="w-5 h-5 text-blue-400" /> },
    { title: "Real-time / At scale", desc: "Deploy changes to 1000s of reps instantly.", icon: <Share2 className="w-5 h-5 text-blue-400" /> },
    { title: "Playbook", desc: "Tailored to your specific methodology.", icon: <Layout className="w-5 h-5 text-blue-400" /> },
  ];

  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">

        {/* Left: Heading */}
        <div className="flex-1">
          <h2 className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-wide">Why Us?</h2>
          <h3 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-8">
            Built for high-stakes teams that care about <span className="text-gray-900">privacy</span>, <span className="text-gray-900">control</span> and <br />
            real impact on every call.
          </h3>
        </div>

        {/* Right: List */}
        <div className="flex-1 max-w-lg">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="mt-1 bg-blue-50 p-2 rounded-lg h-fit text-blue-600">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Build with Privacy in Mind</h3>
                <p className="text-gray-500 text-sm mt-1">Shadow records only with consent, encrypts everything, and lets you control what's stored, shared and deleted.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 bg-blue-50 p-2 rounded-lg h-fit text-blue-600">
                <Layout className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Enterprise First</h3>
                <p className="text-gray-500 text-sm mt-1">SSO, RBAC, audit logs and scalable infrastructure so your security and IT teams can say yes with confidence.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 bg-blue-50 p-2 rounded-lg h-fit text-blue-600">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Built on behavioral insights</h3>
                <p className="text-gray-500 text-sm mt-1">Designed from real call patterns, what top reps actually say and do, not just generic sales advice.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 bg-blue-50 p-2 rounded-lg h-fit text-blue-600">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Deep Research Algorithm</h3>
                <p className="text-gray-500 text-sm mt-1">Surfaces the right facts, proof points and references in real time, backed by your own content and data.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 bg-blue-50 p-2 rounded-lg h-fit text-blue-600">
                <Users className="w-6 h-6" />
                {/* Reusing Users for Personalized as placeholder, or need User icon */}
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Personalized</h3>
                <p className="text-gray-500 text-sm mt-1">Learns your playbooks, language and market over time so guidance feels tailored to your team, not templated.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
