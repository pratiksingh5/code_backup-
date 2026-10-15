let car1 = {
    color: "Red",
    company : "Maruti"
}

function purchaseCar(price){
    console.log(`I have purchased a ${this.color} car for ${price}`)
}

// purchaseCar(122)
// I have purchased a undefined car for 122 

// purchaseCar.call(car1, 500); 

Function.prototype.myCall = function(context = {}, ...args){
    if(typeof this !== "function"){
        throw TypeError("this is not a function")
    }

    context.fn  = this;
    context.fn(...args)
}

purchaseCar.myCall(car1, 500); 
