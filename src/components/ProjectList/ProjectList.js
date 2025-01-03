// components/ProjectList/ProjectList.js
export const ProjectList = ({
    projects,
    onView,
    onEdit,
    onDelete
  }) => (
    <div className="space-y-4" data-testid="project-list">
      {projects.map((project) => (
        <div
          key={project.id}
          className="border rounded-lg p-4 flex justify-between items-center"
          data-testid={`project-item-${project.id}`}
        >
          <div>
            <h3 className="font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.location}</p>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => onView(project.id)}
              className="bg-green-500 text-white px-4 py-2 rounded"
              data-testid={`view-project-${project.id}`}
            >
              View
            </button>
            <button
              onClick={() => onEdit(project)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
              data-testid={`edit-project-${project.id}`}
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(project.id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
              data-testid={`delete-project-${project.id}`}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );