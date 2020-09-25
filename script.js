

var userLength = "";
var userSpecialChar= "";
var userNumbers= "";
var userUpLetter= "";
var userLowLetters= "";

var upLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", 
"R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", 
"r", "s", "t", "u", "v", "w", "x", "y", "z"]
numbers =["1", "2", "3", "4", "5", "6", "7", "8", "9"]
specialChar= ["!","#","$", "%", "&"]

function dataNeeded { 
    var userLength = prompt("How long do you want your password to be? Please choose between 8-128.");
      if (userLength >= 8 && passwordLength <= 128){
        var userUpLetter = prompt("What upper case letter would you like to choose?");
      }if (userUpLetter === upLetters){
         var userLowLetters = prompt("What lower case letter would you like to choose?");
      }if(userLowLetters === lowLetters){
         var userNumbers = prompt("What number would you like to choose? 1-9");
      }if(userNumbers === numbers){
          var userSpecialChar = prompt("what special character would you like to choose?Out of !, #, $, %, &");
      }if (userSpecialChar === specialChar){
          alert("Awesome, generating your random password now!");
      } else {
        prompt("Sorry, you did not choose the right characters. Please refresh the page and start over.")
      }
    
      console.log(confirmLength)
      console.log(confirmLowLetters)
      console.log(confirmNumbers)
      console.log(confirmSpecialChar)
      console.log(confirmUpLetter)
      
      }    
    