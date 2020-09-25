
// declare global variables

var userLength = 0;
var userSpecialChar;
var userNumbers;
var userUpLetter;
var userLowLetters;

//------declare arrays--------
var upLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", 
"R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", 
"r", "s", "t", "u", "v", "w", "x", "y", "z"]
numbers =["1", "2", "3", "4", "5", "6", "7", "8", "9"]
specialChar= ["!","#","$", "%", "&"]

//--------- prompt users to confirm what password criteria they would like to use--------
function dataNeeded(){ 
    userLength=parseInt(prompt("How long do you want your password to be? Please choose between 8-128."));
      if (userLength >= 8 && passwordLength <= 128){
        userUpLetter=confirm("Would you like to use upper case letters?");
        userLowLetters=confirm("Would you like to lower case letters?");
        userNumbers=confirm("Would you like to use numbers?");
        userSpecialChar=confirm("Would you like to use special characters?");
          generatePassword();
      }
        while (userLowLetters === false && userUpLetters === false && userNumbers === false && userSpecialChar === false){
            alert("You must choose at least one password criteria.")
            
          }

      }
    // --------generate Password------
      function generatePassword(){
        writePassword();
      }
      function writePassword(){

      }


    //------- execution-----
      console.log(userLength)
      console.log(userLowLetters)
      console.log(userNumbers)
      console.log(userSpecialChar)
      console.log(userUpLetter)
      
         
dataNeeded();
