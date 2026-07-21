// Select element by ID
const heading = document.getElementById("heading");
heading.style.color = "blue";

// Select first element by class name
const firstParagraph = document.getElementsByClassName("text")[0];
firstParagraph.style.color = "green";

// Select all elements by class name
const paragraphs = document.getElementsByClassName("text");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontSize = "20px";
}

// Select first paragraph using querySelector
const firstPara = document.querySelector(".text");
firstPara.style.backgroundColor = "yellow";

// Select all paragraphs using querySelectorAll
const allParas = document.querySelectorAll(".text");

allParas.forEach(function (para) {
    para.style.fontFamily = "Arial";
});

// Select button by ID and add click event
const button = document.querySelector("#btn");

button.addEventListener("click", function () {
    heading.innerHTML = "Button Clicked!";
    alert("You clicked the button.");
});