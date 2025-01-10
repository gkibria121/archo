export const ProjectCategory = ({ category, onChange, value }) => {
    const categories = [
      { value: 'all', label: 'All' },
      { value: 'residentials', label: 'Residentials' },
      { value: 'commercials', label: 'Commercials' },
      { value: 'architecture', label: 'Architecture' },
      { value: 'interior', label: 'Interior' }
    ];
  
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          {categories.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    );
  };
  