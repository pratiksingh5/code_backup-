// Pass function inside another function like an variable  and we can manipulate and return them

function square(num){
    return num * num;
}

function displaySquare(fn){
   console.log("square is " + fn(5))
}

displaySquare(square)


