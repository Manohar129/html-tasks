// 1.	Group students based on Marks
// a.	Input: [40, 85, 90, 33, 72]
// b.	Output:
// i.	Pass: >= 40
// ii.	Fail < 40.

let marks = [40, 85, 90, 33, 72,25,60,39];
let pass = marks.filter(mark => mark >= 40);
let fail = marks.filter(mark => mark < 40);
console.log("pass marks:" + pass);
console.log("fail marks:"  +fail);




//2.	Count how many numbers in an array are greater than 50.



let numberlist = [10, 56, 60, 23, 75, 42, 89];
let above50 = numberlist.filter(num => num > 50);
let below50 = numberlist.filter(num => num < 50);
console.log("numbers greater than 50:"+ above50);
console.log("numbers less than 50:"+ below50);


// 3.	Find all Prime numbers in an array


let numbers = [10, 23, 45, 67, 89, 90, 33, 37, 50, 71, 12, 29, 4];

function isprime(num){
    if(num <= 1)
        return false;
    for(let i=2; i<= Math.sqrt(num); i++){
        if(num % i === 0)
            return false;
    }
    return true;
}
let primes = numbers.filter(isprime);
console.log("prime numbers in the array:" + primes);



// 4.	Swap the First and last element of an array

let arr = [10, 20, 30, 40, 50];
let firstElement = arr[0];
let lastElement = arr[arr.length - 1];
arr[0] = lastElement;
arr[arr.length - 1] = firstElement;
console.log("Array after swapping first and last elements: " + arr);



// 5.	Find the second highest number in an array


let nums = [10, 56, 78, 23, 89, 90, 4];
nums.sort((a,b) => b - a );
let secondhighest = nums[1];
console.log("second highest number in the array:" +secondhighest);


// 6.	Move all zeros to the end of the array

let array = [1, 0, 5, 0, 9];
function moveZerosToEnd(arr) {
    const nonZeros = arr.filter(num => num !== 0);
    const zeros = arr.filter(num => num === 0);
    return [...nonZeros, ...zeros];
}

console.log(moveZerosToEnd(array));
