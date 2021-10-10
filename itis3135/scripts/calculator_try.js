let calcText = "";

function clicked(button_id) {
    switch (button_id) {
        case "0":
            console.log("0");
            calcText += "0";
            break;
        case "1":
            console.log("1");
            calcText += "1";
            break;
        case "2":
            console.log("2");
            calcText += "2";
            break;
        case "3":
            console.log("3");
            calcText += "3";
            break;
        case "4":
            console.log("4");
            calcText += "4";
            break;
        case "5":
            console.log("5");
            calcText += "5";
            break;
        case "6":
            console.log("6");
            calcText += "6";
            break;
        case "7":
            console.log("7");
            calcText += "7";
            break;
        case "8":
            console.log("8");
            calcText += "8";
            break;
        case "9":
            console.log("9");
            calcText += "9";
            break;
        case "equals":
            console.log("=");
            calculateTotal(calcText);
            break;
        case "clear":
            console.log("clear");
            calcText = "";
            break;
        case "decimal":
            console.log(".");
            calcText += ".";
            break;
        default:
            break;
    }
}

function add() {
    document.getElementById("calc-calc-displaylay").innerHTML += '+';
}

function subtract() {

    document.getElementById("calc-display").innerHTML += '-';
}

function multiply() {
    document.getElementById("calc-display").innerHTML += '*';
}

function divide() {
    document.getElementById("calc-display").innerHTML += '/';
}

function equals(values) {
    console.log(values);
}