"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { FaPlay, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen flex items-center bg-cover bg-center px-8 md:px-20"
      style={{ backgroundImage: "url('/assests/img/hero-bg1.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative max-w-2xl text-left text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to <span className="text-green-400">KNOWTIFY</span>
        </motion.h1>

        {/* Animated Text with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl font-light bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-lg"
        >
          <TypeAnimation
            sequence={[
              "Providing Early Warning Dissemination...",
              2000,
              "Addressing Climate Change Impact on Agriculture...",
              2000,
              "Helping Farmers and Communities Stay Prepared...",
              2000,
            ]}
            speed={50}
            wrapper="p"
            repeat={Infinity}
          />
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="mt-6 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-green-600 transition shadow-lg">
            Get Started <FaArrowRight />
          </Button>

          <Button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition shadow-lg">
            <FaPlay /> Watch Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
