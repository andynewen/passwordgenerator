// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Function to shuffle all the characters types
function CharShuffle(min, max) {
  if (!max) {
      max = min
      min = 0
  }
  var numberValue = Math.random()
  return Math.floor(min * (1 - numberValue) + numberValue * max)
}


// Windows prompt for the length of the password.
function generatePassword(){

// Variable settings the array of data by all characters
var specialCharacters = [ '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.' ];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var upperCasedCharacters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

// Added pw and characters variable for later
var pwCharacter = [];
var Characters = [];

var passwordlength = prompt("Please enter the length of your password.\nA password must contain atleast 8 character and no more than 128 characters.\nPassword length should be between 8 and 128 characters ") 

// Validating password length to meet criteria

if (isNaN(passwordlength)) {
  alert("Please enter a valid number.")
  return null
}

if (passwordlength < 8 || passwordlength > 128) {
  alert("Password length should be between 8 and 128 characters")
  return null
}

}
