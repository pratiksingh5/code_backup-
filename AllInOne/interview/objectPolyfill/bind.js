let car1 = {
    color: "Red",
    company : "Maruti"
}

function purchaseCar(price){
    console.log(`I have purchased a ${this.color} car for ${price}`)
}

Function.prototype.myBind = function(context = {}, ...args){
    if(typeof this !== "function"){
        throw TypeError("this is not a function")
    }

    context.fn  = this;
    return function(...newArgs) {
        return context.fn(...args, ...newArgs)
    }
}

const newFunc = purchaseCar.myBind(car1, 199);
console.log(newFunc())