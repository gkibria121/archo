"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import { useDashboard } from "../contexts/DashboardContext";

const Dashboard = () => {
  const router = useRouter();
  const { projects, loadProjects, deleteProject } = useDashboard();

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  const handleEdit = (project) => {
    router.push(`/dashboard/projects/edit/${project.id}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Header isFixed={true} />
      <div className="flex justify-between items-center mb-8 mt-[90px]">
        <h1 className="text-3xl font-bold">Project Management</h1>
        <button
          onClick={() => router.push("/dashboard/projects/add")}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
        >
          Add Project
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="border rounded-lg p-4 bg-white shadow-md">
            {project.mainImage && (
              <img 
                src={project.mainImage} 
                alt={project.title} 
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.location}</p>
            <div className="flex justify-between items-center">
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(project)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => router.push(`/projects/${project.id}`)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  View
                </button>
              </div>
              <button
                onClick={() => deleteProject(project.id)}
                className="text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;