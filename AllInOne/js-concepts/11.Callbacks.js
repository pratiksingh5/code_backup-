console.log("start")

function importantAction(username, cb) {
    setTimeout(() => {
        cb(`subscribe to ${username}`)
    }, 1000)
}

const message = importantAction("pratik", function(message){
    console.log(message)
})

console.log("stop")