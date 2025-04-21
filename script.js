//1

function clearVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let str1 = '';
    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i].toLowerCase())) {
            str1 += str[i];
        }
    }
    return str1;
}

console.log(clearVowels("I have never seen a thin person drinking Diet Coke."));
console.log(clearVowels("We're gonna build a wall!"));
console.log(clearVowels("Happy Thanksgiving to all--even the haters and losers!"));




//2

function splitArr(arr1, arr2){
    let min1 = arr1[0];
    let max1 = arr1[0];
    let min2 = arr2[0];
    let max2 = arr2[0];

    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] < min1){
            min1 = arr1[i];
        } else if (arr1[i] > max1) {
            max1 = arr1[i];
        }
    }

    for (let i = 0; i < arr2.length; i++){
        if (arr2[i] < min2){
            min2 = arr2[i];
        } else if (arr2[i] > max2) {
            max2 = arr2[i];
        }
    }

    if ( min1 > min2 && max1 < max2) {
        return true;
    } else {
        return false;
    }
}

console.log(splitArr([1, 2, 3, 4], [0, 6]));
console.log(splitArr([3, 1], [4, 0]));
console.log(splitArr([9, 9, 8], [8, 9]));
console.log(splitArr([1, 2, 3, 4], [2, 3]));



//3

function reverseAndValue(num){
    let num1 = num.toString().split('').reverse().join('');
    // console.log(num1);
    
    let result = num1 + num; 

    if (result.length > 15){
        return String(result);
    }

    return result;
}

console.log(reverseAndValue(123));
console.log(reverseAndValue(152));
console.log(reverseAndValue(123456789)); 








//4



function multiplyNumbers(str) {
    let arr = str.split(',').map(Number);
    // console.log(arr);
    let mult = 1;
    for (let i = 0; i < arr.length; i++) {
        mult *= arr[i];
    }
    return mult;
}

console.log(multiplyNumbers("2, 3"));
console.log(multiplyNumbers("1, 2, 3, 4"));
console.log(multiplyNumbers("54, 75, 453, 0"));
console.log(multiplyNumbers("10, -2"));
