const {Schema,model} = require('mongoose')

//* esquema para la base de datos
const taskSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:String
})
//* modelo para el codigo, para el backend como tal
module.exports = model("Task",taskSchema)