// array of questions for inquirer prompts
export const questions = [
    {
        type: "list",
        name: "shapeChoice",
        message: "What shape do you want for your logo background?",
        choices: ["circle", "square", "triangle"]
    },

    {
        type: "input",
        name: "shapeColorChoice",
        message: "What color do you want your logo background to be?"
    },

    {
        type: "input",
        name: "textChoice",
        message: "What text do you want on your logo?  (Choose up to 3 characters)"
    },

    {
        type: "input",
        name: "textColorChoice",
        message: "What color do you want the text to be?"
    },
];