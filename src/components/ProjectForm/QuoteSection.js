
// components/ProjectForm/QuoteSection.js
export const QuoteSection = ({ formData, onUpdate }) => (
    <div className="mt-8 p-6 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Project Quote</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Quote</label>
          <textarea
            value={formData.quote}
            onChange={(e) => onUpdate({ quote: e.target.value })}
            className="w-full p-2 border rounded h-24"
          />
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Author</label>
            <input
              type="text"
              value={formData.quoteAuthor}
              onChange={(e) => onUpdate({ quoteAuthor: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Position</label>
            <input
              type="text"
              value={formData.quotePosition}
              onChange={(e) => onUpdate({ quotePosition: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );