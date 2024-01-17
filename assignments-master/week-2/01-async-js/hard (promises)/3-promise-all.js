/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve()
        },t)
    })
    return p


}

function wait2(t) {
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve()
        },t)
    })
    return p

}

function wait3(t) {
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve()
        },t)
    })
    return p

}

function calculateTime(t1, t2, t3) {
    const startTime = Date.now()
    return Promise.all([wait1(t1*1000), wait2(t2*1000), wait3(t3*1000)])
    .then(() => {
      const endTime = Date.now();
      const totalTime = endTime - startTime;
      return totalTime;
    })

}

module.exports = calculateTime;

// const startTime = Date.now();

//   const promises = [
//     wait1(t1 * 1000),
//     wait2(t2 * 1000),
//     wait3(t3 * 1000)
//   ];

//   return Promise.all(promises)
//     .then(() => {
//       const endTime = Date.now();
//       const totalTime = endTime - startTime;
//       return totalTime;
//     })
