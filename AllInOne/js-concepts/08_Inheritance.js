class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`usernma is ${this.username} `)
    }
}


class Teacher extends  User{
    constructor(username, email, password){
        super(username);
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`new course by ${this.username}`)
    }
}


const chai = new Teacher("chai", "chai@hmail", "123")

chai.addCourse()


console.log(chai)

const masalaChai = new User("masala", "masla@gmail", "123")

// console.log(chai.instanceOf)