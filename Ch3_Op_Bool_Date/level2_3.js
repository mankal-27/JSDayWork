//Calculate the slope, x-intercept and y-intercept of y = 2x -2

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
const prompt = require('prompt-sync')();

var slope1 = function(x){
    return (2*x - 2)
}
var slope2 = function(x1, x2, y1, y2){
    return ((y2-y1) / (x2-x1))
}
var x = prompt("Please Enter X = ")
var x1 = prompt("Please Enter X1 = ")
var x2 = prompt("Please Enter x2 = ")
var y1 = prompt("Please Enter y1 = ")
var y2 = prompt("Please Enter y2 = ")
var result1 = slope1(x)
var result2 = slope2(x1,x2,y1,y2)
console.log(`Slope1 = ${result1}`)
console.log(`Slope2 = ${result2}`)
console.log(`Is Slope1 equal Slope2`, result1 == result2)
process.exit(0)