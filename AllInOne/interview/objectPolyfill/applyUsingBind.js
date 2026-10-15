let car1 = {
    color: "Red",
    company: "Maruti"
  };
  
  function purchaseCar(price) {
    console.log(`I have purchased a ${this.color} car for ${price}`);
  }
  
  Function.prototype.myApply = function (context = {}, args = []) {
    if (typeof this !== "function") {
      throw new TypeError("this is not a function");
    }
  
    if (!Array.isArray(args)) {
      throw new TypeError("CreateListFromArrayLike called on non-object");
    }
  
    return this.bind(context, ...args)();
  };
  
  purchaseCar.myApply(car1, [10]);
  