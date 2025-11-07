import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        📂 Browse Student Projects
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading projects...</p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              No projects uploaded yet.
            </p>
          ) : (
            projects.map((proj) => (
              <div
                key={proj._id}
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition"
              >
                {/* Thumbnail */}
                {proj.image && (
                  <img
                    src={`http://localhost:5000/${proj.image}`} // backend must serve /uploads
                    alt={proj.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                )}

                <h2 className="text-xl font-semibold text-blue-700 mb-2">
                  {proj.title}
                </h2>

                <p className="text-gray-600 mb-3">{proj.description}</p>

                {proj.technologies && (
                  <p className="text-sm text-gray-500 mb-3">
                    <strong>Technologies:</strong>{" "}
                    {Array.isArray(proj.technologies)
                      ? proj.technologies.join(", ")
                      : proj.technologies}
                  </p>
                )}

                {/* Download Button */}
                {proj.file && (
                  <a
                    href={`http://localhost:5000/${proj.file}`}
                    download
                    className="inline-block text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition"
                  >
                    ⬇ Download Project
                  </a>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ViewProjects;
