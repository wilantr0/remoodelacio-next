import { Pool } from 'pg'


let conn:any



if(!conn){
conn = new Pool({
  user: 'guille',
  password: '1234',
  host: 'localhost',
  port: 5432,
  database: 'remoodelacio'
});
}

export { conn }