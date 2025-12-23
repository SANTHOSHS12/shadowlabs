import React from 'react';
import { motion } from 'framer-motion';
import businessRef from '../assets/business_reference.png';

export default function BusinessSection() {
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
                        src={businessRef}
                        alt="Business Section"
                        className="w-full h-auto object-contain select-none pointer-events-none"
                    />
                </motion.div>
            </div>
        </section>
    );
}
