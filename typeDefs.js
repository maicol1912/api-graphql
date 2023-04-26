const {gql} = require("apollo-server-express")

//* aca estamos diciendo que cuando consulten el hello vamos a devolver un string
const typeDefs = gql`

    #* para tipar los datos
    type Task{
        id: ID
        title:String,
        description:String
    }
    #* los querys son consultas, osea todo lo que es solicitar datos
    type Query{
        hello:String
        getAllTask : [Task]
        # para decirle que esta ruta recibe un id y el resolver puede tomar este ID
        getTask(id:ID):Task
    }
    input TaskInput{
        title:String#! el signo es para devir que este es obligatorio
        description:String
    }
    #* los mutations son todo lo que se necesita enviar datos, ya sea un post o un put
    type Mutation{
    #createTask(title:String,description:String):Task    
     #estamos especificando que recibe un task de tipo TaskInput que tiene las caracteristicaz de title y description
     createTask(task:TaskInput):Task   
     deleteTask(id:ID!):String
     #! este es para decir que es requerido
     updateTask(id:ID!,task:TaskInput):Task
    }
`
module.exports = {typeDefs}