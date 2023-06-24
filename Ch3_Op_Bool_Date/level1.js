//1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

var firstName = "Manjunath"
var lastName = "kal"
var country = "India"
var city = "Bangalore"
var age = 32
var isMarried = true
var year = 2023

console.log('Checking Type of Each Variable')
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

//Check if type of '10' is equal to 10
console.log("Is 10 is equal to 10 ", 10 == 10)
console.log("Check if parseInt('9.8') is equal to 10", 9.8 == 10)

//Find the length of python and jargon and make a falsy comparison statement.4
var python = "python"
var jargon = "jargon"
console.log("Length Comparison ", python.length === jargon.length)

//What is the year today?
//What is the month today as a number?
//What is the date today?
//What is the day today as a number?
//What is the hours now?
//What is the minutes now?
//Find out the numbers of seconds elapsed from January 1, 1970 to now.
var todayDate = new Date()
var DiffDate = new Date(1970, 1 , 1)
console.log("Year is ", todayDate.getFullYear())
console.log("Month is ", todayDate.getMonth())
console.log("Date is ", todayDate.getDate())
console.log("Day is ", todayDate.getDay())
console.log("Hour is ", todayDate.getHours())
console.log("Minutes is ", todayDate.getMinutes())
console.log("Year Difference ", todayDate - DiffDate)