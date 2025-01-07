'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { useProject } from '@/app/contexts/ProjectContext';
import { ImageUploadSection } from './ImageUploadSection';

const Dashboard = () => {
  const router = useRouter();
  const {
    isSubmitting,
    error,
    projects,
    showUploadForm,
    mapUrl,
    formData,
    setFormData,
    setShowUploadForm,
    handleLocationChange,
    handleImageUpload,
    handleSubmit,
    handleDelete,
    handleEdit,
    resetForm
  } = useProject();

  const handleView = (projectId) => {
    router.push(`/projects-detail/${projectId}`);
  };

  return (
    <div className="page-wrapper">
      <div className="p-6">
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Project Management Dashboard</h1>
          {!showUploadForm && (
            <button
              onClick={() => setShowUploadForm(true)}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
            >
              Upload New Project
            </button>
          )}
        </div>

        {showUploadForm ? (
          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">{formData.id ? 'Edit Project' : 'New Project'}</h2>
              <button
                type="button"
                onClick={() => {
                  setShowUploadForm(false);
                  resetForm();
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Information Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Project Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleLocationChange(e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Enter location"
                  />
                  {mapUrl && (
                    <iframe
                      width="100%"
                      height="300"
                      frameBorder="0"
                      style={{ border: 0, marginTop: '10px' }}
                      src={mapUrl}
                      allowFullScreen
                    ></iframe>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Client</label>
                  <input
                    type="text"
                    value={formData.client}
                    onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Type</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full p-2 border rounded"
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="architecture">Architecture</option>
                    <option value="interior">Interior</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Services</label>
                  <input
                    type="text"
                    value={formData.services}
                    onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>

              {/* Project Details Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Project Details</h2>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full p-2 border rounded h-24"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Concept</label>
                  <textarea
                    value={formData.concept}
                    onChange={(e) => setFormData({ ...formData, concept: e.target.value })}
                    className="w-full p-2 border rounded h-24"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Challenge</label>
                  <textarea
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    className="w-full p-2 border rounded h-24"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Solution</label>
                  <textarea
                    value={formData.solution}
                    onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                    className="w-full p-2 border rounded h-24"
                  />
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Project Quote</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Quote</label>
                  <textarea
                    value={formData.quote}
                    onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                    className="w-full p-2 border rounded h-24"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Author</label>
                    <input
                      type="text"
                      value={formData.quoteAuthor}
                      onChange={(e) => setFormData({ ...formData, quoteAuthor: e.target.value })}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Position</label>
                    <input
                      type="text"
                      value={formData.quotePosition}
                      onChange={(e) => setFormData({ ...formData, quotePosition: e.target.value })}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Images Section */}
            <div className="mt-8 space-y-6">
              <h2 className="text-xl font-semibold mb-4">Project Images</h2>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Main Banner Image</label>
                <input
                  type="file"
                  onChange={(e) => handleImageUpload([e.target.files[0]], 'mainImage')}
                  className="w-full mb-2"
                  accept="image/*"
                />
                {formData.mainImage && (
                  <img 
                    src={formData.mainImage}
                    alt="Main banner preview" 
                    className="mt-2 max-h-40 object-cover rounded"
                  />
                )}
              </div>

              <ImageUploadSection 
                title="Concept Images" 
                field="conceptImages" 
                images={formData.conceptImages}
              />

              <ImageUploadSection 
                title="Challenge Images" 
                field="challengeImages" 
                images={formData.challengeImages}
              />

              <ImageUploadSection 
                title="Solution Images" 
                field="solutionImages" 
                images={formData.solutionImages}
              />
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
                className={`bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 
                  ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Saving...' : (formData.id ? 'Update Project' : 'Create Project')}
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Existing Projects</h2>
            <div className="space-y-4">
              {projects.map(project => (
                <div key={project.id} className="border rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{project.title}</h3>
                    <p className="text-gray-600">{project.location}</p>
                  </div>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleView(project.id)}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleEdit(project)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              {projects.length === 0 && (
                <p className="text-gray-500 text-center py-4">No projects added yet.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;