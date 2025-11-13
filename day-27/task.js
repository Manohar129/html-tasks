// all arthematic operation using functions

//addition

function add(a, b){
    return a+b;
}
let result = add(44, 66);
console.log(result)

//subtraction

function sub(a, b){
    return a-b;
}
let results = sub(44, 66);
console.log(results)

//multliplication

function multliplication(a, b){
    return a*b;
}
let resultss = multliplication(44, 66);
console.log(resultss)

//division

function division(a, b){
    return a/b;
}
let resultsss = division(44, 66);
console.log(resultsss)

//	Calculate total cart value
//    Hint: parameter we need to pass array [199, 299, 499]
//    Discount (Ex:10%)

function adds(a, b, c){
    return a+b+c;
}
let resultes = adds(199, 299, 499);
console.log(resultes);

let Discount= (resultes/100) * 10;
let payableAmount= resultes - Discount;
console.log("final value =", payableAmount);


// convert celsius to fahrenheit

function celsiusToFahrenheit(celsius){
    fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit){
    celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

console.log(celsiusToFahrenheit(32));
console.log(fahrenheitToCelsius(98));
