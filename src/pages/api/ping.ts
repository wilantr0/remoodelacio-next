import { NextApiResponse, NextApiRequest } from 'next';
import { conn } from 'src/utils/database';

export default async function idDB (req: NextApiRequest, res: NextApiResponse) {

  const q = await conn.query('SELECT NOW()')

  return res.json({message: "pong", mesage: q.rows[0].now})
}
