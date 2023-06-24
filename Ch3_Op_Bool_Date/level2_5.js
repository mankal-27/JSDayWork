//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
const prompt = require('prompt-sync')();
let date = new Date()
var ageComparision = function(age1, age2){
    
    let diff = age1 - age2
    let result = Math.sign(diff)
    switch (result) {
        case 1:
            return `I am ${diff} year older than you`
            break;
        case -1:
            return `I am ${Math.abs(diff)} year's younger than you`
    
        default:
            return `We are equal age`
            break;
    }
}

var above18Age = function(year){
    var yearDiff = Math.abs(date.getFullYear() - year)
    return yearDiff >= 18 ? `You are ${yearDiff}. You are old enough to drive ` : `You are ${yearDiff}. You will be allowed to drive after ${18 - yearDiff } year`
}


var myAge = prompt("Please Enter Myage = ")
var myAgeYOB = prompt("Please Enter Year of Birth = ")
var yourAge = prompt("Please Enter Your Age = ")
var result = ageComparision(myAge, yourAge)
var driveAge = above18Age(myAgeYOB)
console.log(result)
console.log(driveAge)