//Chapter 21-25                                                                        

//1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// let firstName= prompt('Enter your First Name');
// let lastName= prompt('Enter your Last Name');
// alert(`Welcome, ${firstName} ${lastName}!`);

//2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

// let phoneModel= prompt('What is your favorite Phone model?');
// let length= phoneModel.length;
// alert("My Favorite Phone is: "+phoneModel+ "\n" +"Length of Sting: "+length);

//3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

// let nationality= "Pakistani";
// let index= nationality.indexOf("n");
// alert(`Sting: "${nationality}" \nIndex of "n" is: ${index}`);

//4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// let hello= "Hello World";
// let index= hello.lastIndexOf("l");
// alert(`Sting: "${hello}" \nIndex of "l" is: ${index}`);

//5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// let national= "Pakistani";
// let character = national.charAt(3);
// alert(`Sting: "${national}" \nCharacter at Index "3" is: ${character}`);

//6. Repeat Q1 using string concat() method.

// let firstName1= prompt("Please enter your first name:");
// let lastName1= prompt("Please enter your last name:");
// let fullName= firstName.concat(" ", lastName1);
// alert(`Welcome, ${fullName}!`);

//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// let cityName = "Hyderabad";
// let newCityName = cityName.replace("Hyder", "Islam");
// alert(`City: "${cityName}" \nAfter Replacement: "${newCityName}"`);

//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;


// let message= "Ali and Sami are best friends. They play cricket and football together.";
// let newMessage= message.replace(/and/g, "&");
// alert(`Message= "${newMessage}"`);

//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// let strgNum = "472";
// let convertedNum = Number(strgNum);
// alert(`Value: ${strgNum}\nType: ${typeof strgNum} \nValue: ${convertedNum}\nType: ${typeof convertedNum}`);

//10. Write a program that takes user input. Convert and show the input in capital letters.

// let yourNam= prompt('Enter Your Name:');
// let upperCaseName= yourNam.toUpperCase();
// alert(`Welcome: ${upperCaseName}!`);

//11. Write a program that takes user input. Convert and show the input in title case.

// function toTitleCase(str){
//     let words = str.toLowerCase().split(" ");
//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");
//   }

// let title= prompt('Write any title here:');
// let titleCase= toTitleCase(title);
// alert(`User Input: ${title}\nTitle Case: ${titleCase}.`);

//12. Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser.

// let num2= 35.36;
// let numToStrg= num2.toString().replace(".", "");
// alert(`Input Number: ${num2}\nResult: ${numToStrg}`);

//13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .

// let userName = prompt("Enter your Username:");
// if (userName.indexOf('@') == -1 && userName.indexOf('.') == -1 && userName.indexOf(',') == -1 && userName.indexOf('!') == -1) {
//   alert("Username is valid!");
// } else {
//   alert("Please enter a valid Username!");
// };

//14. You have an array
// -A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// -Write a program to enable “search by user input” in an
// -array. After searching, prompt the user whether the given
// -item is found in the list or not.
// -Note: Perform case insensitive search. Whether the user
// -enters cookie, Cookie, COOKIE or coOkIE, program
// -should inform about its availability. Example:

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Welcome! to XYZ Bakery, What you wanted to order?"); // get user input

// let isFound = false; // flag to indicate whether item is found or not
// for (var i = 0; i < A.length; i++) {
//   if (userInput.toLowerCase() === A[i].toLowerCase()) {
//     isFound = true;
//     break;
//   }
// };

// if (isFound) {
//   alert(userInput + " is available at index " + i + " in the Bakery!.");
// } else {
//   alert(userInput + " is not available in the our Bakery!.");
// };

//15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.


// let pass= prompt("Enter a password:");

// if (/^[a-zA-Z][a-zA-Z0-9]{5,}$/.test(pass)) {
//   alert("Password is Valid!");
// } else {
//   alert(`User input password: ${pass}\nPlease enter a valid password that contains alphabets and numbers,does not contain special character, does not start with a number, and is at least 6 characters long.\nThankyou!`);
// };

// 16. Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// let uni= "UNIVERSITY OF KARACHI!";
// let arr = uni.split("");

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] === " ") {
//     document.write("<br>");
//   } else {
//     document.write(arr[i] + "<br>");
//   }
// }

//17. Write a program to display the last character of a user input.

// let inp = prompt("Enter a string:");
// let lastChar = inp.charAt(inp.length-1);

// alert(`User Input: ${inp}\nLast Character of Input: ${lastChar}`);

//18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

// let str = "The quick brown Fox jumps over the lazy Dog.";
// let count = 0;

// str.split(" ").forEach(function(word) {
//   if (word.toLowerCase() === "the") {
//     count++;
//   }
// });

// alert(`Text: ${str}\nThere are '${count}' occurance of word 'the'`);












