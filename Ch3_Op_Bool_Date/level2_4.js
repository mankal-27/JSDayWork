//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

const prompt = require('prompt-sync')();
const RATEPERHOUR = 28
const LenghtForName = 7
var rateCaluclator = function(value, hours){
    return value * hours
}
var hours = prompt("Please Enter Hours for Parking = ")
var parkingFees = rateCaluclator(RATEPERHOUR, hours)
console.log("Parking Fees = ", parkingFees)

var checkLengthOfName = function(name){
    var namelength = name.length
    return namelength > LenghtForName ? 'Name is Long' : 'Name is Short'
}
var compareNameLength = function(firstName, familyName){
    console.log("Firstname ----->>>", firstName.length)
    console.log("familyName ---->>>", familyName.length)
    return firstName.length > familyName.length ? `Your first name, ${firstName} is longer then your family name, ${familyName}` : `Your first name, ${firstName} is shorter then your family name, ${familyName}` 
}
var firstName = prompt("Please Enter Your name = ")
var familyName = prompt("Please Enter Family Name = ")
var nameCheckResult = checkLengthOfName(firstName)
var nameCompareResult = compareNameLength(firstName, familyName)
console.log(`Name Check result is = ${nameCheckResult}`)
console.log(nameCompareResult)