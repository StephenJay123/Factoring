const answer = document.getElementById("Answer");
const fn = document.getElementById("FirstNumber");
const sn = document.getElementById("SecondNumber");


const Solve = document.getElementById("Solve");

answer.textContent = ""

function getGCF(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

function SolveIt() {
    if((Number(fn.value)) && (Number(sn.value))) {
        var FirstNumber = Number(fn.value)
        var SecondNumber = Number(sn.value)

        if (Math.sqrt(fn.value) == Math.floor(Math.sqrt(fn.value)) && Math.sqrt(sn.value) == Math.floor(Math.sqrt(sn.value))) {
            var variable = "x"

            var First = Math.sqrt(fn.value)
            var Second = Math.sqrt(sn.value)

            /*var NextBrackets = ["(" + First + variable +  " + " + Second + ")"]

            if ((Math.sqrt(First) == Math.floor(Math.sqrt(First)) && Math.sqrt(Second) == Math.floor(Math.sqrt(Second)))) {
                while (Math.sqrt(First) == Math.floor(Math.sqrt(First)) && Math.sqrt(Second) == Math.floor(Math.sqrt(Second))) {
                    First = Math.sqrt(First)
                    Second = Math.sqrt(Second)
    
                    var NextBracket = "(" + First + variable +  " + " + Second + ")"

                    NextBrackets.push(NextBracket)

                    if ((Math.sqrt(First) == Math.floor(Math.sqrt(First)) && Math.sqrt(Second) == Math.floor(Math.sqrt(Second)))) {
                        First = Math.sqrt(First)
                        Second = Math.sqrt(Second)
                        break
                    } else {
                        var NextBracket = "(" + First + variable +  " - " + Second + ")"
                        NextBrackets.push(NextBracket)
                    }
                }
            } else {
                NextBrackets.push("(" + First + variable +  " - " + Second + ")")
            }

            var AllBracketPairs = ""

            for (let i = 0; i < NextBrackets.length; i++) {
                AllBracketPairs = AllBracketPairs + NextBrackets[i]
            }

            answer.textContent = "Answer: " + AllBracketPairs */

            var GCF = getGCF(First, Second)

            First /= GCF
            Second /= GCF

            if (GCF != 1) {
                answer.innerHTML =  "Answer: " + GCF*GCF + "(" + First + variable +  " + " + Second + ")" + "(" + First + variable +  " - " + Second + ")"
            } else {
                answer.innerHTML =  "Answer: " + "(" + First + variable +  " + " + Second + ")" + "(" + First + variable +  " - " + Second + ")"
            }
        } else {
            answer.textContent = "Please make sure both numbers are perfect squares."
        }
    } else {
        answer.textContent = "Please enter numbers only"
    }
}
