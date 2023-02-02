const palindromes = function (str) {
//take the string and place it in an array
//reverse the array
//compare the two arrays
//if they are the same return true
const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
const reversedStr = cleanedStr.split('').reverse().join('');
return cleanedStr === reversedStr;

}
// Do not edit below this line
module.exports = palindromes;
