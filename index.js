import fs from "fs"
import inquirer from "inquirer"
import { Circle, Square, Triangle } from "./lib/shapes.js"
import { questions } from "./lib/questions.js"

function init() {
    inquirer.prompt(questions)
    .then((answers => {
        if (answers.length > 3) {
            console.log("A logo must have no more than 3 characters.")
            init()
        } else {
            renderLogo()
        }
    }))
    .catch((error) => {
        console.log(error)
    })
}

// Function call to initialize app
init();