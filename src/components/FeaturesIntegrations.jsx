import React from 'react';
import { motion } from 'framer-motion';
import integrationsRef from '../assets/integrations_reference.png';

export default function FeaturesIntegrations() {
    return (
        <section className="bg-white w-full flex justify-center py-12 md:py-24 overflow-hidden">
            <div className="max-w-[1440px] px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full"
                >
                    <img
                        src={integrationsRef}
                        alt="Works with every meeting platform"
                        className="w-full h-auto object-contain pointer-events-none select-none"
                    />
                </motion.div>
            </div>
        </section>
    );
}
