// pages/api/open.js
import clientPromise from '../../utils/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    // Only allow POST requests, reject others with a 405 Method Not Allowed status
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Destructure and get the fields from the request body
    const { title, description, price, user } = req.body;

    // Check for required fields
    if (!title || !description || !price) {
      return res.status(400).json({ message: 'Missing required fields: title, description, and price are required.' });
    }

    // Connect to the database
    const client = await clientPromise;
    const db = client.db('database'); // Make sure to replace 'database' with your actual database name
    const collection = db.collection('logs');

    // Insert a new document into the collection
    const result = await collection.insertOne({ title, description, price, user });

    // Respond with a 201 Created status and a message
    return res.status(201).json({ message: 'Log created successfully', result });
  } catch (error) {
    // Log and return an error response
    console.error('Failed to save the log:', error);
    return res.status(500).json({ message: 'Failed to create log', error });
  }
}
