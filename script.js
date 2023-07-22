// Assignment code here
var generateBtn = document.querySelector("#generate");

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

function generatePassword() {
  let length = window.prompt("Enter character length (up to 128)");

  let yesLower = confirm("add lowercase?");
  let yesUpper = confirm("add uppercase?");
  let yesNumber = confirm("add numbers?");
  let yesSpecial = confirm("add special characters?");

  let passcode = "";

if (!length) {
  passcode += "error";
}
// window prompt code from Rock,Paper,Scissors project
if (length > 128) {
  window.alert("unavailable");
  passcode += "error";
} else if (length < 8) {
  window.alert("unavailable");
  passcode += "error";
}
if (yesLower, yesUpper, yesNumber, yesSpecial) {
  for (i = 0; i < length; i++) {
    passcode += passCombo.charAt(Math.floor(Math.random()*passCombo.length));
    }
} else if (!yesLower, yesUpper, yesNumber, yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += comboNoLower.charAt(Math.floor(Math.random()*comboNoLower.length));
    }
  console.log(noLowerFunction);
} else if (yesLower, !yesUpper, yesNumber, yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += comboNoUpper.charAt(Math.floor(Math.random()*comboNoUpper.length));
    }
} else if (!yesLower, yesUpper, !yesNumber, yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += comboNoNumber.charAt(Math.floor(Math.random()*comboNoNumber.length));
    }
} else if (yesLower, yesUpper, yesNumber, !yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += comboNoSpecial.charAt(Math.floor(Math.random()*comboNoSpecial.length));
    }
} else if (yesLower, yesUpper, !yesNumber, !yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += lowerUpper.charAt(Math.floor(Math.random()*lowerUpper.length));
    }
} else if (yesLower, !yesUpper, yesNumber, !yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += lowerNumber.charAt(Math.floor(Math.random()*lowerNumber.length));
    }
} else if (yesLower, !yesUpper, !yesNumber, yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += lowerSpecial.charAt(Math.floor(Math.random()*lowerSpecial.length));
    }
} else if (!yesLower, yesUpper, yesNumber, !yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += upperNumber.charAt(Math.floor(Math.random()*upperNumber.length));
    }
} else if (!yesLower, yesUpper, !yesNumber, yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += upperSpecial.charAt(Math.floor(Math.random()*upperSpecial.length));
    }
} else if (!yesLower, !yesUpper, yesNumber, yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += numberSpecial.charAt(Math.floor(Math.random()*numberSpecial.length));
    }
} else if (yesLower, !yesUpper, !yesNumber, !yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += lowerCase.charAt(Math.floor(Math.random()*lowerCase.length));
    } 
} else if (!yesLower, yesUpper, !yesNumber, !yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += upperCase.charAt(Math.floor(Math.random()*upperCase.length));
    } 
} else if (!yesLower, !yesUpper, yesNumber, !yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += number.charAt(Math.floor(Math.random()*number.length));
    }
} else if (!yesLower, !yesUpper, !yesNumber, yesSpecial) {
    for (i = 0; i < length; i++) {
    passcode += special.charAt(Math.floor(Math.random()*special.length));
    }
} else if (!yesLower, !yesUpper, !yesNumber, !yesSpecial) {
    passcode += "error";
  }
return passcode;
}
//Chuyi and Stack Overflow helped me with this part  https://stackoverflow.com/questions/1497481/javascript-password-generator*/


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
debugger;
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

