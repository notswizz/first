import { useEffect, useState } from 'react';

export default function DisplayEntries() {
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
    <div>
      <h2 className="text-2xl font-bold my-4">Entries</h2>
      <ul>
        {entries.map((entry, index) => (
          <li key={index} className="border-b border-gray-200 py-2">
            <h3 className="text-xl font-semibold">{entry.name}</h3>
            <p>{entry.description}</p>
            <p className="text-gray-600">Price: ${entry.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
