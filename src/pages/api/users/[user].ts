import { NextApiRequest, NextApiResponse } from "next";
import { conn } from 'src/utils/database';

export default async function Queries (req: NextApiRequest, res: NextApiResponse) {

  const {method, query} = req;
  console.log(query)
  switch (method) {
    case "GET":
      try {
        const queryText = {
          text: 'SELECT name FROM users WHERE id = $1',
          values: [query.user]
        }
        const response = await conn.query(queryText)
        res.status(200).json(response.rows);
        return response.rows
      } catch (error) {
        res.json(error);
      }
      res.json(query)
      break;
    case "POST":
      
      break;
    default:
      res.json("ERROR");
      break;
  }
};
