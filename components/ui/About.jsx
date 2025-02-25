"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  ClipboardList,
  Share2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Adaptive recommendations",
    description:
      "Knowtify provides adaptive recommendations that consider changing climatic conditions. By analyzing historical and real-time data.",
    color: "from-blue-500 to-blue-600",
    delay: 0.1,
  },
  {
    icon: <ClipboardList className="w-8 h-8" />,
    title: "Data-Driven Insights",
    description:
      "Knowtify leverages advanced data analytics and machine learning algorithms to provide data-driven insights tailored to your farm's specific conditions.",
    color: "from-emerald-500 to-emerald-600",
    delay: 0.2,
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Knowledge Sharing and Collaboration",
    description:
      "Knowtify fosters a community of farmers and agricultural experts, promoting knowledge sharing and collaboration",
    color: "from-purple-500 to-purple-600",
    delay: 0.3,
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Risk Mitigation",
    description:
      "By providing early warnings, the Alert Dispatcher helps farmers mitigate risks associated with climate change. It allows farmers to anticipate adverse weather conditions and take appropriate actions",
    color: "from-orange-500 to-orange-600",
    delay: 0.4,
  },
 
];

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="inline-block">
              <motion.span
                className="bg-emerald-100 text-emerald-600 text-sm font-medium px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About Knowtify
              </motion.span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Climate Change and{" "}
              <span className="text-emerald-600">Smallholder Farming</span> in
              Nigeria
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Knowtify can continuously receive weather reports and patterns
              from third-party systems and Provides real-time early warning
              messages for weather events that are becoming increasingly
              frequent due to climate change. These early warnings enable
              farmers to prepare in advance and implement appropriate measures
              to protect their crops and minimize potential damage.
            </p>

            <Button
              variant="outline"
              className="group hover:bg-emerald-600 hover:text-white transition-all duration-300"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Right Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: feature.delay }}
              >
                <Card
                  className={`relative overflow-hidden p-6 h-full transition-all duration-300 ${
                    hoveredIndex === index
                      ? "shadow-xl scale-105"
                      : "hover:shadow-lg"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-r ${
                        feature.color
                      } text-white transform transition-transform duration-300 ${
                        hoveredIndex === index ? "scale-110" : ""
                      }`}
                    >
                      {feature.icon}
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600">{feature.description}</p>
                  </div>

                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      feature.color
                    } opacity-0 transition-opacity duration-300 ${
                      hoveredIndex === index ? "opacity-5" : ""
                    }`}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
