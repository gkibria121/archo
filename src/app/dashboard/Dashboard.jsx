"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ProjectList } from "../../components/ProjectList/ProjectList";
import Header from "@/components/Header";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedProjects = sessionStorage.getItem("projects");
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  const handleDelete = (projectId) => {
    const updatedProjects = projects.filter((p) => p.id !== projectId);
    setProjects(updatedProjects);
    sessionStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  const handleEdit = (project) => {
    router.push(`/dashboard/projects/edit?id=${project.id}`);
  };

  return (<>
 
    <div className=" ">
    
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
        
      {projects.length !== 0 ? (<ProjectList
          projects={projects}
          onView={(id) => router.push(`/projects/${id}`)}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />):"No projects found!"}
        
      </div>
    </div>
    </>
  );
};

export default Dashboard;
