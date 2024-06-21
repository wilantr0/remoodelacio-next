import { NextApiRequest, NextApiResponse } from "next";
//import { conn } from 'src/utils/database';

export default async function Queries (req: NextApiRequest, res: NextApiResponse) {

  const {method, query} = req;
  console.log(query)
  switch (method) {
    case "GET":
     
      
      break;
    case "POST":
      
      break;
    default:
      res.json("ERROR");
      break;
  }
};
