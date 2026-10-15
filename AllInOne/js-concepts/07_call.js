function setUserName(username){
    this.username = username   // ye this.username toh chala jayega chor ke outer function toh phunvhe ni
    console.log("called")
}

function createUser(username, email, passoword){
    // setUserName(username);
    setUserName.call(this, username);  // isko apna this diye taki jo function isko use kre wo iska this use kre


    this.email = email
    this.passoword = passoword
}

const chai = new createUser("chai", "chai@gmail", "123");

console.log(chai)

//email and passowrd aya pr username nhi 
// kynki call hi ni ho rha function ke andar se...sirf reference gya hai 
// Are mtlb call ho rha hai pr set ni ho rha
// kynki uss EC hat gya jiske andar varuable decalre huye the 