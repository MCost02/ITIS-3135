function alarm() {
    alert("It's the cheif, your script is running and ready to go!");
}

function askName() {
    var userName = prompt("What is your name?");
    return userName;
}

function askMood() {
    var userMood = prompt("How are you feeling today?");
    return userMood;
}

function todaysDate() {
    var today = new Date();
    return (today.getMonth() + 1) + "/" + today.getDate() +
        "/" + today.getFullYear();
}

function currentTime() {
    var time = new Date();
    return time.getHours() + ":" + time.getMinutes() + "." +
        time.getSeconds();
}

function cheetah() {
    alert("The cheetah is the fastest land animal, with recorded speeds of up to 75 mph!");
}

function add() {
    var userNum1 = prompt("Please enter a number: ");
    var userNum2 = prompt("Please enter another number: ");

    num1 = parseInt(userNum1);
    num2 = parseInt(userNum2);

    var sum1 = parseInt(num1 + num2);

    alert(userNum1 + " + " + userNum2 + " = " + sum1);
}

function multiply() {
    var userNum1 = prompt("Please enter a number: ");
    var userNum2 = prompt("Please enter another number: ");

    num1 = parseInt(userNum1);
    num2 = parseInt(userNum2);

    var product = parseInt(num1 * num2);

    alert(userNum1 + " * " + userNum2 + " = " + product);
}

function dogYears() {
    var userAge = prompt("How old are you?");
    var dogAge = userAge * 7;
    alert("If you were a dog, you would be " + dogAge +
        " years old!");
}

function toCelsius() {
    let celsiusText, celsius;
    let fahrenheit = prompt("Please enter a temperature.");
    celsius = (5 / 9) * (fahrenheit - 32);
    alert("The temperature is " + celsius + "°C.");
}
