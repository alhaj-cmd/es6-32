// 1 let & const
const hobu = 'so sad';
let baby = 'i am happy';
baby = 'so happy';
// 2 defult paramiter
// spreed operator or 3(... dots )
function Maxnum(array=[]) {
    const Max = Math.Max(...array);
    return Max;
}
const number ='no problem';
console.log(number);
// templete string
const pappa =`i love my grandmother ${baby} for that `
console.log(pappa);
// arrow function
function square(z){
    return z*z;
}
// same  arrow function
// const square =x => x*x;
 console.log(square(8))