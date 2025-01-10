"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProjectFormCommon from "@/components/ProjectForm/ProjectFormCommon";

const EditProject = () => { 
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects/${id}`);
        const projectData = await response.json();
        setProject(projectData);
      } catch (error) {
        console.error("Failed to load project", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProject();
  }, [id]);

  if (loading) return <p>Loading project...</p>;

  return project ? (
    <ProjectFormCommon projectId={id} isEdit={true} initialFormState={project} />
  ) : (
    <p>Project not found</p>
  );
};

export default EditProject;
