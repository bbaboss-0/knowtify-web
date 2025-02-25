"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Multiple communication channels",
    description:
      "Knowtify supports various communication channels, such as SMS, voice calls, mobile applications, email, and social media, considering the diversity of communication infrastructure and device availability in different regions.",
    imgFront: "/assets/img/features-light-1.jpg",
    imgBack: "/assets/img/features-light-2.jpg",
    reverse: false,
  },
  {
    title: "Data Security and Privacy",
    description:
      "Knowtify ensures robust data security and privacy measures to protect farmers' personal information and communication data via encryption protocols, secure data storage, and compliance with relevant data protection regulations.",
    img: "/assets/img/features-light-3.jpg",
    reverse: true,
  },
  {
    title: "Localization and Multilingual Support",
    description:
      "The platform is designed to accommodate multiple languages and local dialects prevalent among smallholder farmers and farming communities to ensure alerts and messages are easily understood and can effectively reach farmers in their local communities.",
    imgFront: "/assets/img/features-light-1.jpg",
    imgBack: "/assets/img/features-light-2.jpg",
    reverse: false,
  },
  {
    title: "Two-Way Communication",
    description:
      "Allows farmers to provide feedback, report local conditions, seek clarifications or additional information, and to request support or share their own observations, creating a collaborative and participatory communication channel.",
    img: "/assets/img/features-light-3.jpg",
    reverse: true,
  },
  {
    title: "Data-driven Decision Making",
    description:
      "Knowtify collects and analyzes large amounts of weather and crop-related data. This data-driven approach helps organizations like yours to make evidence-based decisions, backed by scientific insights. Providing accurate and localized information to farmers helps optimize their agricultural practices and minimize risks associated with climate change.",
    img: "/assets/img/features-light-3.jpg",
    reverse: false,
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center mb-12">
        <motion.h2
          className="text-3xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Features
        </motion.h2>
      </div>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className={`container mx-auto px-4 flex flex-col md:flex-row ${
            feature.reverse ? "md:flex-row-reverse" : ""
          } items-center gap-8 mb-12`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {feature.imgFront ? (
            <div className="relative w-full md:w-1/2 flex justify-center">
              <Image
                src={feature.imgFront}
                alt="Feature Front"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <Image
                src={feature.imgBack}
                alt="Feature Back"
                width={500}
                height={300}
                className="absolute top-10 left-10 rounded-lg shadow-md opacity-75"
              />
            </div>
          ) : (
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={feature.img}
                alt="Feature"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          )}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
