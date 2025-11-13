

// 1. Invert of right-angle triangle
        //    *
      //   * *
    //  * * *
  // * * * *
//* * * * *

console.log("_Right angle trianle");
for (let i=1; i<=5; i++)
{
      let pattern ="";
    for(let j=5; j>i;j--)
    {
            pattern = pattern+"  ";
    }
    for(let j=1; j<=i; j++)
    {
         pattern = pattern+"* ";
    }

    console.log(pattern)
}

// Pyramid Pattern


for(let i=1; i<=5; i++)
{
let pattern="";
for(let j=5; j>i; j--)
{
pattern= pattern+"  ";
}

for(let j=1;j<=i; j++)
{
     pattern = pattern+"* ";
}
for(let j=i-1; j>=1;j--)
{
     pattern = pattern+"* ";
}

    console.log(pattern)
}

let colors=["red","black","blue"]
let sizes=["R","b","B"]

for(let color of colors)
{
    for(let size of sizes)
    {
                 console.log("color = " + color+" Size - " +size)
    }


}