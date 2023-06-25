//Grade Student

const prompt = require('prompt-sync')();

var grading = function(grade){
    if(grade >= 80 && grade <= 100){
        return "A"
    }else if(grade >= 70 && grade <= 79 ){
        return "B"
    }else if(grade >= 60 && grade <= 69){
        return "C"
    }else if(grade >= 50 && grade <= 59){
        return "D"
    }else{
        return "F"
    }
}

var MarksScored = prompt("Please Enter The Grade = ")
console.log("Grades for The MarksScored  = ", grading(MarksScored))