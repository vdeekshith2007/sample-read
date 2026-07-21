// Display a message when the page loads
console.log("JavaScript file connected successfully!");

// Function to change the paragraph text
function changeText() {
    document.getElementById("message").innerHTML =
        "Congratulations! JavaScript is linked successfully.";
}

// Display a popup when the page loads
window.onload = function () {
    alert("Welcome! JavaScript file loaded successfully.");
};