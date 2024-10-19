// Write a program that changes the background color of the webpage when a button is clicked.
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("changeColor").addEventListener('click', () => {
        let currentColor = window.getComputedStyle(document.body).backgroundColor;
        if (currentColor === 'rgb(255, 192, 203)') {
            document.body.style.backgroundColor = "LightGray";
        } else {
            document.body.style.backgroundColor = "pink";
        }
    });
});

// Create a form with two inputs (name and email) and a submit button. Write a program that displays the entered values below the form when it's submitted.
function displayInfo() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    document.getElementById("infoDiv").innerHTML = name && email 
        ? `<p>Name: ${name}</p><p>Email: ${email}</p>`
        : '<p>Please fill out both fields.</p>';
}

// Write a program that hides and shows a paragraph of text when a button is clicked.




// Write a program that listens for keypresses and logs the key that was pressed.

// Create a button that counts the number of times it's clicked and displays the count on the webpage.

// Write a program that listens for mouse hover events and changes the color of the text when the mouse is over it.
