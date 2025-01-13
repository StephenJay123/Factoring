const answer = document.getElementById("Answer");
const fn = document.getElementById("FirstNumber");
const sn = document.getElementById("SecondNumber");
const tn = document.getElementById("ThirdNumber");

const o1 = document.getElementById("operation1");

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
    if(((Number(fn.value)) && (Number(sn.value)) && (Number(tn.value))))  {
        if (Math.sqrt(Number(fn.value)) == Math.floor(Math.sqrt(Number(fn.value))) && (Math.sqrt(Number(tn.value)) == Math.floor(Math.sqrt(Number(tn.value))))) {
            if (Math.sqrt(Number(fn.value)) * Math.sqrt(Number(tn.value)) * 2 == sn.value) {
                var FirstNumber = Number(fn.value)
                var SecondNumber = Number(sn.value)
                var ThirdNumber = Number(tn.value)
        
                console.log(FirstNumber, SecondNumber, ThirdNumber)
        
                var variable = "x"
        
                var First = Math.sqrt(Number(fn.value))
                var Second = Math.sqrt(Number(tn.value))

                var GCF = getGCF(First, Second)

                First /= GCF
                Second /= GCF

                if (GCF != 1) {
                    answer.textContent = "Answer: " + (GCF*GCF + "(" + First + variable + " " + o1.value + " " + Second + ")²")
                } else {
                    answer.textContent = "Answer: " + ("(" + First + variable + " " + o1.value + " " + Second + ")²")
                }
                
            } else {
                answer.textContent = "Please enter a Perfect Square Trinomial"
            }
        } else {
            answer.textContent = "Please enter a Perfect Square Trinomial"
        }
    } else {
        answer.textContent = "Please enter numbers only"
    }
}
