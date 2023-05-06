// task 01

var age = 22;


alert("My age is: " + age);


// task 3
var birthYear = 2002;


var currentYear = new Date().getFullYear();
var age = currentYear - birthYear;


document.write("My birth year is " + birthYear + ".<br>");
document.write("This means I am either " + (age - 1) + " or " + age + " years old." +".<br>"+".<br>");


// task:04
var visitorName = "Imran khan";
var productTitle = "T-shirt";
var quantity = 5;


document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");