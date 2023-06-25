const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//Sort the array and find the min and max age
console.log("Age Before Sort  ", ages)
var sortAges = ages.sort((a,b) => a-b)
console.log("SortedValue---", sortAges)
var middleValue = sortAges[(sortAges.length - 1)/2]
console.log("MiddleValue = ", middleValue)

var average = function(array){
    var add = 0
    array.forEach(element => {
        add += element
    });
    return add
}

var findAverage = average(sortAges) / sortAges.length
console.log("Average = ", findAverage)
var MinValue = sortAges[0]
var MaxValue = sortAges[sortAges.length - 1]
console.log(`Range of the age are  MaxValue ${MaxValue} And MinValue ${MinValue}`)
var minAvaergae = Math.abs(MinValue - findAverage)
var maxAverage = Math.abs(MaxValue - findAverage)
console.log(`Minaverage ${minAvaergae} and Maxaverage ${maxAverage}`)