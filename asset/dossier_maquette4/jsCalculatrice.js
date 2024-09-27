let bouton = document.getElementsByClassName("number");
let ecrant = document.getElementById("ecrant");
let myclear = document.getElementById("clear");
let myequal = document.getElementById("equal");
let myvirgule = document.getElementById("virgule");

for (let i = 0; i < bouton.length; i++) {
    bouton[i].onclick = function() {
        ecrant.value += this.value;
    }
}

myvirgule.onclick = function() {
    ecrant.value += ".";
}

myclear.onclick = function() {
    ecrant.value = "";
}

myequal.onclick = function() {
    ecrant.value = eval(ecrant.value);
}