console.log("start")

function importantAction(username, cb) {
    setTimeout(() => {
        cb(`subscribe to ${username}`)
    }, 1000)
}

function likeTheVideo(video, cb) {
    
    setTimeout(() => {
        cb(`Like the ${video}`)
    }, 500)
}

const message = importantAction("pratik", function(message){
    console.log(message);
    likeTheVideo("Blog Video", function(action){
        console.log(action)
    })
})

console.log("stop")