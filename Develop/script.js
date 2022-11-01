// Assignment code here
const button = document.getElementById("generate");


button.addEventListener('click', startPrompts);

// Get references to the #generate element

// I used const for these array's because they will not change 
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numeric = ['1', '2','3', '4', '5', '6', '7', '8', '9', '0'];
const specialcharacters = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '/','?','<','>'];
const allvariables = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890~!@#$%^&*?/<>";
//I used var here because I want these prompts to change when called by user, secondly I set my boolians to falsey because I want to provide it as a prompt for the user to call/check 
var passwordlength = 0; 
var usercallLowerCase = false;
var usercallUpperCase = false;
var usercallnumeric = false;
var usercallspecialcharacters = false;
var passwordcriteria = "";

//for the prompts you can use alert instead
function startPrompts() {
passwordcriteria = prompt ('Please Select Password Criteria, Type: (1) for numeric. (2) for special characters. (3) for uppercase.  (4) for lowercase. (5) for combination.');
var passwordlength = prompt ("Enter password Lenght . Please choose a number between 8 and 128 characters");
  while (passwordlength < 8 || passwordlength > 128)
  { 
    passwordlength = parseInt(prompt ('invalid password length, enter lenght again'));
}
  
  //this if statment prompts the user to keep the password within range; I tried putting this if statment with the rest but it was giving me issues
   //So below are the remaining prompts used in a different if statment
if (isNaN(passwordcriteria) || password < 1 || password > 5){ 
  prompt ('Please enter number between 1 and 5');
  passwordcriteria = prompt ('Please Select Password Criteria, Type: (1) for numeric. (2) for special characters. (3) for uppercase. (4) for lowercase . (5) for combination');

}
var password = "";
if(parseInt(passwordcriteria) == 1){
for (let i =0; i < passwordlength; i++){
  let x = parseInt(Math.random() * 9); 
  console.log(x);
  let number = numeric [x];
  console.log(number);
  password = password + number;
}

} 
if(parseInt(passwordcriteria) == 2){
  for (let i =0; i < passwordlength; i++){
    let x = parseInt(Math.random() * 12); 
    console.log(x);
    let sc = specialcharacters[x];
    console.log(sc);
    password = password + sc;
  }
 
  } 
  if(parseInt(passwordcriteria) == 3){
    for (let i =0; i < passwordlength; i++){
      let x = parseInt(Math.random() * uppercase.length-1); 
      console.log(x);
      let Uc = uppercase[x];
      console.log(Uc);
      password = password + Uc;
    }
    
    } 
    if(parseInt(passwordcriteria) == 4){
      for (let i =0; i < passwordlength; i++){
        let x = parseInt(Math.random() * lowercase.length-1); 
        console.log(x);
        let lc = lowercase[x];
        console.log(lc);
        password = password + lc;
      }
   
      } 
      if(parseInt(passwordcriteria) == 5){
        for (let i =0; i < passwordlength; i++){
          let x = parseInt(Math.random() *  allvariables.length-1); 
          console.log(x);
          let av = allvariables.charAt(x);
          console.log(av);
          password = password + av;
        }
        console.log(password);
        } 
        document.getElementById('password').innerText = password
}

