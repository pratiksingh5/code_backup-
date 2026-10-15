let name = "pratik"

console.log(name.length)

// How if  
// let name = "pratik     "
// so I need  a bydefault trueLength property 

// name.trim().length  --- aam zindagi

// Accessed top level herriachy 

// Object.prototype.hitesh = function(){
//     console.log("Hitesh is present in all object")
// }


// Pr kya agar power array ko de toh wo object ke paas jayega?? 

// Nhi jayega power 


// Inheritance 

// const Teacher = {
//     makeVideo:  true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignement : "JS",
//     __proto__:  TeachingSupport
// }

// Teacher.__proto__ = User  --- outdated approach

// moder syntax 

// Object.setPrototypeOf(TeachingSupport, Teacher) 

// String.prototype.truelength = function(){
//     console.log(`${this}`)
//     // console.log(`${this.name}`)
//     console.log(`True length is ${this.trim().length}`)
// }



