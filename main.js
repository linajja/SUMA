let result1 = document.createElement("p");
let h = document.getElementById("ats");
let forma1 = document.forms["forma1"];

forma1.addEventListener('submit', function (e) {
    e.preventDefault();
    let skaicius1 = +forma1["number1"].value;
    let skaicius2 = +forma1["number2"].value;
    let suma = skaicius1 + skaicius2;
    result1.textContent = suma;
    h.appendChild(result1);
});
