// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function counter(initial,delay){
    let count = initial

    function updatecounter(){
        console.log(count)
        count++
        setTimeout(updatecounter,delay)
    }
updatecounter()
}


counter(1,1000)







































































// (Hint: setTimeout)