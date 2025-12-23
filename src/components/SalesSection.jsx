import React from 'react';
import { motion } from 'framer-motion';
import salesRef from '../assets/sales_reference.png';

export default function SalesSection() {
    return (
        <section className="bg-white w-full flex justify-center py-12 md:py-20 overflow-hidden">
            <div className="max-w-[1440px] px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="w-full"
                >
                    <img
                        src={salesRef}
                        alt="Sales Section Reference"
                        className="w-full h-auto object-contain pointer-events-none select-none"
                    />
                </motion.div>
            </div>
        </section>
    );
}
