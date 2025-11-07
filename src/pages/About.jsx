import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const teamMembers = [
  { name: 'Manasa', role: 'Frontend Developer', emoji: '💻' },
  { name: 'Rajkumar', role: 'Backend Developer', emoji: '🛠️' },
  { name: 'Shanmukhi', role: 'Database', emoji: '🗄️' },
  { name: 'Pavan', role: 'Data Collection', emoji: '📦' },
];

const About = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl shadow-xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Intro */}
      <h2 className="text-5xl font-extrabold text-center text-indigo-700 dark:text-indigo-300 mb-8 tracking-wide">
        🚀 About <span className="text-indigo-500">CampusForge</span>
      </h2>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed text-center max-w-3xl mx-auto">
        <span className="font-semibold">CampusForge</span> is your go-to platform for sharing and exploring academic projects.
        Whether you're building your first app or launching a research prototype — we provide the space to showcase, connect,
        and collaborate.
      </p>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <motion.div
          className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="text-2xl font-semibold mb-3 text-indigo-600 dark:text-indigo-300">🎯 Our Mission</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Empower students to share and discover academic work — sparking creativity and real-world impact.
          </p>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="text-2xl font-semibold mb-3 text-indigo-600 dark:text-indigo-300">🌍 Our Vision</h3>
          <p className="text-gray-600 dark:text-gray-300">
            To build the world’s largest open-source academic archive and collaborative student network.
          </p>
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="mt-8">
        <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">👥 Meet the Team</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md w-full sm:w-64 text-center transition"
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl mb-4">{member.emoji}</div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{member.name}</h4>
              <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Join Us CTA Section */}
      <motion.section
        className="mt-16 bg-indigo-600 dark:bg-indigo-700 text-white text-center rounded-2xl px-6 py-12 shadow-md"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h3 className="text-3xl font-bold mb-4">✨ Join the CampusForge Movement</h3>
        <p className="text-lg mb-6">
          Whether you're a student, mentor, or educator — your contribution makes a difference!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/upload"
            className="bg-white text-indigo-700 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
          >
            Upload a Project
          </Link>
          <Link
            to="/contact"
            className="bg-indigo-800 text-white border border-white font-semibold py-3 px-6 rounded-full hover:bg-indigo-900 transition"
          >
            Get in Touch
          </Link>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About;
