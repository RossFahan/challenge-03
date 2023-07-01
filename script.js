//Assignment code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  //confirm for types of character inputs
  // call hoisted functions for password length and criteria
  var passwordLength = getPasswordLength();
  var passwordCriteria = getPasswordCriteria();

  //Generate the password based on user criteria
  var password = generatePassword(passwordLength, passwordCriteria);

  // Display the generated password in the text area
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


//prompt the user for the password length
function getPasswordLength() {
  var length;

  while (true) {
    length = prompt("Choose a password length (between 8 and 128 characters):");
    
    if (length === null) {
      alert("Password length is required. Please try again.");
    } else {
      length = parseInt(length); //per js best pratices for correct storage of int
  
      if (!isNaN(length) && length >= 8 && length <= 128) {
        return length;
      } else {
        alert("Invalid length  :( \nPlease choose a password length between 8 and 128 characters.");
      }
    }
  }
}
//confrim all criteria for password
function getPasswordCriteria() {
  var passwordCriteria = {
    includeLowercase: confirm("Include lowercase characters?"),
    includeUppercase: confirm("Include uppercase characters?"),
    includeNumbers: confirm("Include numeric characters?"),
    includeSpecialChars: confirm("Include special characters?"),
  };

  return passwordCriteria;
}


// Function to generate the password
function generatePassword(length, criteria) {
  //declaring string for allowed characters
  var availableChars = "";
  var password = "";

  //add to available chars string the allowed characters
  if (criteria.includeLowercase) {
    availableChars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (criteria.includeUppercase) {
    availableChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (criteria.includeNumbers) {
    availableChars += "0123456789";
  }
  if (criteria.includeSpecialChars) {
    availableChars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  }
  // If no character type is selected, return an empty string
  if (availableChars === "") {
    alert("No character type selected! Please select at least one character type.");
    return "";
  }
//loop to chose and add random chars
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }
  return password;
}

