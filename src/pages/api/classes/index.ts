import { NextApiRequest, NextApiResponse } from "next";
import { conn } from 'src/utils/database';
import { uuid } from 'uuidv4'

export default async function Queries (req: NextApiRequest, res: NextApiResponse) {
  const {method, body} = req
  switch (method) {
    case "GET":
      try {
        const response = await conn.query('SELECT * FROM classes')
        res.status(200).json(response.rows);
      } catch (error) {
        res.json(error);
      }
      
      break;
    case "POST":
      console.log(body)
      const { name, description, classId, teacher } = body
      const id = uuid()
      const createdAt = new Date()
      const updatedAt = createdAt
      const query = 'INSERT INTO classes(id, name, description, classId, teacher, createdAt, updatedAt) VALUES ($1, $2, $3, $4, $5, $6, $7);'
      const values = [id, name, description, classId, teacher, createdAt, updatedAt]
      conn.query(query, values)
      res.status(200).json("CREATING task");
      break;
    default:
      res.json("ERROR");
      break;
  }
};
