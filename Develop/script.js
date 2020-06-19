// Assignment code here
//prompt user to answer 5 questions ab password criteria
//create if-else satement for each prompt if Y, include var if N, dont include var in password
//call function to randomly mix vars and make correct length
// use math.floor and math.random
//what other function do i need??
//use arrays for uppers, lowers, numbers, and special characters


//arrays
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
console.log(
  " User chose " + passwordLength
);
if (passwordLength < minLength || passwordLength > maxLength) {
  window.alert("You need to pick a valid option. Try again!")
}

//Lowercase
var passwordLowercase = window.prompt("Would you like to include lowercase characters? (Y/N)");
console.log(
  " User chose " + passwordLowercase
);
if (passwordLowercase === "Y" || passwordLowercase === "y") {
  typeCount += 1;
  userChoices.push(lowerCase)
  //include lowerCase;
  //else if N do not include
  //else if pick a valid option
}




//Uppercase
var passwordUppercase = window.prompt("Would you like to include uppercase characters? (Y/N)");
console.log(
  " User chose " + passwordUppercase
);
if (passwordUppercase === "Y" || passwordUppercase === "y") {
  typeCount += 1;
  userChoices.push(upperCase)
  //include upperCase
  //else if N do not include
  //else if pick a valid option
}

//Numeric
var passwordNumeric = window.prompt("Would you like to include numeric characters? (Y/N)");
console.log(
  " User chose " + passwordNumeric
);
if (passwordNumeric === "Y" || passwordNumeric === "y") {
  typeCount += 1;
  userChoices.push(numbers)
  //include uppercase
  //else do not include
  //else pick a valid option
}

//Special
var passwordSpecial = window.prompt("Would you like to include special characters? (Y/N)");
console.log(
  " User chose " + passwordSpecial
);
if (passwordSpecial.toLowerCase() === 'y') {
  typeCount += 1;
  userChoices.push(special)
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {

  // does the user want upper case -- boolean
  // does the user want lower case -- boolean
  // does the user want specials -- boolean
  // does the user want numbers -- boolean

  // how many characters does the user want
  // for each character

  //l___________

  let passwordString = '';
  let count = 0;
  //console.log(userChoices);
  for (let i = 0; i < passwordLength; i++) {
    // -- for each type theyve chosen
    // pick a type theyve choosen then randomly grab one of its character
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

    // for (let t = 0; t < typeCount; t++) {
    //   // -- -- randomly pick one of those character
    //   // -- -- put that character in the slot
    //   // -- -- rinse and repeat
    // }
  }
  console.log(passwordString);

}