//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
var challenge = '30 Days Of JavaScript'
console.log("Challenge Variable =>>>", challenge)
console.log("Challenge Variable length =>>", challenge.length)
console.log("Challenge Variable UpperCase ==>>", challenge.toUpperCase())
console.log("Challenge Variable UpperCase ==>>", challenge.toLowerCase())
console.log("Cut (slice) out the first word of the string ==>", challenge.substring(0, challenge.length))
console.log("Cut (slice) out the first word of the string ==>", challenge.substring(0, 1))
console.log("Cut (slice) out the first word of the string ==>", challenge.includes('Script'))
console.log("Cut (slice) out the first word of the string ==>", challenge.split())



let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
sentence = sentence.replace(/%/g,"")
sentence  =sentence.replace(/@/g, "")
sentence = sentence.replace(/\$/g, "")
sentence = sentence.replace(/&/g, "")
sentence = sentence.replace(/#/g, "")
sentence = sentence.replace(/;/g, "")
sentence = sentence.replace(/,/g, "")
sentence = sentence.replace(/\./g, "")
console.log(sentence)