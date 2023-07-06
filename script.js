// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = "0123456789";
var special = "!@#$%^&*()_-+=<>?/";

var passCombo = lowerCase + upperCase + number + special
var comboNoLower = upperCase + number + special
var comboNoUpper = lowerCase + number + special
var comboNoNumber = upperCase + lowerCase + special
var comboNoSpecial = upperCase + lowerCase + number
var lowerUpper = lowerCase + upperCase
var lowerNumber = lowerCase + number
var lowerSpecial = lowerCase + special
var upperNumber = upperCase + number
var upperSpecial = upperCase + special
var numberSpecial = number + special


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let length = window.prompt("Enter character length (up to 128)");
  if (!length) {
    return;
  }
// window prompt code from Rock,Paper,Scissors project
    if (length >128) {
      window.alert("unavailable");
      return "error";
    }

  let yesLower = window.prompt("add lowercase?");
    if (yesLower = "no") {
      yesLower = false;
    }
  let yesUpper = window.prompt("add uppercase?");
    if (yesUpper = "no") {
      yesUpper = false;
    }
  let yesNumber = window.prompt("add numbers?");
    if (yesNumber = "no") {
      yesNumber = false;
    }
  let yesSpecial = window.prompt("add special characters?");
    if (yesSpecial = "no")
      yesSpecial = false;
 

  let passcode = "";

  if (yesLower, yesUpper, yesNumber, yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += passCombo.charAt(Math.floor(Math.random()*passCombo.length));
    }
    return passcode
  } else if (!yesLower, yesUpper, yesNumber, yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += comboNoLower.charAt(Math.floor(Math.random()*comboNoLower.length));
    }
    return passcode
  } else if (yesLower, !yesUpper, yesNumber, yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += comboNoUpper.charAt(Math.floor(Math.random()*comboNoUpper.length));
    }
    return passcode
  } else if (!yesLower, yesUpper, !yesNumber, yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += comboNoNumber.charAt(Math.floor(Math.random()*comboNoNumber.length));
    }
    return passcode
  } else if (yesLower, yesUpper, yesNumber, !yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += comboNoSpecial.charAt(Math.floor(Math.random()*comboNoSpecial.length));
    }
    return passcode
  } else if (yesLower, yesUpper, !yesNumber, !yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += lowerUpper.charAt(Math.floor(Math.random()*lowerUpper.length));
    }
    return passcode
  } else if (yesLower, !yesUpper, yesNumber, !yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += lowerNumber.charAt(Math.floor(Math.random()*lowerNumber.length));
    }
    return passcode
  } else if (yesLower, !yesUpper, !yesNumber, yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += lowerSpecial.charAt(Math.floor(Math.random()*lowerSpecial.length));
    }
    return passcode
  } else if (!yesLower, yesUpper, yesNumber, !yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += upperNumber.charAt(Math.floor(Math.random()*upperNumber.length));
    }
    return passcode
  } else if (!yesLower, yesUpper, !yesNumber, yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += upperSpecial.charAt(Math.floor(Math.random()*upperSpecial.length));
    }
    return passcode
  } else if (!yesLower, !yesUpper, yesNumber, yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += numberSpecial.charAt(Math.floor(Math.random()*numberSpecial.length));
    }
    return passcode
  } else if (yesLower, !yesUpper, !yesNumber, !yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += lowerCase.charAt(Math.floor(Math.random()*lowerCase.length));
    }
    return passcode
  } else if (!yesLower, yesUpper, !yesNumber, !yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += upperCase.charAt(Math.floor(Math.random()*upperCase.length));
    }
    return passcode
  } else if (!yesLower, !yesUpper, yesNumber, !yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += number.charAt(Math.floor(Math.random()*number.length));
    }
    return passcode
  } else if (!yesLower, !yesUpper, !yesNumber, yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += special.charAt(Math.floor(Math.random()*special.length));
    }
    return passcode
  } else if (!yesLower, !yesUpper, !yesNumber, !yesSpecial) {
    return "error";
  }
}
//Chuyi and Stack Overflow helped me with this part  https://stackoverflow.com/questions/1497481/javascript-password-generator*/


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
