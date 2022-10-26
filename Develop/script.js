// Assignment code here
var generate
var password

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //  if(password) = < 8 or > 128
  //console.log("Please make sure password is between 8 to 128 characters")

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
