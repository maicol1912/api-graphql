const express = require('express')
const {ApolloServer} = require("apollo-server-express")
const {typeDefs} =  require("./typeDefs")
const {resolvers} = require("./resolvers")
const {connectDb} = require("./db")

const app = express()
connectDb()

module.exports = app
app.get("/",(req,res)=>{
    res.send("welcome to my api")
})
async function start(){
    const apolloServer = new ApolloServer({
        typeDefs:typeDefs,
        resolvers:resolvers
    })

    await apolloServer.start()
    //* al servidor graphql le enviamos el servidor app de express que ya creamos 
    apolloServer.applyMiddleware({app:app})

    //* se ejecuta cuando no se encuentra ninguna ruta 
    //*se hace despues de graphql para que reconozca graphql 
    app.use("*",(req,res)=>{
        res.send("Not found")
    })
    app.listen(3000,()=>{
        console.log("server on port 3000")
    })
}

start()