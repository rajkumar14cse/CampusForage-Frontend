import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Static images
import aiImage from "../images/ai.jpg";
import iotImage from "../images/iot.jpg";
import placementImage from "../images/placementImage.jpg";
import votingImage from "../images/votingImage.jpg";
import elearningImage from "../images/elearning.jpg";
import portfolioImage from "../images/portfolio.jpg";
import healthImage from "../images/health.jpeg";
import wasteImage from "../images/waste.jpg";
import labsImage from "../images/labs.jpeg";
import mlImage from "../images/ml.png";

const staticProjects = [
  { id: 1, title: "AI Attendance System", type: "Major", description: "Uses AI & Face Recognition.", imageUrl: aiImage, technologies: ["Python", "OpenCV", "Flask"] },
  { id: 2, title: "IoT Smart Irrigation", type: "Minor", description: "Automates irrigation.", imageUrl: iotImage, technologies: ["Arduino", "NodeMCU"] },
  { id: 3, title: "Campus Placement Portal", type: "Major", description: "Web platform for campus recruitment.", imageUrl: placementImage, technologies: ["Java", "Spring Boot"] },
  { id: 4, title: "Online Voting System", type: "Minor", description: "Secure digital voting.", imageUrl: votingImage, technologies: ["React", "Node.js"] },
  { id: 5, title: "E-Learning App", type: "Major", description: "Interactive learning platform.", imageUrl: elearningImage, technologies: ["Flutter", "Dart"] },
  { id: 6, title: "Portfolio Builder", type: "Minor", description: "Build student portfolios easily.", imageUrl: portfolioImage, technologies: ["React", "Tailwind CSS"] },
  { id: 7, title: "Health Tracker App", type: "Major", description: "Monitor steps, sleep & heart rate.", imageUrl: healthImage, technologies: ["React Native", "Redux"] },
  { id: 8, title: "Smart Waste Management", type: "Minor", description: "IoT-based garbage monitoring.", imageUrl: wasteImage, technologies: ["NodeMCU", "Sensors"] },
  { id: 9, title: "Virtual Labs Platform", type: "Minor", description: "Remote lab experiments.", imageUrl: labsImage, technologies: ["Three.js", "Flask"] },
  { id: 10, title: "ML Disease Predictor", type: "Major", description: "Predict diseases with ML.", imageUrl: mlImage, technologies: ["Python", "Scikit-learn"] },
];

const Projects = () => {
  const [dynamicProjects, setDynamicProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Fetch projects from backend
  const fetchProjects = () => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => setDynamicProjects(res.data))
      .catch((err) => console.error("Error fetching projects:", err));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const allProjects = [...staticProjects, ...dynamicProjects];

  const filteredProjects = allProjects.filter((p) => {
    const term = searchTerm.toLowerCase();
    return (
      p.title.toLowerCase().includes(term) ||
      (p.type && p.type.toLowerCase().includes(term)) ||
      (p.description && p.description.toLowerCase().includes(term))
    );
  });

  return (
    <div className="p-6 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white transition-all">
      <h2 className="text-3xl font-bold mb-6 text-center">
        📂 Explore Student Projects
      </h2>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by title, type, or description..."
          className="w-full p-3 rounded-md shadow-md text-sm dark:bg-gray-800 dark:text-white bg-white border dark:border-gray-600"
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length ? (
          filteredProjects.map((project) => {
            const isDynamic = !!project._id;
            const projectId = project.id || project._id;

            // ✅ Use backend imageUrl if project is dynamic
            const imageSrc = isDynamic
              ? `http://localhost:5000${project.imageUrl}`
              : project.imageUrl;

            return (
              <div
                key={projectId}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-lg relative"
              >
                <Link to={`/project/${projectId}`}>
                  <img
                    src={imageSrc || "/images/placeholder.png"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </Link>

                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  {project.description && (
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      {project.description}
                    </p>
                  )}
                  {project.type && (
                    <span className="text-xs bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-indigo-200 px-2 py-1 rounded-full">
                      {project.type} Project
                    </span>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 col-span-3">
            No matching projects found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Projects;
