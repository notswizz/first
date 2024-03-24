import { useEffect, useState } from 'react';

export default function DisplayEntries({ onToggle }) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch('/api/entries');
      const data = await response.json();
      setEntries(data);
    };
    fetchEntries();
  }, []);

  return (
    <div className="max-w-lg mx-auto my-2">
      <button
        onClick={onToggle}
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4 mx-auto"
      >
        Toggle Form/Display
      </button>
      <h2 className="text-xl font-semibold text-center mb-2">Entries</h2>
      <div className="max-h-80 overflow-auto bg-white shadow rounded-lg p-4">
        <ul className="space-y-3">
          {entries.map((entry, index) => (
            <li key={index} className="p-3 border border-gray-200 rounded-md">
              <h3 className="text-lg font-semibold mb-1">{entry.name}</h3>
              <div className="text-gray-700">
                <p>Email: {entry.email}</p>
                <p>Phone: {entry.phone}</p>
                <p>Location: {entry.location}</p>
                <p>Company: {entry.company}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
