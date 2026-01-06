import fastify from "fastify";
import { config } from "dotenv";

export const app = fastify()
let cont: number = 0
app.get('/daily', (request, res) => { // rota pra criar usuário
    console.log(`${cont}) rota get /daily`)
    cont++
    return res.code(200).send()// tava faltando o .send()
})
