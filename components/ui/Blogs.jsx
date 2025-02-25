"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    imgSrc: "/assets/img/blog/blog-1.jpg",
    category: "Alert Dispatcher",
    authorImg: "/assets/img/blog/blog-author.jpg",
    author: "Abdullrahman Nasir",
    date: "Jan 1, 2022",
  },
  {
    id: 2,
    imgSrc: "/assets/img/blog/blog-2.jpg",
    category: "Alert Dispatcher",
    authorImg: "/assets/img/blog/blog-author-2.jpg",
    author: "Bashir Muhammad",
    date: "Jun 5, 2022",
  },
  {
    id: 3,
    imgSrc: "/assets/img/blog/blog-3.jpg",
    category: "Alert Dispatcher",
    authorImg: "/assets/img/blog/blog-author-3.jpg",
    author: "Nazif Abdullahi",
    date: "Jun 22, 2022",
  },
  {
    id: 4,
    imgSrc: "/assets/img/blog/blog-4.jpg",
    category: "Alert Dispatcher",
    authorImg: "/assets/img/blog/blog-author.jpg",
    author: "Ahmad Ismail",
    date: "Jan 1, 2022",
  },
  {
    id: 5,
    imgSrc: "/assets/img/blog/blog-5.jpg",
    category: "Alert Dispatcher",
    authorImg: "/assets/img/blog/blog-author-3.jpg",
    author: "Abdullahi Hassan",
    date: "Jun 22, 2022",
  },
  {
    id: 6,
    imgSrc: "/assets/img/blog/blog-6.jpg",
    category: "Alert Dispatcher",
    authorImg: "/assets/img/blog/blog-author-2.jpg",
    author: "Sadiq Haruna",
    date: "Jun 5, 2022",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white shadow-lg p-4 rounded-lg">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={post.imgSrc}
                    alt=""
                    className="w-full h-64 object-cover rounded-lg"
                    width={400}
                    height={300}
                  />
                </div>
                <p className="text-blue-600 font-semibold mt-4">{post.category}</p>
                <div className="flex items-center gap-4 mt-3">
                  <Image
                    src={post.authorImg}
                    alt=""
                    className="w-12 h-12 object-cover rounded-full"
                    width={50}
                    height={50}
                  />
                  <div>
                    <p className="font-semibold text-gray-700">{post.author}</p>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center mt-10">
          <ul className="flex space-x-4 text-blue-600 font-semibold">
            <li><a href="#" className="px-3 py-1 border rounded-md hover:bg-blue-600 hover:text-white">1</a></li>
            <li className="px-3 py-1 border rounded-md bg-blue-600 text-white">2</li>
            <li><a href="#" className="px-3 py-1 border rounded-md hover:bg-blue-600 hover:text-white">3</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
