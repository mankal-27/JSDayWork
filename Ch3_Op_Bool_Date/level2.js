const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
const prompt = require('prompt-sync')();

var areaOfTrianngle = function(base, height){
    return base * height
}

var perimeterOfTrangle = function(a,b,c){
    return a + b + c
}
let base = prompt('Enter Base = ')
let height = prompt('Enter Height = ')
let SideA = prompt("Enter Side A = ")
let SideB = prompt("Enter Side B = ")
let SideC = prompt("Enter Side C = ")
console.log(`Base = ${base} , Height = ${height}`)
console.log(`Side A = ${SideA}, Side B = ${SideB} , Side C = ${SideC}`)
console.log(`Perimeter Of Triangle For Side A  ${SideA}, Side B  ${SideB} , Side C  ${SideC} = ${perimeterOfTrangle(SideA,SideB,SideC)}`)
console.log(`Area of Triangle For Base ${base} and Height ${height} ==>> ${areaOfTrianngle(base,height)}`)


process.exit(0)