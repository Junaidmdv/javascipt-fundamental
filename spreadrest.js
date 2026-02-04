
//spread operater
ar=["a","b","c","d","e"]
ar2=["f","g","h","i"]


ar3=[...ar,...ar2]


console.log(ar3)


std1={
    roll_no:1, 
    name:"abhi", 
    age:9,
}

leader={
    ...std1, 
    name:"mr abhi", //name key changed 
    class: "first standard", 
}

console.log(leader)  


//rust operater or  parameter 

function SumArr(a,b,...nums){
    let sum=0 
   for (let i in nums){
       sum+=Number(i)
   }
   console.log(a,b,sum)
}

SumArr(1,2,3,3,35,3,2,32)