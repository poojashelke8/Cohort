// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs")

const fileData = "trying writeFile"

fs.writeFile("b.text",fileData,{encoding:"utf-8"},(err)=>{
    if(err){
        console.log("facing error",err)
    }else{
        console.log("write action completed")
    }
})