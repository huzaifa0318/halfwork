// task Completed
// var num1 = parseFloat(prompt("Enter the first number:"));
//     var num2 = parseFloat(prompt("Enter the second number:"));

    
//     var additionResult = num1 + num2;

   
//     var subtractionResult = num1 - num2;

   
//     var multiplicationResult = num1 * num2;

   
//     var divisionResult = num1 / num2;

  
//     var modulusResult = num1 % num2;

   
//     document.write("Addition Result: " + num1 + " + " + num2 + " = " + additionResult + "<br>");
//     document.write("Subtraction Result: " + num1 + " - " + num2 + " = " + subtractionResult + "<br>");
//     document.write("Multiplication Result: " + num1 + " * " + num2 + " = " + multiplicationResult + "<br>");
//     document.write("Division Result: " + num1 + " / " + num2 + " = " + divisionResult + "<br>");
//     document.write("Modulus Result: " + num1 + " % " + num2 + " = " + modulusResult + "<br>");


// task: 03


// var myVariable;


// document.write("Value after variable declaration is: " + myVariable + "<br>");

// myVariable = 7;

// document.write("Initial value: " + myVariable + "<br>");

// myVariable++;

// document.write("Value after increment is: " + myVariable + "<br>");

// myVariable += 7;

// document.write("Value after addition is: " + myVariable + "<br>");

// myVariable--;

// document.write("Value after decrement is: " + myVariable + "<br>");

// var remainder = myVariable % 3;

// document.write("The remainder is: " + remainder);


// task:04

// var ticketPrice = 600;

// var numTickets = 5;

// var totalCost = ticketPrice * numTickets;

// document.write("The cost of buying " + numTickets + " tickets is " + totalCost + " PKR.");


// task:05

// var number = 7;

// document.write("<h2>Multiplication Table of " + number + "</h2>");

// for (var i = 1; i <= 10; i++) {
//   var result = number * i;
//   document.write(number + " x " + i + " = " + result + "<br>" );
// }


// task :06
// var celsiusTemp = 28;

// var fahrenheitTemp = (celsiusTemp * 9/5) + 32;

// document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F<br>");

// var fahrenheitTemp2 = 82;

// var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;

// document.write(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C");


// task: 07
// var item1Price = 650;

// var item2Price = 100;

// var item1Quantity = 3;

// var item2Quantity = 7;

// var shippingCharges = 100;

// var subtotal = (item1Price * item1Quantity) + (item2Price * item2Quantity);

// var totalCost = subtotal + shippingCharges;

// document.write("<h2>Receipt</h2>");
// document.write("Price of Item 1: " + item1Price + " <br>");
// document.write("Price of Item 2: " + item2Price + " <br>");
// document.write("Ordered Quantity of Item 1: " + item1Quantity + "<br>");
// document.write("Ordered Quantity of Item 2: " + item2Quantity + "<br>");
// document.write("Shipping Charges: " + shippingCharges + " <br>");
// document.write("<br/>")
// document.write("Total Cost of your Oder  " + totalCost + " PKR");

// task: 08

// var totalMarks = 980;

// var marksObtained = 804;

// var percentage = (marksObtained / totalMarks) * 100;

// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Obtained Marks: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage + "%");

// task: 09

// var usdToPkr = 104.80;
// var sarToPkr = 28;

// var usdAmount = 10;

// var sarAmount = 25;

// var pkrAmount = (usdAmount * usdToPkr) + (sarAmount * sarToPkr);
// document.write("<h2> Currency in PKR:</h2>")
// // document.write("Total amount in US dollars: $" + usdAmount + "<br>");
// // document.write("Total amount in Saudi Riyals: " + sarAmount + " SAR<br>");
// document.write("Total currency in PKR: " + pkrAmount.toFixed(2) + " PKR");

// task: 10
// var number = 7;
// var result = ((number + 5) * 10) / 2;
// document.write("The result is: " + result);

// task: 11
// var currentYear = 2023;
// var birthYear = 2002;
// var age1 = currentYear - birthYear;

// document.write("Current Year:" +currentYear + "<br>")
// document.write("Birth Year:" +birthYear + "<br>" + "<br/>")

// document.write("Your Age is :" + age1);

// // task:12
// var radius = 20;
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * radius * radius;
// document.write("The radius is:" + radius + "<br>")
// document.write("The circumference is " + circumference+ "<br>");
// document.write("The area is " + area);


// // task:13

var favoriteSnack = "chocolate chip";
var currentAge = 15;
var maximumAge = 65;
var amountPerDay = 3;
var yearsRemaining = maximumAge - currentAge;
var daysRemaining = yearsRemaining * 365;
var totalAmountNeeded = daysRemaining * amountPerDay;
document.write("Favourite snak :" + favoriteSnack + "<br>")
document.write("Current Age  :" + currentAge + "<br>")
document.write("Estimated Maximum Age :" + maximumAge + "<br>")
document.write("Amount of snaks per Day :" + amountPerDay + "<br>")

document.write("You will need " + totalAmountNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".");

