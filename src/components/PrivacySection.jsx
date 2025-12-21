import { Shield, Lock, FileCheck, Globe } from "lucide-react";

export default function PrivacySection() {
    const items = [
        {
            icon: <Shield className="w-6 h-6 text-primary" />,
            title: "ISO 27001 certified",
            desc: "International standard for information security management."
        },
        {
            icon: <Lock className="w-6 h-6 text-primary" />,
            title: "SOC 2 Type I & II compliant",
            desc: "Proven long-term data security through independent audits."
        },
        {
            icon: <FileCheck className="w-6 h-6 text-primary" />,
            title: "GDPR compliance",
            desc: "Working to align with EU data protection requirements."
        },
        {
            icon: <Globe className="w-6 h-6 text-primary" />,
            title: "CCPA compliance",
            desc: "Working to meet California's privacy protection standards."
        },
    ];

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
                <div className="md:w-1/3">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        We Respect <br /> Your Privacy
                    </h2>
                </div>

                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {items.map((item, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="mt-1">{item.icon}</div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                                <p className="text-sm text-gray-500 mt-2 leading-relaxed max-w-xs">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
