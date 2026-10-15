// Explanation:

// Software entities should be open for extension but closed for modification. This means you should be able to add new functionality without changing existing code.

// Bad Example:
// In this example, if we want to add a new shape, we have to modify the calculateArea function, which violates the OCP.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

function calculateArea(shapes) {
    return shapes.reduce((sum, shape) => sum + shape.area(), 0);
}

const shapes = [new Rectangle(2, 3), new Circle(1)];
console.log(calculateArea(shapes));


// Good Example:
// By using polymorphism, we can add new shapes without modifying the existing calculateArea function.


class Shape {
    area() {
        throw new Error('Method not implemented');
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

function calculateArea(shapes) {
    return shapes.reduce((sum, shape) => sum + shape.area(), 0);
}

const shapes = [new Rectangle(2, 3), new Circle(1)];
console.log(calculateArea(shapes));
