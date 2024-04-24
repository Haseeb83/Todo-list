#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let conditions = true;
while (conditions) {
    let addtask = await inquirer.prompt([{
            name: 'todo',
            type: 'input',
            message: "What you want to add in todo list?"
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: "Do you want to add more?",
            default: "false"
        }
    ]);
    todos.push(addtask.todo);
    conditions = addtask.addMore;
    console.log(todos);
}
