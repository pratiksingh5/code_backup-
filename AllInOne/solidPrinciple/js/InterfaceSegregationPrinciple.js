// Explanation:
// Clients should not be forced to depend on interfaces they do not use. This means creating smaller, more specific interfaces

// Bad Example:
// The Animal class forces all subclasses to implement both eat and fly, even if they don't need fly.

class Animal {
    eat() {}
    fly() {}
}

class Dog extends Animal {
    fly() {
        throw new Error('Dogs cannot fly');
    }
}


// Good Example:
// We create separate interfaces for different behaviors, so classes only implement what they need.

class Eater {
    eat() {}
}

class Flyer {
    fly() {}
}

class Dog extends Eater {}
class Bird extends Eater, Flyer {}
