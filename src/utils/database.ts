import { Pool } from 'pg'
import 'dotenv/config'


let conn:



if(!conn){
conn = new Pool({
  connectionString: process.env.SERVER_URI
  
});
}



export { conn }