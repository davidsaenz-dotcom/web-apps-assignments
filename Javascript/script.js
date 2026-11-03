// This function is called when the window loads initially.
function setGreeting() {

    // built in class in Javascript, gets the current date
    let now = new Date();
    // the now.getHours() method is inside the Date class and gives the current hour of the day.
    console.log("I am going to print time: " + now.getHours());

    let hours = now.getHours();
    let greeting = "";

    // Here we use the hour of the day to change the greeting dynamically.
    if (hours < 12) {
        greeting = "Good morning!";
    }

    else if (hours < 18) {
        greeting = "Good afternoon!";
    }

    else {
        greeting = "Good night!";
    }

    // Here we're logging the dynamic greeting to the console, and then changing the content of the div with id: greetingOutput.
    // That is what document.getElementById("id").textContent does. It fetches the text content of the element with the id in "id". Here we're setting
    // it to the dynamic greeting.
    console.log(greeting);
    document.getElementById("greetingOutput").textContent = greeting;
}

// This function runs on the event window.onload, which fires when the window loads for the first time. We'll run setGreeting() in this function.
window.onload = function () {
    setGreeting();
}

// This function runs when the button is pressed through the event in HTML onclick: "setButtonText()" for a specific button.
function setButtonText() {
    // Here we are changing the text content to my personalized text through the command stated before.
    document.getElementById("buttonClickText").textContent = "Hello world!!!!!! YOU CLICKED ME, NOW I'M NEVER GOING AWAY!!!!!!!!";
}

// This function runs when the button is clicked.
function newButtonText() {
    // Again we're using the same command to call the content of the div and change it.
    document.getElementById("newButtonText").textContent = "Don't worry if the sun goes away in 30 minutes, that's what you did when pressing this button...";
}

// This function runs when another button is clicked using the same event.
function setButtonTextDate() {
    // I'm calling the Date class and setting it to the now variable.
    let now = new Date();
    // Here I'm altering the content of the div with id: buttonClickDate, and setting to it the full content of the Date() class which includes both the date and time.
    document.getElementById("buttonClickDate").textContent = `The date today is: ${now}`;
}

function addNumbers() {
    // Here I am getting the inputted values of the text entries made in the HTML. I am using the same base command to select the specific elements, but to get the value
    // of the inputs I'm adding a .value at the end, and putting it in the parseInt() method which finds the numbers within the string that is fetched by .value.
    let num1 = parseInt(document.getElementById("addNum1").value);
    let num2 = parseInt(document.getElementById("addNum2").value);
    // Then we add the numbers we fetched from the user input together.
    let numAdd = num1 + num2;
    // Then we change the value of the div element to display the sum of the numbers.
    document.getElementById("sum").textContent = `The sum is: ${numAdd}`;
}

function getLength() {
    // Here I'm fetching the users input again using .value.
    let userString = document.getElementById("userString").value;
    // Then I find the length of the fetched string using .length.
    let stringLength = userString.length;
    // From there I change the div element for this example to include the user's string and the user's string's length.
    document.getElementById("lengthOutput").textContent = `"${userString}" has ${stringLength} characters.`
}

// I create a universal variable to hold the password string data temporarily.
let tempPassword = "";
// This function will fire when there is a change in the checkbox's status.
function revealPassword() {
    // I'm storing the value of the user's password input into password.
    let password = document.getElementById("password").value;
    // Here I'm storing the checkbox element in showPassword.
    let showPassword = document.getElementById("showPassword");
    // Here I'm creating the string that will replace the actual password text.
    let asteriskPassword = "";
    // Here I'm creating a for loop that repeats for the whole length of the user's password. It then proceeds to add an asterisk to the placeholder string
    // for every character so that the replacement password has the same amount of asterisks as characters.
    for (let i = 0; i < password.length; i++) {
        asteriskPassword += "*";
    }
    // If the checkbox is checked, the string data stored in password will be copied onto tempPassword, before the code proceeds to overwrite the textbox with the
    // placeholder password. Making the user's password invisible, while keeping it saved for toggling on and off
    if (showPassword.checked) {
        tempPassword = password;
        document.getElementById("password").value = asteriskPassword;
    }

    // If the checkbox is not checked, then the password will proceed to reset to the tempPassword where we saved the user's password temporarily.
    else {
        document.getElementById("password").value = tempPassword;
    }
}

// Here is a second function for this same problem of hiding a password, it's a lot more streamlined and is the official way to do it.
// This function will fire when there is a change to the checkbox's status.
function revealPassword2() {
    // First I save the checkbox into showPassword2.
    let showPassword2 = document.getElementById("showPassword2");
    // If the checkbox is checked, then the type of the input element will be changed from password which hides the text, into text, which treats the password as
    // normal text that doesn't have to be hidden. We use this by using the .type command to tap into the type attribute of the input element.
    if (showPassword2.checked) {
        document.getElementById("password2").type = "text";
    }

    // If the checkbox is not checked though, then they program will reset the input element back to type password to hide it again.
    else {
        document.getElementById("password2").type = "password";
    }
}

// First I'm creating a universal counter variable.
let changeStyleCounter = 0;
function changeStyle() {
    // Whenever this function fires and the button is pressed, 1 will be added to the counter.
    changeStyleCounter++;
    // Here we save the p element into the customText variable, allowing for quick manipulation. It's a variable that references the HTML element.
    let customText = document.getElementById("customText");
    // If the counter is on an even number, the style of the text will be changed through the command .style attached to the customText variable referencing the HTML
    // element. This means that on the first click, and every two clicks after that, the styling will change.
    if (changeStyleCounter % 2 == 1) {
        customText.style = "display: inline-block; font-size: 50px; color: green; border-style: solid; border-width: 5px; border-color: red; padding: 3px; border-radius: 4px;";
    }

    // If the counter is even however, that means the user has clicked the button twice, and then two times more and so on, which will revert the style back to what it was
    // originally.
    else {
        customText.style = "display: inline-block; font-size: large; border-style: solid; border-width: 2px; border-color: green; padding: 3px; border-radius: 4px; color: red;";
    }
}

// Here I'm declaring another counter variable.
let clickNumber = 0;
// Here I'm declaring another variable to temporarily hold the String data, because I will make it disappear and appear again.
let content = "";
function textDissapear() {
    // Every time the function is fired, the counter will go up by one, indicating the number of clicks of the button.
    clickNumber++;
    // If the click number is odd, then the div element will be set to a string with a space, effectively hiding it from the user, but before it does that, saves the
    // content of the div element into the content variable so that it isn't lost and can reappear.
    if (clickNumber % 2 == 1) {
        content = document.getElementById("moodyMessage").textContent;
        document.getElementById("moodyMessage").textContent = " ";
    }

    // If the click number is even, then the div element's text content will be set to what was stored in content, effectively returning the message to its original, viewable
    // state.
    else {
        document.getElementById("moodyMessage").textContent = content;
    }
}