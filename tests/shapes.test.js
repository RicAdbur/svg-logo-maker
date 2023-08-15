import { Shape, Circle, Square, Triangle } from "../lib/shapes.js"

// come back to this later
// describe("Shape Class", () => {
//     it("", () => {
        
//     })

// })

describe("Circle Class", () => {
    it("should return a string containing code for an SVG circle", () => {
        const circle = new Circle()
        expect(circle.render()).toEqual(`<circle cx="150" cy="105" r="70" fill="${circle.color}" />`)
    })

})

describe("Square Class", () => {
    it("should return a string containing code for an SVG circle", () => {
        const square = new Square()
        expect(square.render()).toEqual(`<rect x="90" y="45" width="120" height="120" fill="${square.color}" />`)
    })

})

describe("Triangle Class", () => {
    it("should return a string containing code for an SVG circle", () => {
        const triangle = new Triangle()
        expect(triangle.render()).toEqual(`<polygon points="150, 20 245, 140 50, 140" fill="${triangle.color}" />`)
    })

})