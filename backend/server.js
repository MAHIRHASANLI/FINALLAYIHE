const express = require('express')
const mongoose = require('mongoose')
const cors= require('cors')
const bodyParser = require('body-parser')
require("dotenv").config()
const app = express()
app.use(cors())
app.use(bodyParser.json());

const NodModel = mongoose.model("Node", mongoose.Schema({
    image : String,
    name: String,
    title: String
}))


app.get('/', (req,res)=>{
    console.log("Helo");
})
app.get('/api/lists', async(req,res)=>{
    const {name} = req.query;
    const GetAll = await NodModel.find()
    if(name===undefined){
   res.send(GetAll)
    }else{
        const Filtered= GetAll.filter((m)=>m.name.toLowerCase().trim().includes(name.toLowerCase().trim()))
        res.send(Filtered)
    }
})
app.get('/api/lists/:id', async(req,res)=>{
    const id = req.params.id
    const ById = await NodModel.findById(id)
 res.send(ById)
})
app.post('/api/lists', async(req,res)=>{
    const NewObj = new NodModel({
        image: req.body.image,
        name: req.body.name,
        title: req.body.title
    })
    const datanew = await NewObj.save()
    res.send(datanew)
})


app.delete('/api/lists/:id', async(req,res)=>{
    const id = req.params.id;
    const DeletebyId = await NodModel.findByIdAndDelete(id)
    res.send(DeletebyId)
})
app.listen(process.env.PORT,()=>{
    console.log("PORT ISDIYIR");
})


mongoose.connect(process.env.CONNECTION).then(()=>{
    console.log("Hersey isdiyir");
})