// Select HTML elements
const heading = document.getElementById("heading");
const message = document.getElementById("message");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

// Button 1 Click Event
btn1.addEventListener("click", function () {
    heading.innerHTML = "Button 1 Clicked";
    heading.style.color = "blue";
    message.innerHTML = "You clicked Button 1.";
});

// Button 2 Click Event
btn2.addEventListener("click", function () {
    heading.innerHTML = "Button 2 Clicked";
    heading.style.color = "green";
    message.innerHTML = "You clicked Button 2.";
});

// Reset Button Click Event
btn3.addEventListener("click", function () {
    heading.innerHTML = "JavaScript Button Click Event";
    heading.style.color = "black";
    message.innerHTML = "Click any button.";
});