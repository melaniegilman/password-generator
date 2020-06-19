// Assignment code here
//prompt user to answer 5 questions ab password criteria
//create if-else satement for each prompt 
//call function to randomly mix inputs

//arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "?",];



//Length
var passwordLength = window.prompt("Please choose a length between 8 and 128 characters.");
console.log(
  " User chose " + passwordLength
);
  if (passwordLength < 8 ||  passwordLength > 128) {
    window.alert("You need to pick a valid option. Try again!")
  }

//Lowercase
var passwordLowercase = window.prompt("Would you like to include lowercase characters? (Y/N)");
console.log(
  " User chose " + passwordLowercase
);
  if (passwordLowercase === "Y" || passwordLowercase === "y") {

}

//Uppercase
var passwordUppercase = window.prompt("Would you like to include uppercase characters? (Y/N)");
console.log(
  " User chose " + passwordUppercase
);

//Numeric
var passwordNumeric = window.prompt("Would you like to include numeric characters? (Y/N)");
console.log(
  " User chose " + passwordNumeric
);

//Special
var passwordSpecial = window.prompt("Would you like to include special characters? (Y/N)");
console.log(
  " User chose " + passwordSpecial
);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
