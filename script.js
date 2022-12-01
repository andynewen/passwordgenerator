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
var passwordlength = prompt("Please enter the length of your password.\nPassword length should be between 8 and 128 characters.") 


// Variable settings the array of data by all characters
var specialCharacters = [ "!#$%&'()*+,-.\/:;<=>?@[^_`]{|}~" ];
var numericCharacters = [ "0123456789" ];
var lowerCasedCharacters = [ "abcdefghijklmnopqrstuvwxyz" ];
var upperCasedCharacters = [ "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ];


// Added pw and characters variable for later
var pwCharacter = [];
var Characters = [];


// Validating password length to meet criteria

if (isNaN(passwordlength)) {
  alert("Please enter a valid number.")
  return null
}

if (passwordlength < 8 || passwordlength > 128) {
  alert("Password length should be between 8 and 128 characters")
  return null
}

// These are the prompts to include character types in their random password
else{

  var loweranswer = confirm("Press OK if you want lowercase characters in your password?");
  if (loweranswer ){
    Characters = Characters + lowerCasedCharacters;
  }
  
  var upperanswer =  confirm("Press OK if you want uppercase characters in your password?");
  if (upperanswer ){
    Characters = Characters + upperCasedCharacters;
  }
 
  var numberanswer =  confirm("Press OK if you want numbers in your password?");
  if (numberanswer ){
    Characters = Characters + numericCharacters;
  }

  var signsanswer = confirm("Press OK if you want special characters in your password?");
  if (signsanswer){
    Characters = Characters + specialCharacters;
  }

if (Characters != ''){

// This creates a password from all the inputs the user has clicked.
for (var i=0; i<passwordlength; i++){
  var randomnum = Math.floor(Math.random() * Characters.length);
  pwCharacter += Characters.substring(randomnum,randomnum+1);
}

}

else {
alert("Please select atleast one character type to generate a password.");

}

}

return pwCharacter;

}