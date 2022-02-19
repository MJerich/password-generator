// Assignment code here
// function to check for a valid length
function validLength(x) {
  return x >= 8 && x <= 128;
};

// function to generate the password
function generatePassword() {
  // find the desired password length
  let passwordLength = window.prompt('Your password can be 8-128 characters long. How long would you like it to be?')
  
  // turn the password lenght into and integer and round to the nearest whole number
  passwordLength = parseInt(Math.round(passwordLength));
  // if statement to continue if lenght is valid
  if (validLength(passwordLength)) {
    // make boolean variables for character types wanted
    let lowerCase = window.confirm('Do you want lowercase characters?');
    let upperCase = window.confirm('Do you want UPPERCASE characters?');
    let numberChars = window.confirm('Do you want numbers?');
    let specialChars = window.confirm('Do you want special characters?');
    if (!lowerCase && !upperCase && !numberChars && !specialChars) {
      console.log('all false')
    } else {
      console.log('NOT all false')
    }
  } else {
    window.alert("that is not a valid number");
    generatePassword();
  }

  let secretCode = 'sUpeRsEcReTpAsSwOrD'
  return secretCode
}

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
