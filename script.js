var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function setGradient() {
    body.style.background =
        "linear-gradient(to right, " +
        color1.value +
        ", " +
        color2.value +
        ")";
    css.textContent = body.style.background + ";";
}

function randomGenerate() {
    var color = "#";
    for (i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 16).toString(16);
        console.log(color);
    }
    return color;
}

function hexColor() {
    color1.value = randomGenerate();
    color2.value = randomGenerate();
    setGradient();
}


function createButton() {
    var div = document.createElement("div");
    var btn = document.createElement("button");
    btn.classList.add("button");
    btn.innerHTML = "Create Background";
    document.body.appendChild(div);
    div.appendChild(btn);
    btn.addEventListener("click", hexColor);
}

setGradient();
createButton();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);