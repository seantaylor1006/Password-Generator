// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = "0123456789";
var special = "!@#$%^&*()_-+=<>?/";
var passCombo = lowerCase + upperCase + number + special


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let length = window.prompt("Enter character length (up to 128)");
  if (!length) {
    return;
  }
/*window prompt code from Rock,Paper,Scissors project*/

  if (length >128) {
    window.alert("unavailable")
  }

  let passcode = "";
  for (i = 0; i < length; i++) {
  passcode += passCombo.charAt(Math.floor(Math.random()*passCombo.length));
  }
  return passcode

/*Chuyi and Stack Overflow helped me with this part  https://stackoverflow.com/questions/1497481/javascript-password-generator*/
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
