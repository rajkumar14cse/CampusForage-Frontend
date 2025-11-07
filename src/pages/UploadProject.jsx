// UploadProject.jsx (Frontend React)
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCloudUploadAlt } from 'react-icons/fa';
import axios from 'axios';
import Footer from '../components/Footer';

const UploadProject = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    file: null,
    image: null,
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, description, technologies, file, image } = formData;
    if (!title || !description || !technologies || !file || !image) {
      setStatus('❌ Please fill all fields and upload files');
      return;
    }

    const data = new FormData();
    data.append('title', title);
    data.append('description', description);
    data.append('technologies', technologies);
    data.append('file', file);
    data.append('image', image);

    try {
      await axios.post('http://localhost:5000/api/projects/upload', data);
      setStatus('✅ Project uploaded successfully!');
      setFormData({ title: '', description: '', technologies: '', file: null, image: null });
    } catch (err) {
      console.error(err);
      setStatus('❌ Failed to upload project');
    }
  };

  return (
    <>
      <motion.div
        className="max-w-3xl mx-auto bg-white dark:bg-gray-900 shadow-2xl px-8 py-10 rounded-2xl mt-10 mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-extrabold text-center mb-8 text-indigo-600 dark:text-indigo-400">
          🚀 Upload Your Project
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Project Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
              rows="4"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Technologies Used
            </label>
            <input
              type="text"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Upload Project File
            </label>
            <input
              type="file"
              name="file"
              accept=".pdf,.zip,.rar,.docx"
              onChange={handleChange}
              className="w-full text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Upload Project Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full text-sm"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md transition-all"
          >
            Upload Project 🚀
          </motion.button>

          {status && (
            <p className={`mt-4 text-sm font-semibold text-center ${status.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
              {status}
            </p>
          )}
        </form>
      </motion.div>
      <Footer />
    </>
  );
};

export default UploadProject;


