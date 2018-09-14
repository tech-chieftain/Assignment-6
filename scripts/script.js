var calc = document;

var screen = calc.querySelector("#screen");
var result = calc.querySelector("#result");

let first = "";
let operator = "";
let second = "";
var total = "0";
let canChange = false;
let operand = "";
let clickedOperator = false;

let isDec = false;
screen.innerHTML = "0"


function getButton(btn) {

    if (btn.innerHTML === "=") {
        equal();



    } else if (btn.dataset.value === "/" || btn.dataset.value === "*" || btn.dataset.value === "+" || btn.dataset.value === "-") {
        if (clickedOperator === false) {
            if (first === "") {
                first = "0";
            }
            operator = btn.dataset.value;
            var temp1 = "\(";
            alert(result.innerHTML.includes("("));
            if (!result.innerHTML.includes("(")) {
                result.innerHTML = screen.innerHTML + " " + btn.innerHTML + " ";
            } else {
                result.innerHTML = "( " + screen.innerHTML + " " + btn.innerHTML + " ";

            }
            second = screen.innerHTML;
            canChange = true;
            console.log("Clicked Operator " + operator);
        } else {
            var temp = "";
            temp = result.innerHTML;
            if (temp[temp.length - 2] === "+" || temp[temp.length - 2] === "÷" || temp[temp.length - 2] === "−" || temp[temp.length - 2] === "×") {
                temp.slice(0,temp.length - 2);
                temp += btn.innerHTML;
                operator =  btn.dataset.value;
                result.innerHTML = temp;
            }
        }
        first = screen.innerHTML;
        clickedOperator = true;
    } else if (clickedOperator === false) {
        //FIRST
        if (total != "0") {
            screen.innerHTML = "";
            screen.innerHTML += btn.innerHTML;
            first = "";
            first += btn.innerHTML;
            console.log("total a First is: " + first);

        } else if (screen.innerHTML === "0") {
            screen.innerHTML = "";
            screen.innerHTML += btn.innerHTML;
            first = "";
            first += btn.innerHTML;
            console.log("a First is: " + first);

        } else {
            screen.innerHTML += btn.innerHTML;
            first += btn.innerHTML;
            console.log("b First is: " + first);
        }
    } else {
        //SECOND
        if (operand === "exp" && canChange) {

            second += btn.innerHTML;
            screen.innerHTML += btn.innerHTML;
            console.log("exp Second is: " + second);

        } else if (canChange === true) {
            screen.innerHTML = ""
            second = btn.innerHTML;
            screen.innerHTML += btn.innerHTML;
            canChange = false;
            console.log("a Second is: " + second);

        } else {

            second += btn.innerHTML;
            screen.innerHTML += btn.innerHTML;
            console.log("b Second is: " + second);

        }

    }


}

function equal() {
    if (first != null && (operator != null || operand != "") && second != null) {
        if (operand != "") {
            console.log("OPERAND " + operand);
            if (operand === "^") {
                console.log("POWER");
                second = screen.innerHTML;
                total = Math.pow(first, second);
                screen.innerHTML = total;
            } else if (operand === "exp") {
                console.log("equal > exp");
                total = eval(screen.innerHTML);
                screen.innerHTML = total;
            } else if (operand === "%") {
                console.log("equal > mod");
                console.log(first + operand + second);

                total = eval(first + operand + second);
                screen.innerHTML = total;
            }
        } else {
            console.log("equal > else");

            total = first + operator + second;
            screen.innerHTML = eval(total);


        }
        add();

        clickedOperator = false;
        first = screen.innerHTML;
        operator = "";
        second = "";
        total = "";
        result.innerHTML = "";
        operand = ""
        canChange = false;
    }
}

function math(btn) {
    var value = btn.dataset.value;
    var numberScreen = screen.innerHTML;
    switch (value) {
        case "sqr":
            screen.innerHTML *= numberScreen;
            first = screen.innerHTML;
            break;
        case "sqry":
            result.innerHTML = first + " ^";
            operand = "^";
            canChange = true;
            clickedOperator = true;
            break;
        case "sin":
            result.innerHTML = "sin(" + numberScreen + ")";
            screen.innerHTML = Math.sin(numberScreen);
            first = screen.innerHTML;
            canChange = true;
            break;
        case "cos":
            result.innerHTML = "cos(" + numberScreen + ")";
            screen.innerHTML = Math.cos(numberScreen);
            first = screen.innerHTML;
            canChange = true;
            break;
        case "sqrt":
            result.innerHTML = "sqrt(" + numberScreen + ")";
            screen.innerHTML = Math.sqrt(numberScreen);
            first = screen.innerHTML;
            canChange = true;
            break;
        case "power10":
            result.innerHTML = "10^(" + numberScreen + ")";
            screen.innerHTML = Math.pow(10, numberScreen);
            first = screen.innerHTML;
            canChange = false;
            break;
        case "log":
            result.innerHTML = "log(" + numberScreen + ")";
            screen.innerHTML = Math.log(numberScreen);
            first = screen.innerHTML;
            canChange = true;
            break;
        case "exp":
            operand = "exp";
            screen.innerHTML = numberScreen + ".e+";
            canChange = true;
            exp = true;
            clickedOperator = true;
            break;
        case "%":
            result.innerHTML = numberScreen + " Mod ";
            operand = "%";
            canChange = true;
            clickedOperator = true;
            break;
        case "ce":
            if (operator || operand) {
                console.log("used CE");

                second = "";
                screen.innerHTML = "0";
            } else {
                first = "";
                screen.innerHTML = "0";

            }
            break;

        case "c":
            first = "";
            operator = "";
            second = "";
            total = "0";
            canChange = false;
            operand = "";
            clickedOperator = false;
            isDec = false;
            screen.innerHTML = "0";
            result.innerHTML = "";
            console.log("CLEARED EVERYTHING");

            break;
        case "delete":
            var str = "";
            str = screen.innerHTML;
            if (str.length < 2) {
                str = "0";
            } else {
                str = str.slice(0, str.length - 1);
            }
            screen.innerHTML = str;
            console.log("Sliced to: " + screen.innerHTML);


            break;
        case "pi":
            if (first === "") {
                screen.innerHTML = Math.PI;
                first = Math.PI;
            } else if (first != "" && (!operator || !operand)) {
                screen.innerHTML = Math.PI;
                second = Math.PI;
            }
            canChange = false;

            console.log("PI");

            break;
        case "fact":
            total = fact(screen.innerHTML);
            screen.innerHTML = total;
            first = "";
            operator = "";
            second = "";
            total = "0";
            canChange = true;
            operand = "";
            clickedOperator = false;
            result.innerHTML = "";
            break;
        case "$":
            first = "";
            temp = screen.innerHTML;
            temp *= -1;
            screen.innerHTML = temp;
            console.log("Negate");
            if (first === "") {
                first = screen.innerHTML;
            } else if (first != "" && (!operator || !operand)) {
                second = screen.innerHTML;
            }
            console.log(temp);

            break;
        case "(":
            result.innerHTML = "( ";
            console.log("ADDED OPENING BRACKET ");

            break;
        case ")":
            if (first != "" && (!operator || !operand)) {
                result.innerHTML += screen.innerHTML + " )";
            }
            console.log("ADDED CLOSING BRACKET ");

            break;
        case ".":
            if (!isDec) {
                console.log("DECIMAL ON");
                screen.innerHTML += ".";
                isDec = true;
            }
            break;
    }

}

function fact(num) {
    if (num < 0)
        return 0;
    else if (num == 0)
        return 1;
    else {
        return (num * fact(num - 1));
    }
}
function add(){
    let ul = calc.querySelector("#history-section");
    let li = calc.createElement("li");
    let res = calc.createElement("div");
    let scr = calc.createElement("div");
    res.id = "elRes";
    scr.id = "elScr";

    res.classList.add("result");
    scr.classList.add("screen");

    res.innerHTML = result.innerHTML + second + "=";
    scr.innerHTML = screen.innerHTML;

    li.appendChild(res);
    li.appendChild(scr);

    ul.appendChild(li);
}