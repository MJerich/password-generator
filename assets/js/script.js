// Assignment code here
// assign character set variables
const lowerCaseSet = 'abcdefghijklmnopqrstuvwxyz'
const upperCaseSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numberCharsSet = '0123456789'
const specialCharsSet = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
// function to check for a valid length
function validLength(x) {
  return x >= 8 && x <= 128;
};

// function to generate the password
function generatePassword() {
  // find the desired password length
  let passwordLength = window.prompt('Your password can be 8-128 characters long. How long would you like it to be?')

  charSet = ""
  
  // turn the password lenght into and integer and round to the nearest whole number
  passwordLength = parseInt(Math.round(passwordLength));
  // if statement to continue if lenght is valid
  if (validLength(passwordLength)) {
    // make boolean variables for character types wanted
    let lowerCase = window.confirm('Do you want lowercase characters?');
    let upperCase = window.confirm('Do you want UPPERCASE characters?');
    let numberChars = window.confirm('Do you want numbers?');
    let specialChars = window.confirm('Do you want special characters?');

    // if staements to check what types the user picked
    if (lowerCase) {
      charSet += lowerCaseSet
    };
    if (upperCase) {
      charSet += upperCaseSet
    };
    if (numberChars) {
      charSet += numberCharsSet
    };
    if (specialChars) {
      charSet += specialCharsSet
    };
    if (charSet === "") {
      window.alert("You must choose atleast one chracter type")
      generatePassword();
    };
    // generate the password with users selections
    var length = passwordLength,
        finalPassword = "";
    for (var i = 0, n = charSet.length; i < length; ++i) {
      finalPassword += charSet.charAt(Math.floor(Math.random() * n));
    }
    return finalPassword;
  } 
  else {
      window.alert("that is not a number.");
      generatePassword();
  }
  // generate the password with users selections
  var length = passwordLength,
      finalPassword = "";
  for (var i = 0, n = charSet.length; i < length; ++i) {
    finalPassword += charSet.charAt(Math.floor(Math.random() * n));
  }
  return finalPassword;
};

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
