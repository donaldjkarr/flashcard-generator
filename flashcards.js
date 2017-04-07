

var inquirer = require("inquirer");

function BasicCard(front, back) {
    this.front = front;
    this.back = back;
}

var one = new BasicCard();

one.front = "1: How tall is Mount Everest? (in feet)...";
one.back = 29029;

function ClozeCard(clozeAnswer, clozeQuestion, clozeFull) {
    this.clozeAnswer = clozeAnswer;
    this.clozeQuestion = clozeQuestion;
    this.clozeFull = clozeFull;
}

var two = new ClozeCard();

two.clozeAnswer = "k2";
two.clozeQuestion = "is the second tallest mountain in the world.";
two.clozeFull = "k2 is the second tallest mountain in the world";

inquirer.prompt([
    {
        type: "input",
        message: one.front,
        name: "answer"
    },
    {
        type: "input",
        message: "2: (Fill in the blank)..." + two.clozeQuestion,
        name: "cloze"
    },
]).then(function(user) {
        //answer for basic card
        if (user.answer === 29029) {
            console.log("correct!");
        } else {
            console.log("sorry it's actually " + one.back);
        }
        //answer for cloze card
        if (user.cloze === "k2") {
            console.log("correct! " + two.clozeFull);
        } else {
            console.log("sorry, it's " + two.clozeAnswer + "... better luck next time");
        }
});
