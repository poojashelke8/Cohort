// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

const date =  new Date();
// let hours = date.getHours() % 12;
console.log(date.getDate())


// if(hours == 0){
//     hours = 12;
//     }else if(hours > 12){
//         hours -= 12;
//         }
//         let minutes = "0" + date.getMinutes();
//         let seconds = "0" + date.getSeconds();  
