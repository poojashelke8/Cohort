// const express = require('express')
// const app = express()
// const port = 3000


// app.get('/', function(req, res){
//   res.send('Hello World !')
// })

// app.listen(port)


const express  = require("express")
const app = express()
const port = 3000

app.get("/hello",function(req,res){
    res.send("Hi my name is Pooja")
})

app.listen(port)