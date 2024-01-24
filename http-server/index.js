// ------------ EXPRESS WEEK 2.2 EXPRESS START--------------


// const express  = require("express")
// const bodyParser = require("body-parser")
// const app = express()
// const port = 3000

// app.use(bodyParser.json())

// app.get("/hello",function(req,res){
//     res.send("hello there")
// })
// app.post("/",function(req,res){
//     console.log(req.body)
//     // res.send("Hi my name is Pooja")
// })

// app.listen(port)

// -------------- WEEK 2.5 EXPRESS PRACTICE-------------
// creating http server
// express 

// 1 example - used query parameter

// const express = require("express");

// const app = express();

// function sumData(n) {
//     let count = 0;
//     for (let i = 1; i <= n; i++) {
//         count += i
//     }
//     return count;
// }

// app.get("/", function (req, res) {
//     const n = req.query.n;
//     const ans = sumData(n)
//     res.send("Hi answer is:" + ans);
// })

// app.listen(3000);

// 2 example of hospital operations

const express = require("express")

const app = express()

var users = [{
    name: "john",
    kidneys: [{
        healthy: false
    }]
},
    // {
    //     name: "jenny",
    //     kidneys: [{
    //         healthy: tru
    //     }]
    // }
];

app.get("/", function (req, res) {
    const kiData = users[0].kidneys;
    const kiNum = kiData.length;
    let count = 0
    for (let i = 0; i < kiData.length; i++) {
        if (kiData[i].healthy) {
            count += 1
        }
    }
    const unhealthyCount = kiNum - count;
    res.json({
        kiData,
        count,
        unhealthyCount
    })
})

app.use(express.json())
app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done"
    })
})

// update unhealthy to healthy
app.put("/", function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true
    }
    res.json({})
})

// delete unhealthy kidneys make it true
app.delete("/", function (req, res) {
    // onl if 1 unhealthy kidney return 411
    if (checkealth()) {
        const newkidneys = []
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy = true) {
                newkidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newkidneys;
        res.json({ msg: "Done" })
    } else {
        res.status(411).json({
            msg: "you have no bad kidney"
        })
    }
})

function checkealth() {
    let atleastone = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            atleastone = true
        }
    }
    return atleastone;
}


app.listen(3000);



