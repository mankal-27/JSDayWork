//Check if the season is Autumn, Winter, Spring or Summer. If the user input is 

const prompt = require('prompt-sync')();

var season = function(seasonValue){
    if(['September', 'October', 'November'].includes(seasonValue)){
        return `The season is Autumn`
    }else if(['December', 'January', 'February'].includes(seasonValue)){
        return `The season is Winter`
    }else if(['March', 'April', 'May'].includes(seasonValue)){
        return `The season is Springe`
    }else if(['June', 'July','August'].includes(seasonValue)){
        return `The season is Springe`
    }
    else{
        return `Please Add Proper Month`
    }
}

var askSeason = prompt("Please Enter the Month = ")
console.log(season(askSeason))