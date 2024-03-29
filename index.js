//Including packages needed for this application
const fs = require("fs");//for file system management
const inquirer = require("inquirer");//inquierer package
const path = require("path");//it`s where the responses are stored
const generateMarkdown = require("./utils/generateMarkdown");

//Creating an array of questions for user input
const questions = [
  { type: "input",
    name: "title",
    message: "Please give me the title of the project.",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe the purpose and functionality of this project.",
  },
  
  {
    type: "input",
    name: "details",
    message: "Please tell more details on how to install your project if to start from scratch"
  },
  {
    type: "input",
    name: "usage",
    message: "Please tell more about the usage of your project",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
 
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributors if there are any. (Use GitHub usernames)",
    default: "",
  },
  
  {
    type: "input",
    name: "test",
    message: "Provide walkthrough of required tests if applicable.",
  },

  {
    type: "input",
    name: "features",
    message: "Please tell about the features of your project",
  },
  {
    type: "input",
    name: "languages",
    message:
      "State the languages or technologies associated with this project.",
  },
  {
    type: "input",
    name: "creator",
    message: "Write your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Provide a valid email address.",
  },
];

// Writing README.md File
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Initializing app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File...");
    writeToFile("./local/README.md", generateMarkdown({ ...responses }));
  });
}
init();