// Select HTML elements
const heading = document.getElementById("heading");
const clickBtn = document.getElementById("clickBtn");
const dblBtn = document.getElementById("dblBtn");
const inputBox = document.getElementById("name");
const output = document.getElementById("output");

// Click Event
clickBtn.addEventListener("click", function () {
    heading.innerHTML = "Button Clicked!";
    heading.style.color = "blue";
});

// Double Click Event
dblBtn.addEventListener("dblclick", function () {
    alert("You double-clicked the button!");
});

// Mouse Over Event
clickBtn.addEventListener("mouseover", function () {
    clickBtn.style.backgroundColor = "yellow";
});

// Mouse Out Event
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