//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

const prompt = require('prompt-sync')();

var comparissonByIfStatement = function(a, b){
    if(a>b){
        return `a is greater than b`
    }else{
        return `a is less than b`
    }
}

var comparissonByTernary = function(a, b){
    return a > b ? `a is greater than b` : `a is less than b`
}

var value1 = prompt("Please Enter a = ")
var value2 = prompt("Please Enter b = ")
console.log("Comparision By IF Condition ", comparissonByIfStatement(value1, value2))
console.log("Comparision By Terenary Condition ", comparissonByTernary(value1, value2))