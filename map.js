// multiple used in map system

//const friends =['situ', 'alhaj', 'ali']
// const flength =friends.map(fnd=>fnd.length)
// console.log(flength);

// or

//friends.forEach(fnd=>console.log(fnd));
// step-3
const unicqs = unicq=>unicq*2
// step-1
const numbers =[2, 4, 6, 8, 9, 10, 72, 42, 50]
const output =[];
for (const number of numbers){
//const result = number*2; 
// or
const result =unicqs(number)

output.push(result)
}
//console.log(output)
// step-2
// function doubleold(num){
//     return(num*2);
// }

// step 4
// const outputs=numbers.map(unicqs);
// console.log(outputs)

// step 5
const square =numbers.map(x=>x*2);
console.log(square);