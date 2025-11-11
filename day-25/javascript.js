

// 2.	Sum of Number from 1 to 20

let n=20;
let sum=0;

for(i=0; i<=n; i++){
    sum+=i ;
}
console.log("sum of number from 1 to 20 :",sum);

// 3.	Reverse Countdown 10 to 1.

let j=10

for(j=10; j>=1; j--){
    console.log(j)
}


//4.	Sum of even Number, 1 to 50.
console.log("Sum of even Number, 1 to 50")

let r=0;

for(i=2; i<=50; i+=2){
    r=+i;
    console.log(r);
}


let stock = 10;
 let customer = 1;

 while (stock > 0) {   console.log("Customer " + customer + " bought 1 item");  stock = stock - 1;
 console.log("Remaining Stock:" + stock);
  customer++
}

// console.log("Stock Finished");