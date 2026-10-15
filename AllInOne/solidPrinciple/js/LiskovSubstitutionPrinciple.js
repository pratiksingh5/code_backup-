// Explanation:
// Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.

// Bad Example:
// The Ostrich class breaks the contract of the Bird class because it cannot fly, which violates the LSP.

class Bird {
    fly() {
        console.log('Flying');
    }
}

class Ostrich extends Bird {
    fly() {
        throw new Error('Ostriches cannot fly');
    }
}

const birds = [new Bird(), new Ostrich()];
birds.forEach(bird => bird.fly());


// Good Example:
// We separate the fly behavior into a different class hierarchy, ensuring that Ostrich adheres to the LSP.

class Bird {
    move() {
        console.log('Moving');
    }
}

class FlyingBird extends Bird {
    fly() {
        console.log('Flying');
    }
}

class Ostrich extends Bird {
    move() {
        console.log('Running');
    }
}

const birds = [new Bird(), new FlyingBird(), new Ostrich()];
birds.forEach(bird => bird.move());
