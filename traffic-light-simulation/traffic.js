let istrue = false;

function redlight(next){
    const red = document.getElementById("red");

    istrue = true;
    red.style.backgroundColor = "red";
    setTimeout(() => {
        istrue = false;
        red.style.backgroundColor = "";
        if(next) next();
    }, 3000);
}

function yellowlight(next){
    const yellow = document.getElementById("yellow");
    istrue = true;
    yellow.style.backgroundColor = "yellow";
    setTimeout(() => {
        istrue = false;
        yellow.style.backgroundColor = "";
        if(next) next();
    }, 2000);
}

function greenlight(next) {
    const green = document.getElementById("green");
    istrue = true;
    green.classList.toggle("header-effect", istrue);
    setTimeout(() => {
        green.classList.remove("header-effect");
        if(next) next();
    }, 1000);
}

function go() {
    const h = document.getElementById("header");
    h.style.display = "block";
}

redlight(() => {
    yellowlight(() => {
        greenlight(go);
    })
})