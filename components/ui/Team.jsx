"use client";

import Image from "next/image";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Isah Muhammad Rabiu",
    role: "C.E.O",
    img: require("../../public/assests/img/team/isah.jpeg"), // ✅ Correct path
    linkedin: "https://www.linkedin.com/in/isahmrabiu/",
  },
  {
    name: "Abdulsalam Abubakar",
    role: "C.T.O",
    img:require("../../public/assests/img/team/daddy.jpg"), // ✅ Correct path
    linkedin: "https://www.linkedin.com/in/abdulsalam-abubakar-196878204/",
  },
  {
    name: "Muhammad Abdullahi",
    role: "Senior Developer",
    img: require("../../public/assests/img/team/abba.png"), // ✅ Correct path
    linkedin: "https://www.linkedin.com/in/muhammad-abdullahi",
  },
];


export default function Team() {
  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">Our Team</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl"
            >
              <Image
                src={member.img} // ✅ Now works correctly
                alt={member.name}
                width={128}
                height={128}
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-emerald-500"
              />
              <h4 className="mt-4 text-xl font-semibold text-gray-900">{member.name}</h4>
              <span className="text-gray-600">{member.role}</span>
              
              <div className="mt-4 flex justify-center space-x-4 text-emerald-600">
                <a href="#" className="hover:text-gray-900"><FaTwitter size={20} /></a>
                <a href="#" className="hover:text-gray-900"><FaFacebook size={20} /></a>
                <a href="#" className="hover:text-gray-900"><FaInstagram size={20} /></a>
                <a href={member.linkedin} className="hover:text-gray-900" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
