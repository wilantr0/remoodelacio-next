import { NextApiResponse, NextApiRequest } from 'next';
import { conn } from 'src/utils/database';

export default async function idDB (req: NextApiRequest, res: NextApiResponse) {

  const query = await conn.query('SELECT NOW()')

  return res.json(query)
}
