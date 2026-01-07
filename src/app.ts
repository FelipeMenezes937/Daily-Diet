import fastify from "fastify";
import crypto from "node:crypto"
import { knex } from "./database";
import { id } from "zod/locales";


export const app = fastify()

app.get('/daily', async (request, res) => { // rota pra criar usuário
   const meal = await knex('meals').select('*')
   return meal
})


app.post('/daily', async (request, res) => { // rota pra criar usuário
    const meal = await knex('meals').insert({
        id: crypto.randomUUID(),
        title: 'refeicao teste',
        description: 'comida',
        date: new Date(),
        'in diet': true
        

    }).returning('*')

    return meal
})

