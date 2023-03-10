const rollDice3 = document.getElementById("roll-dice-3");
const rollDice4 = document.getElementById("roll-dice-4");
const rollDice6 = document.getElementById("roll-dice-6");
const rollDice8 = document.getElementById("roll-dice-8");
const rollDice20 = document.getElementById("roll-dice-20");
const result = document.getElementById("result");

rollDice3.addEventListener("click", function() {
    result.innerHTML = Math.floor(Math.random() * 3) + 1;
});

rollDice4.addEventListener("click", function() {
    result.innerHTML = Math.floor(Math.random() * 4) + 1;
});

rollDice6.addEventListener("click", function() {
    result.innerHTML = Math.floor(Math.random() * 6) + 1;
});

rollDice8.addEventListener("click", function() {
    result.innerHTML = Math.floor(Math.random() * 8) + 1;
});

rollDice20.addEventListener("click", function() {
    result.innerHTML = Math.floor(Math.random() * 20) + 1;
});
