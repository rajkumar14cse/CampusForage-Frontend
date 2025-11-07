import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
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

// Static project list
const staticProjects = [
  {
    id: 1,
    title: "AI Attendance System",
    imageUrl: aiImage,
    type: "Major",
    longDescription: "A smart attendance tracking solution using AI and Face Recognition.",
    technologies: ["Python", "OpenCV"],
    downloadLink: "/downloads/ai_attendance.zip",
    developers: ["Team: Varun"],
  },
  {
    id: 2,
    title: "IoT Smart Irrigation",
    imageUrl: iotImage,
    type: "Minor",
    longDescription: "Intelligent irrigation system with IoT sensors.",
    technologies: ["Arduino"],
    downloadLink: "/downloads/iot_irrigation.zip",
  },
  {
    id: 3,
    title: "Campus Placement Portal",
    imageUrl: placementImage,
    type: "Major",
    longDescription: "Web-based platform for campus recruitment.",
    technologies: ["Java", "Spring Boot", "MySQL"],
    downloadLink: "/downloads/placement_portal.zip",
  },
  {
    id: 4,
    title: "Online Voting System",
    imageUrl: votingImage,
    type: "Minor",
    longDescription: "Secure digital voting platform.",
    technologies: ["React", "Node.js", "MongoDB"],
    downloadLink: "/downloads/voting_system.zip",
  },
  {
    id: 5,
    title: "E-Learning App",
    imageUrl: elearningImage,
    type: "Major",
    longDescription: "Digital learning platform with quizzes and video lectures.",
    downloadLink: "/downloads/elearning_app.zip",
  },
  {
    id: 6,
    title: "Portfolio Builder",
    imageUrl: portfolioImage,
    type: "Minor",
    longDescription: "Tool to create professional portfolios easily.",
    technologies: ["React", "Tailwind CSS"],
    downloadLink: "/downloads/portfolio_builder.zip",
  },
  {
    id: 7,
    title: "Health Tracker App",
    imageUrl: healthImage,
    type: "Major",
    longDescription: "Mobile app to monitor daily health activities.",
    technologies: ["React Native", "Redux", "Firebase"],
    downloadLink: "/downloads/health_tracker.zip",
  },
  {
    id: 8,
    title: "Smart Waste Management",
    imageUrl: wasteImage,
    type: "Minor",
    longDescription: "IoT solution for public garbage bin monitoring.",
    technologies: ["NodeMCU", "C++", "Sensors"],
    downloadLink: "/downloads/smart_waste.zip",
  },
  {
    id: 9,
    title: "Virtual Labs Platform",
    imageUrl: labsImage,
    type: "Minor",
    longDescription: "Simulated lab experiments for remote learning.",
    technologies: ["HTML5", "JavaScript", "Three.js"],
    downloadLink: "/downloads/virtual_labs.zip",
  },
  {
    id: 10,
    title: "ML Disease Predictor",
    imageUrl: mlImage,
    type: "Major",
    longDescription: "Predict diseases using ML algorithms.",
    technologies: ["Python", "Scikit-learn"],
    downloadLink: "/downloads/ml_disease_predictor.zip",
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      const staticProject = staticProjects.find((p) => p.id === parseInt(id));
      if (staticProject) {
        setProject(staticProject);
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(`http://localhost:5000/api/projects/${id}`);
        setProject(res.data);
      } catch (err) {
        console.error("Error fetching project:", err);
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (!project)
    return (
      <div className="text-center mt-20 text-red-500 text-xl">
        ⚠️ Project not found.{" "}
        <Link to="/projects" className="text-blue-500 underline">
          Back to Projects
        </Link>
      </div>
    );

  // ✅ Fix image handling (works for backend uploads)
  const imageSrc =
    project.imageUrl && project.imageUrl.startsWith("/uploads")
      ? `http://localhost:5000${project.imageUrl}`
      : project.imageUrl
      ? project.imageUrl
      : project.projectImage
      ? `http://localhost:5000/uploads/${project.projectImage}`
      : "/images/placeholder.png";

  return (
    <div className="p-6 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white transition-all">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        ← Back to Projects
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* ✅ Project Image */}
        <div className="rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
          <img
            src={imageSrc}
            alt={project.title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Project Details */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col justify-center transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-bold mb-2">{project.title}</h2>

          {project.type && (
            <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">
              <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-xs">
                {project.type} Project
              </span>
            </p>
          )}

          <p className="mb-4 text-lg leading-relaxed">
            {project.longDescription || project.description}
          </p>

          {project.technologies && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {project.developers && (
            <p className="text-sm mb-4 font-medium text-gray-700 dark:text-gray-300">
              {Array.isArray(project.developers)
                ? project.developers.join(", ")
                : project.developers}
            </p>
          )}

          <div className="mt-6 flex justify-center">
            <a
              href={
                project.downloadLink && project.downloadLink.startsWith("/uploads")
                  ? `http://localhost:5000${project.downloadLink}`
                  : project.downloadLink || project.projectFile || "#"
              }
              download
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              📦 Download Project ZIP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
