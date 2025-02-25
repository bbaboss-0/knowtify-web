"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, ClipboardList, BarChart, Binoculars, Lightbulb, ArrowRight, TrendingUp  } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"


const services = [
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Risk Mitigation",
    description:
      "By providing early warnings, the Alert Dispatcher helps farmers mitigate risks associated with climate change...",
    color: "from-blue-500 to-blue-600",
    delay: 0.1,
  },
  {
    icon: <ClipboardList className="w-8 h-8" />,
    title: "Enhanced Productivity",
    description:
      "With access to timely weather information and crop-specific recommendations, farmers can optimize their farming practices...",
    color: "from-emerald-500 to-emerald-600",
    delay: 0.2,
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Resource Efficiency",
    description:
      "The platform is designed to accommodate multiple languages and local dialects prevalent among smallholder farmers...",
    color: "from-purple-500 to-purple-600",
    delay: 0.3,
  },
  {
    icon: <Binoculars className="w-8 h-8" />,
    title: "Two-Way Communication",
    description:
      "Knowtify promotes resource efficiency by enabling farmers to use water, fertilizers, and other inputs more effectively...",
    color: "from-orange-500 to-orange-600",
    delay: 0.4,
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Capacity Building",
    description:
      "The system also supports capacity building among farmers by providing educational resources and training materials...",
    color: "from-teal-500 to-teal-600",
    delay: 0.5,
  },  
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />, 
    title: "Data-driven Decision Making",
    description:
      "Knowtify collects and analyzes large amounts of weather and crop-related data...",
    color: "from-green-500 to-green-600",
    delay: 0.5,
    link: "services-details.html"
  }
  

]

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span 
            className="bg-blue-100 text-blue-600 text-sm font-medium px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Services
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            How <span className="text-blue-600">Knowtify</span> Helps Farmers
          </h2>

          <p className="text-gray-600 text-lg mt-4">
            Our efforts support farmers' adaptation but are hindered by the lack of information on how they experience and respond to climate change.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
            >
              <Card
                className={`relative overflow-hidden p-6 h-full transition-all duration-300 ${
                  hoveredIndex === index ? "shadow-xl scale-105" : "hover:shadow-lg"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative z-10">
                  <div 
                    className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-r ${service.color} text-white transform transition-transform duration-300 ${
                      hoveredIndex === index ? "scale-110" : ""
                    }`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>

                {/* Gradient Background */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-5" : ""
                  }`}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="group hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Learn More 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
