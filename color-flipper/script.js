const changeBackground = document.body;

changeColor.addEventListener("click", function () {

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let RGB = `rgb(${red}, ${green}, ${blue})`;

    changeBackground.style.background = RGB;

});
