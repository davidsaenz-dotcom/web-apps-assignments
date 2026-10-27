function setGreeting() {

    let now = new Date(); //built in class in Javascript
    console.log("I am going to print time: " + now.getHours());

    let hours = now.getHours();
    let greeting = "";

    if (hours < 12) {
        greeting = "Good morning!";
    }

    else if (hours < 18) {
        greeting = "Good afternoon!";
    }

    else {
        greeting = "Good night!";
    }

    console.log(greeting);
    document.getElementById("greetingOutput").textContent = greeting;
}

window.onload = function () {
    setGreeting();
}

function setButtonText() {
    document.getElementById("buttonClickText").textContent = "Hello world!!!!!! YOU CLICKED ME, NOW I'M NEVER GOING AWAY!!!!!!!!";
}

function newButtonText() {
    document.getElementById("newButtonText").textContent = "Don't worry if the sun goes away in 30 minutes, that's what you did when pressing this button...";
}

function setButtonTextDate() {
    let now = new Date();
    document.getElementById("buttonClickDate").textContent = `The date today is: ${now}`;
}

function addNumbers() {
    let num1 = parseInt(document.getElementById("addNum1").value);
    let num2 = parseInt(document.getElementById("addNum2").value);
    let numAdd = num1 + num2;
    document.getElementById("sum").textContent = `The sum is: ${numAdd}`;
}
