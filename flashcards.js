var action = process.argv[2];
var value = process.argv[3];

var inquirer = require("inquirer");

function BasicCard(front, back) {
    this.front = front;
    this.back = back;
}

var one = new BasicCard();

one.front = "How tall is Mount Everest? (in feet)...";
one.back = 29029;

inquirer.prompt([
    {
        type: "input",
        message: one.front,
        name: "answer"
    },
    {
        type: "input",
        message: "...is the second tallest mountain in the world",
        name: "cloze answer"
    },
]).then(function(user) {
        // console.log(JSON.stringify(user, null, 2));
        if (user.answer === "answer") {
            console.log(one.back);
        }
        // console.log(one.back);        
});


// function BasicCard(front, back) {
//     this.front = front;
//     this.back = back;
// }

// var one = new BasicCard();

// one.front = "question";
// one.back = "answer";

// console.log(one.front);

// if (action === "easy") {
//     console.log(one.front);
// }

// if ((action === "answer") && (value === "answer")) {
//     console.log("correct");
// }

// if ((action === "answer") && (value !== "answer")) {
//     console.log("try again");
// }

// try inquirer for this one
// function ClozeCard(text, cloze) {
//     this.text = text;
//     this.cloze = cloze;
// }

// var two = new ClozeCard();

// two.text = "...question";
// two.cloze = "another question";

// if (action === "hard") {
//     console.log (two.text);
// }

// if ((action === "answer") && (value === "another")) {
//     console.log(two.cloze);
// }

// if ((action === "answer") && (value !== "another")) {
//     console.log("try again");
// }