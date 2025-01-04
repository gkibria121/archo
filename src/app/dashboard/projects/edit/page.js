// pages/project/[id].js
"use client"
import { useParams } from "next/navigation";
import ProjectFormCommon from "@/components/ProjectForm/ProjectFormCommon";

const EditProject = () => { 
  const { id } = useParams();

  return <ProjectFormCommon projectId={id} isEdit={true} initialFormState={{}} />;
};

export default EditProject;
