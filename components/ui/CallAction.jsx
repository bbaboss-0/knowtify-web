"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section
      className="relative py-20 bg-cover bg-center text-white text-center"
      style={{ backgroundImage: "url('/assests/img/cta-bg.jpg')" }}// ✅ Same as Stats component
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> 

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto px-6 py-12 bg-light-800 bg-opacity-75 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-4">Call To Action</h3>
          <p className="text-lg mb-6">
            Join Knowtify today! Be part of the solution to climate-driven agricultural threats in Nigeria. 
            Empower farmers, ensure food security, and combat climate change. Together, we can make a difference.
          </p>
          <a
            href="https://app.knowtify.com.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-light-500 border-2 boder-light-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Call To Action
          </a>
        </motion.div>
      </div>
    </section>
  );
}
