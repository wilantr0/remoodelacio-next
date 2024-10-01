import { NextApiRequest, NextApiResponse } from "next";
import { conn } from 'src/utils/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const response = await conn.query('SELECT * FROM classrooms');
        res.status(200).json(response.rows);
      } catch (error) {
        res.status(500).json( error );
      }
      break;

    case "POST":
      try {
        const { name, description, createdBy } = body;

        // Validación básica
        if (!name || !createdBy) {
          return res.status(400).json({ error: 'Name and createdBy are required' });
        }

        const query = `
          INSERT INTO classrooms (name, description, created_by)
          VALUES ($1, $2, $3)
          RETURNING *;
        `;
        const values = [name, description, createdBy];
        const response = await conn.query(query, values);

        res.status(201).json(response.rows[0]);
      } catch (error) {
        console.error('Error creating class:', error);
        res.status(500).json({ error: 'An error occurred while creating the class' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
