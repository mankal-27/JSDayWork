const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
const prompt = require('prompt-sync')();

var areaOfTrianngle = function(base, height){
    return base * height
}

let base = prompt('Enter Base = ')
let height = prompt('Enter Height = ')
console.log(`Base = ${base} , Height = ${height}`)
console.log(`Area of Triangle For Base ${base} and Height ${height} ==>> ${areaOfTrianngle(base,height)}`)
process.exit(0)