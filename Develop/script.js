// Assignment code here
const lowCase = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
  "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
const upCase = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
const numerics = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];
const symbols = [
  ' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', '-', '.', '/', ':', ';', 
  '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'
]

function generatePassword() {
  alert("Please continue using the prompts to select the criteria of your password.");
  let choices = [];
  var passwordLimit = prompt(
    "Your can select a minimum password limit of 8 characters and max of 128 characters. Please input the number of characters your password requires.");
  characterLimit();  
    // Set password length between 8 and 128 characters 
    function characterLimit() { 
        if ( 8 <= passwordLimit && passwordLimit <= 128) {
          lowerCase();
        } else {
          alert("You must input a valid numeric value, between 8 and 128.")
          generatePassword();
        }
    function lowerCase() {
        var includeLower = confirm("Would you like to use lowercase lettering in your password?");
        if (includeLower == true) {
          choices = choices.concat(lowCase);
          upperCase();
        } else {
          upperCase();
        }
    };  
    function upperCase() {
      var includeUpper = confirm("Would you like to use uppercase lettering in your password?");
      if (includeUpper == true) {
       choices = choices.concat(upCase);
       numericVal();
      } else {
       numericVal();
      }
    };
// Ask if user would like to use numbers 
    function numericVal() {
      var includeNum = confirm("Would you like to use numbers in your password?");
      if (includeNum == true) {
        choices = choices.concat(numerics);
        specialCharacters();
      } else {
        specialCharacters();
      }
    };
// Ask if user would like to use special characters 
    function specialCharacters() {
      var includeSymbols = confirm("Would you like to use special characters in your password?");
      if (includeSymbols == true) {
        choices = choices.concat(symbols);
      } 
    };

  };
  console.log(choices);
  choicesMade();
  function choicesMade() {
    if (choices === 0) {
    alert("You did not select a character type for your password!")
    generatePassword();
    } 
    else {
      for (i=0; i < passwordLimit; i++) {
        const randomPass = Math.floor(Math.random() * choices.length);
        console.log(choices[randomPass]);
      }
    }   
  };
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