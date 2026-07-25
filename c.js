// Select HTML elements
const heading = document.getElementById("heading");
const clickBtn = document.getElementById("clickBtn");
const dblBtn = document.getElementById("dblBtn");
const inputBox = document.getElementById("name");
const output = document.getElementById("output");

// Click Event to change heading text and color
clickBtn.addEventListener("click", function () {
    heading.innerHTML = "Button Clicked!";
    heading.style.color = "blue";
});

// Double Click Event to show alert 
dblBtn.addEventListener("dblclick", function () {
    alert("You double-clicked the button!");
});

// Mouse Over Event to change button background color
clickBtn.addEventListener("mouseover", function () {
    clickBtn.style.backgroundColor = "yellow";
});

// Mouse Out Event to reset button background color
clickBtn.addEventListener("mouseout", function () {
    clickBtn.style.backgroundColor = "";
});

// Key Up Event
inputBox.addEventListener("keyup", function () {
    output.innerHTML = "Hello, " + inputBox.value;
});

// Focus Event
inputBox.addEventListener("focus", function () {
    inputBox.style.backgroundColor = "lightgreen";
});

// Blur Event
inputBox.addEventListener("blur", function () {
    inputBox.style.backgroundColor = "";
});