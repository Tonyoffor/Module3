// Assignment code here
const button = document.getElementById("button")


button.addEventListener('click', startPrompts)

// Get references to the #generate element

// I used const for these array's because they will not change 
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numeric = ['1', '2','3', '4', '5', '6', '7', '8', '9', '0']
const specialcharacters = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '/','?','<','>']
//I used var here because I want these prompts to change when called by user, secondly I set my boolians to falsey because I want to provide it as a prompt for the user to call/check 
var passwordlength = 0; 
var passwordText = '';
var usercallLowerCase = false;
var usercallUpperCase = false;
var usercallnumeric = false;
var usercallspecialcharacters = false;

var generateBtn = document.querySelector("#generate");{
  eliminateCommas
}

function startPrompts()
var passwordlength = prompt ();{('Please Select Password Criteria')
  if (passwordlength < 8 || passwordlength > 128)  //this if statment prompts the user to keep the password within range; I tried putting this if statment with the rest but it was giving me issues
    prompt ("Please choose a number between 8 and 128 characters");
} 
//So below are the remaining prompts used in a different if statment
if (isNaN(usercallnumeric)){ prompt('Do you like password to have numeric values?');
usercallLowerCase = prompt ('Do you like your password to have lowercase characters?');
usercallUpperCase = prompt ('Do you want your password to have Uppercase characters?');
usercallspecialcharacters = prompt ('Do you want your password to have special characters?');
console.log( passwordlength, usercallLowerCase, usercallUpperCase, usercallnumeric, usercallspecialcharacters)
return generatePassword();
}
// Write password to the #password input
function generatePassword()
{

}
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


   function writePassword() 
  generateBtn.addEventListener("click", writePassword)

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



