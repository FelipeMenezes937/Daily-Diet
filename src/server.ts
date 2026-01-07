import { app } from "./app"

await app.listen({ port: 3333}).then(() => {
    console.log('rodando')
})
