let apples=40;

let bananas=70;

let totalfruits= apples + bananas;

let discount= totalfruits/100*40 ;

let finalPrice = totalfruits - discount ;


console.log("FinalPrice:",finalPrice);



let Country1="Ind";

let Country2="USA";

let age = 23;

if (age>=18 && (Country1 == "Ind" || Country2== "USA")){
    console.log("Allowed");
} else{
    console.log("Not Allowed");
}