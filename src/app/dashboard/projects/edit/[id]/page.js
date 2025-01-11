"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProjectFormCommon from "@/components/ProjectForm/ProjectFormCommon";
import { useDashboard } from "@/app/contexts/DashboardContext";

const EditProject = () => {
  const params = useParams();
  const { getProjectById } = useDashboard();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (params?.id) {
      const projectData = getProjectById(params.id);
      setProject(projectData);
    }
  }, [params?.id, getProjectById]);

  if (!project) return <div>Loading...</div>;

  return (
    <ProjectFormCommon 
      projectId={params.id} 
      initialFormState={project} 
      isEdit={true} 
    />
  );
};

export default EditProject;