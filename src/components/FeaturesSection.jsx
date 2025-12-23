import { motion } from 'framer-motion';

export default function FeaturesSection() {
    return (
        <section id="features" className="pt-12 pb-24 bg-white relative z-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <span className="text-gray-500 font-medium text-lg mb-4 block">Features</span>
                    <h2 className="text-4xl md:text-5xl font-semibold text-[#0f172a] tracking-tight leading-[1.1] max-w-3xl mx-auto">
                        Scale great conversations,<br />
                        not just teams.
                    </h2>
                </motion.div>
            </div>
        </section>
    );
}
