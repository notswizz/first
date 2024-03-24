// pages/api/log.js
import clientPromise from '../../utils/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { title, description, price, user } = req.body;
      const client = await clientPromise;
      const db = client.db('database');
      const collection = db.collection('logs');
      const result = await collection.insertOne({ title, description, price, user });
      res.status(201).json({ message: 'Log saved', result });
    } catch (error) {
      console.error('Error saving log:', error);
      res.status(500).json({ message: 'Error saving log', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
