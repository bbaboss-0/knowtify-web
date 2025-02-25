"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 178, label: "Organisations" },
  { value: 10453, label: "Farmers" },
  { value: 32, label: "Workers" }
];

export default function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0)); // Initialize counts as zero

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("stats");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000; // Animation duration in ms
            const increment = end / (duration / 16); // Increment per frame (assuming 60fps)

            const updateCount = () => {
              start += increment;
              if (start < end) {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(start);
                  return newCounts;
                });
                requestAnimationFrame(updateCount);
              } else {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = end;
                  return newCounts;
                });
              }
            };

            updateCount();
          });
          window.removeEventListener("scroll", handleScroll); // Remove event after first activation
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="stats"
      className="relative py-20 bg-cover bg-center text-white text-center"
      style={{ backgroundImage: "url('/assests/img/stats1-bg.jpg')" }} // ✅ Corrected path
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Impact
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-5xl font-extrabold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {counts[index]}
              <p className="text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
