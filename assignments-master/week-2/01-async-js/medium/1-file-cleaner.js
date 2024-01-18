// // ## File cleaner
// // Read a file, remove all the extra spaces and write it back to the same file.

// // For example, if the file input was
// // ```
// // hello     world    my    name   is       raman
// // ```

// // After the program runs, the output should be

// // ```
// // hello world my name is raman
// // ```

const fs = require("fs")
fs.readFile("a1.text","utf-8",function(err,data){
    if(err){
        console.log("Error")
    }
   
    
    const cleanData = data.replace(/\s+/g, ' ')
    fs.writeFile("a1.text",cleanData,{encoding:"utf-8"},(err)=>{
        if(err){
            console.log("facing error",err)
        }else{
            console.log("write action completed")
        }
    })
})


// fs.readFile("a1.text", 'utf8', (err, data) => {
//     if (err) {
//       console.error('Error reading the file:', err);
//       return;
//     }
  
//     // Remove extra spaces between words
//     const cleanedData = data.replace(/\s+/g, ' ');
  
//     // Write the cleaned data back to the same file
//     fs.writeFile("a1.text", cleanedData, 'utf8', (writeErr) => {
//       if (writeErr) {
//         console.error('Error writing to the file:', writeErr);
//         return;
//       }
  
//       console.log('Extra spaces removed and file updated successfully.');
//     });
//   });