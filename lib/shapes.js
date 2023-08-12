class Shape {
    // All shapes will have color values
    constructor() {
        this.color = ""
    }
    // All shapes will have a function to set their color value
    shapeColor(shapeColorChoice) {
        this.color = shapeColorChoice
    }
    // All shapes will have their own unique render function, child classes will overwrite this default one, else an error will be displayed
    render() {
        throw new Error("Child class must impliment render() method")
    }
}

class Circle extends Shape {
    render() {
        
    }
}

class Square extends Shape {
    render() {
        
    }
}

class Triangle extends Shape {
    render() {
        
    }
}

export { Circle, Square, Triangle}