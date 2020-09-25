
// declare global variables
var userLength = 0;


//------declare arrays--------
var upLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", 
"R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", 
"r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialChar= ["!","#","$", "%", "&"]

//--------- prompt users to confirm what password criteria they would like to use--------
function criteriaNeeded() { 
    userLength=parseInt(prompt("How long do you want your password to be? Please choose between 8-128."));
      if (userLength >= 8 || passwordLength <= 128){
        var userUpLetter=confirm("Would you like to use upper case letters?");
        var userLowLetters=confirm("Would you like to lower case letters?");
        var userNumbers=confirm("Would you like to use numbers?");
        var userSpecialChar=confirm("Would you like to use special characters?"); 
      }
      else{
        return 
      }
      

      if (!userLowLetters && !userUpLetter && !userNumbers && !userSpecialChar){
        alert("You must choose at least one password criteria.");
      }
      else{
        return
      }
      // Object to hold key value pairs
      var passwordOptions = {
        userLowLetters : userLowLetters,
        userLength : userLength,
        userNumbers : userNumbers,
        userSpecialChar : userSpecialChar,
        userUpLetter : userUpLetter,
      }
      return passwordOptions
      
    
    }
    
  criteriaNeeded();

    function getRandom(arr) {
      var randIndex = Math.floor(Math.random() * arr.length);
      return arr[randIndex]
    }
    
      
    // --------generate Password------
      function generatePassword(){
        var result = []
        var possibleCharacters = []
        var guaranteedCharacters = []
        var options = criteriaNeeded()


        if (options.userLowLetters) {
          possibleCharacters = possibleCharacters.concat(lowLetters)
          guaranteedCharacters.push(getRandom(lowLetters))
        }
        if (options.userNumbers) {
          possibleCharacters = possibleCharacters.concat(numbers)
          guaranteedCharacters.push(getRandom(numbers))
        }
        if (options.userUpLetter) {
          possibleCharacters = possibleCharacters.concat(upLetters)
          guaranteedCharacters.push(getRandom(upLetters))
        }
        if (options.userSpecialChar) {
          possibleCharacters = possibleCharacters.concat(specialChar)
          guaranteedCharacters.push(getRandom(specialChar))
        }
        

        for (var i=0; i < options.userLength; i++) {
          result.push(getRandom(possibleCharacters))
        }
        for (var i=0; i < guaranteedCharacters.length; i++){
          result[i] = guaranteedCharacters[i]
        }
        return result.join("")
      }
      


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