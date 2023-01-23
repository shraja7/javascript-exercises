const sumAll = function(...args) {
    //get the args and store in an array
    let argsArr = Array.from(args);
    //check if the args are numbers
    for(let i=0; i<argsArr.length; i++){
        if(typeof argsArr[i] !== 'number'){
            return 'ERROR';
        }
    }
    //check if the args are negative
    for(let i=0; i<argsArr.length; i++){
        if(argsArr[i] < 0){
            return 'ERROR';
        }
    }
    //check if the args are integers
    for(let i=0; i<argsArr.length; i++){
        if(!Number.isInteger(argsArr[i])){
            return 'ERROR';
        }
    }
    //find the mix and max
    let min = Math.min(...argsArr);
    let max = Math.max(...argsArr);
    console.log('min', min);
    console.log('max', max);
let sum =0;
for(let i=max; i>=min; i--){
    sum += i;
}
return sum;
};
console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
