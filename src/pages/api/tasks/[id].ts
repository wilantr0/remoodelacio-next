import { NextApiResponse, NextApiRequest } from 'next';

export default function idDB (req: NextApiRequest, res: NextApiResponse) {
  console.log(req.query);
  res.json('Its unique');
}
