import fastify from "fastify";

import { knex } from "./database";

export const app = fastify()

app.get('/daily', async (request, res) => { // rota pra criar usuário
     const tables = await knex('sqlite_schema').select('*')
    
    return tables 
})
