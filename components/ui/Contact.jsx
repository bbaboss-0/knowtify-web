"use client";

import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";



const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-800">Contact</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4 p-5 bg-white shadow rounded-lg">
              <MapPin className="text-primary h-6 w-6" />
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p>Floor 1 African Alliance Building,</p>
                <p>No. 1 Sani Abacha Way, Kano</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-5 bg-white shadow rounded-lg">
              <Phone className="text-primary h-6 w-6" />
              <div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <p>(+234) 703 610 5884</p>
                <p>(+234) 814 784 8004</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-5 bg-white shadow rounded-lg">
              <Mail className="text-primary h-6 w-6" />
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <p>info@knowtify.com.ng</p>
                <p>contact@knowtify.com.ng</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-5 bg-white shadow rounded-lg">
              <Clock className="text-primary h-6 w-6" />
              <div>
                <h3 className="font-semibold text-lg">Open Hours</h3>
                <p>Monday - Friday</p>
                <p>9:00AM - 05:00PM</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 shadow rounded-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="input" required />
              <input type="email" placeholder="Your Email" className="input" required />
              <input type="text" placeholder="Subject" className="input md:col-span-2" required />
              <textarea placeholder="Message" className="input md:col-span-2 h-32" required></textarea>
            </div>
            <button type="submit" className="mt-4 px-6 py-3 bg-primary text-white rounded-lg w-full">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
