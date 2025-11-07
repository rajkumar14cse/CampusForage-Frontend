import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Home = () => {
  return (
    <div className="text-gray-900 dark:text-white bg-white dark:bg-gray-900 transition-all duration-500">
      {/* Hero Section */}
      <section
        className="h-[50vh] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 relative overflow-hidden"
        style={{ backgroundImage: "url('/images/college.png')" }}
      >
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        <motion.div
          className="max-w-2xl w-full text-center text-white relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-indigo-100 mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to <span className="text-indigo-800">CampusForge 🎓</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-200 mb-6 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Showcase, discover, and explore student innovation in AI, Web, IoT,
            Cybersecurity, Blockchain, and more!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/projects"
              className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-full hover:bg-indigo-500 hover:scale-105 shadow-lg transition-all duration-300 inline-block"
            >
              Explore Projects 🚀
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Why CampusForge */}
<section className="py-16  text-center overflow-hidden">
  <motion.h2
    className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-10"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
  >
    🚀 Why CampusForge?
  </motion.h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
    {[
      {
        icon: "💡",
        title: "Innovative Projects",
        desc: "Discover cutting-edge student work.",
        details:
          "CampusForge showcases groundbreaking ideas in AI, IoT, Web, and more — designed and developed by talented students across campuses. Each project highlights creativity and technical mastery."
      },
      {
        icon: "👨‍💻",
        title: "Real Skills",
        desc: "Hands-on experience through real projects.",
        details:
          "Every project is built with real-world challenges in mind. From code to deployment, students learn practical skills that make them industry-ready."
      },
      {
        icon: "🌐",
        title: "Global Reach",
        desc: "Share your work beyond campus walls.",
        details:
          "Your innovations deserve a global stage. CampusForge helps your projects reach mentors, recruiters, and collaborators worldwide."
      },
      {
        icon: "📥",
        title: "Easy Uploads",
        desc: "Admins can upload projects quickly.",
        details:
          "CampusForge offers a seamless admin interface where projects can be uploaded, categorized, and managed efficiently within seconds."
      },
      {
        icon: "🔍",
        title: "Smart Search",
        desc: "Find projects by tech stack or title.",
        details:
          "Advanced search and filters make it easy to find exactly what you need — whether it's AI models, web applications, or IoT innovations."
      },
      {
        icon: "📊",
        title: "Trending Insights",
        desc: "See what’s popular among peers.",
        details:
          "Track which domains are trending, view most-viewed projects, and get inspired by the latest tech movements among students."
      },
    ].map((f, i) => (
      <motion.div
        key={i}
        className="relative bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 border border-transparent hover:border-indigo-500 group"
        custom={i}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="text-5xl mb-3">{f.icon}</div>
        <h3 className="font-semibold text-lg mb-1 text-indigo-600 dark:text-indigo-300">
          {f.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{f.desc}</p>

        {/* Hidden Description (Appears on Hover) */}
        <div className="absolute inset-0 bg-indigo-600 dark:bg-indigo-800 text-white flex items-center justify-center text-sm px-4 py-6 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
          <p className="leading-relaxed">{f.details}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>


      {/* Testimonials */}
      <section className="py-16 bg-white dark:bg-gray-900 text-center">
        <motion.h2
          className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          💬 Student Testimonials
        </motion.h2>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[
            { name: "Manish M.", text: "CampusForge gave my AI project visibility and confidence!" },
            { name: "Anil B.", text: "Easy to upload projects and showcase to recruiters." },
            { name: "Manoj K.", text: "Highly motivated seeing peers' work in Web and IoT." },
          ].map((t, i) => (
            <motion.div
              key={i}
              className="bg-gray-550 dark:bg-gray-800 p-6 rounded-xl border dark:border-gray-700 shadow-sm hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition duration-300"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className="italic text-gray-700 dark:text-gray-300 mb-3">“{t.text}”</p>
              <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className=" text-white py-16 text-center overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          🌟 Explore Innovation Today
        </motion.h2>
        <motion.p
          className="mb-8 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Start browsing or upload your project now!
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to="/projects"
            className="bg-white text-indigo-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 shadow-lg transition-all duration-300 inline-block"
          >
            Browse Projects
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;
