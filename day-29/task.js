


// 1.Remove duplicates from the array. ex: [1,2,3,2,4,3,5]

let a=[1,2,3,4,2,3,4,2,4,7];
let remove=[];
 a.sort((a,b)=> a-b);
 console.log("Orderd array :"+a);

 for(let i=0; i<a.length; i++)
 {
    if(a[i]!==a[i+1])
    {
      remove.push(a[i]);
    }
 }
 console.log("After removel duplicates : "+remove);

 // 2.Find the longest word. Ex: [“apple”, “banana”, “grapes”, “Watermelon”]

 let b=["Apple","Banana","Mango","Graps","Guava","watermelon"];

 let l=b[0];

 for(let i=1; i<b.length;i++)
 {
    if(b[i].length>l.length)
    {
        l=b[i]
    }
 }

 
 console.log("Array elements are: "+b);
 console.log("Longest = : "+l);


 // 3.Convert string to array. Ex: “JavaScript is fun”

 console.log("----------------");
 
 console.log("==Convert string to array==");
 let string="JavaScript is fun";
 console.log("String : "+string)
 let array=string.split(" ");
 console.log("Array : ");
 console.log(array);
