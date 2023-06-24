//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
const prompt = require('prompt-sync')();

var areaOfRectangle = function(length, width){
    return length * width
}
var perimeterOfRectangle = function(length, width){
    return 2 * (length + width)
}

var length = prompt("Enter The length = ")
var width = prompt("Enter The Width = ")
var area = areaOfRectangle(length, width)
var perimeter = perimeterOfRectangle(length, width)
console.log(`For Lenght ${length} and Width ${width} Area Of Rectangle = ${area} And Perimeter Of Rectangle is ${perimeter}`)
process.exit(0)