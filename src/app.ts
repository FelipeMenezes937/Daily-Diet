import fastify from "fastify";
import { config } from "dotenv";
import { db } from "./database";

export const app = fastify()

app.get('/daily', async (request, res) => { // rota pra criar usuário
     const tables = await db('sqlite_schema').select('*')
    
    return tables 
})
