"use client"
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useProjectForm } from "@/hooks/useProjectForm"; 
import { BasicInformation } from "@/components/ProjectForm/BasicInformation";  
import { ProjectDetailsSection } from "@/components/ProjectForm/ProjectDetailsSection";  
import { QuoteSection } from "@/components/ProjectForm/QuoteSection";  
import { ImageUploadSection } from "@/components/ProjectForm/ImageUploadSection";  
import Header from "@/components/Header";

const AddProject = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id");

  const initialFormState = {
    title: "",
    description: "",
    location: "",
    client: "",
    date: "",
    type: "",
    services: "",
    concept: "",
    challenge: "",
    solution: "",
    quote: "",
    quoteAuthor: "",
    quotePosition: "",
    mainImage: null,
    conceptImages: [],
    challengeImages: [],
    solutionImages: []
  };

  const {
    formData,
    error,
    isSubmitting,
    handleLocationChange,
    handleImageUpload,
    setFormData,
    setError,
    setIsSubmitting
  } = useProjectForm(initialFormState);

  useEffect(() => {
    const storedProjects = sessionStorage.getItem("projects");
    const projects = storedProjects ? JSON.parse(storedProjects) : [];
    if (projectId) {
      const project = projects.find((p) => p.id === projectId);
      if (project) setFormData(project);
    }
  }, [projectId, setFormData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const storedProjects = sessionStorage.getItem("projects");
      const projects = storedProjects ? JSON.parse(storedProjects) : [];

      const newProject = {
        ...formData,
        id: projectId || Date.now().toString()
      };

      const updatedProjects = projectId
        ? projects.map((p) => (p.id === projectId ? newProject : p))
        : [...projects, newProject];

      sessionStorage.setItem("projects", JSON.stringify(updatedProjects));
      router.push("/dashboard");
    } catch (error) {
      setError("Failed to save project");
       
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-wrapper">
        <Header isFixed={true} />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-[90px]">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">
            {projectId ? "Edit Project" : "New Project"}
          </h1>
          <button
            onClick={() => router.push("/dashboard")}
            className="text-white bg-red-500 px-4 py-2 rounded-lg"
          >
            Back
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BasicInformation
              formData={formData}
              onUpdate={(updates) => setFormData((prev) => ({ ...prev, ...updates }))}
              onLocationChange={handleLocationChange}
            />

            <ProjectDetailsSection
              formData={formData}
              onUpdate={(updates) => setFormData((prev) => ({ ...prev, ...updates }))}
            />
          </div>

          <QuoteSection
            formData={formData}
            onUpdate={(updates) => setFormData((prev) => ({ ...prev, ...updates }))}
          />

          <div className="mt-8">
            <h2 className="text-xl font-semibold">Project Images</h2>
            <ImageUploadSection
              title="Main Banner Image"
              field="mainImage"
              images={formData.mainImage ? [formData.mainImage] : []}
              onUpload={(e) => handleImageUpload(Array.from(e.target.files), "mainImage")}
              onRemove={() => setFormData((prev) => ({ ...prev, mainImage: null }))}
            />

            {["concept", "challenge", "solution"].map((type) => (
              <ImageUploadSection
                key={type}
                title={`${type.charAt(0).toUpperCase() + type.slice(1)} Images`}
                field={`${type}Images`}
                images={formData[`${type}Images`]}
                onUpload={(e) => handleImageUpload(Array.from(e.target.files), `${type}Images`)}
                onRemove={(field, index) => {
                  const newImages = [...formData[field]];
                  newImages.splice(index, 1);
                  setFormData((prev) => ({ ...prev, [field]: newImages }));
                }}
              />
            ))}
          </div>

          {error && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-indigo-600 text-white px-6 py-2 rounded-lg ${
                isSubmitting ? "opacity-50" : "hover:bg-indigo-700"
              }`}
            >
              {isSubmitting
                ? "Saving..."
                : projectId
                ? "Update Project"
                : "Create Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
