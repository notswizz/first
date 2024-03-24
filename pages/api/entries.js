// pages/api/entries.js
import clientPromise from '../../utils/mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const client = await clientPromise;
      const db = client.db('database'); // Replace 'your_db_name' with your actual database name
      const collection = db.collection('logs');
      const entries = await collection.find({}).toArray();
      res.status(200).json(entries);
    } catch (error) {
      console.error('Error fetching entries:', error);
      res.status(500).json({ message: 'Error fetching entries', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
