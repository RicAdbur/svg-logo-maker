// importing necessary modules from other files
import { writeFile } from "fs/promises"
import inquirer from "inquirer"
import { questions } from "./lib/questions.js"
import { generateLogo } from "./lib/generateLogo.js"

// application begins with inquirer prompts
function init() {
    inquirer.prompt(questions)
    .then((answers => {
        // runs function to generate the SVG file based on inquirer responses
        const logo = generateLogo(answers)
        // writes new SVG file and outputs to the examples folder
        console.log("Logo created!")
        return writeFile("./examples/newLogo.svg", logo)
    }))
    .catch((error) => {
        console.log(error)
    })
}

// Function call to initialize app
init();