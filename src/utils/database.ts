import { Pool } from 'pg'
import 'dotenv/config'


let conn:any



if(!conn){
conn = new Pool({
  connectionString: process.env.SERVER_URI
  
});
}



export { conn }