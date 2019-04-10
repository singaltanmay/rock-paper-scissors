plusButton = document.getElementById("plusButton");
minusButton = document.getElementById("minusButton");
mulButton = document.getElementById("mulButton");
divButton = document.getElementById("divButton");
result = document.getElementById("result");
number1 = parseInt(document.getElementById("number1").value);
number2 = parseInt(document.getElementById("number2").value);

addition = function() {
  result.innerText = number1 + number2;
}

subtraction = function() {
  result.innerText = number1 - number2;
}

multiplication = function() {
  result.innerText = number1 * number2;
}

division = function() {
  result.innerText = number1 / number2;
}

plusButton.addEventListener("click", addition);
minusButton.addEventListener("click", subtraction);
mulButton.addEventListener("click", multiplication);
divButton.addEventListener("click", division);
