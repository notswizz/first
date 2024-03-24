import { useState, useEffect } from 'react';
import { useProfile } from '@farcaster/auth-kit';

export default function Create() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: ''
  });
  const { isAuthenticated, userData } = useProfile();

  useEffect(() => {
    // This will log user information to the console if authenticated
    if (isAuthenticated && userData) {
      console.log('Authenticated User:', { username: userData.username, fid: userData.fid });
    } else {
      console.log('User is not authenticated.');
    }
  }, [isAuthenticated, userData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isAuthenticated) {
      alert('Please sign in to submit an entry.');
      return;
    }
    // Since userData may be null, guard against it by providing an empty object
    const { username, fid } = userData || {};

    const dataWithUser = {
      ...formData,
      user: { username, fid }
    };

    console.log('Sending data:', dataWithUser);

    const response = await fetch('/api/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataWithUser),
    });
    const data = await response.json();
    console.log(data);
    setFormData({
      title: '',
      description: '',
      price: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
    </form>
  );
}
