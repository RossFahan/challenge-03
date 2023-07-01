//Assignment code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //confirm for types of character inputs
  // call hoisted functions for password length and criteria
  var passwordLength = getPasswordLength();
  var passwordCriteria = getPasswordCriteria();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate the password
function generatePassword() {
  //declaring string for allowed characters
  var availableChars = "";
  var password = "";

  //add to available chars string the allowed characters
  if (includeLowercase) {
    availableChars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
    availableChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumbers) {
    availableChars += "0123456789";
  }
  if (includeSpecialChars) {
    availableChars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    // If no character type is selected, return an empty string
    if (availableChars === "") {
      alert("No character type selected! Please select at least one character type.");
      return "";
    }

    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * availableChars.length);
      password += availableChars[randomIndex];
    }
  }
}

function getPasswordLength(){
  var length = prompt("Choose a password length (between 8 and 128 characters):");

  //check that password meets requires and ask for new input if not
  while(length < 8 || length > 128) {
    length = prompt("Invalid length! Please choose a password length between 8 and 128 characters:");
  }
  return length;
}

function getPasswordCriteria() {
  var passwordCriteria = {
    includeLowercase: confirm("Include lowercase characters?"),
    includeUppercase: confirm("Include uppercase characters?"),
    includeNumbers: confirm("Include numeric characters?"),
    includeSpecialChars: confirm("Include special characters?"),
  };

  return passwordCriteria;
}