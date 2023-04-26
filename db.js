const {connect, model} = require("mongoose")

const connectDb = async() =>{
    await connect('mongodb://localhost/taskdb')
    .then(()=>{
        console.log("connection db success")
    })
    .catch((e)=>{
        console.log("bad connection db"+e)
    })
}

module.exports = {connectDb}
