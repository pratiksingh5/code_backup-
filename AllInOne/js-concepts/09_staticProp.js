class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`usernma is ${this.username} `)
    }

    static createdAt(){
        return "987"
    }
}


// Id turnt bn rha 

// Mai ni chahta ki createdMe ka access har objwect ko diya jaye islie mai uske aage "static" key word lagaunga

// static : uss method yaa property ko access hone se rok deta hai 