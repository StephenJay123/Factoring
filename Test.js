const reveal = document.getElementById('Reveal');
const questionmsg = document.getElementById('Question');
const mainquestion = document.getElementById('MainQuestion');

const answer = document.getElementById('Answer');

const ButtonOne = document.getElementById('ButtonOne');
const ButtonTwo = document.getElementById('ButtonTwo');
const ButtonThree = document.getElementById('ButtonThree');
const ButtonFour = document.getElementById('ButtonFour');

const questions = [
    "x² + 5x + 6",       
    "x² + 4x + 4",       
    "x² + 7x + 10",      
    "x² + 8x + 15",     
    "x² + 3x + 2",     
    "x² + 6x + 5",      
    "x² + 2x - 3",     
    "x² + 10x + 24",    
    "x² + 9x + 20",     
    "x² + 12x + 36",   

    "2x² + 11x + 5",    
    "3x² + 7x + 4",    
    "4x² + 21x + 5",    
    "2x² + 9x + 7",     
    "3x² + 13x + 12",  
    "5x² + 19x + 12", 
    "6x² + 13x + 6",    
    "5x² + 24x + 16",   
    "4x² + 15x + 9",   
    "2x² + 5x + 3",     

    "x² - 9",        
    "4x² - 25",      
    "9x² - 16",       
    "16x² - 81",     
    "25x² - 49",      
    "36x² - 64",      
    "81x² - 1",       
    "49x² - 121",  
    "64x² - 100",
    "100x² - 81",  

    "x² + 6x + 9",    
    "4x² + 12x + 9",   
    "9x² + 24x + 16", 
    "16x² + 24x + 9",  
    "25x² + 30x + 9",   
    "36x² + 72x + 36", 
    "49x² + 42x + 9",   
    "64x² + 64x + 16",  
    "81x² + 72x + 16",   
    "100x² + 80x + 16"   
];

const answers = [
    "(x + 2)(x + 3)",
    "(x + 2)²",
    "(x + 5)(x + 2)",
    "(x + 3)(x + 5)",
    "(x + 1)(x + 2)",
    "(x + 1)(x + 5)",
    "(x + 3)(x - 1)",
    "(x + 4)(x + 6)",
    "(x + 4)(x + 5)",
    "(x + 6)²",
    
    "(2x + 1)(x + 5)",
    "(3x + 4)(x + 1)",
    "(4x + 1)(x + 5)",
    "(2x + 7)(x + 1)",
    "(3x + 4)(x + 3)",
    "(5x + 4)(x + 3)",
    "(3x + 2)(2x + 3)",
    "(5x + 4)(x + 4)",
    "(4x + 3)(x + 3)",
    "(2x + 3)(x + 1)",
    
    "(x - 3)(x + 3)",
    "(2x - 5)(2x + 5)",
    "(3x - 4)(3x + 4)",
    "(4x - 9)(4x + 9)",
    "(5x - 7)(5x + 7)",
    "(6x - 8)(6x + 8)",
    "(9x - 1)(9x + 1)",
    "(7x - 11)(7x + 11)",
    "(8x - 10)(8x + 10)",
    "(10x - 9)(10x + 9)",
    
    "(x + 3)²",
    "(2x + 3)²",
    "(3x + 4)²",
    "(4x + 3)²",
    "(5x + 3)²",
    "(6x + 6)²",
    "(7x + 3)²",
    "(8x + 4)²",
    "(9x + 4)²",
    "(10x + 4)²"
];

const wrongAnswers = [
    ["(x + 1)(x + 6)", "(x + 3)²", "(x + 5)(x + 1)"],
    ["(x + 1)(x + 3)", "(x + 4)²", "(x + 3)(x + 5)"],
    ["(x + 7)(x + 1)", "(x + 4)(x + 3)", "(x + 8)(x + 1)"],
    ["(x + 5)(x + 3)", "(x + 2)(x + 6)", "(x + 8)(x + 1)"],
    ["(x + 1)(x + 3)", "(x + 4)(x + 5)", "(x + 2)(x + 4)"],
    ["(x + 2)(x + 4)", "(x + 3)(x + 6)", "(x + 5)(x + 6)"],
    ["(x + 1)(x - 4)", "(x + 6)(x - 2)", "(x + 5)(x - 3)"],
    ["(x + 7)(x + 3)", "(x + 9)(x + 1)", "(x + 4)(x + 3)"],
    ["(x + 3)(x + 5)", "(x + 7)(x + 4)", "(x + 6)(x + 8)"],
    ["(x + 5)(x + 4)", "(x + 2)(x + 7)", "(x + 1)(x + 9)"],

    ["(2x + 2)(x + 6)", "(3x + 7)(x + 3)", "(2x + 5)(x + 4)"],
    ["(3x + 5)(x + 2)", "(2x + 3)(x + 4)", "(4x + 2)(x + 1)"],
    ["(2x + 4)(x + 3)", "(3x + 2)(x + 5)", "(5x + 3)(x + 6)"],
    ["(x + 2)(2x + 8)", "(3x + 5)(x + 2)", "(2x + 1)(x + 8)"],
    ["(3x + 1)(x + 4)", "(4x + 5)(x + 3)", "(2x + 1)(x + 9)"],
    ["(3x + 2)(x + 7)", "(5x + 2)(x + 6)", "(4x + 6)(x + 5)"],
    ["(3x + 1)(x + 9)", "(4x + 5)(x + 7)", "(5x + 1)(x + 3)"],
    ["(4x + 8)(x + 3)", "(3x + 6)(x + 2)", "(6x + 3)(x + 4)"],
    ["(6x + 4)(x + 5)", "(3x + 8)(x + 2)", "(5x + 7)(x + 6)"],
    ["(5x + 2)(x + 3)", "(3x + 9)(x + 5)", "(2x + 4)(x + 3)"],

    ["(x - 3)(x + 4)", "(x - 2)(x + 5)", "(x - 4)(x + 7)"],
    ["(x - 4)(x + 5)", "(x - 2)(x + 6)", "(x - 5)(x + 4)"],
    ["(2x - 3)(x + 6)", "(x + 7)(x - 8)", "(2x - 1)(x + 3)"],
    ["(x + 2)(x + 5)", "(2x + 3)(x + 3)", "(3x + 6)(x + 1)"],
    ["(5x + 7)(x + 1)", "(4x + 2)(x + 7)", "(5x + 1)(x + 4)"],
    ["(x + 7)(x + 8)", "(2x + 5)(x + 2)", "(5x + 6)(x + 3)"],
    ["(x + 6)(x + 3)", "(x + 9)(x + 2)", "(2x + 5)(x + 6)"],
    ["(x + 9)(x + 4)", "(2x + 4)(x + 3)", "(7x + 3)(x + 1)"],
    ["(5x + 4)(x + 7)", "(6x + 3)(x + 1)", "(2x + 3)(x + 5)"],
    ["(2x + 3)(x + 6)", "(4x + 7)(x + 4)", "(3x + 2)(x + 5)"],

    ["(x - 3)²", "(x + 4)²", "(x - 2)²"],
    ["(x + 5)²", "(x - 6)²", "(x + 7)²"],
    ["(2x - 3)²", "(x + 6)²", "(x + 5)²"],
    ["(x + 2)²", "(x - 5)²", "(2x + 3)²"],
    ["(5x + 7)²", "(x - 1)²", "(4x + 2)²"],
    ["(x + 7)²", "(x - 8)²", "(x + 3)²"],
    ["(x + 6)²", "(x - 4)²", "(x + 2)²"],
    ["(x + 9)²", "(x - 3)²", "(x + 4)²"],
    ["(2x + 3)²", "(3x + 7)²", "(x + 5)²"],
    ["(4x + 2)²", "(x - 6)²", "(2x + 1)²"]
];


var question = Math.round(Math.random() * 39);

var answerposition = Math.round(Math.random() * 3);

mainquestion.textContent = questions[question];

answer.textContent = ""

if (answerposition == 0) {
    ButtonOne.innerHTML = `<input type="radio" name="Answer" value="option1"> ` + answers[question]
    ButtonTwo.innerHTML = `<input type="radio" name="Answer" value="option2"> ` + wrongAnswers[question][0]
    ButtonThree.innerHTML = `<input type="radio" name="Answer" value="option3"> ` + wrongAnswers[question][1]
    ButtonFour.innerHTML = `<input type="radio" name="Answer" value="option4"> ` + wrongAnswers[question][2]
} else if (answerposition == 1){
    ButtonTwo.innerHTML = `<input type="radio" name="Answer" value="option1"> ` + answers[question]
    ButtonOne.innerHTML = `<input type="radio" name="Answer" value="option2"> ` + wrongAnswers[question][0]
    ButtonThree.innerHTML = `<input type="radio" name="Answer" value="option3"> ` + wrongAnswers[question][1]
    ButtonFour.innerHTML = `<input type="radio" name="Answer" value="option4"> ` + wrongAnswers[question][2]
} else if (answerposition == 2) {
    ButtonThree.innerHTML = `<input type="radio" name="Answer" value="option1"> ` + answers[question]
    ButtonTwo.innerHTML = `<input type="radio" name="Answer" value="option2"> ` + wrongAnswers[question][0]
    ButtonOne.innerHTML = `<input type="radio" name="Answer" value="option3"> ` + wrongAnswers[question][1]
    ButtonFour.innerHTML = `<input type="radio" name="Answer" value="option4"> ` + wrongAnswers[question][2]
} else if (answerposition == 3) {
    ButtonFour.innerHTML = `<input type="radio" name="Answer" value="option1"> ` + answers[question]
    ButtonTwo.innerHTML = `<input type="radio" name="Answer" value="option2"> ` + wrongAnswers[question][0]
    ButtonThree.innerHTML = `<input type="radio" name="Answer" value="option3"> ` + wrongAnswers[question][1]
    ButtonOne.innerHTML = `<input type="radio" name="Answer" value="option4"> ` + wrongAnswers[question][2]
}

function revealed(){
    if (document.getElementById('Reveal').textContent == "Show Answer") {
        document.getElementById('Reveal').textContent = "Hide Answer"
        answer.textContent = "Answer: " + answers[question]

        if (answerposition == 0) {
            ButtonOne.style.color = "lime";
        } else if (answerposition == 1){
            ButtonTwo.style.color = "lime";
        } else if (answerposition == 2) {
            ButtonThree.style.color = "lime";
        } else if (answerposition == 3) {
            ButtonFour.style.color = "lime";
        }

    } else {
        document.getElementById('Reveal').textContent = "Show Answer"
        answer.textContent = ""

        ButtonOne.style.color = "gray";
        ButtonTwo.style.color = "gray";
        ButtonThree.style.color = "gray";
        ButtonFour.style.color = "gray";
    }
}

function next(){
    document.getElementById('Reveal').textContent = "Show Answer"
    answer.textContent = ""

    question = Math.round(Math.random() * 39);

    while (true) {
        var answerposition1 = Math.round(Math.random() * 3)
        if (answerposition != answerposition1) {
            answerposition = answerposition1
            break
        }
    }

    mainquestion.textContent = questions[question];

    ButtonOne.style.color = "gray";
    ButtonTwo.style.color = "gray";
    ButtonThree.style.color = "gray";
    ButtonFour.style.color = "gray";

    if (answerposition == 0) {
        ButtonOne.innerHTML = `<input type="radio" name="Answer" value="option1"> ` + answers[question]
        ButtonTwo.innerHTML = `<input type="radio" name="Answer" value="option2"> ` + wrongAnswers[question][0]
        ButtonThree.innerHTML = `<input type="radio" name="Answer" value="option3"> ` + wrongAnswers[question][1]
        ButtonFour.innerHTML = `<input type="radio" name="Answer" value="option4"> ` + wrongAnswers[question][2]
    } else if (answerposition == 1){
        ButtonTwo.innerHTML = `<input type="radio" name="Answer" value="option1"> ` + answers[question]
        ButtonOne.innerHTML = `<input type="radio" name="Answer" value="option2"> ` + wrongAnswers[question][0]
        ButtonThree.innerHTML = `<input type="radio" name="Answer" value="option3"> ` + wrongAnswers[question][1]
        ButtonFour.innerHTML = `<input type="radio" name="Answer" value="option4"> ` + wrongAnswers[question][2]
    } else if (answerposition == 2) {
        ButtonThree.innerHTML = `<input type="radio" name="Answer" value="option1"> ` + answers[question]
        ButtonTwo.innerHTML = `<input type="radio" name="Answer" value="option2"> ` + wrongAnswers[question][0]
        ButtonOne.innerHTML = `<input type="radio" name="Answer" value="option3"> ` + wrongAnswers[question][1]
        ButtonFour.innerHTML = `<input type="radio" name="Answer" value="option4"> ` + wrongAnswers[question][2]
    } else if (answerposition == 3) {
        ButtonFour.innerHTML = `<input type="radio" name="Answer" value="option1"> ` + answers[question]
        ButtonTwo.innerHTML = `<input type="radio" name="Answer" value="option2"> ` + wrongAnswers[question][0]
        ButtonThree.innerHTML = `<input type="radio" name="Answer" value="option3"> ` + wrongAnswers[question][1]
        ButtonOne.innerHTML = `<input type="radio" name="Answer" value="option4"> ` + wrongAnswers[question][2]
    }
}
