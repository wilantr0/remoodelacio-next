import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      res.status(200).json("GETTING tasks");
      break;
    case "POST":
      res.status(200).json("CREATING task");
      break;
    default:
      res.json("ERROR");
      break;
  }
};
