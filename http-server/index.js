// const express = require('express')
// const app = express()
// const port = 3000


// app.get('/', function(req, res){
//   res.send('Hello World !')
// })

// app.listen(port)


const express  = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get("/hello",function(req,res){
    res.send("hello there")
})
app.post("/",function(req,res){
    console.log(req.body)
    // res.send("Hi my name is Pooja")
})

app.listen(port)