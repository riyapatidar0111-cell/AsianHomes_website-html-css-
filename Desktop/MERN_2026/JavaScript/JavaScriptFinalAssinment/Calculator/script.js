const display = document.getElementById("display");

function appendValue(value) {
  // console.log("display =====", value)
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value); //eval is a methos that takes string as a input and evaluates it as JavaScript code.
  } catch {
    display.value = "Error";
  }
}
