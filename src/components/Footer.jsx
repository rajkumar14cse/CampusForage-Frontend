import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'Twitter',
    icon: <FaTwitter />,
    url: 'https://twitter.com',
    color: 'hover:text-blue-500',
  },
  {
    name: 'GitHub',
    icon: <FaGithub />,
    url: 'https://github.com',
    color: 'hover:text-gray-800 dark:hover:text-white',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    url: 'https://linkedin.com',
    color: 'hover:text-blue-700',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    url: 'https://instagram.com',
    color: 'hover:text-pink-500',
  },
];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 shadow-inner mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center text-center">
        <h3 className="text-md font-semibold mb-2">Contact</h3>
        <p className="text-sm">
          📧 Email: <a href="mailto:info@campusforge.com" className="text-indigo-500">info@campusforge.com</a>
        </p>

        {/* Social Icons */}
        <p className="text-sm mt-4">Follow us:</p>
        <div className="flex justify-center space-x-6 mt-2 text-2xl">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.name}
              className={`transition-transform transform hover:scale-110 ${link.color}`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-6 pt-4 text-center text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} <span className="font-medium text-indigo-500">CampusForge</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
