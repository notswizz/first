// pages/api/open.js
import clientPromise from '../../utils/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { name, company, phone, email, location } = req.body;

    // Check for required fields
    if (!name || !company || !phone || !email || !location) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const client = await clientPromise;
    const db = client.db('database'); // Make sure 'database' is your actual database name
    const collection = db.collection('logs');

    const result = await collection.insertOne({
      name, company, phone, email, location
    });

    return res.status(201).json({ message: 'Log created successfully', result });
  } catch (error) {
    console.error('Failed to create the log:', error);
    return res.status(500).json({ message: 'Failed to create log', error });
  }
}
