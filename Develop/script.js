// Assignment code here
//prompt user to answer 5 questions ab password criteria
//create if-else satement for each prompt if Y, include var if N, dont include var in password
//call function to randomly mix vars and make correct length
// use math.floor and math.random
//what other function do i need??
//use arrays for uppers, lowers, numbers, and special characters

//arrays & vars
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
var minLength = 8
var maxLength = 128
var typeCount = 0
var userChoices = [];

//Length
var passwordLength = window.prompt("Please choose a length between 8 and 128 characters.");
if (passwordLength >= minLength || passwordLength <= maxLength) {
    console.log(" User chose " + passwordLength);
  }

  //Loop if answer is outside the designated parameters
  while(passwordLength <= 7 || passwordLength >= 129) {
    window.alert("Password Length must be between 8 and 128 characters, please enter a valid option.");
    var passwordLength = window.prompt("Please choose a length between 8 and 128 chracters.");
  }
  
//Lowercase
var passwordLowercase = window.prompt("Would you like to include lowercase characters? (Y/N)");
console.log(" User chose " + passwordLowercase);
if (passwordLowercase === "Y" || passwordLowercase === "y") {
  typeCount += 1;
  userChoices.push(lowerCase)
}

//Uppercase
var passwordUppercase = window.prompt("Would you like to include uppercase characters? (Y/N)");
console.log(" User chose " + passwordUppercase);
if (passwordUppercase === "Y" || passwordUppercase === "y") {
  typeCount += 1;
  userChoices.push(upperCase)
}

//Numeric
var passwordNumeric = window.prompt("Would you like to include numeric characters? (Y/N)");
console.log(" User chose " + passwordNumeric);
if (passwordNumeric === "Y" || passwordNumeric === "y") {
  typeCount += 1;
  userChoices.push(numbers)
}

//Special
var passwordSpecial = window.prompt("Would you like to include special characters? (Y/N)");
console.log(" User chose " + passwordSpecial);
if (passwordSpecial === "Y" || passwordSpecial === 'y') {
  typeCount += 1;
  userChoices.push(special)
}

function generatePassword() {
  let passwordString = '';
  let count = 0;
  //console.log(userChoices);
  for (let i = 0; i < passwordLength; i++) {
    // -- for each type theyve chosen
    // pick a type theyve choosen then randomly grab one of its characters
    // get a random char from this array userChoices[count]
    var currentArray = userChoices[count];
    // var randomChar = userChoices[count[Math.floor(Math.random() * userChoices[count].length)]];
    var randNum = Math.floor(Math.random() * currentArray.length)
    var randChar = currentArray[randNum];
    //console.log(currentArray, randNum, randChar);
    passwordString = passwordString + randChar;
    // increment count
    count++;
    if (count >= typeCount) {
      // -- count === 0
      count = 0;
    }    
  }  
  console.log(passwordString);
  return passwordString;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
   passwordText.value = password;
 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




