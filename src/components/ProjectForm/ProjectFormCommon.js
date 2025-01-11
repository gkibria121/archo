"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BasicInformation } from "@/components/ProjectForm/BasicInformation";
import { ProjectDetailsSection } from "@/components/ProjectForm/ProjectDetailsSection";
import { ImageUploadSection } from "@/components/ProjectForm/ImageUploadSection";
import { useDashboard } from "@/app/contexts/DashboardContext";
import { ProjectCategory } from "./ProjectCategory";

const ProjectFormCommon = ({ projectId, initialFormState, isEdit }) => {
  const router = useRouter();
  const { 
    createProject, 
    updateProject, 
    getProjectById, 
    handleImageUpload: uploadImage,
    error,
    setError,
    isLoading 
  } = useDashboard();

  const defaultFormState = {
    title: '',
    location: '',
    category: 'residential', 
    mainImage: null,
    concept: '',
    challenge: '',
    solution: '',
    conceptImages: [],
    challengeImages: [],
    solutionImages: [],
    ...initialFormState
  };

  const [formData, setFormData] = useState(defaultFormState);
  const [mapUrl, setMapUrl] = useState('');
  const [localError, setLocalError] = useState('');

  useEffect(() => {
    if (isEdit && projectId) {
      const project = getProjectById(projectId);
      if (project) setFormData({ ...defaultFormState, ...project });
    }
  }, [projectId, isEdit, getProjectById]);

  const handleLocationChange = (location) => {
    setFormData(prev => ({ ...prev, location }));
    setMapUrl(`https://maps.google.com/maps?q=${encodeURIComponent(location)}&output=embed`);
  };

  const handleImageUpload = async (files, field) => {
    try {
      setLocalError('');
      const imageUrls = await uploadImage(files);
      
      setFormData(prev => {
        if (field === 'mainImage') {
          return { ...prev, mainImage: imageUrls[0] };
        }
        return {
          ...prev,
          [field]: [...(prev[field] || []), ...imageUrls]
        };
      });
    } catch (err) {
      setLocalError('Failed to upload images');
    }
  };

  const validateForm = () => {
    if (!formData.title?.trim()) {
      setLocalError('Title is required');
      return false;
    }
    if (!formData.location?.trim()) {
      setLocalError('Location is required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!validateForm()) return;
      
      setLocalError('');
      setError(null);

      if (isEdit) {
        await updateProject(projectId, formData);
      } else {
        await createProject(formData);
      }
      router.push("/dashboard");
    } catch (err) {
      setLocalError("Failed to save project");
    }
  };

  const displayError = localError || error;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-[90px]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{isEdit ? "Edit Project" : "New Project"}</h1>
        <button
          onClick={() => router.push("/dashboard")}
          className="text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
          type="button"
        >
          Back
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <BasicInformation
            formData={formData}
            onUpdate={(updates) => setFormData(prev => ({ ...prev, ...updates }))}
            onLocationChange={handleLocationChange}
            mapUrl={mapUrl}
          />

          <ProjectDetailsSection
            formData={formData}
            onUpdate={(updates) => setFormData(prev => ({ ...prev, ...updates }))}
          />
          
        <ProjectCategory
            value={formData.category}
            onChange={(category) => setFormData(prev => ({ ...prev, category }))}
          />
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">Project Images</h2>
          <ImageUploadSection
            title="Main Banner Image"
            field="mainImage"
            images={formData.mainImage ? [formData.mainImage] : []}
            onUpload={(e) => handleImageUpload(Array.from(e.target.files), "mainImage")}
            onRemove={() => setFormData(prev => ({ ...prev, mainImage: null }))}
          />

          {["concept", "challenge", "solution"].map((type) => (
            <ImageUploadSection
              key={type}
              title={`${type.charAt(0).toUpperCase() + type.slice(1)} Images`}
              field={`${type}Images`}
              images={formData[`${type}Images`] || []}
              onUpload={(e) => handleImageUpload(Array.from(e.target.files), `${type}Images`)}
              onRemove={(field, index) => {
                const newImages = [...(formData[field] || [])];
                newImages.splice(index, 1);
                setFormData(prev => ({ ...prev, [field]: newImages }));
              }}
            />
          ))}
        </div>

        {displayError && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {displayError}
          </div>
        )}

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-indigo-600 text-white px-6 py-2 rounded-lg ${
              isLoading ? "opacity-50" : "hover:bg-indigo-700"
            }`}
          >
            {isLoading ? "Saving..." : isEdit ? "Update Project" : "Create Project"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectFormCommon;