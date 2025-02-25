"use client"

import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="bg-blue-100 text-blue-600 text-sm font-medium px-4 py-2 rounded-full inline-block mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Knowtify: Revolutionizing <span className="text-blue-600">Agriculture</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Knowtify presents an essential app addressing the climate-change-induced agricultural challenges in Nigeria.
            Our Early Warning Dissemination and Information App efficiently delivers real-time alerts to farmers, 
            empowering them with vital insights to mitigate climate risks. Through instant notifications, weather forecasts,
            and adaptive strategies, we bridge the information gap and fortify agricultural resilience. 
            Knowtify revolutionizes Nigerian farming, ensuring food security and sustainable livelihoods 
            in the face of evolving climate dynamics.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
