"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800  py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <motion.h2
              className="text-2xl font-bold  text-gray-900"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              KNOWTIFY
            </motion.h2>
            <p className="mt-3 text-sm text-gray-600">
              Early Warning Dissemination and Information App Impact of Climate Change on Agriculture in Nigeria.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-700 text-2xl hover:text-blue-400 transition duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-700 text-2xl hover:text-blue-600 transition duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-700 text-2xl hover:text-pink-500 transition duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-700 text-2xl hover:text-blue-500 transition duration-300">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Useful Links</h4>
            <ul className="space-y-3 text-sm text-gray-600 ">
              <li>
                <Link href="#" className="hover:text-gray-900 transition duration-300">Home</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 transition duration-300">About us</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 transition duration-300">Services</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 transition duration-300">Terms of Service</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 transition duration-300">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-gray-900 transition duration-300">Risk Mitigation</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 transition duration-300">Enhanced Productivity</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 transition duration-300">Resource Efficiency</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 transition duration-300">Two-Way Communication</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 transition duration-300">Capacity Building</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 transition duration-300">Data-driven Decision Making</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Contact Us</h4>
            <p className="text-sm text-gray-600">Floor 1, African Alliance Building</p>
            <p className="text-sm text-gray-600">No. 1 Sani Abacha Way, Kano</p>
            <p className="text-sm text-gray-600 mt-3">
              <strong className="text-gray-900">Phone:</strong> (+234) 806 5287 420
            </p>
            <p className="text-sm text-gray-600">
              <strong className="text-gray-900">Email:</strong> info@knowtify.com.ng
            </p>
          </div>
        </div>

        <div className="text-center text-sm mt-10 border-t border-gray-300 pt-5">
          <p>
            &copy; {new Date().getFullYear()} <strong className="text-gray-900">KNOWTIFY</strong>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
