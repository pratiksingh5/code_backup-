var a = 10;
this.b = 20;
console.log(this);

// Anycode in JS but not inside the fucntion 

function test(){
    this.c = 30;
}
test()

console.log(this);
