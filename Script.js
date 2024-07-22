const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    try {
      output = eval(output.replace("%", "/100"));
    } catch (error) {
      output = "Error";
      disableButtons();
    }
  } else if (btnValue === "AC") {
    output = "";
    enableButtons();
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

const disableButtons = () => {
  buttons.forEach((button) => {
    if (button.dataset.value !== "AC") {
      button.disabled = true;
    }
  });
};

const enableButtons = () => {
  buttons.forEach((button) => {
    button.disabled = false;
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
