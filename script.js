// Assignment Code
var numbers = ["1", "2", "3"];
var numbers = ["1", "2", "3"];
var numbers = ["1", "2", "3"];
var numbers = ["1", "2", "3"];

//creating a reference to a generate button on html with the variable name generation
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function is writePassword
function writePassword() {
  //creates variable "password" and sets it equal to the return function called return "generatePassword"
  var password = generatePassword();
  // create variable "password text" with function grabbing "id=password" in html
  var passwordText = document.querySelector("#password");
// setting q value to password 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Phase 1
//Create a variable and get the info we need
//confirm user for upper/lower case (CONFIRM yes? no?)
//confirm if user would like to user numbers
//if yes to numbers: add the numbers to availbleChars
//Create a pool of available characters(lowercase/uppercase/numbers/ special chars 
// all are yes/no expect for length 
//think about edge cases for bad inputs.

//phase 2
//what values do we need to track?
//create  password var that is an empty string
//create a for loop that runs length a number of times
//in for loop need to upend this character to our password


//for loop algo

//create a random number between zero and length of our available poor char types array dependiong on what user chooses 
// select 1 elemnt from array of availblechars at index random number we can generate
//var newChar = availablechars[randomNum]
//append this new element to our password variable
// RETURN password we just created