import MapBox from "../MapBox";

// components/ProjectForm/BasicInformation.js
export const BasicInformation = ({
    formData,
    onUpdate,
    mapUrl,
    onLocationChange
  }) => (
    <div className="space-y-4" data-testid="basic-information">
      <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
      
      <div>
        <label className="block text-sm font-medium mb-1">Project Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => onUpdate({ title: e.target.value })}
          className="w-full p-2 border rounded"
          required
          data-testid="title-input"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Location</label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => onLocationChange(e.target.value)}
          className="w-full p-2 border rounded"
          data-testid="location-input"
        />
        <MapBox src={mapUrl} />
      </div>
    </div>
  );