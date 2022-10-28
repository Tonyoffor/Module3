// Assignment code here
var generatePassword = 
var password
var expression 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //  if(password) (=> 8, =< 128) then true ; if false then console.log("Please make sure password is between 8 to 128 characters")
  //if(password == =>8, =<128){
// Console.log("generatePassword");
  //}else console.log Please make sure password is between 8 to 128 character

  // if password => 1 text.uppercase then true
  // The password is true if it has all these factors are true; I should have some funky looking && && mix then generate a math.random password that meets all criteria

  //function validate(obj, lowval, hival) {
 // if ((obj.value < lowval) || (obj.value > hival)) {
   // console.log('Invalid Value!');

// add an event listener on click

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
