let randomString = ` `;
var getCode = "";
var btnValue; // boolean value for button
let length = 8;

function generateCode() {
  let str = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$`;

  for (let index = 0; index < length; index++) {
    var char = Math.random() * str.length;
    randomString += str.charAt(char);
  }
  return randomString;
}

document.getElementById("codes").innerHTML = generateCode();

// Disable Button
function disableButton(btnValue) {
  document.getElementById("submit").disabled = btnValue;
  if (btnValue == true) {
    //   set button and label color translucent
    document.getElementById("submit").style.backgroundColor =
      "rgba(73, 119, 209, 0.3)";
    document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
  } else {
    //   set button and label color with no transparency
    document.getElementById("submit").style.backgroundColor =
      "rgba(73, 119, 209, 1)";
    document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
  }
}

// listen to user input code
var codebox = document.getElementById("codeentered"); // get textbox
codebox.addEventListener("input", evaluateCode);

// Evalutate Code
function evaluateCode() {
  getCode = document.getElementById("codeentered").value; // get character entered
  var charset1 = getCode.trim(); //remove any hidden character entered
  var charset2 = randomString.trim(); // remove any hidden character generated

  //   if character entered matches the number of generated characters
  if (charset1.length == charset2.length) {
    disableButton(false); //if match, run the function to enable button
  }
}

// Activate Button
disableButton();
