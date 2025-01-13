const answer = document.getElementById("Answer");
const fn = document.getElementById("FirstNumber");
const sn = document.getElementById("SecondNumber");
const tn = document.getElementById("ThirdNumber");

const o1 = document.getElementById("operation1");
const o2 = document.getElementById("operation2");

const Solve = document.getElementById("Solve");

answer.textContent = ""

function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function GcdOfThree(a, b, c) {
    return gcd(gcd(a, b), c);
}

function SolveIt() {
    if((Number(fn.value)) && (Number(sn.value)) && (Number(tn.value))) {
        var FirstNumber = Number(fn.value)
        var SecondNumber = Number(sn.value)
        var ThirdNumber = Number(tn.value)

        if (o1.value == "-") {
            SecondNumber /= -1
        }

        if (o2.value == "-") {
            ThirdNumber /= -1
        }

        console.log(FirstNumber, SecondNumber, ThirdNumber)

        var variable = "x"

        var gac = GcdOfThree(FirstNumber, SecondNumber, ThirdNumber)

        if (gac) {
            FirstNumber /= gac
            SecondNumber /= gac
            ThirdNumber /= gac
        }


        var ChosenNumbers = [];

        var found = false

        for (var i = 0; i < Math.max(Math.abs(FirstNumber) + 5, Math.abs(SecondNumber) + 5, Math.abs(ThirdNumber) + 5); i++) {
            if (found) {
                break
            }
            for (var v = 0; v < Math.max(Math.abs(FirstNumber) + 5, Math.abs(SecondNumber) + 5, Math.abs(ThirdNumber) + 5); v++) {
                if ((i * v == ThirdNumber*FirstNumber) && (i + v == SecondNumber)) {
                    ChosenNumbers.push(i)
                    ChosenNumbers.push(v)
                    found = true
                    break
                } else if ((-i * v == ThirdNumber*FirstNumber) && (-i + v == SecondNumber)) {
                    ChosenNumbers.push(-i)
                    ChosenNumbers.push(v)
                    found = true
                    break
                } else if ((-i * -v == ThirdNumber*FirstNumber) && (-i + -v == SecondNumber)) {
                    ChosenNumbers.push(-i)
                    ChosenNumbers.push(-v)
                    found = true
                    break
                } else if ((i * -v == ThirdNumber*FirstNumber) && (i + -v == SecondNumber)) {
                    ChosenNumbers.push(i)
                    ChosenNumbers.push(-v)
                    found = true
                    break
                }
            }
        }

        var FirstVar = " + "
        var SecondVar = " + "

        if (found) {
            if ((ChosenNumbers[0] + "").substring(0,1) == "-") {
                FirstVar = " - "
            }
            
            if ((ChosenNumbers[1] + "").substring(0,1) == "-") {
                SecondVar = " - "
            }

            if (gac != 1) {
                answer.textContent = "Answer: " + (gac + "(" + variable + FirstVar + Math.abs(ChosenNumbers[0]) + ")(" + variable + SecondVar + Math.abs(ChosenNumbers[1]) + ")")
            } else {
                answer.textContent = "Answer: " + ("(" + variable + FirstVar + Math.abs(ChosenNumbers[0]) + ")(" + variable + SecondVar + Math.abs(ChosenNumbers[1]) + ")")
            }
        } else {
            answer.textContent = "Not Factorable"
        }
    } else {
        answer.textContent = "Please enter numbers only"
    }
}