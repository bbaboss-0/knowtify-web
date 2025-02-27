"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { img: require("../../public/assests/img/narsda.jpeg"), name: "NARSDA" },
  { img: require("../../public/assests/img/brainstorm.png"), name: "Brainstorm" },
  { img: require("../../public/assests/img/new-SpaceApps.png"), name: "SpaceApps" }
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="container mx-auto px-40 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
        >
          Our Partners
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white shadow-lg p-6 rounded-xl text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Image 
                src={partner.img} 
                alt={partner.name} 
                width={120} 
                height={120} 
                className="w-28 h-28 object-contain mx-auto mb-4 rounded-md" 
              />
              <p className="text-lg font-semibold text-gray-800">{partner.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
