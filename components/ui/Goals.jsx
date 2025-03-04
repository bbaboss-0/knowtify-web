"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const sdgGoals = [
  { 
    img: "/assests/img/sdg/sdg2.png",
    gif:  "/assests/img/sdg/sdg2.png",
    title: "SDG 2: Zero Hunger", 
    description: "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture." 
  },
  { 
    img: "/assests/img/sdg/SDG 9.jpg",
    gif: "/assests/img/sdg/SDG 9.jpg",
    title: "SDG 9: Industry, Innovation and Infrastructure", 
    description: "Build resilient infrastructure, promote sustainable industrialization and foster innovation." 
  },
  { 
    img: "/assests/img/sdg/sd12.png",
    gif: "/assets/img/sdg/sd12.png",
    title: "SDG 12: Responsible Consumption and Production", 
    description: "Ensure sustainable consumption and production patterns." 
  },
  { 
    img: "/assests/img/sdg/sdg 13.png",
    gif: "/assests/img/sdg/sdg 13.png",
    title: "SDG 13: Climate Action", 
    description: "Take urgent action to combat climate change and its impacts." 
  },  
  { 
    img: "/assests/img/sdg/sdg17.png",
    gif: "/assests/img/sdg/sdg17.png",
    title: "SDG 17:  Partnerships for the goals", 
    description: "Take urgent action to combat climate change and its impacts." 
  } 
];

export default function SDGGoals() {
  const [selectedSDG, setSelectedSDG] = useState(sdgGoals[0]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center mb-12">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sustainable Development Goals (SDG)
        </motion.h2>
        <p className="text-lg text-gray-600 mt-2">
          Click on an SDG goal to learn more about its impact.
        </p>
      </div>

      {/* SDG Cards Grid */}
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {sdgGoals.map((sdg, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center group cursor-pointer bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedSDG(sdg)}
          >
            <div className="relative overflow-hidden rounded-lg w-28 h-28">
              <Image
                src={sdg.img}
                alt={sdg.title}
                width={112}
                height={112}
                className="rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-gray-800 font-semibold">{sdg.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Details Section */}
      <div className="container mx-auto px-4 mt-12 flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-lg">
        {/* Left: SDG Details */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900">{selectedSDG.title}</h3>
          <p className="mt-3 text-gray-700">{selectedSDG.description}</p>
        </motion.div>

        {/* Right: SDG GIF */}
        <motion.div
          className="md:w-1/2 flex items-center justify-center mt-6 md:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={selectedSDG.gif}
            alt="SDG GIF"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
