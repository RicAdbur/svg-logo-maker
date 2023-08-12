import fs from "fs"
import inquirer from "inquirer"
import { Circle, Square, Triangle } from "./lib/shapes.js"
import { questions } from "./lib/questions.js"
import { generateLogo } from "./lib/generateLogo.js"

// application begins with inquirer prompts
function init() {
    inquirer.prompt(questions)
    .then((answers => {
        console.log("answers", answers)
        generateLogo("logo.svg", answers)
    }))
    .catch((error) => {
        console.log(error)
    })
}

// Function call to initialize app
init();