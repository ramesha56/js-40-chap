/////////////////////// Chapters  21 to 40
// string method

          // /////////////////////////////////ans  1 
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "! Welcome!");

          // /////////////////////////////////ans  2
// var favoritePhone = prompt("Enter your favorite mobile phone model:");
// var inputLength = favoritePhone.length;
// console.log("My favorite phone is: " + favoritePhone + " | Length of string: " + inputLength);


                         // /////////////////////////////////ans  3
// var word = "Pakistani";
// var indexOfN = word.indexOf("n");
// document.write("String: " + word + "<br>Index of 'n': " + indexOfN);

                     // /////////////////////////////////ans  4
// var word = "Hello World";
// var lastIndexOfL = word.lastIndexOf("l");
// document.write("String: " + word + "<br>Last index of 'l': " + lastIndexOfL);

                  // /////////////////////////////////ans  5
// var word = "Pakistani";
// var charAtIndex3 = word.charAt(3);
// document.write("String: " + word + "<br>Character at index 3: " + charAtIndex3);
  
                     /////////////////////////////////ans  6
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName.concat(" ", lastName);
// alert("Hello, " + fullName + "! Welcome!");


                     / /////////////////////////////////ans  7
// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");
// document.write("Original String: " + city + "<br>Replaced String: " + newCity);

                    // /// //////////////////////////////ans  8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var updatedMessage = message.replace(/and/g, "&");
// document.write("Original Message: " + message + "<br>Updated Message: " + updatedMessage);

                      // /////////////////////////////////ans  9
// var str = "472";
// var num = Number(str); 
// document.write("Value as String: " + str + " (Type: " + typeof str + ")<br>");
// document.write("Value as Number: " + num + " (Type: " + typeof num + ")");


                 // /////////////////////////////////ans  10
// var userInput = prompt("Enter some text:");
// var upperCaseInput = userInput.toUpperCase();
// document.write("Original Input: " + userInput + "<br>Uppercase Input: " + upperCaseInput);



             // //////////////////////////////////////ans  11


                     // /////////////////////////////////ans  12

// var num = 35.36;
// var numStr = num.toString();
// var numWithoutDot = numStr.replace('.', '');
// document.write("Original Number: " + numStr + "<br>Number without dot: " + numWithoutDot);




                 // /////////////////////////////////ans  13
// function isValidUsername(username) {
//     var specialSymbolPattern = /[@.!]/;
//     return !specialSymbolPattern.test(username);
// }
// var username = prompt("Enter your username:");
// while (!isValidUsername(username)) {
//     username = prompt("Invalid username. Please enter a valid username (no special symbols @, ., !):");
// }
// document.write("Your username is: " + username);


                      // /////////////////////////////////ans  14
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



                      // /////////////////////////////////ans  15
 

                  // /////       ////////////////////////////ans  16
// var university = "University of Karachi";
// var universityArray = university.split("");
// document.write("Characters in vertical format:<br>");
// for (var i = 0; i < universityArray.length; i++) {
//     document.write(universityArray[i] + "<br>");
// }


                      // /////////////////////////////////ans  17

// var userInput = prompt("Enter something:");
// if (userInput) {
//     var lastCharacter = userInput.charAt(userInput.length - 1);
//     document.write("User input: " + userInput + "<br>");
//     document.write("Last character of input: " + lastCharacter);
// } else {
//     document.write("You did not enter anything.");
// }

                       // /////////////////////////////////ans  18
                 
// var text = "The quick brown fox jumps over the lazy dog";
// var lowerCaseText = text.toLowerCase(); 
// var count = 0; 
// var startIndex = 0; 
// while (true) {
//     var index = lowerCaseText.indexOf("the", startIndex);
    
//     if (index === -1) {
//         break;
//     }

//     count++;
//     startIndex = index + 1; 
// }
// document.write("The word 'the' occurs " + count + " times in the given string.");



//MATH METHODS

///////////////////////////////////////////////////ans      1:
// var userInput = prompt("Please enter a positive integer:");

//     var number = parseFloat(userInput);
//     if (number > 0 && !isNaN(number)) {
//         var roundedValue = Math.round(number);
//         var floorValue = Math.floor(number);
//         var ceilValue = Math.ceil(number);

//         document.write("Number: " + number + "<br>");
//         document.write("Rounded Value: " + roundedValue + "<br>");
//         document.write("Floor Value: " + floorValue + "<br>");
//         document.write("Ceil Value: " + ceilValue + "<br>");
//     } else {
//         document.write("Please enter a valid positive integer.");
//     }


///////////////////////////////////////////////////ans      2:
// var userInput = prompt("Please enter a negative floating point number:");

// var number = parseFloat(userInput);
// if (number < 0 && !isNaN(number)) {
//     var roundedValue = Math.round(number);
//     var floorValue = Math.floor(number);
//     var ceilValue = Math.ceil(number);

//     document.write("Number: " + number + "<br>");
//     document.write("Rounded Value: " + roundedValue + "<br>");
//     document.write("Floor Value: " + floorValue + "<br>");
//     document.write("Ceil Value: " + ceilValue + "<br>");
// } else {
//     document.write("Please enter a valid negative floating point number.");
// }



/////////////////////////////////////////////////////ans      3:
// var userInput = prompt("Please enter a number:");
//     var number = parseFloat(userInput);
//     if (!isNaN(number)) {
//         var absoluteValue;

//         if (number < 0) {
//             absoluteValue = -number; 
//         } else {
//             absoluteValue = number; 
//         }
//         document.write("Absolute value of " + number + " is " + absoluteValue);
//     } else {
//         document.write("Please enter a valid number.");
//     }




/////////////////////////////////////////////////////ans      4:

// var diceValue = Math.floor(Math.random() * 6) + 1; 
// document.write("You rolled a " + diceValue);




////////////////////////////////////////////////////////ans      5:
// var randomValue = Math.random(); 
// var coinToss;
// if (randomValue < 0.5) {
//     coinToss = "Heads";
// } else {
//     coinToss = "Tails";
// }
// document.write("Coin Toss Result: " + coinToss);




///////////////////////////////////////////////////////ans      6:
// var randomNumber = Math.floor(Math.random() * 100) + 1; 
// document.write("Random Number: " + randomNumber);


/////////////////////////////////////////////////////////ans      7:
// var userInput = prompt("Please enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
// var weight = parseFloat(userInput);
// if (!isNaN(weight)) {
//     document.write("Your weight is: " + weight + " kg");
// } else {
//     document.write("Please enter a valid weight.");
// }




////////////////////////////////////////////////////////ans      8:
// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userInput = parseInt(prompt("Guess the secret number (between 1 and 10):"));
// if (userInput === secretNumber) {
//     document.write("Congratulations! You guessed the correct number: " + secretNumber);
// } else {
//     document.write("Sorry, the correct number was: " + secretNumber);
// }
 
            //////  Chapters  31 to 34



/////////////////////////////////////////////////////////ans      1:
// document.write(new Date());


//////////////////////////////////////////////////////////ans  2
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentMonth = new Date().getMonth();
// alert(monthNames[currentMonth]);


////////////////////////////////////////////////////////////ans  3
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDay = new Date().getDay();
// alert(dayNames[currentDay]);


////////////////////////////////////////////////////////////ans  4:

// var today = new Date().getDay();
// if (today === 0 || today === 6) {
//   alert("It’s Fun day");
// }


///////////////////////////////////////////////////////////ans  5
// var currentDate = new Date().getDate();
// if (currentDate < 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }



//////////////////////////////////////////////////////ans  6:
// var minutesSince1970 = Math.floor(Date.now() / (1000 * 60));
// alert("Minutes since midnight, Jan. 1, 1970: " + minutesSince1970);



//////////////////////////////////////////////////////ans  7:
// var hours = new Date().getHours();
// if (hours < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }


/////////////////////////////////////////////////////////////ans  8
// var laterDate = new Date(2020, 11, 31); 
// alert("Last day of the last month of 2020: " + laterDate);


////////////////////////////////////////////////////////ans  9:
// var ramadans      tart = new Date(2015, 5, 18); 
// var today = new Date();
// var daysPassed = Math.floor((today - ramadans      tart) / (1000 * 60 * 60 * 24));
// alert("Days since 1st Ramadan (June 18, 2015): " + daysPassed);


/////////////////////////////////////////////////////////ans  10
// var referenceDate = new Date();
// var startOf2015 = new Date(2015, 0, 1); 
// var secondsElapsed = Math.floor((referenceDate - startOf2015) / 1000);
// document.write("Seconds elapsed between Jan 1, 2015, and the reference date: " + secondsElapsed);



//////////////////////////////////////////////////////////////ans  11:
// var currentDate = new Date();
// var hours = currentDate.getHours();
// currentDate.setHours(hours + 1);
// document.write("Date and time an hour ahead: " + currentDate);



///////////////////////////////////////////////////////ans  12
// var date = new Date();
// date.setFullYear(date.getFullYear() - 100);
// alert("Date 100 years back: " + date);


/////////////////////////////////////////////////ans  13:
// var age = prompt("Enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;
// document.write("Your birth year is: " + birthYear);



////////////////////////////////////////////ans  14:
// var customerName = "John Doe";
// var currentMonth = new Date().toLocaleString('default', { month: 'long' });
// var numberOfUnits = 350;
// var chargesPerUnit = 20;
// var netAmountPayable = numberOfUnits * chargesPerUnit;
// var latePaymentSurcharge = 150;
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// document.write("<h1>K-Electric Bill</h1>");
// document.write("Customer Name: " + customerName + "<br>");
// document.write("Current Month: " + currentMonth + "<br>");
// document.write("Number of Units: " + numberOfUnits.toFixed(2) + "<br>");
// document.write("Charges per Unit: " + chargesPerUnit.toFixed(2) + "<br>");
// document.write("Net Amount Payable (within Due Date): " + netAmountPayable.toFixed(2) + "<br>");
// document.write("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2));


///////////////Chapter 35 to 38


///////////////////////////////////////////////ans  1
// function displayDateTime() {
//     var now = new Date();
//     document.write("Current Date and Time: " + now);
//   }
//   displayDateTime();

///////////////////////////////////////////////////ans  2
// function greetUser(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     alert("Hello, " + fullName + "!");
//   }
//   greetUser("Ramesha", "Waseem ul haq");
  


/////////////////////////////////////////////////////ans  3
// function addNumbers() {
//     var num1 = +prompt("Enter the first number:");
//     var num2 = +prompt("Enter the second number:");
//     var sum = num1 + num2;
//     return sum;
//   }
//   alert("The sum is: " + addNumbers());
  

////////////////////////////////////////////////////////ans  4
// function calculator(num1, num2, operator) {
//     var result;
//     switch (operator) {
//       case '+':
//         result = num1 + num2;
//         break;
//       case '-':
//         result = num1 - num2;
//         break;
//       case '*':
//         result = num1 * num2;
//         break;
//       case '/':
//         result = num1 / num2;
//         break;
//       case '%':
//         result = num1 % num2;
//         break;
//       default:
//         result = "Invalid operator";
//     }
//     document.write("Result: " + result);
//   }
//   calculator(10, 5, '+'); 
  


////////////////////////////////////////ans  5
// function square(number) {
//     return number * number;
//   }
//   alert("Square of 5 is: " + square(5)); 
  


////////////////////////////////////////////////ans  6
// function factorial(n) {
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
//   }
//   alert("Factorial of 5 is: " + factorial(5)); 
  


///////////////////////////////////////////////////ans  7
// function displayCounting(start, end) {
//     var result = "";
//     for (var i = start; i <= end; i++) {
//       result += i + " ";
//     }
//     document.write("Counting: " + result);
//   }
//   displayCounting(1, 10); 
  


 

////////////////////////////////////////////////////////////ans  8
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(x) {
//       return x * x;
//     }
//     var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
//     return hypotenuse;
//   }
//   alert("Hypotenuse is: " + calculateHypotenuse(3, 4)); 



///////////////////////////////////////////////////////////ans  9
// function calculateRectangleArea(width, height) {
//     return width * height;
//   }
  
//   var areaFromValues = calculateRectangleArea(5, 10);
//   document.write("Area with values: " + areaFromValues); 
  


////////////////////////////////////////////////////////////ans  10
// function isPalindrome(str) {
//     var cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     var reversedStr = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reversedStr;
//   }
// document.write(isPalindrome("madam")); 
//  document.write(isPalindrome("hello")); 



///////////////////////////////////////////////////////ans  11
// function capitalizeFirstvarterOfEachWord(string) {
//     var words = string.split(' ');
//     var result = '';
  
//     for (var i = 0; i < words.length; i++) {
//       var word = words[i];
//       var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
//       result += capitalizedWord;
      
//       if (i < words.length - 1) {
//         result += ' ';
//       }
//     }
    
//     return result;
//   }
  
//   console.log(capitalizeFirstvarterOfEachWord('the quick brown fox'));

  

// ////////////////////////////////////////////////////////////ans  12
// function findLongestWord(string) {
//     var words = string.split(' ');
//     var longestWord = '';
  
//     for (var i = 0; i < words.length; i++) {
//       if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//       }
//     }
    
//     return longestWord;
//   }
//   console.log(findLongestWord('Web Development Tutorial'));




/////////////////////////////////////////////////////ans  13
// function countvarterOccurrences(string, varter) {
//     var count = 0;
    
//     for (var i = 0; i < string.length; i++) {
//       if (string[i] === varter) {
//         count++;
//       }
//     }
    
//     return count;
//   }
  
//   // Example usage
//  document.write(countvarterOccurrences('JSResourceS.com', 'o')); 
  
  
  




////////////////////////////////////////////////////////ans  14
// function calcArea(radius) {
//     var area = Math.PI * radius * radius;
//     console.log("The area is " + area.toFixed(2));
//   }
  
//   calcArea(5);
 
///////////////////////Chapters 38 to 42



 ////////////////////////////////////////////ans   1
//  function power(a, b) {
//     var result = 1;
//     for (var i = 0; i < b; i++) {
//       result *= a;
//     }
//     return result;
//   }
  
// document.write(power(2, 3)); 
  

////////////////////////////////////////////ans  2

// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
//   }
//   console.log(isLeapYear(2024));
//   console.log(isLeapYear(2023)); 
  


//////////////////////////////////////////////////ans  3
// function calculateS(a, b, c) {
//     return (a + b + c) / 2;
//   }
  
//   function calculateTriangleArea(a, b, c) {
//     var s = calculateS(a, b, c);
//     var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
//   }
  
//   console.log(calculateTriangleArea(3, 4, 5)); 


///////////////////////////////////////////////ans  4
// function calculateAverage(marks) {
//     var total = marks.reduce((sum, mark) => sum + mark, 0);
//     return total / marks.length;
//   }
  
//   function calculatePercentage(marks) {
//     var total = marks.reduce((sum, mark) => sum + mark, 0);
//     return (total / (marks.length * 100)) * 100;
//   }
  
//   function mainFunction(marks) {
//     var average = calculateAverage(marks);
//     var percentage = calculatePercentage(marks);
  
//     console.log("Average:", average);
//     console.log("Percentage:", percentage + "%");
//   }
  
//   mainFunction([75, 80, 90]); 
  


////////////////////////////////////////////////ans  5
// function customIndexOf(string, char) {
//     for (var i = 0; i < string.length; i++) {
//       if (string[i] === char) {
//         return i;
//       }
//     }
//     return -1;
//   }
  

//   console.log(customIndexOf("JavaScript", "S")); 
//   console.log(customIndexOf("JavaScript", "z")); 
  

/////////////////////////////////////////////////ans  6

// function removeVowels(sentence) {
//     return sentence.replace(/[aeiouAEIOU]/g, "");
//   }
  
//   console.log(removeVowels("Hello World")); 
  


////////////////////////////////////////////////ans  7
// function countSuccessiveVowels(sentence) {
//     var count = 0;
//     var vowels = "aeiouAEIOU";
  
//     for (var i = 0; i < sentence.length - 1; i++) {
//       var currentChar = sentence[i];
//       var nextChar = sentence[i + 1];
  
//       switch (currentChar) {
//         case 'a': case 'e': case 'i': case 'o': case 'u':
//         case 'A': case 'E': case 'I': case 'O': case 'U':
//           if (vowels.includes(nextChar)) {
//             count++;
//           }
//           break;
//       }
//     }
  
//     return count;
//   }

//   console.log(countSuccessiveVowels("Pleased to meet you")); 

///////////////////////////////////////////////ans  8

// function convertToMeters(distanceKm) {
//     return distanceKm * 1000;
//   }
  
//   function convertToFeet(distanceKm) {
//     return distanceKm * 3280.84;
//   }
  
//   // Function to convert kilometers to inches
//   function convertToInches(distanceKm) {
//     return distanceKm * 39370.1;
//   }
  
//   // Function to convert kilometers to centimeters
//   function convertToCentimeters(distanceKm) {
//     return distanceKm * 100000;
//   }
  

//   var distanceKm = 5; 
//   console.log("Distance in meters:", convertToMeters(distanceKm));
//   console.log("Distance in feet:", convertToFeet(distanceKm));
//   console.log("Distance in inches:", convertToInches(distanceKm));
//   console.log("Distance in centimeters:", convertToCentimeters(distanceKm));
  


  
/////////////////////////////////////////////ans  9
// function calculateOvertimePay(hoursWorked) {
//     var overtimeHours = hoursWorked - 40;
//     var overtimePay = 0;
  
//     if (overtimeHours > 0) {
//       overtimePay = overtimeHours * 12;
//     }
  
//     return overtimePay;
//   }
  
//   var hoursWorked = 45; 
//   console.log("Overtime Pay: Rs.", calculateOvertimePay(hoursWorked)); 
  



//////////////////////////////////////ans  10
// function calculateCurrencyNotes(amount) {
//     var hundreds = Math.floor(amount / 100);
//     amount %= 100;
  
//     var fifties = Math.floor(amount / 50);
//     amount %= 50;
  
//     var tens = Math.floor(amount / 10);
    
//     return { hundreds, fifties, tens };
//   }
  

//   var amount = 880; 
//   var notes = calculateCurrencyNotes(amount);
//   console.log("100s:", notes.hundreds);
//   console.log("50s:", notes.fifties);
//   console.log("10s:", notes.tens);
  

  

  
