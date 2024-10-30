
// string method

          // /////////////////////////////////ans 1 
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "! Welcome!");

          // /////////////////////////////////ans 2
// var favoritePhone = prompt("Enter your favorite mobile phone model:");
// var inputLength = favoritePhone.length;
// console.log("My favorite phone is: " + favoritePhone + " | Length of string: " + inputLength);


                         // /////////////////////////////////ans 3
// var word = "Pakistani";
// var indexOfN = word.indexOf("n");
// document.write("String: " + word + "<br>Index of 'n': " + indexOfN);

                     // /////////////////////////////////ans 4
// var word = "Hello World";
// var lastIndexOfL = word.lastIndexOf("l");
// document.write("String: " + word + "<br>Last index of 'l': " + lastIndexOfL);

                  // /////////////////////////////////ans 5
// var word = "Pakistani";
// var charAtIndex3 = word.charAt(3);
// document.write("String: " + word + "<br>Character at index 3: " + charAtIndex3);
  
                     /////////////////////////////////ans 6
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName.concat(" ", lastName);
// alert("Hello, " + fullName + "! Welcome!");


                     / /////////////////////////////////ans 7
// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");
// document.write("Original String: " + city + "<br>Replaced String: " + newCity);

                    // /// //////////////////////////////ans 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var updatedMessage = message.replace(/and/g, "&");
// document.write("Original Message: " + message + "<br>Updated Message: " + updatedMessage);

                      // /////////////////////////////////ans 9
// var str = "472";
// var num = Number(str); 
// document.write("Value as String: " + str + " (Type: " + typeof str + ")<br>");
// document.write("Value as Number: " + num + " (Type: " + typeof num + ")");


                 // /////////////////////////////////ans 10
// var userInput = prompt("Enter some text:");
// var upperCaseInput = userInput.toUpperCase();
// document.write("Original Input: " + userInput + "<br>Uppercase Input: " + upperCaseInput);



             // //////////////////////////////////////ans 11


                     // /////////////////////////////////ans 12

// var num = 35.36;
// var numStr = num.toString();
// var numWithoutDot = numStr.replace('.', '');
// document.write("Original Number: " + numStr + "<br>Number without dot: " + numWithoutDot);




                 // /////////////////////////////////ans 13
// function isValidUsername(username) {
//     var specialSymbolPattern = /[@.!]/;
//     return !specialSymbolPattern.test(username);
// }
// var username = prompt("Enter your username:");
// while (!isValidUsername(username)) {
//     username = prompt("Invalid username. Please enter a valid username (no special symbols @, ., !):");
// }
// document.write("Your username is: " + username);


                      // /////////////////////////////////ans 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter the item you want to search for:");
// var searchItem = userInput.toLowerCase();
// var itemFound = false;
// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === searchItem) {
//         itemFound = true;
//         break;  }
// }
// if (itemFound) {
//     document.write("The item '" + userInput + "' is available in the list.");
// } else {
//     document.write("The item '" + userInput + "' is not available in the list.");
// }



                      // /////////////////////////////////ans 15
 

                  // /////       ////////////////////////////ans 16
// var university = "University of Karachi";
// var universityArray = university.split("");
// document.write("Characters in vertical format:<br>");
// for (var i = 0; i < universityArray.length; i++) {
//     document.write(universityArray[i] + "<br>");
// }


                      // /////////////////////////////////ans 17

// var userInput = prompt("Enter something:");
// if (userInput) {
//     var lastCharacter = userInput.charAt(userInput.length - 1);
//     document.write("User input: " + userInput + "<br>");
//     document.write("Last character of input: " + lastCharacter);
// } else {
//     document.write("You did not enter anything.");
// }

                       // /////////////////////////////////ans 18