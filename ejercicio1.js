let array = [45, 25, 63, 58];
// let num = 2;
function numberInArray (num,array) {
let isInArray= false;
for (let i = 0; i <= array.length; i++) {
    let a = array[i];
    if (num == a) {
        isInArray = true;
         }
} return isInArray;
}
 
console.log(numberInArray(12, array));

//node ejercicio1.js