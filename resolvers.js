const Task = require("./models/Task")
const resolvers = {
    //* cuando pidan un dato Hello en los typeDefs entonces devuelve el hello world
    Query:{
        hello:()=> 'Hello world',
        getAllTask:async ()=> {
            const tasks = await Task.find()
            return tasks
        },
        getTask:async(_,args)=>{
            console.log(args)
            const task = await Task.findById(args.id)
            console.log(task)
            return task
        }
    },
    //* aca se colocan lo qyue se ejecuta de las mutations de los typeDefs
    Mutation:{
        //* aca el args, es como el request body de una peticion
        //* el parent es cuando una mutation depende de otra
        /*createTask:async(parent_,args,context,info)=>{
            const {title,description} = args
            const newTask = new Task({title,description})
            await newTask.save()
            return newTask
        }*/
        createTask:async(parent_,args,context,info)=>{
            //*aca esta recibiendo el objeto task el cual tiene, los atributos
            const {task} = args
            const newTask = new Task(task)
            await newTask.save()
            return newTask
        },
         //* puedo desestructurar el objeto args, y solo recibir el id de ese args
        async deleteTask(_,{id}){
            await Task.findByIdAndDelete(id)
            return "task deleted"
        },
        async updateTask(_,{task,id}){
            //*el set es para que actualize tan solo los datos nuevos que lleguen 
            //* el true es para que nos traiga el objeto actualizaod y no el viejo
            const taskUpdated = await Task.findByIdAndUpdate(id,{
                $set:task
            },{new:true})
            return taskUpdated
        }
    }
}

module.exports = {resolvers}