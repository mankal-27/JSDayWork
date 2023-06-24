//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let sentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.' 
let arr=sentence.match(/\d+/g) 
let sum=0 
for(let index=0 ;index<arr.length;index++){
   sum=sum+parseInt(arr[index])
} 
console.log(sum)