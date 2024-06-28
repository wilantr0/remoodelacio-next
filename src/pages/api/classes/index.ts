import { NextApiRequest, NextApiResponse } from "next";
import { conn } from 'src/utils/database';
import ShortUniqueId from 'short-unique-id'

export default async function Queries (req: NextApiRequest, res: NextApiResponse) {

  const uid = new ShortUniqueId({ length: 10})

  const {method, body} = req
  switch (method) {
    case "GET":
      try {
        const response = await conn.query('SELECT * FROM clases')
        res.status(200).json(response.rows);
      } catch (error) {
        res.json(error);
      }
      
      break;
    case "POST":
      console.log(body)
      const { name, teacher } = body
      const id = uid.rnd()
      const classCode = uid.rnd()
      const query = 'INSERT INTO clases(id, name, teacher, classCode) VALUES ($1, $2, $3, $4);'
      const values = [id, name, teacher, classCode]
      conn.query(query, values)
      res.status(200).json("CREATING class");
      break;
    default:
      res.json("ERROR");
      break;
  }
};
