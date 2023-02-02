const fibonacci = function(num) {
//perform the fibonacci sequence up to the number given
//return the number at the given index
//if the number is negative, return "OOPS"
if(num < 0){
    return "OOPS";
}else if(typeof num === 'string'){
    num = parseInt(num)
}
for(let i= 0; i < num; i++){
  if(num === 0){
        return 0;
    }else if(num === 1){
        return 1;
    }else{
        let number = num +1;
        let sequence = [0, 1];
        for (let i = 2; i < number; i++) {
          sequence[i] = sequence[i - 1] + sequence[i - 2];
        }
        let result = sequence.slice(0,number)
        return result[result.length-1]


    }
}



}
console.log(fibonacci('4'))


// Do not edit below this line
module.exports = fibonacci;
