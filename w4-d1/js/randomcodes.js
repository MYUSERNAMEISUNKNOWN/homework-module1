function generateCode() {
  let randomString = ` `;
  let length = 8;
  // Simple Logic
  // randomString = Math.random().toString(36).slice(5);
  let str = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$`;

  for (let index = 0; index < length; index++) {
    var char = Math.random() * str.length;
    randomString += str.charAt(char);
  }
  return randomString;

  // const el = document.getElementById("codes");
  //   el.innerText = randomString;
}

document.getElementById("codes").innerHTML = generateCode();

// Disable Button
function disableButton() {
  document.getElementById("submit").disabled = true;
}


// Activate Button
disableButton();