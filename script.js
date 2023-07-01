//Assignment code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //confirm for types of character inputs
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumbers = confirm("Include numeric characters?");
  var includeSpecialChars = confirm("Include special characters?");


  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate the password
function generatePassword() {
  //declaring string for allowed characters
  var availableChars = "";

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
  }


  //check if any character types are selected
  if (!hasSelectedCharTypes) {
    alert("No character type selected! Please select at least one character type.");
    return "";
  }
}
