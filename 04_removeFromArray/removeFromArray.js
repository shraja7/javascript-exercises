// const removeFromArray = function(arr, ...args) {
//     //get index of all the args and store in an array
//     let index = [];
//     for (let i = 0; i < args.length; i++) {
//         index.push(arr.indexOf(args[i]));
//     }
//     console.log('indexes of all numbers',index);
//     //with the array of indexes, remove the elements from the array 
//     for(let i=0; i<index.length; i++){
//         if(index[i] !== -1){
//             arr.splice(index[i], 1);
//         }

//         console.log('array after removing', arr)
//         console.log('index array after removing', index)
//     }

// return arr;
// };

// console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4))

//tests failed at remove all values
//new solution using filter method
const removeFromArray = function(arr, ...args) {
const newArr = arr.filter((element) => {
    return !args.includes(element);
}
)
return newArr;
}

console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)  )

// Do not edit below this line
module.exports = removeFromArray;
