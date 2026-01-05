import fastify from "fastify";
import { number } from "zod";

export const app = fastify()

app.get('/daily', (request, reply) => {
    console.log('temos alguma coisa')
    
})

await app.listen({ port: 3333})

console.log('rodou')