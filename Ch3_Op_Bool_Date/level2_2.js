//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
const prompt = require('prompt-sync')();
const PI = 3.14;
var areaOfCircle = function(radius){
    return 2 * PI * radius
}

var radius = prompt("Please Enter Radius = ")
var circle = areaOfCircle(radius)
console.log(`Area of Circle for Radius ${radius} = ${circle}`)
process.exit(0)