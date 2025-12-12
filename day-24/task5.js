
// check this year leap year or not using conditional statements

let year=2050;

if((year %4===0 && year %100!==0) || (year %400===0)){
    console.log(year ,"is a leap year");
} else {
    console.log(year,"is not a leap year");
}


