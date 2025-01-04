// components/ProjectForm/ProjectDetailsSection.js
export const ProjectDetailsSection = ({ formData, onUpdate }) => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Project Details</h2>
      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => onUpdate({ description: e.target.value })}
          className="w-full p-2 border rounded h-24"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Concept</label>
        <textarea
          value={formData.concept}
          onChange={(e) => onUpdate({ concept: e.target.value })}
          className="w-full p-2 border rounded h-24"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Challenge</label>
        <textarea
          value={formData.challenge}
          onChange={(e) => onUpdate({ challenge: e.target.value })}
          className="w-full p-2 border rounded h-24"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Solution</label>
        <textarea
          value={formData.solution}
          onChange={(e) => onUpdate({ solution: e.target.value })}
          className="w-full p-2 border rounded h-24"
        />
      </div>
    </div>
  );