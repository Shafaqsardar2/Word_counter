#! /usr/bin/env node
import inquirer from "inquirer";
const userAns = await inquirer.prompt({
    type: "input",
    message: "Enter Your sentence here to count word",
    name: "sentence",
});
const Words = userAns.sentence.trim().split(" ");
console.log(`Your sentence have ${Words.length} words`);
